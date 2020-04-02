import React, { useState } from 'react';
import { useForm } from "react-hook-form";
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
  FormButton
 } from '../styles/Styled';

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
  const [results, setResults] = useState();

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
    axiosWithAuth().get(`/beers?name=${e.target.value}`)
      .then(res => {
        console.log(res);
        setResults(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fillInBeer = (beer) => {
    setNewBeer({
      ...newBeer,
      name: beer.name,
      tagline: beer.tagline,
      description: beer.description,
      image_url: beer.image_url,
      abv: beer.abv
    });
  };

  const onSubmit = () => {
      props.addBeer(newBeer);
      props.history.push('/my-dashboard');
  };

  const cancel = () => {
    props.history.goBack();
  };

  return (
    <div>
      <UserNavbar />
      <OuterFormDiv>
        <Form>
            <FormTitle>Add a Beer</FormTitle>
            <FormLabel htmlFor="name">Beer Name</FormLabel>
            <br />
            <div>
              <FormInput
                name="name"
                ref={register({ required: true })}
                onChange={search}
              />
              <div className="dropdown-menu">
                {results !== undefined ? 
                <>
                  {results.map((beer) => (
                    <p onClick={() => fillInBeer(beer)}>{beer.name}</p>
                  ))}
                </>
                : null}
              </div>
            </div>
            {errors.name && errors.name.type === 'required' && 'Name is required!'}
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