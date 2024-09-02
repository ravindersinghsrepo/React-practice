import { useState } from 'react';
import logo from '../logo.png'

const Header = () =>{
    const[btnName , setBtn] = useState('Login');
    return(
    
    <div className="header">
        <div className="logo-container">
            <img src={logo} alt="App logo" className='logo'/>
        </div>

        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>About Us</li>
                <li>Profile</li>
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