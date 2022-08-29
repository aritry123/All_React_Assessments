import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { postMovies } from "../Slice";
export const Hook=()=>{
    const dispatch=useDispatch()
    const [mname,setMname]=useState('')
    const [imgUrl,setImgUrl]=useState('')
    const [country,setCountry]=useState('')
    const [date, setDate] = useState(new Date());
    const [flag,setFlag]=useState(false)
    const clearForm=()=>{
        setMname('')
        setImgUrl('')
        setCountry('')
        setDate(new Date())
        if(flag) setFlag(!flag)
    }
    return {
        mname,
        imgUrl,
        country,
        date,
        flag,
        onDateChange:(newDate)=>{
            setDate(newDate);
            setFlag(!flag)
        },
        onChange:(e)=>{
            if(e.target.name==='mname') setMname(e.target.value)
            if(e.target.name==='img') setImgUrl(e.target.value)
            if(e.target.name==='country') setCountry(e.target.value)
        },
        onClick:(e)=>{
            if(mname&&imgUrl&&country&&e.target.name!=='date') {
                e.preventDefault()
                dispatch(postMovies({mname:mname,image:imgUrl,country:country,date:Date.parse(date)}))
                clearForm()
            } else if(e.target.name==='button') {
                e.preventDefault()
                return alert("Field empty!")
            } else if(e.target.name==='date') {
                setFlag(!flag)
            }
        }
    }
}