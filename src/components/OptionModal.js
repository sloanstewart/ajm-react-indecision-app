import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">You should</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.clearOption}>Sure, I guess.</button>
    </Modal>
);

export default OptionModal;