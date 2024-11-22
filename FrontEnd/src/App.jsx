import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './routes/Home'

function App() {

  return (
    <>
      <Navbar/>
      <main className='bg-secondary z-0 bg-opacity-25'>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
