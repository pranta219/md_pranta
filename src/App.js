import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import HireMe from './pages/HireMe/HireMe';
import Home from './pages/Home/Home/Home';
import Projects from './pages/Projects/Projects';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/hire' element={<HireMe></HireMe>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
