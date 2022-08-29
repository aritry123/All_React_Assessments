import { useSelector } from "react-redux"
import { Hook } from "../CustomHooks/Hook"
import './Admin.css'
import { useDispatch } from "react-redux/es/exports"
import { deleteMovies } from "../Slice"
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Admin=()=>{
    const dispatch=useDispatch()
    // const [flag,setFlag]=useState(false)
    const {movieData,loading}=useSelector((state)=>state.movieinfo.data)
    const {mname,imgUrl,country,date,flag,onDateChange,...others}=Hook()
    const handleDelete=(itemid)=>{
        dispatch(deleteMovies(itemid))
    }
    // const [date, setDate] = useState(new Date());
    // const onDateChange = (newDate) => {
    //     setDate(newDate);
    //     setFlag(!flag)
    //     console.log(Date.parse(newDate));
    // }
    // const handleDate=(e)=>{
    //     setFlag(!flag)
    // }
    return(
        <div>
            <h1 style={{textAlign: 'center',color: 'red',marginTop: '10px'}}>Admin space!</h1>
            <h1 style={{position: 'fixed',zIndex: '1',marginLeft: '805px',fontSize: '15px',marginTop: '22px'}}>Release Date: </h1>
            <form style={{marginTop: '50px',display: 'flex',justifyContent: 'center',gap: '10px'}}>
                <input type='text' className="form-control" placeholder="Movie Name" name="mname" {...others} value={mname} style={{width: '200px'}}/>
                <input type='text' className="form-control" placeholder="Image URL" name="img" {...others} value={imgUrl} style={{width: '200px'}}/>
                <input type='text' className="form-control" placeholder="Country" name="country" {...others} value={country} style={{width: '200px'}}/>
                
                <input type='text' className="form-control" placeholder="Date" name="date" value={date} style={{width: '200px'}} {...others}/>
                <button name="button" {...others} className="x btn btn-outline-success">Add Movie</button>
            </form>
            {
                flag ? <>
                <div style={{position: 'fixed',zIndex: '1',marginLeft: '715px'}}><Calendar onChange={onDateChange} value={date} showNeighboringMonth={false} locale={"en-US"} name="cal"/></div>
                </> : <></>
            }
            <div style={{marginTop: '10px'}}>
            {
                loading ? <><h1 style={{textAlign: 'center',color: 'red',marginTop: '300px'}}>Not yet loaded!</h1></> : <>
                <div className='row' style={{margin: '5%'}}>
                    {
                    movieData.slice(0).reverse().map((item)=>(
                        <div className="col-sm-12 col-lg-4">
                            <div className="card k1" style={{width: '300px', margin: '7px', borderRadius: '6px'}}>
                                <img src={`${item.image}`} className="card-img-top" alt='image' style={{border: 'solid', height: '225px',borderRadius: '6px'}}/>
                                <div className="card-body">
                                    <h2 style={{fontSize: '90%'}}>Movie Name: <b>{item.mname}</b></h2>
                                    <p className="card-text">Country: <b>{item.country}</b><br/>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star-half-stroke" style={{color: '#ffa700'}}></i>
                                    <i className="fa-regular fa-star" style={{color: '#ffa700'}}></i>
                                    </p>
                                </div>
                                <div style={{textAlign: 'center',margin: '10px'}}>
                                <button onClick={()=>handleDelete(item.id)} className="x btn btn-outline-danger" style={{width: '100px'}}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                </>
            }
            </div>
        </div>
    )
}
export default Admin