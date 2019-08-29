import React from 'react';

import classes from '../CSS/ButtonHouse.module.css';

const ButtonHouse = (props) => {
    return (
        <div className={classes.StickyDiv}>
            <h3>{props.title}</h3>
            <div style={{float: 'right'}}>
                <button onClick={() => props.click('all')}>All</button>
                <button onClick={() => props.click('serif')}>Serif</button>
                <button onClick={() => props.click('sans')}>Sans-Serif</button>
                <button onClick={() => props.click('mono')}>Monospace</button>
            </div>
        </div>
    );
};

export default ButtonHouse;