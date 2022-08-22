import {BrowserRouter,Route,Routes,Link, NavLink, Outlet} from 'react-router-dom'
import Admin from './AssessmentThree/Components/Admin'
import Customer from './AssessmentThree/Components/Customer'
import Login from './AssessmentThree/Components/Login'
export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login></Login>}></Route>
                    <Route path='/admin' element={<Admin></Admin>}></Route>
                    <Route path='/customer' element={<Customer></Customer>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}