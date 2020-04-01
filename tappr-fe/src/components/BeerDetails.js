import React from 'react';
import UserNavbar from './UserNavbar';

const BeerDetails = (props) => {
  // onClick handler for Update Button
  const updateBeer = (id) => {
    props.history.push(`/update-a-beer/${id}`)
  };

  return (
    <div>
      <UserNavbar />
      <span>BeerDetails</span>
    </div>
  );
};

export default BeerDetails;