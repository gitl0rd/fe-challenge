import React from 'react';

const Section = (props) => {
    //PROPS: heading, children (content)

    return (
        <div>
            { props.heading ? <h3>{props.heading}</h3> : null}
            <div style={{margin: '10px'}}>
                {props.children}
            </div>
        </div>
    );
};

export default Section;