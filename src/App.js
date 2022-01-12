import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponent/Home/Home';
import StudentDetails from './Pages/StudentDetails/StudentDetails';
import EditForm from './Pages/StudentDetails/EditForm';
import AddStudent from './Pages/AddStudent/AddStudent';
import ManageStudent from './Pages/ManageAllStudent/ManageStudent';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/student/:id" element={<StudentDetails></StudentDetails>}></Route>
       <Route path="/editForm/:id" element={<EditForm></EditForm>}></Route>
       <Route path="/addStudent" element={<AddStudent></AddStudent>}></Route>
       <Route path="/allStudent" element={<ManageStudent></ManageStudent>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
