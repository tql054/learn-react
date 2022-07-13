import { useState, useEffect } from "react"


function Context() {
    const contents =  ['posts', 'comments', 'albums', 'todos']
    const [content, setContent] = useState('posts') 
    const [posts, setPost] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${content}`)
            .then(res=> res.json())
            .then(posts=> {
                setPost(posts)
                console.log(content)
            })
    }, [content])

    return (
        <div>
            {contents.map(content => {
                return <button onClick={()=>setContent(content)}>{content}</button>
            })}
            <ul>
                {
                    posts.map((post)=>{
                        return <li>{post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export {Context}