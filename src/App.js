import logo from './logo.svg';
import './App.css';
import { useEffect,createContext, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import app from './firebase/Firebase';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import Homepage from './Pages/homepage/Homepage';
import Bookspage from './Pages/BooksPage/Bookspage';
import BookDetails from './Pages/BookDetailPage/BookDetails';
import SignUp from './Pages/signup-page/SignUp';
import Login from './Pages/login-page/Login';
import CartPage from './Pages/cartPage/CartPage';
import ScrollToTop from './Components/util/ScrollToTop';
import SearchPage from './Pages/searchPage/SearchPage';
 
export const UserContext = createContext({});
export const CartContext = createContext({});

const App=()=>{
   const auth = getAuth(app);
   const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const[cartItems,setCartItems]= useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

   useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          console.log(user);
          setAuthenticatedUser(user);
        }else{
          setAuthenticatedUser(null);
        }
       
      })
   },[])
    
   useEffect(()=>{
       let total = 0;
       cartItems.forEach((item)=>{
        total= total + parseInt(item.price);
       })
       setTotalAmount(total);
   },[cartItems])

  return(
    <ScrollToTop>
       <UserContext.Provider value={authenticatedUser}>
       <CartContext.Provider value={{cartItems,totalAmount,setCartItems}}>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/books' element={<Bookspage/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/search' element={<SearchPage/>} />
      <Route path='/book-details/:id' element={<BookDetails/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
     </Routes>
     </CartContext.Provider>
    </UserContext.Provider>
 </ScrollToTop>
   
  )
  }
export default App;
