import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { updateBeer } from '../actions/index';
import UserNavbar from './UserNavbar';

const initialBeerState = {
  name: '',
  tagline: '',
  description: '',
  image_url: '',
  abv: ''
};

const UpdateBeer = (props) => {
  const [updatedBeer, setUpdatedBeer] = useState(initialBeerState);
  const { id } = useParams();

  useEffect(() => {
    const beerToEdit = props.beer.find(beer => `${beer.id}` === id);

    if (beerToEdit) {
      setUpdatedBeer(beerToEdit);
    };
  }, [props.beer, id]);

  const handleChange = event => {
    setUpdatedBeer({
      ...updatedBeer,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (id) => {
    props.updateBeer(updatedBeer);
    props.history.push(`/brews/${id}`);
  };

  const cancel = () => {
    props.history.goBack();
  };

  return (
    <div>
      <UserNavbar />
      <form onSubmit={() => handleSubmit(id)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            defaultValue={updatedBeer.name}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="tagline">Tagline</label>
          <input
            id="tagline"
            name="tagline"
            defaultValue={updatedBeer.tagline}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            defaultValue={updatedBeer.description}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image_url">Image URL</label>
          <input
              id="image_url"
              name="image_url"
              defaultValue={updatedBeer.image_url}
              onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="abv">ABV</label>
          <input
              id="abv"
              name="abv"
              defaultValue={updatedBeer.abv}
              onChange={handleChange} />
        </div>
        <button>Update Beer</button>
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    beer: state.beer
  };
};

export default connect(mapStateToProps, { updateBeer })(UpdateBeer);