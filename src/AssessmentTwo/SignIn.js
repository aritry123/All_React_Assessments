import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignIn=()=>{
    const navigate=useNavigate()
    const [user,setUser]=useState('')
    const [pass,setPass]=useState('')
    const handleChange=(e,val)=>{
        if(val==='uname') setUser(e.target.value)
        if(val==='pass') setPass(e.target.value)
    }
    const handleClick=(e)=>{
        if(user==='admin'&&pass==='admin') navigate('/dashboard')
    }
    return(
        <div>
            <form>
                <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'uname')}></input>
                <input type='text' placeholder="Password" onChange={(e)=>handleChange(e,'pass')}></input>
                <button onClick={(e)=>handleClick(e)}>Sign In</button>
            </form>
        </div>
    )
}
export default SignIn