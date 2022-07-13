import { useReducer, useRef } from "react"
import { setJob, addJob, delJob } from "./actions"
import reducer, {initState} from "./reducer"
import logger from "./logger"
function TodoReducer() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const inputRef = useRef()
    const { job, jobs} = state

    function handleAddJob() {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return(
        <>
            <input
                value={job}
                placeholder="Enter next job"
                onChange={e => {dispatch(setJob(e.target.value))}}
                ref={inputRef}
            />

            <button 
                onClick={handleAddJob}
            >Add</button>

            <ul>
                {jobs.map((job, index)=> {
                    return <li key={index}>
                                {job} 
                                <span onClick={e => {dispatch(delJob(index))}}>&times;</span>
                            </li>
                })}
            </ul>
        </>
    )
}

export default TodoReducer