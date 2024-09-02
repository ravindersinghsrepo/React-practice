import { useState } from 'react';
import logo from '../logo.png'
import { createBrowserRouter, Link } from 'react-router-dom';
import useOnlineStatus from '../util/useOnlineStatus';

const Header = () =>{
    const[btnName , setBtn] = useState('Login');
    const isOnline = useOnlineStatus();
    console.log(isOnline)
    return(
    
    <div className="header">
        <div className="logo-container">
            <img src={logo} alt="App logo" className='logo'/>
        </div>

        <div className='nav-items'>
            <ul>
                <li>
                    Status:
                    {isOnline?'🟢':'🔴'}
                </li>
                <li>
                    <Link to='/'>
                    Home    
                    </Link>
                </li>
                <li>
                    <Link to='/grocery'>
                    Grocery    
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