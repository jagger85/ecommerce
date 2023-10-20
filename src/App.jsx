import './App.scss'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
