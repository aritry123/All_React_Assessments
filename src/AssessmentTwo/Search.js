import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const Search=(props)=>{
    const navigate=useNavigate()
    const [searchItem,setSearchItem]=useState(props.data)
    const [res,setRes]=useState(searchItem)
    const [author,setAuthor]=useState('')
    const [inp,setInp]=useState('')
    const handleIt=(e)=>{
        navigate(`/${e}`)
    }
    const handleChange=(e,val)=>{
        if(val==='srh') setInp(e.target.value)
    }
    const handleSearch=(e)=>{
        setAuthor(inp)
        
    }
    // useEffect(()=>{
    //     setRes(searchItem.filter((item)=>item.author===author))
    // },[author])
    return(
        <>
        {console.log(res)}
        <div>
            <button onClick={(e)=>handleIt('home')}>Home</button>
            <button onClick={(e)=>handleIt('search')}>Search Books</button>
            <button onClick={(e)=>handleIt('price')}>Price</button>
            <button onClick={(e)=>handleIt('rating')}>Rating</button>
        </div>
        <form>
            <input type='text' placeholder="Author" onChange={(e)=>handleChange(e,'srh')} value={inp}></input>
            <button onClick={(e)=>handleSearch(e)}>Search</button>
        </form>
        <div className="row">
            {
                props.data.filter(((item)=>item.author===author)).map((item)=>(
                    <div className="col-sm-12 col-lg-3">
                        <div className="card" style={{width: '300px', margin: '7px'}}>
                        <img className="card-img-top" src={item.image} alt="Card image cap"></img>
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
export default Search