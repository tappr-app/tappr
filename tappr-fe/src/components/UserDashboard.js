import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPunkBeers, addMyBrews } from '../actions/index';
import UserNavbar from './UserNavbar';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Spinner from 'react-bootstrap/Spinner'
import  { 
  DashboardFlexFeaturedDiv, 
  DashboardFlexDiv, 
  DashboardFeaturedDiv, 
  DrinkscoverBeer,
  MyBrewsDashboardDiv,
  BeerListDashboardDiv,
  BeerImage, 
  DiscoverBeerImage,
  FeaturedBeerLinks, 
  BeerLinks,
  MyBrewsLinks,
  ImageDiv, 
  SectionTitle, 
  BeerName, 
  BeerText,
  LoadingText,
  FavoriteButton
} from '../styles/Styled';

const UserDashboard = (props) => {
  const user_id = window.localStorage.getItem('user_id');
  const [randomBeers, setRandomBeers] = useState([]);
  const [myBeers, setMyBeers] = useState([]);
  const [addBrew, setAddBrew] = useState({
    "name": "",
    "tagline": "",
    "description": "",
    "image_url": "",
    "abv": NaN
  })

  const randomABV = Math.floor((Math.random() * 8) + 6);
  const randomPage = Math.floor((Math.random() * 20) + 1);

  useEffect(() => {
    props.getPunkBeers();

    axios.get(`https://api.punkapi.com/v2/beers/?abv_lt=${randomABV}&page=${randomPage}&per_page=5`)
      .then(res => {
        setRandomBeers(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  
    axiosWithAuth().get(`/users/${user_id}`)
      .then(res => {
        setMyBeers(res.data.user.beers);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleAddBrew = beer =>{
    console.log(beer)
    props.addMyBrews(beer);
  }

  return (
    <div>
      <UserNavbar />
      {props.isFetching ? (<LoadingText>Tapping the Keg...</LoadingText>) : (
        <div>
          <SectionTitle>Featured Beers</SectionTitle>
          <DashboardFlexFeaturedDiv>
            {randomBeers.map((beer) => (
              <FeaturedBeerLinks href={`/brews/${beer.id}`} key={beer.id}>
                <DashboardFeaturedDiv key={beer.id}>
                  <ImageDiv>
                    <BeerImage src={beer.image_url} alt={beer.name} />
                  </ImageDiv>
                  <BeerName>{beer.name}</BeerName>
                  <BeerText>ABV: {beer.abv}</BeerText>
                </DashboardFeaturedDiv>
              </FeaturedBeerLinks>
            ))}
          </DashboardFlexFeaturedDiv>

          <DashboardFlexDiv>
            <BeerListDashboardDiv>
              <SectionTitle>Drinkscover</SectionTitle>
              <DashboardFlexFeaturedDiv>
                {props.beer.map((beer) => (
                  <DrinkscoverBeer key={beer.id}>
                    <ImageDiv>
                      <DiscoverBeerImage src={beer.image_url} alt={beer.name} />
                    </ImageDiv>
                    <BeerName>{beer.name}</BeerName>
                    <BeerText><i>{beer.tagline}</i></BeerText>
                    <BeerText>{beer.description}</BeerText>
                    <BeerText>ABV: {beer.abv}</BeerText>
                    <div className='actions-dashboard'>
                    <BeerLinks href={`/brews/${beer.id}`}>More Details</BeerLinks>
                    {props.isPosting ? <Spinner animation="border" variant="success"/> : <FavoriteButton onClick={e =>{
                      e.preventDefault();
                      handleAddBrew(beer)
                    }
                    }>Favorite</FavoriteButton> }
                    </div>
                  </DrinkscoverBeer>
                ))}
              </DashboardFlexFeaturedDiv>
            </BeerListDashboardDiv>

            <MyBrewsDashboardDiv>
              <SectionTitle>Favorite Brews</SectionTitle>
              <DashboardFlexFeaturedDiv>
                {myBeers !== undefined ? 
                  <div>
                    {myBeers.map((beer) => (
                      <MyBrewsLinks href={`/brews/${beer.id}`} key={beer.id}>
                        <DashboardFeaturedDiv key={beer.id}>
                          <ImageDiv>
                            <BeerImage src={beer.image_url} alt={beer.name} />
                          </ImageDiv>
                          <BeerName>{beer.name}</BeerName>
                          <BeerText>ABV: {beer.abv}</BeerText>
                        </DashboardFeaturedDiv>
                      </MyBrewsLinks>
                    ))}
                    <Link to={`/my-brews/${user_id}`}>View All</Link>
                  </div>
                : <LoadingText>No Favorites Yet, Drink More to Find Some</LoadingText>}
              </DashboardFlexFeaturedDiv>
            </MyBrewsDashboardDiv>
          </DashboardFlexDiv>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    beer: state.beer,
    isFetching: state.isFetching,
    isPosting: state.isPosting
  };
};

export default connect(mapStateToProps, { getPunkBeers, addMyBrews })(UserDashboard);