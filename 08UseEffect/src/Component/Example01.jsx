import React,{useEffect,useState} from "react";

export default function Example01(){

    const [user,setUser] = useState(0)

    // useEffect(()=>{
    //     alert("This will run on every render (initial + update)")
    // })

    // useEffect(()=>{
    //     alert("Run Once on Mount")
    // },[])
    
    // useEffect(()=>{
    //     alert("Run only when count is encountered")
    // },[user])
    
    function handleUser(e){
        setUser(e.target.value)
    }
    function addchange(e){
        setUser(e.target.value)
    }
    
    return(
        <div>
        {/* <h1>`Hello, Guest ${user}`</h1>
        <input type="text" value={user} onChange={handleUser} />
        <button onClick={addchange}>Add</button> */}
        </div>
    )
}
