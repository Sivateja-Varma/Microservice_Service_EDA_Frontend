import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Producttable from './components/Products'
import { Route, Routes } from 'react-router'
import ProductCreation from './components/ProductsCreate'
import OrdersComp from './components/Orders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Producttable></Producttable>}></Route>
      <Route path='/create' element={<ProductCreation></ProductCreation>}></Route>
      <Route path='/order' element={<OrdersComp></OrdersComp>}></Route>
    </Routes>
    


    </>
  )
}

export default App
