import React from 'react';

const BeerDetails = (props) => {
  // onClick handler for Update Button
  const updateBeer = (id) => {
    props.history.push(`/update-a-beer/${id}`)
  };

  return (
    <div>

    </div>
  );
};

export default BeerDetails;