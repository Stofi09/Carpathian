import React,{useState} from 'react'
import { FoodComponent } from './FoodComponent';


export const Order_page = () => {
    

    const [sum, setSum] = useState(0);
    const [foods, setFoods] = useState([
        {
            id:0,
            main:"hamburger menu",
            amount:0,
            price:10
        },
        {
            id:1,
            main:"vegburger menu",
            amount:0,
            price:30
        },
        {
            id:2,
            main:"cheeseburger menu",
            amount:0,
            price:20   
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
                   
                </div>
           </div>
           <div className="sticky">
               <div className=" flex">
                    <h2>Total sum : {sum}</h2> 
                    <button className="btn-outline">asd</button>
                </div>
           </div>
        </div>
    )
}
