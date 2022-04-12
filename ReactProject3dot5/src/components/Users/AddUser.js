import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // instead of using state as a keylogger to reset values 
    // we can use refs which eliminates the need to add value and onChange props
    // but you should rarely use refs to manipulate the dom

    const [error, setError] = useState();
    // syntax above is called array destructuring
    // we use it bc useState always returns an array with exactly two elements 
    // the first element of that returned array is the current state snapshot
    // second element holds a function which we can call to change that state and trigger a rerender cycle 

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
            });
            return;
        }
        // + converts a string to a number 
        // why is it needed? bc JavaScript accepts user input as a string

        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
    <Wrapper>
        {error && (
            <ErrorModal 
                title={error.title} 
                message={error.message} 
                onConfirm={errorHandler} 
            />
        )}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input 
                    id="username" 
                    type="text" 
                    ref={nameInputRef}
                />

                <label htmlFor="age">Age (Years)</label>
                <input 
                    id="age" 
                    type="number" 
                    ref={ageInputRef}
                />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </Wrapper>
    );
};

export default AddUser;
