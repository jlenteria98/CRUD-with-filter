import React from 'react';
import image from '../../assets/ZZ5H.gif';

const Spinner = () => {
  return (
    <div className="spinner-div">
      <img src={image} width="40" height="40" alt="" />
      <p className="ml-2 mt-2">Loading ...</p>
    </div>
  );
};

export default Spinner;
