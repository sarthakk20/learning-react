import React, {useState, useRef, useEffect} from "react";

export default function StopWatch(){

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime , setElapsedTime] = useState(0)

    const intervalRef = useRef(null)
    const startTimeRef = useRef(0)  //this gives the reference from the time we started

    
    useEffect(()=>{
        if(isRunning){
            // console.log(intervalRef)
            // console.log(elapsedTime);
            
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now()-startTimeRef.current) //this stores the value from the current time(Date.now()) - the time we started the stopwatch(startTimeRef)
                // console.log(startTimeRef.current);
                // console.log(Date.now());
                
                
            }, 10);
        }
        // console.log(elapsedTime);
        return () => {
            clearInterval(intervalRef.current);
        }

    },[isRunning])

    function handleStart(){
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
        // console.log( Date.now() - elapsedTime);
        // console.log(startTimeRef.current);
        
    }
    function handlePause(){
        setIsRunning(false)
    }
    function reset() {
        setElapsedTime(0)
        setIsRunning(false)
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) %  60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliseconds = Math.floor((elapsedTime % 1000)/10)

        hours = String(hours).padStart(2 , "0")
        minutes = String(minutes).padStart(2 , "0")
        seconds = String(seconds).padStart(2 , "0")
        milliseconds = String(milliseconds).padStart(2 , "0")
        
        // console.log(`${minutes} : ${seconds} : ${milliseconds}`);
        return `${minutes} : ${seconds} : ${milliseconds}`
        
    }


    return(
        <div className="flex justify-center">
            <div class='bg-gray-900 h-40 w-70 rounded-lg'>
            <div class='text-center text-4xl font-sans font-bold text-white py-4'>{formatTime()}</div>
            <div className="flex justify-center pt-2">
            <button onClick={handleStart} class='p-2 m-1 bg-green-500 rounded-lg hover:bg-green-700 cursor-pointer'>Start</button>
            <button onClick={handlePause} class='p-2 m-1 bg-red-500 rounded-lg hover:bg-red-700 cursor-pointer'>Pause</button>
            <button onClick={reset} class='p-2 m-1 bg-blue-500 rounded-lg hover:bg-blue-700 cursor-pointer'>Reset</button>
            </div>
        </div>
        </div>
    )
}