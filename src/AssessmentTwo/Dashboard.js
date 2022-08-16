import { useNavigate } from "react-router-dom"
import { userHook } from "./userHook"

const Dashboard=(props)=>{
    const navigate=useNavigate()
    const {fname,email,phone,delAddress,wishList,purchasedItems} = userHook()
    const handleProceed=(e)=>{
        navigate('/products')
    }
    return(
        <>
        <div>
            <b>Name: </b>{fname}<br></br>
            <b>Email: </b>{email}<br></br>
            <b>Phone: </b>{phone}<br></br>
            <b>Delivery Address: </b>{delAddress}<br></br>
            <b>Wish List: </b>{wishList}<br></br>
            <b>Purchased Items: </b>{purchasedItems}<br></br>
        </div>
        <h3 onClick={(e)=>handleProceed(e)}>Proceed to Shopping <i class="fa-solid fa-arrow-right-long" onClick={(e)=>handleProceed(e)}></i></h3>
        </>
    )
}
export default Dashboard