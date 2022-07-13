import { useEffect, memo } from "react"

function Callback({ onCount}) {
    console.log("refresh")
    
   return (
       <>
            <h1>Hello</h1>
            <button
                onClick={onCount}
            >Count</button>
       </>
   )
}

export default memo(Callback) 