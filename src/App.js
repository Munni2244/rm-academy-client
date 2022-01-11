import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponent/Home/Home';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;