import {Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from './MainLayout/MainLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact/Contact'
import SignUp from './Pages/SignUp/SignUp'
import AddProduct from './Components/AddProduct/AddProduct'
import Admin from './Pages/Admin'

function App() {
  return (
    <div >
      <MainLayout >
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/sign-up'} element={<SignUp />} />
          <Route path={'/add-product'} element={<AddProduct />} />
          <Route path={'/dashboard'} element={<Admin />} />
        </Routes>
      </MainLayout> 
    </div>
  )
}

export default App
