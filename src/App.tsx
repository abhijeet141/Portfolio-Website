import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import {Navbar} from './components/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Skills } from './pages/Skills'
import { Contact } from './pages/Contact'
import { Projects } from './pages/Projects'
function App() {
  return (
    <BrowserRouter>
      <div className='font-jetbrains'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/experience' element={<Experience></Experience>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
          <Route path='/skills' element={<Skills></Skills>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='*' element={<Navigate to='/' replace />} />        
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
