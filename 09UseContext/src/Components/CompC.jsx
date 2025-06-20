import React from "react";
import CompD from "./CompD";

export default function CompC(prop){
    return(
        <div class="flex justify-center">
            <div class="border h-50 w-80 text-center border-white text-white">
                <h1 class="m-4">Comp C</h1>
                {/* <CompD username={prop.username}/> */}
                <CompD />
            </div>
        </div>
    )
}