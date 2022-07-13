import { useEffect, useState } from "react"

function Comment() {
    const courses = [
        {
            id: 1,
            name: 'bai 1'
        },

        {
            id: 2,
            name: 'bai 2'
        },

        {
            id: 3,
            name: 'bai 3'
        }
    ]
    const [check, setChecked] = useState(1)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }   
        window.addEventListener(`lesson-${check}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${check}`, handleComment)
        }
    }, [check])


    return (
        <ul>
            {courses.map((course) => {
                return <li  
                            style={{ cursor: 'pointer', color: check === course.id ? 'red': '#000'}}
                            onClick={() => {setChecked(course.id)}}
                        >{course.name}</li>
            })}
        </ul>
    ) 
    
}

export {Comment}