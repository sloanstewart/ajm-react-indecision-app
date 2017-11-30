import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        {props.options.length === 0 && <p>No options found. Add an option to get started.</p>}
        <ol>
            {
                props.options.map((option) => (
                    <Option 
                        key={option}
                        optionText={option}
                        deleteOneOption={props.deleteOneOption}
                    />
                ))
            }
        </ol>
        <button
            className="button button--link"
            onClick={props.deleteOptions}
        >
            Remove All
            </button>
    </div>
);

export default Options;