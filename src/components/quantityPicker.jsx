import React, { useState } from 'react';

const QuantityPicker = () => {

    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        console.log("increase quantity");
        setQuantity(quantity + 1);
    }

    const decrease = () => {
        console.log("decrease quantity");
        let newVal = quantity 
        if (newVal > 0) {
            setQuantity(newVal - 1)
        } else {
            alert("Quantity can not be set below zero!");
        }
    }

    return (
        <div className="quantity-picker">
            <button onClick={ increase } className="btn-success"> + </button>
            <label> { quantity } </label>
            <button disabled={ quantity === 1 } onClick={ decrease } className="btn-danger"> - </button>                                
        </div>
    );
}

export default QuantityPicker;