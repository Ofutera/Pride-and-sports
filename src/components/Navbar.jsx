import "./navbar.scss";
import Logo from '../images/logo.gif'

const Navbar = () => {
    return (
      <div className='navbar'>
        <img src={Logo} className='logo' alt='logo'/>
        <div className='navbar-menu'>
          <span><a href="https://google.com">home</a></span>
          <span><a href="https://google.com">nieuws</a></span>
          <span><a href="https://google.com">verhalen</a></span>
          <span><a href="https://google.com">sportclubs</a></span>
          <span><a href="https://google.com">partners</a></span>
          <span><a href="https://google.com">pride in nl</a></span>
          <span><a href="https://google.com">overig</a></span>
        </div>
      </div>
    );
  };
  
  export default Navbar;