import { configureStore } from "@reduxjs/toolkit"
import Slice from "./Slice"
const Store=configureStore({
    reducer:{
        info:Slice
    }
})
export default Store