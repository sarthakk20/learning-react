import React,{useState} from "react";

export default function AddFood(){
    const [foods , setFoods] = useState(["apple", "banana", "coconut"]);

    function handleAddFood(){

        const newFood = document.getElementById('inputFood').value;
        document.getElementById('inputFood').value = "";
        newFood !== "" ? setFoods(f => [...f,  newFood]): alert('Add Food')
    }

    function handleRemoveFood(index){
        setFoods(foods.filter( (_,i) => (i !== index)));
    }

    return(
        <div class='flex justify-center items-center m-50'>
            <div class='h-full w-80 bg-amber-100 p-4 m-2 rounded-lg'>
            <h1 class='text-4xl font-medium items-center text-center mb-4'>List Of Food</h1>
            <ul class='items-center text-center mb-4'>
                {foods.map((food,index) =>
                <li 
                key={index} 
                onClick={() => handleRemoveFood(index)}
                class='p-0.5 m-2 font-serif hover:cursor-pointer hover:font-bold'
                >
                {food}
                </li>
                )}
            </ul>

            <div>
                <input type="text" id="inputFood" class='p-1 rounded-l-xl ' placeholder="Add your favourite food..."/>
                <button class='bg-green-400 p-1 rounded-r-xl hover:cursor-pointer hover:bg-green-500' onClick={handleAddFood}>Add Food</button>
            </div>
        </div>
        </div>
    )
}