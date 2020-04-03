import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { updateBeer } from '../actions/index';
import UserNavbar from './UserNavbar';
import { 
  OuterFormDiv,
  Form,
  FormTitle,
  FormLabel,
  FormInput,
  FormTextBox,
  FormButtonMainDiv,
  FormButtonDiv
 } from '../styles/Styled';
 import { Button } from 'react-bootstrap';

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
    axios.get('https://tappr-app-api.herokuapp.com/api/beers')
      .then(res => {
        const beerToEdit = res.data.find(beer => {
          return beer.id == id;
        });

        if (beerToEdit) {
          setUpdatedBeer(beerToEdit);
        };
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
      <OuterFormDiv>
        <Form onSubmit={() => handleSubmit(id)}>
          <FormTitle>Update Beer</FormTitle>
          <FormLabel htmlFor="name">Name</FormLabel>
          <br />
          <FormInput
            id="name"
            name="name"
            defaultValue={updatedBeer.name}
            onChange={handleChange} />
          <br />
          <FormLabel htmlFor="tagline">Tagline</FormLabel>
          <br />
          <FormInput
            id="tagline"
            name="tagline"
            defaultValue={updatedBeer.tagline}
            onChange={handleChange} />
          <br />
          <FormLabel htmlFor="description">Description</FormLabel>
          <br />
          <FormTextBox
            id="description"
            name="description"
            defaultValue={updatedBeer.description}
            onChange={handleChange} />
          <br />
          <FormLabel htmlFor="image_url">Image URL</FormLabel>
          <br />
          <FormInput
              id="image_url"
              name="image_url"
              defaultValue={updatedBeer.image_url}
              onChange={handleChange} />
          <br />
          <FormLabel htmlFor="abv">ABV</FormLabel>
          <br />
          <FormInput
              id="abv"
              name="abv"
              defaultValue={updatedBeer.abv}
              onChange={handleChange} />
          <br />
          <FormButtonMainDiv>
            <FormButtonDiv>
              <Button variant="warning">Update Beer</Button>
            </FormButtonDiv>

            <FormButtonDiv>
              <Button variant="danger" onClick={cancel}>Cancel</Button>
            </FormButtonDiv>
          </FormButtonMainDiv>
        </Form>
      </OuterFormDiv>
    </div>
  );
};

export default connect(null, { updateBeer })(UpdateBeer);