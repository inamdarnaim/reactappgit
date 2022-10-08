import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route index path='about' element={<About />}></Route>
        <Route index path='contact' element={<Contact />}></Route>
        <Route index path='gallery' element={<Gallery />}></Route>
        <Route index path='plans' element={<Plans />}></Route>
        <Route index path='trainers' element={<Trainers />}></Route>
        <Route index path='*' element={<NotFound />} gg='ff'></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
