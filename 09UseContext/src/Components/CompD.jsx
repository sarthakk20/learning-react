import React , {useContext} from "react";
import { userContext } from "./CompA.jsx";


export default function CompD(prop){

    const user = useContext(userContext);
    
    return(
        <div class="flex justify-center">
            <div class="border h-30 w-60 text-center border-white text-white ">
                <h1 class="m-4">Comp D</h1>
                {/* <h2>See you, {prop.username} !</h2> */}
                <h2>See you, {user}!</h2>
            </div>
        </div>
    )
}