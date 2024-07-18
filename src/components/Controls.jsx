import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {store} from '../store';

const Controls = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" })
    }
    
    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" })
    }

    return (
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
            <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
            {/* <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button>

            <button type="button" className="btn btn-link">Link</button> */}
        </div>
    )
}

export default Controls