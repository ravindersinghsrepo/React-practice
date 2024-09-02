import logo from '../logo.png'

const Header = () =>{
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
            </ul>
        </div>

        {/* <div className="userIcon">
            <img src={userIcon} alt='User Icon' className='user-icon'/>
        </div> */}
    </div>
    )
}
export default Header;