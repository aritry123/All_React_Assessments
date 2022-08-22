import {BrowserRouter,Route,Routes,Link, NavLink, Outlet} from 'react-router-dom'
import Dashboard from './AssessmentTwo/Dashboard'
import Home from './AssessmentTwo/Home'
import Navbar from './AssessmentTwo/Navbar'
import SignIn from './AssessmentTwo/SignIn'
import SignUp from './AssessmentTwo/SignUp'
import data from './AssessmentTwo/ShoppingData'
import Search from './AssessmentTwo/Search'
import Price from './AssessmentTwo/Price'
import Ratings from './AssessmentTwo/Ratings'
import homeData from './AssessmentTwo/HomeData'
export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<SignUp></SignUp>}></Route>
                    <Route path='/SignIn' element={<SignIn></SignIn>}></Route>
                    <Route path='/dashboard' element={<Dashboard isLoggedIn={false}></Dashboard>}></Route>
                    <Route path='/dashboard/:username' element={<Dashboard isLoggedIn={true}></Dashboard>}></Route>
                    <Route path='/shopping' element={<Outlet></Outlet>}>
                        <Route path='home' element={<Home data={homeData}></Home>}></Route>
                        <Route path='search' element={<Search data={homeData}></Search>}></Route>
                        <Route path='price' element={<Price data={data}></Price>}></Route>
                        <Route path='rating' element={<Ratings data={data}></Ratings>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}