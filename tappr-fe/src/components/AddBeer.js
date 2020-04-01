import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { addBeer } from '../actions/index';
import UserNavbar from './UserNavbar';

const initialBeerState = {
  name: '',
  tagline: '',
  description: '',
  image_url: '',
  abv: ''
};

function AddBeer(props) {
  const { register, errors } = useForm();

  const [newBeer, setNewBeer] = useState(initialBeerState);

  const handleChanges = (e) => {
    setNewBeer({
      ...newBeer,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = () => {
      console.log(newBeer);
      props.addBeer(newBeer);
      props.history.push('/my-dashboard');
  };

  const cancel = () => {
    props.history.goBack();
  };

  return (
    <div>
      <UserNavbar />
      <form>
          <h1>Add a Beer</h1>
          <label htmlFor="name">Beer Name</label>
          <br />
          <input
              name="name"
              ref={register({ required: true })}
              onChange={handleChanges}
          />
          {errors.beerName && <span>Name is required!</span>}
          <br />
          <label htmlFor="tagline">Tagline</label>
          <br />
          <input
              name="tagline"
              ref={register}
              onChange={handleChanges}
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <input
              name="description"
              ref={register}
              onChange={handleChanges}
          />
          <br />
          <label htmlFor="image_url">Image URL</label>
          <br />
          <input
              name="image_url"
              ref={register}
              onChange={handleChanges}
          />
          <br />
          <label htmlFor="abv">ABV</label>
          <br />
          <input
              name="abv"
              type="number"
              ref={register}
              onChange={handleChanges}
          />
          <br />
          <button onClick={() => onSubmit()}>Create Beer</button>
          <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  )
}

export default connect(null, { addBeer })(AddBeer);