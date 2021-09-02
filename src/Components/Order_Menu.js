import React,{useEffect, useState} from 'react'
import { Food_Component } from './Food_Component'

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
                        <Food_Component
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
