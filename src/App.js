import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

import Id from './Singlemovie';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Singlemovie from './Singlemovie';
import Genre from './Genre';







function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>

     <Route path="/" element={<Home/>}></Route>
     <Route path="/Id/:id" element={<Singlemovie/>}></Route>
     <Route path="/Genre/:value" element={<Genre/>}></Route>
     

     



    
    
    
      </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
