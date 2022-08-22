import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Admin.css'
const Login=()=>{
    const navigate=useNavigate()
    const [uname,setUname]=useState('')
    const [pass,setPass]=useState('')
    const handleChange=(e,val)=>{
        if(val==='uname') setUname(e.target.value)
        if(val==='pass') setPass(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        if(!uname||!pass) return alert("Field empty!")
        if(uname==='admin'&&pass==='admin') navigate('/admin')
        else navigate('/customer')
    }
    const handleKey=(e)=>{
        if(e.key==='Enter') {
            e.preventDefault()
            if(!uname||!pass) return alert("Field empty!")
            if(uname==='admin'&&pass==='admin') navigate('/admin')
            else navigate('/customer')
        }
    }
    return(
        <div style={{backgroundColor: '#ADD8E6'}}>
            <form style={{display: 'flex',justifyContent: 'center',gap: '10px',padding: '300px'}}>
                <input type='text' placeholder="Username" className="form-control" onChange={(e)=>handleChange(e,'uname')} style={{width: '200px'}}/>
                <input type='text' placeholder="Password" className="form-control" onChange={(e)=>handleChange(e,'pass')} onKeyDown={(e)=>handleKey(e)} style={{width: '200px'}}/>
                <button onClick={(e)=>handleLogin(e)} className="x btn btn-outline-success">Login</button>
            </form>
        </div>
    )
}
export default Login