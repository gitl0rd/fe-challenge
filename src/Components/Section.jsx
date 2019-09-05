import React from 'react';

const Section = (props) => {
    //PROPS: heading, mono, sans, children (content)

    return (
        <div>
            { props.heading ? 
                <div>
                    <h3 style={{fontFamily: props.mono}}>{props.heading}</h3> 
                </div>
                : 
                null}
            <div style={{margin: '10px', fontFamily: props.sans}}>
                {props.children}
            </div>
        </div>
    );
};

export default Section;