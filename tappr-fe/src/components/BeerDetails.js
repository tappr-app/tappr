import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import UserNavbar from './UserNavbar';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const BeerDetails = (props) => {
  const params = useParams();

  const [thisBeer, setThisBeer] = useState()
  const [beerReady, setBeerReady] = useState(false)

  useEffect(()=>{
    axiosWithAuth().get(`/beers/${params.id}`)
      .then(res=>{
        setThisBeer(res.data);
        setBeerReady(true)
      })
      .catch(err=> console.log(err));
  }, []);
  // put props actions in dependency?
  // onClick handler for Update Button
  const updateBeer = (id) => {
    props.history.push(`/update-a-beer/${id}`)
  };

  console.log('beer details for',thisBeer);
  
  return (
    <div>
      <UserNavbar />
      <span>BeerDetails</span>
      {beerReady ? 
        <div>
          <img src={thisBeer.beer.image_url} alt='beer-picture' />
          <h3>{thisBeer.beer.name}</h3>
          <p>{thisBeer.beer.tagline}</p>
          <p>{thisBeer.beer.description}</p>
          <p>ABV: {thisBeer.beer.abv}</p>
          {thisBeer.food !== [] ? <p>Pairings: None yet! Add some below.</p>
          :
          <p>Pairings:{thisBeer.food.forEach(element => {
            return <li>{element}</li>
          })}</p>}
          {thisBeer.comments !== [] ? <p>Comments: No Comments. Add some below!</p>
          :
          <p>Pairings:{thisBeer.comments.forEach(element => {
            return <li>{element}</li>
          })}</p>}          
        </div>
      : <div>Loading brewski</div>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isPosting: state.isPosting,
  };
};

export default connect(mapStateToProps, {})(BeerDetails);