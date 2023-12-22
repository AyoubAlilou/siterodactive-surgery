import Contact from './Pages/Contact'
import Index from './Pages/Index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<index />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Index />
      <Contact />
    </div>
  )
}

export default App
