import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/users/sarthakk20')
    // .then(Response => Response.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data)  
    // })
    // }, [])
    
    return (
        <div
        className='h-136 w-full flex items-center'>
            <div className='text-center bg-orange-800 w-full text-white text-2xl '>
                <div>
                <img src={data.avatar_url} alt="ProfilePhoto" className='rounded-full p-4 inline-block'/>
                <div className='m-3'>
                    Github Username : {data.login}
                    {/* <br /> */}
                    {/* Github Name : {data.name}    */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Github

export const GitInfoLoader = async () => {
const response = await fetch('https://api.github.com/users/sarthakk20')
return response.json()
}