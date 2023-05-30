import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCounter,
  removeCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
  updateCounterLabel,
  setCounterValue,
} from './store/counterActions';


const App = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleAddCounter = () => {
    const counter = {
      id: new Date().getTime(),
      value: 0,
      label: '',
    };
    dispatch(addCounter(counter));
  };

  const handleRemoveCounter = (id) => {
    dispatch(removeCounter(id));
  };

  const handleIncrementCounter = (id) => {
    dispatch(incrementCounter(id));
  };

  const handleDecrementCounter = (id) => {
    dispatch(decrementCounter(id));
  };

  const handleResetCounter = (id) => {
    dispatch(resetCounter(id));
  };

  const handleLabelChange = (id, label) => {
    dispatch(updateCounterLabel(id, label));
  };

  const handleValueChange = (id, value) => {
    dispatch(setCounterValue(id, value));
  };

  return (
    <div style={{flex:1, justifyContent:'center', alignItems:'center', textAlign:'center', margin:50}}>
      <h1>Tally Counter</h1>
      <button onClick={handleAddCounter}>Add Counter</button>
      {counters.map((counter) => (
        <div className="counter" key={counter.id}>
          <h3>{counter.label}</h3>
          <div className="counter-actions">
            <div className='setNumber'>
              <input
                type="number"
                value={counter.value}
                onChange={(e) => handleValueChange(counter.id, e.target.value)}
              />
            </div>

            <div className='setName'>
              <input
                type="text"
                value={counter.label}
                onChange={(e) => handleLabelChange(counter.id, e.target.value)}
              />
            </div>
            <button onClick={() => handleIncrementCounter(counter.id)}>
              +
            </button>
            <span className="counter-value">{counter.value}</span>
            <button onClick={() => handleDecrementCounter(counter.id)}>
              -
            </button>
            <button onClick={() => handleResetCounter(counter.id)}>
              Reset
            </button>
            <button onClick={() => handleRemoveCounter(counter.id)}>
              Remove Counter
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
