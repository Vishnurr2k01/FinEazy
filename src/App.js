import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Details from './components/Details'
import Create from './components/Create';


function App() {
  return (
    <div className="App">


      <Navbar />
      <div className="pt-16">
       <Create/>
      </div>

    </div>
  );
}

export default App;
