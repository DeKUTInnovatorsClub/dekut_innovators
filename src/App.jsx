import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Events from './pages/Events'
import Blog from './pages/Blogs'
import ContactUs from './pages/ContactUs'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='events' element={<Events />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact-us' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
