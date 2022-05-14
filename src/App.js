import './App.css';
// import {Route, Routes} from "react-router-dom"
import {Route, Routes} from 'react-router-dom'
// import your components for each route
import Home from './pages/Home'
import About from './pages/AboutStock'
import Stock from './pages/Stock'
import Dashboard from './pages/Dashboard'
import Nav from './components/Nav'

// begin the component 'App' - A function which returns JSX
function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Stock' element={<Stock />} />
      <Route path='/Dashboard' element={<Dashboard/>} />
    </div>
  );
}

export default App;
