import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Tooltip from '@material-ui/core/Tooltip';


export const Food_Component = ({Food, addFood, removeFood}) => {
    

    
    const removeOnClick = () => {
        removeFood(Food.id);
    }

    const AddOnClick = () => {
        addFood(Food.id);
    }

    return (
        <div className="form">
            <div className="grid">
                <div className="description">
                    <h3>{Food.main} £{Food.price} : </h3>
                </div>
                <div className="input">
                        <Tooltip title="Remove">
                                <RemoveIcon className="materialButton" style={{ fontSize: 30 }} onClick={removeOnClick}/>
                        </Tooltip>
                    <h3>{Food.amount}</h3>
                    <Tooltip title="Add">
                            <AddIcon className="materialButton" style={{ fontSize: 30 }} onClick={AddOnClick} />
                    </Tooltip>
               </div>
            </div>
        </div>
    )
}
