import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route path='*' element={ <Navigate to='/home' /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
