import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { postMovies } from "../Slice";
export const Hook=()=>{
    const dispatch=useDispatch()
    const [mname,setMname]=useState('')
    const [imgUrl,setImgUrl]=useState('')
    const [country,setCountry]=useState('')
    const clearForm=()=>{
        setMname('')
        setImgUrl('')
        setCountry('')
    }
    return {
        mname,
        imgUrl,
        country,
        onChange:(e)=>{
            if(e.target.name==='mname') setMname(e.target.value)
            if(e.target.name==='img') setImgUrl(e.target.value)
            if(e.target.name==='country') setCountry(e.target.value)
        },
        onClick:(e)=>{
            if(mname&&imgUrl&&country) {
                e.preventDefault()
                dispatch(postMovies({mname:mname,image:imgUrl,country:country}))
                clearForm()
            } else if(e.target.name==='button') {
                e.preventDefault()
                return alert("Field empty!")
            }
        }
    }
}