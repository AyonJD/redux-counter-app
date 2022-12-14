import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseCount, increaseCount, resetCount } from '../Source/actionCounter';

const Counter = () => {
    //Get the current count from the store
    const count = useSelector(state => state.count);

    //import dispatch from the store to dispatch actions
    const dispatch = useDispatch();

    //Handle the increase count button click
    const handleIncrease = () => {
        //Dispatch the action to increase the count by importing the increaseCount action from the actionCounter.js file
        dispatch(increaseCount());
    }

    //Handle the decrease count button click
    const handleDecrease = () => {
        //Dispatch the action to increase the count by importing the decreaseCount action from the actionCounter.js file
        dispatch(decreaseCount());
    }

    //Handle the reset count button click
    const handleReset = () => {
        //Dispatch the action to increase the count by importing the resetCount action from the actionCounter.js file
        dispatch(resetCount());
    }
    return (
        <div>
            <div>
                <h1>{count}</h1>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;