import React from "react";
import PropTypes from 'prop-types'

function Lists({items=[], category="Unknown"}){

    // const fruits = ["apple", "banana", "peach", "mango"]

    // const fruitItems = fruits.map(fruit => <li key="fruit">{fruit}</li>)


    // const fruits =[{id:1 , name: "apple", calories: 98},
    //         {id:2 , name: "banana", calories: 38},
    //         {id:3 , name: "pineapple", calories: 77},
    //         {id:4 , name: "custurdapple", calories: 108},
    //         {id:5 , name: "coconut", calories: 138}
    //         ]

    // Sort()
    // fruits.sort((a,b) => a.calories - b.calories)
    // fruits.sort((a,b) => b.calories - a.calories)
    // fruits.sort((a,b) => a.name.localeCompare(b.name))
    // fruits.sort((a,b) => b.name.localeCompare(a.name))
    
    // filter()
    // const filteredFruits = fruits.filter(fruit => fruit.calories >= 100)
    // const filteredFruits = fruits.filter(fruit => fruit.calories < 100)

    // map()
    // const fruitItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: {fruit.calories}</li>)
    
    
    // Props

    // const items = props.items
    // const category = props.category

    const fruitItems = items.map(item => <li key={item.id}>{item.name.toUpperCase()}: <b>{item.calories}</b></li>)

// 2xl:w-50 lg:w-48 xl-70 sm-92
    return(
        <>
            <div
                class='h-full w-42 inline-block mx-2 mb-1 shadow-2xl hover:shadow-gray-600 hover:bg-gray-100 rounded-b-lg sm:h-65 sm:w-60 '
            >
            <h1 class="text-2xl text-center h-20 w-full mt-4 font-bold bg-amber-300 p-5 border-2">{category}</h1>
            <ol class='text-sm text-center p-4'>{fruitItems}</ol>
        </div>

        </>
    )
}
export default Lists;