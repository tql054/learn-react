import { addJob, setJob, delJob } from "./actions"
import { SET_JOB, ADD_JOB, DEL_JOB } from "./constants"

// Init state
const initState = {
    job: '',
    jobs: []
    
}

// Reducer
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

export default reducer
export { initState }