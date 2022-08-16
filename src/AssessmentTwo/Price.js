import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Price=(props)=>{
    const [res,setRes]=useState(props.data.sort((a,b)=>Number(a.price)-Number(b.price)))
    const navigate=useNavigate()
    const handleIt=(e)=>{
        navigate(`/${e}`)
    }
    return(
        <>
        <div>
            <button onClick={(e)=>handleIt('home')}>Home</button>
            <button onClick={(e)=>handleIt('search')}>Search Books</button>
            <button onClick={(e)=>handleIt('price')}>Price</button>
            <button onClick={(e)=>handleIt('rating')}>Rating</button>
        </div>
        <div className="row">
            {
                res.map((item)=>(
                    <div className="col-sm-12 col-lg-3">
                        <div className="card" style={{width: '300px', margin: '7px'}}>
                        <img class="card-img-top" src={item.image} alt="Card image cap"></img>
                            <div className="card-body">
                                <h1 style={{fontSize: '120%'}}>Name: {item.bookName}</h1>
                                <p className="card-text"><b>Author: </b>{item.author}
                                <br/> <b>Price: </b>{item.price}
                                <br/> <b>Ratings: </b>{item.rating}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default Price