import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearOption}
        contentLabel="Selected Option"
    >
        <h3>You should:</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.clearOption}>Sure, I guess.</button>
    </Modal>
);

export default OptionModal;