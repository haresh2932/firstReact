import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { decrCounter, incCounter } from '../../../redux/Slice/counterSlice';
import { decreament, increament } from '../../../redux/Slice/counter.slice';




function Counter(props) {
    const dispatch = useDispatch()
    const countValue = useSelector(state => state.counter_sllice)
    console.log(countValue.count);
    const handleIncr = () => {
        dispatch(increament())
    }

    const handleDecr = () => {
        dispatch(decreament())

    }
    return (
        <div>
            <h2>counter slice</h2>
            <button onClick={handleIncr}>+</button>
            {countValue.count}
            <button onClick={handleDecr}>-</button>

        </div>
    );
}

export default Counter;