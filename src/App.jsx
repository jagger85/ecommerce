import './App.scss'
import HomePage from './components/HomePage'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
