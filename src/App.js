import {BrowserRouter,Route,Routes,Link, NavLink, Outlet} from 'react-router-dom'
import Admin from './AssessmentFour.js/Components/Admin'
import Login from './AssessmentFour.js/Components/Login'
import Signup from './AssessmentFour.js/Components/Signup'
import User from './AssessmentFour.js/Components/User'
export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Signup></Signup>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/admin_dashboard' element={<Admin></Admin>}></Route>
                    <Route path='/user_dashboard' element={<User></User>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}