import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { get, getAll, lock, login, unlock } from "../Slice"
const Login=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {role,User,loginCount,tokenTime}=useSelector((state)=>state.info.data)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleChange=(e,val)=>{
        if(val==='email') setEmail(e.target.value)
        if(val==='password') setPassword(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        const user=User.find((item)=>item.email===email)
        if(user!==undefined) {
            if(user.lock===false) dispatch(login({email:email,password:password}))
            else {
                if(Date.now()-user.time>=60000) {
                    dispatch(unlock(email))
                    dispatch(login({email:email,password:password}))
                }
                else return alert("Your profile is locked, please try again 1 minute later!")
            }
        } else return alert("User doesn't exist!")
    }
    useEffect(()=>{
        dispatch(getAll())
    },[loginCount])
    useEffect(()=>{
        console.log(loginCount)
        if(loginCount===3) dispatch(lock(email))
    },[loginCount])
    return(
        <div>
            {
                role==='admin'?navigate('/admin_dashboard'):role==='user'?navigate('/user_dashboard',{state:{id:User.find((item)=>item.email===email)._id,tokenTime:tokenTime,loginTime:Date.now()}}):<form>
                <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')}/>
                <input type='text' placeholder="Password" onChange={(e)=>handleChange(e,'password')}/>
                <button onClick={(e)=>handleLogin(e)}>Login</button>
            </form>
            }
        </div>
    )
}
export default Login