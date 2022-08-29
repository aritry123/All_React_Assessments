import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMovies=createAsyncThunk('/AssessmentThree/fetchMovies',async ()=>{
    try{
        const result=await axios.get('http://localhost:3001/empDetails')
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const postMovies=createAsyncThunk('/AssessmentThree/postMovies',async (obj)=>{
    try{
        const result=await axios.post('http://localhost:3001/empDetails',obj)
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const deleteMovies=createAsyncThunk('/AssessmentThree/deleteMovies',async (userid)=>{
    try{
        await axios.delete(`http://localhost:3001/empDetails/${userid}`)
        return userid
    }
    catch(err){
        console.log(err)
    }
})
const initialValue={
    movieData:[],
    loading:true
}
const Slice=createSlice({
    name:'movieinfo',
    initialState:{
        data:initialValue
    },
    reducers:{

    },
    extraReducers:{
        [fetchMovies.pending]:(state,action)=>{
            state.data.loading=true
        },
        [fetchMovies.fulfilled]:(state,action)=>{
            state.data.loading=false
            state.data.movieData=[...state.data.movieData,...action.payload]
        },
        [fetchMovies.rejected]:(state,action)=>{
            state.data.loading=false
        },
        [postMovies.pending]:(state,action)=>{
            state.data.loading=true
        },
        [postMovies.fulfilled]:(state,action)=>{
            state.data.loading=false
            state.data.movieData=[...state.data.movieData,{id:Date.now(),...action.payload}]
        },
        [postMovies.rejected]:(state,action)=>{
            state.data.loading=false
        },
        [deleteMovies.pending]:(state,action)=>{
            state.data.loading=true
        },
        [deleteMovies.fulfilled]:(state,action)=>{
            state.data.loading=false
            state.data.movieData=state.data.movieData.filter((item)=>item.id!==action.payload)
        },
        [deleteMovies.rejected]:(state,action)=>{
            state.data.loading=false
        }
    }
})
export default Slice.reducer