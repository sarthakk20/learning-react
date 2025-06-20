import { useEffect, useState } from 'react'
import './App.css'
import Example01 from './Component/Example01'

function App() {

  const [count, setCount] = useState(0)


  function addCount(){
    setCount(c => c + 1)
  }
  function removeCount(){
    setCount(c => c - 1)
  }
  // This runs only when count changes.

  // useEffect(()=>{
  //   document.title = `Count : ${count}`
  //   console.log(count);
    
  // },[count])

  // Empty dependency array [] = run only once (when the component mounts).

  // useEffect(()=>{
  //   document.title = `Count : ${count}`
  //   console.log(count);
  // },[])

  // Cleanup Function (ComponentWillUnmount) : 

  // 1.
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId); // Cleanup
  //     console.log("Timer cleaned up!");
  //   };
  //   }, []);

  // 2.
//   useEffect(() => {
//   const handleResize = () => {
//     console.log("Window resized:", window.innerWidth);
//   };

//   window.addEventListener("resize", handleResize);

//   return () => {
//     window.removeEventListener("resize", handleResize);
//     console.log("Removed resize listener");
//   };
// }, []);

  return (
    <>
    <p class='m-1 text-center'>Count : {count} </p>
  
    <div class='flex justify-center'>
      
        <button onClick={addCount} class='border bg-green-500 p-1 m-1 rounded-lg hover:bg-green-600'>ADD</button>
        <button onClick={removeCount} class='border bg-red-500 p-1 m-1 rounded-lg hover:bg-red-600'>SUBSTRACT</button>
    </div>

    <Example01/>

    </>
  )
}

export default App
