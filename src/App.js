
import './App.css';
import Header from './components/Header';
import { Routes, Route, } from "react-router-dom";

import Login from './components/Login';
import Orders from './components/Orders';
import About from './components/About';
import Home from './components/Home';


function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/orders' element={<Orders></Orders>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>

      </Routes>


    </div>
  );
}

export default App;
