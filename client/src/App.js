import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Homepage from "./components/homepage/homepage"
import CreatePrescription from "./components/createprescription/createpres"
import UsePrescription from "./components/usepres/usepres"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path = "/" element={<Navigate to="/home" /> } />
        <Route path="/home" element = {<Homepage />} />

        <Route path="/createprescription" element={<CreatePrescription /> } /> 
        <Route path="/useprescription" element={<UsePrescription /> } /> 
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
