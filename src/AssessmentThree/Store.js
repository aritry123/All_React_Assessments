import { configureStore } from "@reduxjs/toolkit"
import Slice from "./Slice"
const Store=configureStore({
    reducer:{
        movieinfo:Slice
    }
})
export default Store