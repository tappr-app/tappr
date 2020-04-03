import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { addBeer } from '../actions/index';
import UserNavbar from './UserNavbar';
import { 
  OuterFormDiv,
  Form,
  FormTitle,
  FormLabel,
  FormInput,
  FormTextBox,
  FormButtonMainDiv,
  FormButtonDiv,
  FormButton,
  SearchDiv,
  SearchResult,
  ErrorMessage
 } from '../styles/Styled';

const initialBeerState = {
  name: '',
  tagline: '',
  description: '',
  image_url: '',
  abv: ''
};

function AddBeer(props) {
  const [newBeer, setNewBeer] = useState(initialBeerState);
  const [results, setResults] = useState([]);

  const handleChanges = (e) => {
    setNewBeer({
      ...newBeer,
      [e.target.name]: e.target.value
    });
  };

  const search = (e) => {
    setNewBeer({
      ...newBeer,
      name: e.target.value
    });
    if (e.target.value === '') {
      setResults([]);
    } else {
      axiosWithAuth().get(`/beers?name=${e.target.value}`)
        .then(res => {
          setResults(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const selectBeer = (beer) => {
    props.history.push(`/brews/${beer.id}`)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newBeer.name === '') {
      document.getElementById('#name-error-message').classList.add('show');
    } else {
      props.addBeer(newBeer);
      props.history.push('/my-dashboard');
    }
  };

  const cancel = () => {
    props.history.push('/my-dashboard');
  };

  return (
    <div>
      <UserNavbar />
      <OuterFormDiv>
        <Form>
            <FormTitle>Add a Beer</FormTitle>
            <FormLabel htmlFor="name">Beer Name</FormLabel>
            <SearchDiv>
              <FormInput
                name="name"
                onChange={search}
              />
              <SearchDiv>
                {results.length > 0 ? 
                <>
                  {results.map((beer) => (
                    <SearchResult onClick={() => selectBeer(beer)}>{beer.name}</SearchResult>
                  ))}
                </>
                : <ErrorMessage>Name is required</ErrorMessage>}
              </SearchDiv>
            </SearchDiv>
            <br />
            <FormLabel htmlFor="tagline">Tagline</FormLabel>
            <FormInput
                name="tagline"
                onChange={handleChanges}
            />
            <br />
            <FormLabel htmlFor="description">Description</FormLabel>
            <FormTextBox
                name="description"
                onChange={handleChanges}
            />
            <br />
            <FormLabel htmlFor="image_url">Image URL</FormLabel>
            <FormInput
                name="image_url"
                onChange={handleChanges}
            />
            <br />
            <FormLabel htmlFor="abv">ABV</FormLabel>
            <FormInput
                name="abv"
                type="number"
                onChange={handleChanges}
            />
            <br />
            <FormButtonMainDiv>
              <FormButtonDiv>
                <FormButton onClick={() => onSubmit()}>Create Beer</FormButton>
              </FormButtonDiv>

              <FormButtonDiv>
                <FormButton onClick={cancel}>Cancel</FormButton>
              </FormButtonDiv>
            </FormButtonMainDiv>
        </Form>
      </OuterFormDiv>
    </div>
  )
}

export default connect(null, { addBeer })(AddBeer);