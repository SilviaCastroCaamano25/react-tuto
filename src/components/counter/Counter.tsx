import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import useStyles from './counter-style';

const Counter = () => {
    const [count, setCount] = useState(0);
    const classes = useStyles();

    const onIncrementCount = () => {
        setCount(count + 1);
    };

    const onDecrementCount = () => {
        if (count >= 1) {
            setCount(count - 1);
        }

    };

    return (
        <div className={classes.container}>
            <Button className={classes.button} onClick={onDecrementCount} disabled={count === 0}>-</Button>
            <Typography> {count}</Typography>
            <Button className={classes.button} onClick={onIncrementCount} disabled={count >= 10}>+</Button>
        </div>
    );
};

export default Counter;