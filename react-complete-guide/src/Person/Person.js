import React from 'react';

const person = (props) => {
    return (
        <div>
        <p onClick={props.click}>Im a {props.name} and I am a {props.age} yearsold</p>
            <p> {props.children}</p>
        </div>
    )
};

export default person;