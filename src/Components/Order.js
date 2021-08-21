import React,{useState} from 'react'
import { FoodComponent } from './FoodComponent';

export const Order = () => {

    const [food, setFood] = useState({
        menu1: 
        [
            {
                id:1,
                main:"hamburger"
            },
            {
                id:2,
                main:"cheeseburger"    
            }
        ],
    })
    return (
        <div className="order">
           <div className="flex p-2">
               <div className="text">
                    <h1>Order online!</h1>
                    <h4>Scouuo urumemtuul kyul hullothya iunhum scouuo urumemtuul thekunched buthuruth fyaal werethul. Kethwe kyth fugwa kynaal ualmun buthuruth. Hyul scegenul kunuel.</h4>
                    <FoodComponent Name = {food.menu1[0].id}
                    Description={food.menu1[0].main}/>
                </div>
           </div>
        </div>
    )
}
