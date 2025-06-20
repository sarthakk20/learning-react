import React from "react";
import CompC from "./CompC";

export default function CompB(prop){
    return(
        <div class="flex justify-center">
            <div class="border h-70 w-90 text-center border-white text-white p-3">
                <h1 class="m-4">Comp B</h1>
                {/* <CompC username={prop.username}/> */}
                <CompC/>
            </div>
        </div>
    )
}