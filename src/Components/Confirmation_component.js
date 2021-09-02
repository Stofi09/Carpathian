import React, {useState, useEffect} from 'react'

export const Confirmation_component = ({foods}) => {
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        foods.map((food)=>{
            if (food. amount > 0){
                setIsEmpty(true);
                console.log("true");
            }
        })
    }, [])

    return (
        <div className="confirmation">
            <div className="form">
            { isEmpty? 
                foods.filter(food => food.amount > 0).map(filteredFood =>(
                <h3>{filteredFood.amount}X {filteredFood.main}</h3>
            ))       : 
                <div> You haven't chosen a food yet.</div>
            }
            </div>
        </div>
    )
}
