import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingAsync } from '../store/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greet } = useSelector((state) => state.greeting)

  useEffect(() => {
    dispatch(getGreetingAsync())
  }, []);

  const handleGreeting = () => {
    dispatch(getGreetingAsync())
  };

    return (
      <div className="div">
        <h1>{greet}</h1>
        <button onClick={handleGreeting}>Greeting</button>
      </div>
    );
}

export default Greeting;
