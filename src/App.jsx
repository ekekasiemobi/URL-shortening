import Footer from './components/footer'
import Nav from './components/nav'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='' element={<Nav />}/> */}
          <Route path='/' element={<Home />}/>
          {/* <Route path='' element={<Footer />}/> */}
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
