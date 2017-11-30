import React from 'react';

const Option = (props) => (
    <li>
    {props.optionText}
    <button 
        onClick={(e) => {
            props.deleteOneOption(props.optionText)
        }}
    >
        X
    </button>
    </li>
);

export default Option;