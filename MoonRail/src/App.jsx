import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Homes from './pages/Homes'
import Offers from './pages/Offers';
function App() {
  return (
   <Router>
    <Topbar />
    <Navbar />
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path='/offers' element={<Offers />}/>
    </Routes> 
   </Router>
  )
}
export default App