import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer=(state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', 
    isValid: null
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
      value: '', 
      isValid: null
    });

    const authCtx = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
  
    useEffect(() => {
    console.log('EFFECT RUNNING');

      return () => {
        console.log('EFFECT CLEANUP');
      };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  // the above is object destructuring, evident by the curly braces to the left of = 
  // we are not doing value assignment, we are doing alias assignment
  // this is incorporated so that react stops checking for validity after validity is already satisfied

  useEffect(() => {
    // useEffect is used to rerun code whenenver one of the dependecies changes
    // it reruns logic when data, state, or props change
    // useEffect handles side effects 
    // which include http requests and listening to keystrokes and 
    // saving that entered data to check and update form validty
    const identifier = setTimeout(() => {
    console.log('Checking form validity!');
        setFormIsValid(
          emailIsValid && passwordIsValid
        );
      }, 500);

      return () => {
        console.log('CLEANUP');
        clearTimeout(identifier);
      };
      // this cleanup resets the timer when the user types within 500 millieseconds 
      // this prevents multiple timers running for each keystroke 
      // timeout occurs only after 500ms from the last keystroke
  }, [emailIsValid, passwordIsValid]);
    // after every login component function execution
    // it will rerun this ueEffect function but only if either 
    // emailIsValid or passwordIsValid changed in the last component rerender cycle
    // inside the array are dependenices 
    // this function makes the login button available when the email and password fields are satisfied


  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  
    // setFormIsValid (
    //   event.target.value.includes('@') && passwordState.isValid 
    // );
};

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value})

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
   dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
    authCtx.onLogin(emailState.value, passwordState.value);
    } else if(!emailIsValid) {
        emailInputRef.current.focus();
    } else { 
        passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       <Input 
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
       />

        <Input 
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
       />
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
