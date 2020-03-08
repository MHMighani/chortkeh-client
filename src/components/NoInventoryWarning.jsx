import React from 'react'

const NoInventoryWarning = () => {
    const message = "هنوز چیزی به دارایی اضافه نکرده اید"
    return (
        <div>
            <div>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default NoInventoryWarning