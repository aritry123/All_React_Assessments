import {useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { change, changeRole } from '../Slice'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Slice'
const User=()=>{
    const location = useLocation()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [user,setUser]=useState({})
    const [pass,setPass]=useState('')
    const {details}=useSelector((state)=>state.info.data)
    useEffect(()=>{
        setUser(details.find((item)=>item._id===location.state.id))
    },[details])
    const handleChange=(e,val)=>{
        if(val==='pass') setPass(e.target.value)
    }
    const handlePass=(e,itemid)=>{
        e.preventDefault()
        dispatch(change({id:itemid,password:pass}))
        dispatch(changeRole())
        navigate('/login')
    }
    const logoutMethod=(e)=>{
        e.preventDefault()
        dispatch(logout())
        dispatch(changeRole())
        navigate('/login')
    }
    return(
        <div>
            <h1>User details</h1>
            <h2>{user.fname}</h2>
            <h2>{user.email}</h2>
            <h2>{user.phone}</h2>
            <h2>{user.address}</h2>
            <button onClick={(e)=>logoutMethod(e)}>Logout</button>
            <form>
                <input type='text' placeholder='New Password' onChange={(e)=>handleChange(e,'pass')}></input>
                <button onClick={(e)=>handlePass(e,user._id)}>Change Password</button>
            </form>
        </div>
    )
}
export default User