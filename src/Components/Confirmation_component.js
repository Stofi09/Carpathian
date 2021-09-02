import React from 'react'

export const Confirmation_component = ({foods}) => {
    return (
        <div className="confirmation">
            <div className="form">
            {
            foods.filter(food => food.amount > 0).map(filteredFood =>(
               
               <h3>{filteredFood.amount}X {filteredFood.main}</h3>
            ))
            }
            </div>
        </div>
    )
}
