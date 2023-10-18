import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";
import LoginPage from "./Pages/Login/Login";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from "./Component/Routes/PrivateRoute";

function App() { 
 

  return (
    <>
    <ToastContainer />
    <Routes>
        <Route path="/" element={
        <ProtectedRoute>
        <Sidebar />
        </ProtectedRoute>
        } />
        <Route path="/login" element={<LoginPage />} />
      
    </Routes>
    </>
  );
}

export default App;
