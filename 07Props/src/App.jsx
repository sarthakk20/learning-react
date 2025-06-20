import './App.css'
import { useState } from 'react'
import Lists from './components/Lists.jsx'
import Details from './components/Details.jsx'
import ColorPicker from './components/ColorPicker.jsx'
import AddFood from './components/AddFood.jsx'
import CarList from './components/CarList.jsx'
import TodoList from './components/TodoList.jsx'

function App() {

    const fruits=[{id:1 , name: "apple", calories: 98},
                  {id:2 , name: "banana", calories: 38},
                  {id:3 , name: "pineapple", calories: 77},
                  {id:4 , name: "custurdapple", calories: 108},
                  {id:5 , name: "coconut", calories: 138}
                  ]

    const vegetables=[{id:5 , name: "cabbage", calories: 98},
                      {id:6 , name: "carrot", calories: 38},
                      {id:7, name: "spinach", calories: 77},
                      {id:8 , name: "flower", calories: 108},
                      {id:9 , name: "peas", calories: 138}
                      ]
  return (
    <>
    {/* <div class='inline-block'>
      <Lists items={fruits} category="Fruits"/>
    <Lists items={vegetables} category="Vegetables"/>
    <Lists items={vegetables} category="Vegetables"/>
    <Lists items={vegetables} />
    <Lists items={vegetables} category="Vegetables"/>
    </div>

    <Details/>

    <ColorPicker/>

    <AddFood /> 
    
    <CarList/> */}

    <TodoList/>
    
    </>

  )
}

export default App
