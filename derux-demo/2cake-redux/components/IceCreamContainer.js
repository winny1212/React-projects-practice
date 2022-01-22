import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCreams);

  //   iceCream: iceCreamReducer

  const dispatch = useDispatch();

  return (
    <div>
      <h1>number of iceCream - {numOfIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}>buy IceCream</button>
    </div>
  );
};

export default IceCreamContainer;
