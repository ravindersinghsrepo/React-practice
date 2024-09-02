import { useState } from 'react';
import logo from '../logo.png'
import { createBrowserRouter, Link } from 'react-router-dom';

const Header = () =>{
    const[btnName , setBtn] = useState('Login');
    return(
    
    <div className="header">
        <div className="logo-container">
            <img src={logo} alt="App logo" className='logo'/>
        </div>

        <div className='nav-items'>
            <ul>
                <li>
                    <Link to='/'>
                    Home    
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                    About Us    
                    </Link>
                </li>
                <li>
                    <Link to='contact'>
                    Contact Us    
                    </Link>
                </li>
                {/* <li>Cart</li>
                <li>Profile</li> */}
                <li>
                    <button className='login-btn'
                    onClick={()=>{
                        setBtn(btnName==='Login'?'Logout':'Login')
                    }}
                    >{btnName}</button>
                </li>
            </ul>
        </div>
    </div>
    )
}
export default Header;