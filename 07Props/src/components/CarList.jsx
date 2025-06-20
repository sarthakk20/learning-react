import React, {useState} from "react";

export default function CarList(){

    const [Caryear, setYear] = useState(new Date().getFullYear())
    const [cars, setCars] = useState([])
    const [carMake, setMake] = useState("")
    const [carModel, setModel] = useState("")


    function handleAddCarChange(e){

        const newCar = {
            year: Caryear,
            make:carMake,
            model:carModel
        }

        setCars(c => [...c, newCar])
        setYear("")
        setMake("")
        setModel("")
    }
    function handleRemoveCarChange(index){
        setCars(cars.filter((_,i)=> i !== index) )
        
    }
    function handleCarYearChange(e){
        setYear(e.target.value)
    }
    function handleCarMakeChange(e){
        setMake(e.target.value)
    }
    function handleCarModelChange(e){
        setModel(e.target.value)
    }

    const AddCarToList = cars.map((car,index)=> 
                        <li key={index} onClick={() => handleRemoveCarChange(index)}>
                                {car.year} {car.make} {car.model}
                        </li> )

    return(
        <div>
            <h1>List Of Cars</h1>
            <ul>
            {AddCarToList}
            </ul>

            <input type="number" id="year" value={Caryear}  onChange={handleCarYearChange}/>
            <input type="text" id="make" value={carMake} placeholder="Enter Car Make" onChange={handleCarMakeChange}/>
            <input type="text" id="model" value={carModel} placeholder="Enter Car Model" onChange={handleCarModelChange}/>
            <button onClick={handleAddCarChange}>Add Car</button>
        </div>
    )
}