import './App.css'
import { useEffect } from 'react'
import { fetch_produit } from './redux/Slice'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/products'
import Navbar from './components/nav'
import Footer from './components/footer'
import Cart from './components/cart'
import ProductDetails from './components/productDetails'
import About from './components/About'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetch_produit())
  }, [dispatch])

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productdetails/:id' element={<ProductDetails/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
