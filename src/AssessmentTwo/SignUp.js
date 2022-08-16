import { Link } from "react-router-dom"
const SignUp=()=>{
    return(
        <div>
            <form>
                <input type='text' placeholder="Username"></input>
                <input type='number' placeholder="Phone"></input>
                <input type='text' placeholder="Email"></input>
                <input type='text' placeholder="Password"></input>
                <input type='text' placeholder="Confirm Password"></input>
                <Link to='/signIn'><button>Sign Up</button></Link>
            </form>
        </div>
    )
}
export default SignUp