import React from 'react'

const RenderError = ({ error, touched }) => {
    if (error && touched) {
        return <div className="error-wraper">{error}</div>;
    }

    return null
}

export default RenderError