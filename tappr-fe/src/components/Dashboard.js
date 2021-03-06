import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPunkBeers } from '../actions/index';
import GuestNavbar from './GuestNavbar';
import SearchForm from './SearchForm';
import  { 
  DashboardFlexFeaturedDiv, 
  DashboardFlexDiv, 
  DashboardFeaturedDiv, 
  DrinkscoverBeer,
  BeerImage, 
  FeaturedBeerLinks, 
  BeerLinks,
  ImageDiv, 
  SectionTitle, 
  BeerName, 
  BeerText
} from '../styles/Styled';

const Dashboard = (props) => {
  const [randomBeers, setRandomBeers] = useState([]);
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
  }, []);

  return (
    <div>
      <GuestNavbar />
      {props.isFetching ? (<div>Tapping the Keg...</div>) : (
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

          <SearchForm />

          <DashboardFlexDiv>
            {props.beer.map((beer) => (
                <DrinkscoverBeer key={beer.id}>
                  <ImageDiv>
                    <BeerImage src={beer.image_url} alt={beer.name} />
                  </ImageDiv>
                  <BeerName>{beer.name}</BeerName>
                  <BeerText><i>{beer.tagline}</i></BeerText>
                  <BeerText>{beer.description}</BeerText>
                  <BeerText>ABV: {beer.abv}</BeerText>
                  <div className='actions-dashboard'>
                    <BeerLinks href={`/brews/${beer.id}`}>More Details</BeerLinks>
                  </div>
                </DrinkscoverBeer>

            ))}
          </DashboardFlexDiv>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    beer: state.beer,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getPunkBeers })(Dashboard);