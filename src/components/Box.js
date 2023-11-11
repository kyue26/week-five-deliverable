import React from 'react';
import './Box.css';

function Box(props) {
    return (
        <div className="Box">
            Dice roll came out to be: {props.num}
        </div>
    );
}

export default Box;