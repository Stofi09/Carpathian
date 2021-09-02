import React,{useEffect, useState} from 'react'
import { FoodComponent } from './FoodComponent'

export const Order_Menu = ({nextStep,foods,addFood,removeFood,sum}) => {
    

    useEffect(() => {
        console.log(foods)
    }, [])
    
    return (
        <div>
        <div className="order">
           <div className="flex p-2">
               <div className="text">
               <h1>Order online!</h1>
                    <h4>Scouuo urumemtuul kyul hullothya iunhum scouuo urumemtuul thekunched buthuruth fyaal werethul. Kethwe kyth fugwa kynaal ualmun buthuruth. Hyul scegenul kunuel.</h4>
                    { foods.map((food)=>
                        <FoodComponent
                        Food = {food}
                        addFood = {addFood}
                        removeFood = {removeFood}
                        />
                    )}
                </div>
           </div>      
        </div>
          </div>
    )
    
}
