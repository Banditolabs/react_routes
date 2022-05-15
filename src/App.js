import './App.css';
// import {Route, Routes} from "react-router-dom"
import {Route, Routes} from 'react-router-dom'
// import your components for each route
import Home from './pages/Home'
import About from './pages/About'
import Stock from './pages/Stock'
import Dashboard from './pages/Dashboard'
import Nav from './components/Nav'

// begin the component 'App' - A function which returns JSX
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/stocks/:symbol' element={<Stock />} />
      <Route path='/stocks' element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
