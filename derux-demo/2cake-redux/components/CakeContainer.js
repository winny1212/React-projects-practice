import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>number of cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
};

export default CakeContainer;
