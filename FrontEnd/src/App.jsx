import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import AgregarProducto from './routes/AgregarProducto'
import DetalleProducto from './routes/DetalleProducto'

function App() {

  return (
    <>
      <Navbar/>
      <main className='bg-secondary z-0 bg-opacity-25'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/agregar-producto" element={<AgregarProducto/>}/>
          <Route path="/producto/:id" element={<DetalleProducto/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
