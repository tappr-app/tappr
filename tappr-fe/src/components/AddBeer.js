import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
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
  SearchResult
 } from '../styles/Styled';

const initialBeerState = {
  name: '',
  tagline: '',
  description: '',
  image_url: '',
  abv: ''
};

const ValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required")
});

function AddBeer(props) {
  const { register, errors } = useForm({ validationSchema: ValidationSchema });

  const [newBeer, setNewBeer] = useState(initialBeerState);
  const [results, setResults] = useState();

  const handleChanges = (e) => {
    setNewBeer({
      ...newBeer,
      [e.target.name]: e.target.value
    });
  };

  // It's searching ... need to fix so it only searches when name input is being typed
  const search = (e) => {
    setNewBeer({
      ...newBeer,
      name: e.target.value
    });
    axiosWithAuth().get(`/beers?name=${e.target.value}`)
      .then(res => {
        console.log(res);
        setResults(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const selectBeer = (beer) => {
    props.history.push(`/brews/${beer.id}`)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`New Beer Name`, newBeer.name);
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
            <br />
            <SearchDiv>
              <FormInput
                name="name"
                ref={register({ required: true })}
                onChange={search}
              />
              <SearchDiv className="dropdown-menu">
                {results !== undefined ? 
                <>
                  {results.map((beer) => (
                    <SearchResult onClick={() => selectBeer(beer)}>{beer.name}</SearchResult>
                  ))}
                </>
                : null}
              </SearchDiv>
              {errors.name && <span id="name-error-message">{errors.name.message}</span>}
            </SearchDiv>
            <br />
            <FormLabel htmlFor="tagline">Tagline</FormLabel>
            <br />
            <FormInput
                name="tagline"
                ref={register}
                onChange={handleChanges}
            />
            <br />
            <FormLabel htmlFor="description">Description</FormLabel>
            <br />
            <FormTextBox
                name="description"
                ref={register}
                onChange={handleChanges}
            />
            <br />
            <FormLabel htmlFor="image_url">Image URL</FormLabel>
            <br />
            <FormInput
                name="image_url"
                ref={register}
                onChange={handleChanges}
            />
            <br />
            <FormLabel htmlFor="abv">ABV</FormLabel>
            <br />
            <FormInput
                name="abv"
                type="number"
                ref={register}
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