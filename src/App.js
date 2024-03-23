import './styles.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './navbar.styles.css';
import Home from './components/home';
import Products from './components/products';
import Description from './components/description';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/description' element={<Description />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
