import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './Pages/Home'
import { ButtonAppBar } from './config/components/AppBar'

const App = () => {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route path='*' element={ <Navigate to='/home' /> } />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
