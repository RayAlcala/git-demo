import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    // we add a template literal here as a value for class name on the div and then 
    // inject something dynamically with this dollar sign curly brace syntax and add classes.card 
    // then we inject a second value props.className
};

export default Card;