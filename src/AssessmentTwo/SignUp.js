import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const SignUp=()=>{
    const navigate=useNavigate()
    const [uname,setUname]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [cPass,setCPass]=useState('')
    const handleClick=(e)=>{
        e.preventDefault()
        if(uname&&phone&&email&&pass&&cPass) {
            if(pass===cPass) navigate('/signIn',{state:{uname:uname,phone:phone,email:email,Pass:pass,cPass:cPass}})
            else return alert("Passwords unmatched!")
        } else return alert("Field empty!")
    }
    const handleChange=(e,val)=>{
        if(val==='uname') setUname(e.target.value)
        if(val==='phone') setPhone(e.target.value)
        if(val==='email') setEmail(e.target.value)
        if(val==='pass') setPass(e.target.value)
        if(val==='cPass') setCPass(e.target.value)
    }
    const handleBlur=(e,val)=>{
        if(val==='uname') setUname(e.target.value)
        if(val==='phone') setPhone(e.target.value)
        if(val==='email') setEmail(e.target.value)
        if(val==='pass') setPass(e.target.value)
        if(val==='cPass') setCPass(e.target.value)
    }
    const handleKey=(e)=>{
        e.preventDefault()
        if(e.key==='Enter') {
            if(uname&&phone&&email&&pass&&cPass) {
                if(pass===cPass) navigate('/signIn',{state:{uname:uname,phone:phone,email:email,Pass:pass,cPass:cPass}})
                else return alert("Passwords unmatched!")
            } else return alert("Field empty!")
        }
    }
    return(
        <div>
            <form>
                <input type='text' placeholder="Username" onBlur={(e)=>handleBlur(e,'uname')}></input>
                <input type='number' placeholder="Phone" onBlur={(e)=>handleBlur(e,'phone')}></input>
                <input type='text' placeholder="Email" onBlur={(e)=>handleBlur(e,'email')}></input>
                <input type='text' placeholder="Password" onBlur={(e)=>handleBlur(e,'pass')}></input>
                <input type='text' placeholder="Confirm Password" onBlur={(e)=>handleBlur(e,'cPass')}></input>
                {/* <Link to='/signIn'><button>Sign Up</button></Link> */}
                <button onClick={(e)=>handleClick(e)} onKeyDown={(e)=>handleKey(e)}>Sign Up</button>
            </form>
        </div>
    )
}
export default SignUp