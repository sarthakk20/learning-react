import React, {useEffect, useState} from "react";

export default function TodoList(){

    const [tasks , setTasks] = useState(["walk","write an eassay to friend", "Go to the gym for workout"])
    const [newTasks , setNewTasks] = useState()

    function handleInputTask(e){
        setNewTasks(e.target.value)
    }

    function AddTask(e){
        if(newTasks.trim() !== ""){
        setTasks(t => [...t, newTasks])
        setNewTasks("")
        }
        else{
            alert("Add the task")
        }
    
    }

    function DeleteTask(index){
        const updatedTask = tasks.filter((_,i)=> i !== index)
        setTasks(updatedTask)
    }

    function moveUp(index){
        const updatedTasks = [...tasks]

        if(index > 0){
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index - 1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    function moveDown(index){
        const updatedTasks = [...tasks]

        if(index < tasks.length -1){
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index + 1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    const TaskList = tasks.map((task,index) =>  
    <li key={index}
        class='flex justify-between bg-blue-100 p-3 m-2 w-80 rounded-lg text-center text-sm font-medium sm:w-150 sm:text-sm md:w-180 md:text-md lg:w-200 lg:text-lg lg:h-15'
        >
        {task}  
        <div>
            <span
        class='ml-5 bg-red-500 hover:bg-red-600 rounded-lg p-1 hover:cursor-pointer sm:text-md sm:p-1 md:p-1.5'
        onClick={() => DeleteTask(index)}
        >Delete</span>

        <span
        class='ml-3 bg-amber-400 hover:bg-amber-600 rounded-lg p-1 hover:cursor-pointer sm:text-md sm:p-1 md:p-1.5'
        onClick={() => moveUp(index)}
        >Up</span>

        <span
        class='ml-3 bg-amber-400 hover:bg-amber-600 rounded-lg p-1 hover:cursor-pointer sm:text-md sm:p-1 md:p-1.5'
        onClick={() => moveDown(index)}
        >Down</span>
        </div>
        </li> )
    return(
        <>
        <div class=' bg-blue-950 text-white p-3'>
            <h2 class='text-2xl font-black text-center'>To-Do List</h2>
            <div class='flex justify-center items-center'>
                <input type="text" name="AddToDo" id="AddToDo" placeholder="Enter Task..." value={newTasks} onChange={handleInputTask}
            class='border m-3 p-1 font-medium rounded-md'/>
            <button class='border-black p-1 bg-green-500 hover:bg-green-600 rounded-md text-black' onClick={()=>AddTask()}>Add Task</button>
            </div>
        </div>

        <div class='h-lvh flex justify-center bg-blue-300 pt-3'>
            <ul >
                {TaskList}
            </ul>
        </div>
        </>
    )
}