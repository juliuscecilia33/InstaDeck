import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './HomePage.module.scss';


export const HomePage = () => {
    return (
        <div className={Styles.HomePg}>
            <h1>Welcome to Instadeck</h1>
            <Link to="/signin"><h2>Sign In</h2></Link>
            <Link to="/signup"><h2>Sign Up Here</h2></Link>
        </div>
    )
}
