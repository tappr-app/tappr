import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import  { 
  DashboardFlexFeaturedDiv, 
  DashboardFeaturedDiv, 
  BeerImage, 
  FeaturedBeerLinks, 
  ImageDiv, 
  SectionTitle, 
  BeerName, 
  BeerText,
  LoadingText,
  InputDiv,
  SearchButton,
  SearchInput,
  FillItUpLink
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

  const search = () => {
    console.log('Search term', searchTerm);
    axiosWithAuth().get(`/beers?name=${searchTerm.name}`)
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
      <InputDiv>
        <SearchInput
          type="text"
          name="name"
          placeholder="Find a pint..."
          onChange={handleChanges}
        />
        <SearchButton onClick={search}>Find</SearchButton>
      </InputDiv>

      {results === undefined ? null : 
        <>
          {results.length !== 0 ?  
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
              <LoadingText>The glass is empty - <FillItUpLink href='/add-a-beer'>fill it up</FillItUpLink> with your new beer</LoadingText>  
            </div>
          }
        </>
      }
    </div>
  );
};

export default SearchForm;