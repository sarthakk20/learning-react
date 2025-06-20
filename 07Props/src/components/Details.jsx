import React, { useState } from "react"; 

// onChange: The onChange event in React.JS is used to track changes to form input elements like <input>, <textarea>, and <select>.
//  It works similarly to JavaScript's change event but is handled slightly differently in React because React uses a synthetic event system.

function Details(){

    const [name, setName]= useState("Guest")
    const [quantity, setQuantity]= useState(1)
    const [comment, setComment]= useState()
    const [payment, setPayment]= useState()
    const [radio, setRadio]= useState("Delivery")



    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleQuantityChange(e){
        setQuantity(e.target.value)
    }
    function handleCommentChange(e){
        setComment(e.target.value)
    }
    function handlePaymentChange(e){
        setPayment(e.target.value)
    }
    function handleRadioChange(e){
        setRadio(e.target.value)
    }

    return(
        <div>
<form class=' w-full '> 
    <input type="text" name="userField" id="username" class="m-1 text-gray-600 border px-0.5" value={name} onChange={handleNameChange}/>
    <br />
    <label>NAME : </label> <span>{name}</span>
        <br /><br />

    <input type="number" class="m-1 text-gray-600 border px-0.5" value={quantity} onChange={handleQuantityChange}/>
    <br />
    <label>Quantity : </label> <span>{quantity}</span>
        <br /><br />

    <textarea class="h-30 m-1 text-gray-600 border px-0.5" value={comment} placeholder="Give your feedback..." onChange={handleCommentChange}/>
    <br />
    <label>Comment : </label> <span>{comment}</span>
        <br /><br />
    
    <select name="Payment Options" id="pay" class='border' value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="Giftcard">Giftcard</option>
        <option value="UPI">UPI</option>
        <option value="credit Card">Credit Card</option>
    </select>
    <br /><br />


    <label ><input type="radio" name="Shipping" value="Pick Up" checked={radio === "Pick Up"} onChange={handleRadioChange}/> 
        Pick Up
    </label>
    <br />
    <label ><input type="radio" name="Delivery" value="Delivery" checked={radio === "Delivery"} onChange={handleRadioChange}/> 
        Delivery
    </label>

    <br /><br /> 
    <label >Shipping : {radio}</label>
    
</form>
        </div>
    )
}
export default Details