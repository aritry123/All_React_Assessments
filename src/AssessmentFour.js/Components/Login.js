import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { get, login } from "../Slice"
const Login=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {role,details}=useSelector((state)=>state.info.data)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleChange=(e,val)=>{
        if(val==='email') setEmail(e.target.value)
        if(val==='password') setPassword(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login({email:email,password:password}))
    }
    useEffect(()=>{
        dispatch(get())
    },[])
    return(
        <div>
            {
                role==='admin'?navigate('/admin_dashboard'):role==='user'?navigate('/user_dashboard',{state:{id:details.find((item)=>item.email===email)._id}}):<form>
                <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')}/>
                <input type='text' placeholder="Password" onChange={(e)=>handleChange(e,'password')}/>
                <button onClick={(e)=>handleLogin(e)}>Login</button>
            </form>
            }
        </div>
    )
}
export default Login