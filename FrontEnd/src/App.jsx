import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import AgregarProducto from './routes/AgregarProducto'
import DetalleProducto from './routes/DetalleProducto'
import { useProductosStates } from './components/utils/globalContext'
import ListaProductos from './routes/ListaProductos'

function App() {
  const { state } = useProductosStates()
  return (
    <div className={`App ${state.theme}`}>
      <Navbar/>
      <main className='bg-secondary z-0 bg-opacity-25'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="admin/agregar-producto" element={<AgregarProducto/>}/>
          <Route path="producto/:id" element={<DetalleProducto/>}/>
          <Route path="admin/productos" element={<ListaProductos/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
