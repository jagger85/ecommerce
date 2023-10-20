import './App.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import Shop from './components/pages/shop/Shop'
import SingleProduct from './components/Single-product/SingleProduct'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
