import { useState } from "react";

function Like (){
    const [Like, setLike] = useState(0);

    return(
        <>
        <h2>Like : {Like}</h2>
        <button onClick={()=>setLike(Like+1)}>
            Hit on Like Button 
        </button>
        </>
    )
}

export default Like;