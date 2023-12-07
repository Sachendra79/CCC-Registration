import { Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Faculty from './Pages/Faculty';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App flex flex-col">
      
  <div className=''><Navbar/></div>

<div className='content  p-6 overflow-y-auto'>

   <Routes>
  
   <Route path="/" element={<Home/>} />
   <Route  path='about' element={<About/>}  />
   <Route  path='/faculty' element={<Faculty/>} />
   <Route path='/register' element={<Register/>} />
  

   </Routes>
   </div>

    </div>
  );
}

export default App;
