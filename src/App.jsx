import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './context/UserProvider'

import Login from './routes/Login'
import Home from './routes/Home'
import Register from './routes/Register'
import Profile from './routes/Profile'
import NoFound from './routes/NoFound';
import Goals from './routes/goals'

import LayoutForm from './components/layout/LayoutForm'
import RequireAuth from './components/layout/RequireAuth'



const App = () => {

  const { user } = useContext(UserContext)
  if (user === false) {
    return <div className=" p-20
    m-auto
      h-40
      W-40
      border-8
      border-l-white
      border-r-white
      border-b-white
      border-t-dark-purple
      animate-spin
      ease-linear
      rounded-full
"></div>
  }
  return (
    <>
 
      <Routes>

        <Route path='/' element={<RequireAuth />}>
          <Route index  element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/goals' element={<Goals />} />
        </Route>

        <Route path='/' element={<LayoutForm />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route path="*" element={<NoFound />} />
      </Routes>

    </>

  )
}

export default App;
