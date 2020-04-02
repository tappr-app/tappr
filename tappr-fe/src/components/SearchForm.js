import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import  { 
  DashboardFlexFeaturedDiv, 
  DashboardFeaturedDiv, 
  BeerImage, 
  FeaturedBeerLinks, 
  BeerLinks,
  ImageDiv, 
  SectionTitle, 
  BeerName, 
  BeerText,
  LoadingText
} from '../styles/Styled';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [results, setResults] = useState();

  const handleChanges = (e) => {
    setSearchTerm({
      ...searchTerm,
      name: e.target.value
    });
  };

  const search = (e) => {
    axiosWithAuth().get(`/beers?name=${e.target.value}`)
      .then(res => {
        console.log(res);
        setResults(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Find a pint..."
          onChange={handleChanges}
        />
        <button onClick={search}>Find</button>
      </div>

      {results !== undefined ?  
        <div>
          <SectionTitle>Matching Taps</SectionTitle>
          <DashboardFlexFeaturedDiv>
          {results.map((beer) => (
            <FeaturedBeerLinks href={`/brews/${beer.id}`} key={beer.id}>
            <DashboardFeaturedDiv key={beer.id}>
              <ImageDiv>
                <BeerImage src={beer.image_url} alt={beer.name} />
              </ImageDiv>
              <BeerName>{beer.name}</BeerName>
              <BeerText>{beer.tagline}</BeerText>
              <BeerText>ABV: {beer.abv}</BeerText>
            </DashboardFeaturedDiv>
            </FeaturedBeerLinks>
          ))}
          </DashboardFlexFeaturedDiv>
        </div>
      : 
        <div>
          <LoadingText>The glass is empty - <BeerLinks href='/add-a-beer'>fill it up</BeerLinks> with you new beer</LoadingText>  
        </div>
      }
    </div>
  );
};

export default SearchForm;