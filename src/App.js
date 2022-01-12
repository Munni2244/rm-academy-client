import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponent/Home/Home';
import StudentDetails from './Pages/StudentDetails/StudentDetails';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/student/:id" element={<StudentDetails></StudentDetails>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
