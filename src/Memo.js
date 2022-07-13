import { useState, useMemo } from "react"


function Memo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])


    const total = useMemo(() => products.reduce((acc, product)=> {
        console.log(products)
        return acc + product.price
    }, 0), [products])

    function handleTotal() {
        setProducts([...products, {
            name,
            price: +price
        }])
    }

    return (
        <>
            <input
                value={name}
                placeholder="Enter name"
                onChange={e=>setName(e.target.value)}
            ></input>
            <br/>
            <input
                value={price}
                placeholder="Enter price"
                onChange={e=>setPrice(e.target.value)}
            ></input>
            <br/>
            <button
                onClick={handleTotal}
            >Add</button>
            <br/>
            <p>Total: {total}</p>
            <br/> 
            <ul>
                {products.map((product) => {
                    return <li>{product.name} -- {product.price}</li>
                })}
            </ul>
        </>
    )
}

export default Memo