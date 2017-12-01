import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-title__header">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.deleteOptions}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">No options found. Add an option to get started.</p>}
        <div>
            {
                props.options.map((option, index) => (
                    <Option 
                        key={option}
                        optionText={option}
                        count={index +1}
                        deleteOneOption={props.deleteOneOption}
                    />
                ))
            }
        </div>
    </div>
);

export default Options;