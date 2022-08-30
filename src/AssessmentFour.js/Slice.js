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
        return {data:result.data,email:obj.email}
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
export const getAll=createAsyncThunk('/AssessmentFour/getAll',async ()=>{
    try{
        const result=await axios.get('http://localhost:3001/getAll')
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
export const deactivate=createAsyncThunk('/AssessmentFour/deactivate',async (itemid)=>{
    try{
        const result=await axios.post(`http://localhost:3001/deactivate/${itemid}`,{activation:false},{withCredentials:true})
        return {data:result.data,id:itemid}
    }
    catch(err){
        console.log(err)
    }
})
export const lock=createAsyncThunk('/AssessmentFour/lock',async (email)=>{
    console.log("entered lock")
    try{
        const result=await axios.post(`http://localhost:3001/lock/${email}`,{})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const unlock=createAsyncThunk('/AssessmentFour/unlock',async (email)=>{
    console.log("entered unlock")
    try{
        const result=await axios.post(`http://localhost:3001/unlock/${email}`,{})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
const initialValue={
    details:[],
    User:[],
    load:true,
    loading:true,
    role:'',
    loginCount:0,
    loginEmail:'',
    tokenTime:0
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
            console.log(state.data.loginEmail)
            console.log(action.payload.email)
            if(state.data.loginEmail!==action.payload.email) {
                state.data.loginCount=0
                state.data.loginEmail=action.payload.email
            }
            if(action.payload.data.status) {
                if(state.data.loginCount<3) {
                    state.data.tokenTime=action.payload.data.tokenTime
                    state.data.role=action.payload.data.role
                    state.data.loginEmail=''
                    state.data.loginCount=0
                }
                else {
                    state.data.loginCount=state.data.loginCount+1
                    return alert("Your profile is locked!")
                }
            }
            else {
                state.data.loginCount=state.data.loginCount+1
                if(state.data.loginCount<3) {
                    return alert(action.payload.data.msg)
                }
                else return alert("Your profile is locked!")
            }
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
        [getAll.pending]:(state,action)=>{
            
        },
        [getAll.fulfilled]:(state,action)=>{
            if(!action.payload.status) return alert("Unauthorized!")
            else {
                state.data.User=action.payload.data
            }
        },
        [getAll.rejected]:(state,action)=>{
            
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
        },
        [deactivate.pending]:(state,action)=>{
            state.data.load=true
        },
        [deactivate.fulfilled]:(state,action)=>{
            if(!action.payload.data.status) return alert("Unauthorized!")
            else {
                state.data.load=false
                const result=state.data.details.find((item)=>item._id===action.payload.id)
                result.activation=false
            }
        },
        [deactivate.rejected]:(state,action)=>{
            state.data.load=true
        }
    }
})
export const {changeRole}=Slice.actions
export default Slice.reducer