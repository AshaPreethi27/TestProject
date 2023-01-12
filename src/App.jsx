
import './App.css'
import Navbar from "./components/Navbar";
import LeftColumn from './components/LeftColumn';

import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg">
      <Navbar/>
      <div className='body-container'>
        <LeftColumn className="left-container" />
        <Dashboard className="middle-container" /> 
      
      </div>
    <Footer />
    </div>
  )
}

export default App
