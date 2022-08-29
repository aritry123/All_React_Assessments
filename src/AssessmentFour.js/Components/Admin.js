import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useEffect, useState } from 'react'
import { add } from '../Slice'
import { get } from '../Slice'
import { remove } from '../Slice'
import { update } from '../Slice'
import { logout } from '../Slice'
import { changeRole } from '../Slice'
function Admin(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [id,setId]=useState(-1)
    const [flag,setFlag]=useState(false)
    const {details,load}=useSelector((state)=>state.info.data)
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const logoutMethod=(e)=>{
        e.preventDefault()
        dispatch(logout())
        dispatch(changeRole())
        navigate('/login')
    }
    const handleChange=(e,val)=>{
        if(val==='uname') setUname(e.target.value)
        if(val==='email') setEmail(e.target.value)
        if(val==='password') setPassword(e.target.value)
        if(val==='phone') setPhone(e.target.value)
        if(val==='address') setAddress(e.target.value)
    }
    const handleAdd=(e)=>{
        e.preventDefault()
        if(!uname||!phone||!address||!email||!password) return alert("Field empty!")
        dispatch(add({fname:uname,email:email,password:password,phone:phone,address:address}))
        clearForm()
    }
    const handleDelete=(itemid)=>{
        dispatch(remove({id:itemid}))
        clearForm()
        setFlag(false)
    }
    const handleUpdate=(item)=>{
        setFlag(!flag)
        setUname(item.fname)
        setPhone(item.phone)
        setEmail(item.email)
        setPassword(item.password)
        setId(item._id)
    }
    const handleUp=(e)=>{
        e.preventDefault()
        if(!uname||!phone||!address||!email||!password) return alert("Field empty!")
        dispatch(update({id:id,fname:uname,phone:phone,email:email,password:password}))
        setId(-1)
        setFlag(!flag)
        clearForm()
    }
    const clearForm=()=>{
        setUname('')
        setPhone('')
        setAddress('')
        setEmail('')
        setPassword('')
    }
    useEffect(()=>{
        dispatch(get())
    },[])
    return(
        <div>
            <form>
                <input type='text' placeholder="Username" onChange={(e)=>handleChange(e,'uname')} value={uname}/>
                <input type='text' placeholder="Email" onChange={(e)=>handleChange(e,'email')} value={email}/>
                <input type='text' placeholder="Password" onChange={(e)=>handleChange(e,'password')} value={password}/>
                <input type='number' placeholder="Phone" onChange={(e)=>handleChange(e,'phone')} value={phone}/>
                <input type='text' placeholder="Address" onChange={(e)=>handleChange(e,'address')} value={address}/>
                {
                    flag ? <button onClick={(e)=>handleUp(e)}>Update Contact</button> : <button onClick={(e)=>handleAdd(e)}>Add Contact</button>
                }
                <button onClick={(e)=>logoutMethod(e)}>Logout</button>
            </form>
            {
                load ? <></> : <>
                <div className='row'>
                {
                    details.map((item)=>(
                        <div className='col-sm-12 col-lg-2'>
                        <h1>{item.fname}</h1>
                        <p>{item.phone}</p>
                        <p>{item.email}</p>
                        <p>{item.address}</p>
                        <button onClick={(e)=>handleDelete(item._id)}>Delete</button>
                        <button onClick={(e)=>handleUpdate(item)}>Update</button>
                        </div>
                    ))
                }
                </div>
                </>
            }
        </div>

    )
}
export default Admin