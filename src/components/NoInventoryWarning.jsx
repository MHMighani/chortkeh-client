import React from 'react'

const NoInventoryWarning = () => {
    const message = "هنوز چیزی به دارایی اضافه نکرده اید"
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">{message}</p>
            </div>
        </div>
    )
}

export default NoInventoryWarning