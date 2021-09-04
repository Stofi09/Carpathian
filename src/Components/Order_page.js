import React,{useState, useEffect} from 'react'
import { Order_Confirmation } from './Order_Confirmation';
import { Order_Menu } from './Order_Menu';
import {getAllFood} from "./Axios";

export const Order_page = () => {
    
    const [step, setStep] = useState(1);
    const [sum, setSum] = useState(0);
    const [foods, setFoods] = useState([])
  
    useEffect(() => {
        getAllFood()
          .then((data) => {
            console.log(data.data);
            setFoods(data.data)
          })
          .catch(function (ex) {
            console.log(ex);
          });
      }, []);
  
    const addFood = (id) =>{
       const updateFoods = [...foods];
       updateFoods.map((food) =>{
           if (food.id === id){
               food.amount++;
               setSum( food.price + sum)
           }
       })
        setFoods(updateFoods)
    }

    const removeFood = (id) => {
        const updateFoods = [...foods];
        updateFoods.map((food)=>{
            if (food.id === id){
                if (food.amount > 0){
                    food.amount--;
                    setSum( sum - food.price)
                }
            }
        })
        setFoods(updateFoods)
    }

    const   nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const sendOrder = () => {
        console.log("send order to backend.")
        console.log(foods);
    }

    switch (step) {
        case 1: return (
        <div>
               <Order_Menu
                nextStep={nextStep}
                foods = {foods}
                addFood = {addFood}
                removeFood = {removeFood}
                sum={sum}
               />
            <div className="sticky">
               <div className=" flex">
                    <h2>Total sum : {sum}</h2> 
                    <div className="step-buttons">
                    <button onClick={nextStep} className="btn btn-outline">next</button>
                    </div>
                </div>
           </div>
        </div>)
        case 2: return (
            <div>
               <Order_Confirmation
                 prevStep={prevStep}
                 foods = {foods}
                 sum={sum}
               />
                  <div className="sticky">
               <div className=" flex">
                    <h2>Total sum : {sum}</h2> 
                    <div className="step-buttons">
                        <button onClick={prevStep} className="btn btn-outline">previous</button>
                        <button onClick={sendOrder} className="btn btn-outline">Order</button>
                    </div>
                </div>
           </div>
            </div>
        )
    }

    /*return (
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
           <div className="sticky">
               <div className=" flex">
                    <h2>Total sum : {sum}</h2> 
                    <Link to="/confirmation">
                         <button className="btn-outline" >asd</button>
                    </Link>
                </div>
           </div>
              
        </div>
          </div>
    )
    */
}
