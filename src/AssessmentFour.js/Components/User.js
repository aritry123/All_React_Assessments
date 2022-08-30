import {useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { change, changeRole, deactivate } from '../Slice'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Slice'
const User=()=>{
    const location = useLocation()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [vis,setVis]=useState(false)
    const [user,setUser]=useState({})
    const [pass,setPass]=useState('')
    const {User}=useSelector((state)=>state.info.data)
    useEffect(()=>{
        setUser(User.find((item)=>item._id===location.state.id))
        console.log(location.state.loginTime)
    },[])
    // useEffect(()=>{
    //     if(Date.now()-location.state.loginTime>=location.state.tokenTime) {
    //         dispatch(logout())
    //         dispatch(changeRole())
    //         navigate('/login')
    //     }
    //     setVis(!vis)
    // },[vis])
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
    const handleDeactivate=(itemid)=>{
        dispatch(deactivate(itemid))
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
            <button onClick={()=>handleDeactivate(user._id)}>Deactivate</button>
            <button onClick={(e)=>logoutMethod(e)}>Logout</button>
            <form>
                <input type='text' placeholder='New Password' onChange={(e)=>handleChange(e,'pass')}></input>
                <button onClick={(e)=>handlePass(e,user._id)}>Change Password</button>
            </form>
        </div>
    )
}
export default User