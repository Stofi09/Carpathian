import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddButton from '@material-ui/icons/Add';
import RemoveButton from '@material-ui/icons/Remove';

export const FoodComponent = ({Name, Description}) => {
    const removeOnClick = () => {
        console.log("asd");
    }

    const AddOnClick = () => {
        console.log("asd");
    }

    return (
        <div className="form m-2">
            <div className="grid">
                <h3>{Name} {Description} : </h3>
                <IconButton onClick={removeOnClick} aria-label="delete">
                    <RemoveButton />
                </IconButton>
                <IconButton onClick={AddOnClick} aria-label="delete">
                    <AddButton />
                </IconButton>
            </div>
        </div>
    )
}
