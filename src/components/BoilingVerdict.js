// components/BoilingVerdict.js

import React from 'react';

const boilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>El agua va hervir.</p>;
  } else {
    return <p>Te faltan.</p>;
  }
}

export default boilingVerdict;