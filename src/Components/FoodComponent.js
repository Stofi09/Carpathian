import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';




export const FoodComponent = ({Food, addFood, removeFood}) => {
    

    const removeOnClick = () => {
        removeFood(Food.id);
    }

    const AddOnClick = () => {
        addFood(Food.id);
    }

    return (
        <div className="form">
            <div className="grid">
                <h3>{Food.id} {Food.main} : </h3>
                <RemoveIcon onClick={removeOnClick}/>
                <h3>{Food.amount}</h3>
                <AddIcon onClick={AddOnClick} fontSize="medium"/>
            </div>
        </div>
    )
}
