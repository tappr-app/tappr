import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfile } from '../actions/index';
import UserNavbar from './UserNavbar';
import { Button } from 'react-bootstrap';
import { DashboardFlexFeaturedDiv, FavoriteBeer, FavoriteBeerImage, BeerName, BeerText } from '../styles/Styled';

const UserBrews = (props) => {
  const id = window.localStorage.getItem('user_id')
  useEffect(()=>{
    props.getProfile(id)
  }, [])
  // onClick handler for Update Button
  const updateBeer = (id) => {
    props.history.push(`/update-a-beer/${id}`);
  };


  return (
    <div>
    <div>
      <UserNavbar />
      {props.readyToMount ? 
        <div>
        <h2>{props.active_user.user.username}'s Brew Collection</h2>
        <DashboardFlexFeaturedDiv className='user-brews'>
        {props.active_user.beers.map(beer => {
          return(
          <FavoriteBeer key={beer.id}>
            <FavoriteBeerImage src={beer.image_url} alt={beer.name} />
            <BeerName>{beer.name}</BeerName>
            <BeerText>{beer.abv}</BeerText>
            <BeerText>ABV: {beer.abv}</BeerText>
            <div className='actions-dashboard'>
            <Link to={`/brews/${beer.id}`}>More Details</Link>
            <label>Remove from Collection</label>
            <Button variant='danger' onClick={()=>{
              document.getElementsByClassName("ft-flag-off")[0].className = 'ft-flag';
            }}>X</Button>
            <span className='ft-flag-off'>* remove ft soon come</span>
            </div>
          </FavoriteBeer> 
          )         
        })}
        </DashboardFlexFeaturedDiv>
        </div>
      :
      <div>Loading your personal tap...</div>
      }

    </div>       

    </div>
  );
};

const mapPropsToState = state =>{
  return{
    active_user: state.active_user,
    isFetching: state.isFetching,
    readyToMount: state.readyToMount
  }
}

export default connect(mapPropsToState, { getProfile })(UserBrews);