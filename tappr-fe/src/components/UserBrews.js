import React from 'react';

//this will need getMyProfile for state
const UserBrews = (props) => {
  // onClick handler for Update Button
  const updateBeer = (id) => {
    props.history.push(`/update-a-beer/${id}`);
  };

  // onClick handler for Beer Details Button
  const beerDetails = (id) => {
    props.history.push(`/brews/${id}`);
  };

  return (
    <div>

    </div>
  );
};

export default UserBrews;