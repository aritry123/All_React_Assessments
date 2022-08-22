import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const SignIn=()=>{
    const navigate=useNavigate()
    let {state}=useLocation()
    const [user,setUser]=useState('')
    const [pass,setPass]=useState('')
    const handleChange=(e,val)=>{
        if(val==='uname') setUser(e.target.value)
        if(val==='pass') setPass(e.target.value)
    }
    const handleClick=(e)=>{
        e.preventDefault()
        if(user&&pass) {
            if(state===null) return alert("Please Signup!")
            if(user===state.email&&pass===state.Pass) navigate(`/dashboard/${state.uname}`,{state:{uname:state.uname,phone:state.phone,email:state.email,Pass:state.Pass,cPass:state.cPass}})
            else return alert("Please enter correct details!")
        } else return alert("Field empty!")
    }
    const handleKey=(e)=>{
        e.preventDefault()
        if(e.key==='Enter') {
            if(user&&pass) {
                if(state===null) return alert("Please Signup!")
                if(user===state.email&&pass===state.Pass) navigate(`/dashboard/${state.uname}`,{state:{uname:state.uname,phone:state.phone,email:state.email,Pass:state.Pass,cPass:state.cPass}})
                else return alert("Please enter correct details!")
            } else return alert("Field empty!")
        }
    }
    return(
        <div>
            <form>
                <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'uname')}></input>
                <input type='text' placeholder="Password" onChange={(e)=>handleChange(e,'pass')}></input>
                <button onClick={(e)=>handleClick(e)} onKeyDown={(e)=>handleKey(e)}>Sign In</button>
            </form>
        </div>
    )
}
export default SignIn