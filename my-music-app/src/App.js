import './App.css';
import HomePage from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import {BrowserRouter as Router, Routes, Route } from  'react-router-dom';

function App() {
    return (
     <Router>
        <div>
          <Routes>
              <Route path='/' exact element={<HomePage />}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/menu' element={<Menu />}/>
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;