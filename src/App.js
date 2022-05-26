import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Create from './components/Create'
import Navbar from './components/Navbar';
import Details from './pages/Details';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
    
        <Navbar/>
        <div className="pt-16">
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />

          <Route path="/create" element={<Create/>} />
      </Routes>
        </div>
      
    </div>
  )
}


export default App;
