import logo from './logo.png';
import userIcon from './user icon.png'
const Header = ()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo" className='logoImg'/>
            </div>
            <div className="searchBar">
                <input type='text' 
                className='input'
                placeholder='Search'/>
                <button type='submit'>Search</button>
            </div>
            <div className="userIcon">
                <img src={userIcon} alt='User Icon' className='user-icon'/>
            </div>
        </div>
    )
}
export default Header;