import React from 'react'
import { Confirmation_component } from './Confirmation_Component'


export const Order_Confirmation = ({foods}) => {

          return (
            <div className="order">
                <div className="flex p-2"> 
                    <div className="text">
                        <h2>Your order:</h2>
                        <Confirmation_component
                        foods = {foods}
                        />
                    </div>
                </div>
            </div>
    )
}
