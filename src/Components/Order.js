import React,{useState} from 'react'
import { FoodComponent } from './FoodComponent';

export const Order = () => {

    const [foods, setFoods] = useState([
        {
            id:0,
            main:"hamburger",
            amount:0
        },
        {
            id:1,
            main:"cheeseburger",
            amount:0   
        },
        {
            id:2,
            main:"vegburger",
            amount:0
        }
    ])
    
    
    const addFood = (id) =>{
        const updateFoods = [...foods];
        updateFoods[id].amount++;
        setFoods(updateFoods)
    }

    const removeFood = (id) => {
        const updateFoods = [...foods];
        if (updateFoods[id].amount > 0){
            updateFoods[id].amount--;
        }
        setFoods(updateFoods)
    }
    return (
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
    )
}
