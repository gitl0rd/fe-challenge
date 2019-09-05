import React from 'react';

import classes from '../CSS/ButtonHouse.module.css';

const ButtonHouse = (props) => {
    return (
        <div className={classes.StickyDiv}>
            <h3 style={{fontFamily: props.serif}}>{props.title}</h3>
            <div className={classes.Buttons}>
                <button onClick={() => props.click('all')}>All</button>
                <button onClick={() => props.click('serif')}>Serif</button>
                <button onClick={() => props.click('sans')}>Sans-Serif</button>
                <button onClick={() => props.click('mono')}>Monospace</button>
            </div>
        </div>
    );
};

export default ButtonHouse;