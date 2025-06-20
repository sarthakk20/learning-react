import React, { use } from "react";
import { useState } from "react";

export default function ColorPicker(){

    const [color , setColor] = useState('white')

    function handleColorChange(e){
        setColor(e.target.value)
    }

    return(
        <div class="flex justify-center items-center ">
            <div class='h-100 w-100 flex justify-center items-center bg-blue-200 mt-50 rounded-3xl'>
            <div>
                <h1 class='text-3xl font-bold text-center m-4 p-3'>Color Picker</h1>

            <div style={{backgroundColor:color}} class='h-50 w-50 m-3 p-2 text-center rounded-full align-middle'>
                {/* <p style={{color: color}}>Selected Color: {color}</p> */}
            </div>

            <label class='text-1xl text-center ml-8 font-serif size-8'>Select Color : </label>
            <input type="color" value={color} onChange={handleColorChange} class='m-3 rounded-2xl align-middle'/>
            </div>
        </div>
        </div>
    )
}