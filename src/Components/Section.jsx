import React from 'react';

const Section = (props) => {
    //PROPS: heading, children (content)

    return (
        <div>
            { props.heading ? <h3>{props.heading}</h3> : null}
            {props.children}
        </div>
    );
};

export default Section;