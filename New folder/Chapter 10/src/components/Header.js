import { useState } from 'react';
import logo from '../logo.png'
import { createBrowserRouter, Link } from 'react-router-dom';
import useOnlineStatus from '../util/useOnlineStatus';

const Header = () =>{
    const[btnName , setBtn] = useState('Login');
    const isOnline = useOnlineStatus();
    console.log(isOnline)
    return(
    
    <div className="flex justify-between bg-pink-50 shadow-lg">
        <div className="">
            <img src={logo} alt="App logo" className='w-56'/>
        </div>

        <div className=' flex items-center'>
            <ul className='flex p-4 m-4'>
                <li className='px-4'>
                    Status:
                    {isOnline?'🟢':'🔴'}
                </li>
                <li className='px-4'>
                    <Link to='/'>
                    Home    
                    </Link>
                </li>
                <li className='px-4'>
                    <Link to='/grocery'>
                    Grocery    
                    </Link>
                </li>
                <li className='px-4'>
                    <Link to='/about'>
                    About Us    
                    </Link>
                </li>
                <li className='px-4'>
                    <Link to='contact'>
                    Contact Us    
                    </Link>
                </li>
                <li className='px-4'>
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