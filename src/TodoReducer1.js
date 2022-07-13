import { useReducer, useRef } from "react"

const initState = {
    job: '',
    jobs: []
    
}



const SET_JOB = 'setjob'
const ADD_JOB = 'addjob'
const DEL_JOB = 'deljob'

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const delJob = payload => {
    return {
        type: DEL_JOB,
        payload
    }
}
 
const reducer = (state, action) => {
    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DEL_JOB:
            // console.log(action.payload)
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload,1)
            return {
                ...state,
                jobs: newJobs
            }
        default:
            return Error('Invalid action')
    }
}

function TodoReducer() {
    const [state, dispatch] = useReducer(reducer, initState)
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