import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path"/" element={<></>} />
      <Navbar />
      <div className="pt-16">
        {/* <Home /> */}
        <Details />
      </div>
      </Routes>
    </div>
  );
}

export default App;
