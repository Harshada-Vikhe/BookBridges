import React from 'react'
import './SignUp.styles.css'
import AuthBgImg from '../../assests/Booksimages/loginbg.jpg'
import Navbarr from '../../Components/Layouts/Navbar/Navbarr'
import AuthForm from '../../Components/Forms/authForm/AuthForm'

const SignUp = () => {
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
              <h2>Signup</h2>
              <p>Create a new account with email and password.</p>
              <AuthForm buttonName='sign Up'/>
             
           </div>
       </div>
    </div>
   </section>
   </>
  )
}

export default SignUp