import { useEffect, useState } from "react"

function Countdown() {
    const [count, setCount] = useState(180)
    const [image, setImage] = useState()

    function handleChooseFile(e) {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setImage(file)
    }

    useEffect(() => {
        const interval = setInterval(()=>{
            setCount(prev => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {

        // Clean up
        return () => {
            image && URL.revokeObjectURL(image.preview)
        }
    }, [image])

    return (
        <div>
            <h1>{count}</h1>
            <input
                type='file'
                onChange={handleChooseFile}>
            </input>

            {image && 
                <img
                    src={image.preview}
                    width="80%"
                ></img>
            }
        </div>
    )
}

export default Countdown