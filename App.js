import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './actions';

const App = () => {
  const dispatch = useDispatch();
  
  const counter = useSelector(state => state.counter);
  const otherData = useSelector(state => state.otherData);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
    </div>
  );
};

export default App;


