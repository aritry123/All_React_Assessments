import { useEffect, useState } from "react"
import { useNavigate,useLocation } from "react-router-dom"
import { userHook } from "./userHook"
const Dashboard=(props)=>{
    const [flag,setFlag]=useState(true)
    const [count,setCount]=useState(0)
    const navigate=useNavigate()
    const {fname,email,phone,delAddress,wishList,purchasedItems} = userHook()
    let {state}=useLocation()
    const handleProceed=(e)=>{
        navigate('/shopping/home')
    }
    useEffect(()=>{
        if(props.isLoggedIn===true) {
            setCount(1)
            setFlag(props.isLoggedIn)
        }
        else if(count!==1) setFlag(props.isLoggedIn)
    },[props.isLoggedIn])
    return(
        <>
        {console.log(count)}
        {/* <prompt>Are you sure?</prompt> */}
        {
            flag===false ? <h1 style={{textAlign: 'center'}}>Please Login!</h1> : state!==null ? 
            <>
            <div>
            <b>Name: </b>{state.uname}<br></br>
            <b>Email: </b>{state.email}<br></br>
            <b>Phone: </b>{state.phone}<br></br>
            <b>Delivery Address: </b>{delAddress}<br></br>
            <b>Wish List: </b>{wishList}<br></br>
            <b>Purchased Items: </b>{purchasedItems}<br></br>
            </div>
            <h3 onClick={(e)=>handleProceed(e)} style={{cursor: 'pointer'}}>Proceed to Shopping <i className="fa-solid fa-arrow-right-long"></i></h3>
            </> : <></>
        }
        </>
    )
}
export default Dashboard