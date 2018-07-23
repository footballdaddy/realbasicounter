import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

const App = ({ counter, decrement, increment }) => (
  <div className="page">
    <div className="section counter">
      {counter}
    </div>
    <div className="section button">
      <button type="button" onClick={() => increment(1)}>
        Increment
      </button>
    </div>
    <div className="section button">
      <button type="button" onClick={() => decrement(1)}>
        Decrement
      </button>
    </div>
    <div className="section input">
      <input />
    </div>
  </div>
);

App.propTypes = {
  counter: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};
export default App;
