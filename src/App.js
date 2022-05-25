import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Details from './components/Details'



function App() {
  return (
    <div className="App">


      <Navbar />
      <div className="pt-16">
        <Details/>
      </div>

    </div>
  );
}

export default App;
