import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useAppContext } from './AppContext';

function MyButton({ onClick }) {
  // eslint-disable-next-line no-unused-vars
  const { label, setLabel } = useAppContext();
  // eslint-disable-next-line react/button-has-type
  return <button onClick={onClick}>{label}</button>;
}

MyButton.propTypes = {
  onClick: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  obj1: PropTypes.shape({
    count: PropTypes.number.isRequired,
  }),
  // eslint-disable-next-line react/no-unused-prop-types
  count: PropTypes.number.isRequired,
};

MyButton.defaultProps = {
  onClick: () => {
    const fruits = ['apple', 'peach', 'orange'];
    // eslint-disable-next-line no-console
    console.log(fruits);

    const tastyFruits = [];

    fruits.forEach(fruit => {
      // eslint-disable-next-line no-console
      console.log(fruit);
      tastyFruits.push(fruit);
    });

    // eslint-disable-next-line no-console
    console.log(tastyFruits);
  },
};

export default MyButton;