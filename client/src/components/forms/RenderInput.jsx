import React from 'react'
import RenderError from './RenderError'

const RenderInput = ({ input, label, meta, type="text" }) => {
    return (
        <div className="col-wrapper">
            <div className="input-wrapper">
                <input min="0" type={type} {...input} autoComplete="off" />
                <label>{label}</label>
            </div>
            <RenderError error={meta.error} touched={meta.touched} />
        </div>
    );
};

export default RenderInput