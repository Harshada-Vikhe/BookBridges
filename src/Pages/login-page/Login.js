import React from 'react'
import './Login.styles.css'
import AuthBgImg from '../../assests/Booksimages/loginbg.jpg'
import Navbarr from '../../Components/Layouts/Navbar/Navbarr'
import AuthForm from '../../Components/Forms/authForm/AuthForm'

const Login = () => {
  return (
    <>
    <Navbarr darkText={true}/>
    <section className='signup-container'>
    <div className='signup-img-container'>
      <img src={AuthBgImg}  alt='authentication-background'/>
    </div>

    <div className='signup-content-container'>
     <div className='container'>
         <div className='content-wrapper'>
              <h2>Login</h2>
              <p>Sign in with email and password.</p>
              <AuthForm buttonName='Login'/>
              
           </div>
       </div>
    </div>
   </section>
   </>
  )
}

export default Login