import { useContext, useState } from 'react';
import logo from '../logo.png'
import { createBrowserRouter, Link } from 'react-router-dom';
import useOnlineStatus from '../util/useOnlineStatus';
import { userContext } from '../util/userContext';

const Header = () =>{
    const[btnName , setBtn] = useState('Login');
    const isOnline = useOnlineStatus();
    const data = useContext(userContext);
    console.log(data);

    return(
    <div className="flex justify-between  bg-pink-50 shadow-lg">

        <div className="">
            <img src={logo} alt="App logo" className='w-56'/>
        </div>

        <div className='flex items-center mr-16'>
            <ul className='flex p-4 m-4 font-medium text-lg text-rose-600 '>
                <li className=' mx-10 hover:border-b-2 border-rose-600'>
                    Status: 
                    {isOnline?' 🟢':' 🔴'}
                </li>
                <li className='mx-10 hover:border-b-2 border-rose-600 '>
                    <Link to='/'>
                    Home    
                    </Link>
                </li>
                <li className='mx-10 hover:border-b-2 border-rose-600'>
                    <Link to='/grocery'>
                    Grocery    
                    </Link>
                </li>
                <li className='mx-10 hover:border-b-2 border-rose-600'>
                    <Link to='/about'>
                    About Us    
                    </Link>
                </li>
                <li className='mx-10 hover:border-b-2 border-rose-600'>
                    <Link to='contact'>
                    Contact Us    
                    </Link>
                </li>
                <li className='mx-10 hover:border-b-2 border-rose-600'>
                    {data.userloggedIn}
                </li>
                <li className='mx-10 hover:border-b-2 border-rose-600'>
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