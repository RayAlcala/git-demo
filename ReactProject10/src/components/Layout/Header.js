import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
            {/* props.onShowCart points to the Header component in App.js which points to the showCartHandler funtion
            emphasis on point, not execute 
            props.onClick in HeaderCartButton.js points to the onClick on here */}
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!' />
        </div>
    </Fragment>
    );
};

export default Header;