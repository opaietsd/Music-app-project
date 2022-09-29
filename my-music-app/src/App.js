import './App.css';
import HomePage from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Popular from './Components/Popular';
import Evolve from './Components/Evolve'
import {BrowserRouter as Router, Routes, Route } from  'react-router-dom';


function App() {
    return (
     <Router>
        <div>
          <Routes>
              <Route path='/' exact element={<HomePage />}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/menu' element={<Menu />}/>
              <Route path='/popular' element={<Popular />}/>
              <Route path='/evolve' element={<Evolve />}/>
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;