import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddButton from '@material-ui/icons/Add';
import RemoveButton from '@material-ui/icons/Remove';

export const FoodComponent = ({Food, addFood, removeFood}) => {
    
    const removeOnClick = () => {
        removeFood(Food.id);
    }

    const AddOnClick = () => {
        addFood(Food.id);
    }

    return (
        <div className="form m-2">
            <div className="grid">
                <h3>{Food.id} {Food.main} : </h3>
                <IconButton onClick={removeOnClick} aria-label="delete">
                    <RemoveButton />
                </IconButton>
                <h3>{Food.amount}</h3>
                <IconButton onClick={AddOnClick} aria-label="delete">
                    <AddButton />
                </IconButton>
            </div>
        </div>
    )
}
