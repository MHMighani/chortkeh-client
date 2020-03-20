import React from 'react'

const SuccessMessageBox = () => {
    const message = "دارایی به سبد اضافه شد"
    return (
        <div className="message-box" id="success-message-box">
            {message}
        </div>
    )
}

export default SuccessMessageBox