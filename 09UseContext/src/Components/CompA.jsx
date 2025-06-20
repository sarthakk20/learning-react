import React, {createContext, useState } from "react";
import CompB from "./CompB";

export const userContext = createContext();

export default function CompA(){
    const [user, setUser] = useState("Sarthak")
    return(
        <div class="flex justify-center p-4">
            <div class="border h-100 w-100 text-center border-white text-white mt-5 p-3">
                <h1 class="m-4">Comp A</h1>
                <h2>Hello,{user}</h2>
                {/* <CompB username={user}/> */}
                <userContext.Provider value={user}>
                <CompB/>
                </userContext.Provider>
            </div>
        </div>
    )
}
