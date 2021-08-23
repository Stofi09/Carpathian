import React,{useState} from 'react'
import { FoodComponent } from './FoodComponent';

export const Order = () => {

    const [sum, setSum] = useState(0);
    const [foods, setFoods] = useState([
        {
            id:0,
            main:"hamburger",
            amount:0,
            price:100
        },
        {
            id:1,
            main:"vegburger",
            amount:0,
            price:300
        },
        {
            id:2,
            main:"cheeseburger",
            amount:0,
            price:200   
        }
    ])

    
    const addFood = (id) =>{
        const updateFoods = [...foods];
        updateFoods[id].amount++;
        setFoods(updateFoods)
        setSum( updateFoods[id].price + sum)
    }

    const removeFood = (id) => {
        const updateFoods = [...foods];
        if (updateFoods[id].amount > 0){
            updateFoods[id].amount--;
            setSum( sum - updateFoods[id].price)
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
                    <h2>Total sum : {sum}</h2>
                </div>
           </div>
        </div>
    )
}
