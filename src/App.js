import './styles.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './navbar.styles.css';
import Home from './components/home';
import Products from './components/products';
import Description from './components/description';
import NavBar from './components/NavBar';
import Checkout from './components/checkout';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/description' element={<Description />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>  
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
