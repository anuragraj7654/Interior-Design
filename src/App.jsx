import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import OurServices from './Pages/OurServices';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<OurServices/>}></Route>
      </Routes>
      </Router>     
    </div>
  );
}

export default App;
