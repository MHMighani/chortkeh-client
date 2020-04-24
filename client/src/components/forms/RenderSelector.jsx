import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AddSourceForm from './AddSourceForm';
import RenderError from './RenderError';
import useModal from '../modals/useModal';
import Modal from '../modals/Modal';


const RenderSelector = ({ input, label, meta, options,mainSource }) => {
    const { isShowing, toggle } = useModal();
    let button;
    if (mainSource === 'others' && input.name === 'subSource') {
        button = (
            <button id="add-source-btn" className="button" onClick={toggle}>
                <FontAwesomeIcon icon="plus" />
            </button>
        );
    }

    if (isShowing) {
        return (
            <Modal isShowing={isShowing} hide={toggle}>
                <AddSourceForm />
            </Modal>
        );
    }

    return (
        <div className="col-wrapper">
            <div className="input-wrapper">
                {button}
                <select type="select" {...input}>
                    {options}
                </select>
                <label>{label}</label>
            </div>
            <RenderError error={meta.error} touched={meta.touched} />
        </div>
    );
};

export default RenderSelector;