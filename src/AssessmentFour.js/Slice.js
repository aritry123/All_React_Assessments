import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials=true
export const signup=createAsyncThunk('/AssessmentFour/signup',async (obj)=>{
    console.log(obj)
    try{
        const result=await axios.post('http://localhost:3001/signup',{fname:obj.fname,email:obj.email,password:obj.password,phone:obj.phone,address:obj.address})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const login=createAsyncThunk('/AssessmentFour/login',async (obj)=>{
    try{
        const result=await axios.post('http://localhost:3001/signin',{email:obj.email,password:obj.password})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const add=createAsyncThunk('/AssessmentFour/add',async (obj)=>{
    try{
        const result=await axios.post('http://localhost:3001/create',{fname:obj.fname,email:obj.email,password:obj.password,phone:obj.phone,address:obj.address},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const get=createAsyncThunk('/AssessmentFour/get',async ()=>{
    try{
        const result=await axios.get('http://localhost:3001/get')
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const remove=createAsyncThunk('/AssessmentFour/remove',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3001/delete/${obj.id}`,{},{withCredentials:true})
        return {data:result.data,id:obj.id}
    }
    catch(err){
        console.log(err)
    }
})
export const update=createAsyncThunk('/AssessmentFour/update',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3001/update/${obj.id}`,{
            fname:obj.fname,
            email:obj.email,
            password:obj.password,
            phone:obj.phone,
        },{withCredentials:true})
        return {obj:obj,data:result.data}
    }
    catch(err){
        console.log(err)
    }
})
export const change=createAsyncThunk('/AssessmentFour/change',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3001/change/${obj.id}`,{
            password:obj.password
        },{withCredentials:true})
        return {obj:obj,data:result.data}
    }
    catch(err){
        console.log(err)
    }
})
export const logout=createAsyncThunk('/AssessmentFour/logout',async ()=>{
    try{
        const result=await axios.post('http://localhost:3001/signout',{},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
const initialValue={
    details:[],
    load:true,
    loading:true,
    role:''
}
const Slice=createSlice({
    name:'info',
    initialState:{
        data:initialValue
    },
    reducers:{
        changeRole:(state,action)=>{
            state.data.role=''
        }
    },
    extraReducers:{
        [signup.pending]:(state,action)=>{
            // return alert(action.payload.msg)
        },
        [signup.fulfilled]:(state,action)=>{
            if(action.payload.status) state.data.loading=false
            else return alert(action.payload.msg)
        },
        [signup.rejected]:(state,action)=>{
            // return alert(action.payload.msg)
        },
        [login.pending]:(state,action)=>{
            
        },
        [login.fulfilled]:(state,action)=>{
            if(action.payload.status) state.data.role=action.payload.role
            else return alert(action.payload.msg)
        },
        [login.rejected]:(state,action)=>{
            
        },
        [add.pending]:(state,action)=>{
            
        },
        [add.fulfilled]:(state,action)=>{
            if(!action.payload.status) return alert("Unauthorized!")
            else {
                state.data.load=false
                state.data.details.push(action.payload.data)
            }
        },
        [add.rejected]:(state,action)=>{
            
        },
        [get.pending]:(state,action)=>{
            state.data.load=true
        },
        [get.fulfilled]:(state,action)=>{
            if(!action.payload.status) return alert("Unauthorized!")
            else {
                state.data.load=false
                state.data.details=action.payload.data
            }
        },
        [get.rejected]:(state,action)=>{
            state.data.load=true
        },
        [remove.pending]:(state,action)=>{
            state.data.load=true
        },
        [remove.fulfilled]:(state,action)=>{
            if(!action.payload.data.status) return alert("Unauthorized!")
            else {
                state.data.load=false
                state.data.details=state.data.details.filter((item)=>item._id!==action.payload.id)
            }
        },
        [remove.rejected]:(state,action)=>{
            state.data.load=true
        },
        [update.pending]:(state,action)=>{
            state.data.load=true
        },
        [update.fulfilled]:(state,action)=>{
            if(!action.payload.data.status) return alert("Unauthorized!")
            else {
                state.data.load=false
                const result=state.data.details.find((item)=>item._id===action.payload.obj.id)
                result.fname=action.payload.obj.fname
                result.phone=action.payload.obj.phone
                result.email=action.payload.obj.email
                result.password=action.payload.obj.password
            }
        },
        [update.rejected]:(state,action)=>{
            state.data.load=true
        }
    }
})
export const {changeRole}=Slice.actions
export default Slice.reducer