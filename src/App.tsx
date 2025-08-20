import React from 'react'
import Navbar from './components/shared/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Courses from './pages/course'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/shared/footer'
import AdminCourse from './admin/course'
import UsersList from './admin/user'
import AdminLayout from './pages/admin'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin/*' element={<AdminLayout />}>
          <Route path='courses' element={<AdminCourse />} />
          <Route path='users' element={<UsersList />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
