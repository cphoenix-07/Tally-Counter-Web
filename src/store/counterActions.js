// counterActions.js

export const addCounter = (counter) => {
    return {
      type: 'ADD_COUNTER',
      payload: counter,
    };
  };
  
  export const removeCounter = (id) => {
    return {
      type: 'REMOVE_COUNTER',
      payload: id,
    };
  };
  
  export const incrementCounter = (id) => {
    return {
      type: 'INCREMENT_COUNTER',
      payload: id,
    };
  };
  
  export const decrementCounter = (id) => {
    return {
      type: 'DECREMENT_COUNTER',
      payload: id,
    };
  };
  
  export const resetCounter = (id) => {
    return {
      type: 'RESET_COUNTER',
      payload: id,
    };
  };
  
  export const updateCounterLabel = (id, label) => {
    return {
      type: 'UPDATE_COUNTER_LABEL',
      payload: {
        id,
        label,
      },
    };
  };
  
  export const setCounterValue = (id, value) => {
    return {
      type: 'SET_COUNTER_VALUE',
      payload: {
        id,
        value,
      },
    };
  };
  