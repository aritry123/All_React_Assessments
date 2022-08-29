import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signup } from "../Slice"
import { useNavigate } from 'react-router-dom'
const Signup=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {loading}=useSelector((state)=>state.info.data)
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const handleChange=(e,val)=>{
        if(val==='uname') setUname(e.target.value)
        if(val==='email') setEmail(e.target.value)
        if(val==='password') setPassword(e.target.value)
        if(val==='phone') setPhone(e.target.value)
        if(val==='address') setAddress(e.target.value)
    }
    const handleSignup=(e)=>{
        e.preventDefault()
        dispatch(signup({fname:uname,email:email,password:password,phone:phone,address:address}))
    }
    return(
        <div>
            {
                loading ? <form>
                <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'uname')}/>
                <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')}/>
                <input type='text' placeholder="Password" onChange={(e)=>handleChange(e,'password')}/>
                <input type='number' placeholder="Phone" onChange={(e)=>handleChange(e,'phone')}/>
                <input type='text' placeholder="Address" onChange={(e)=>handleChange(e,'address')}/>
                <button onClick={(e)=>handleSignup(e)}>Signup</button>
            </form> : navigate('/login')
            }
        </div>
    )
}
export default Signup