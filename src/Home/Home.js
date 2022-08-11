import React from 'react';
import Card from '../UI/Card';
import classes from './Home.module.css';

const Home = () => {
    return(
        <Card className={classes.card}>
            <h1>Welcome back!</h1>
        </Card>
    )
}

export default Home;


