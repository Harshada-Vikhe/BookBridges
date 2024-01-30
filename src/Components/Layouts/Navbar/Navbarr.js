import React,{useContext} from 'react'
import './Navbar.styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { createContext } from 'react'
import { UserContext } from '../../../App'
import {ReactComponent as Cart} from '../../../assests/Cart.svg'
import {getAuth, signOut} from "firebase/auth";
import app from '../../../firebase/Firebase'

const Navbarr = ({darkTheme, darkText}) => {
  const user= useContext(UserContext);

  const auth= getAuth(app);
  
  const navigate = useNavigate();
  const handleLogout =()=>{
    signOut(auth).then(()=>{
      navigate('/');
    })
    .catch((err)=>{
       console.log(err);
    })
  }

  const showLoginAndSignUp = (
    <nav className='nav-links-container'>
            <Link to='/' className={`${darkText ? 'nav-links-dark' :'nav-links'}`}>Home</Link>
            <Link to='/books' className={`${darkText ? 'nav-links-dark' :'nav-links '}`}>Books</Link>
            <Link to='/login' className={`${darkText ? 'nav-links-dark' :'nav-links '}`}>Login</Link>
            <Link to='/signup' className={`${darkText ? 'nav-links-dark' :'nav-links '}`}>Sign Up</Link>
     </nav>
  )
   const shoLogoutAndCart= (
    <nav className='nav-links-container'>
            <Link to='/' className={`${darkText ? 'nav-links-dark' :'nav-links'}`}>Home</Link>
            <Link to='/books' className={`${darkText ? 'nav-links-dark' :'nav-links '}`}>Books</Link>
            <a  onClick={handleLogout} className={`${darkText ? 'nav-links-dark' :'nav-links '}`}>LogOut</a>
            <Link to="/cart" className='cart-link'><Cart/></Link>
        </nav>
   )
  return (
   <>
   <section className={`navbar-container ${darkTheme ? 'background-dark relative' : ' background-transparent'}`}>
    <div className='container flex justify-center align-center justify-between'>
        <a href='#' className='logo'>Book<span className='text-primary'>Bridges</span></a>
        
        {user ? shoLogoutAndCart : showLoginAndSignUp}
    </div>
   </section>
   </>
  )
}

export default Navbarr