import './App.css';
import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import ReportPage from './pages/ReportPage';
import PatientsPage from './pages/PatientsPage';
import EmployeePage from './pages/EmployeePage';
import LoginPage from './pages/LoginPage';
import MedicalStaffPage from './pages/MedicalStaffPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<ReportPage/>}/>
      <Route path="/report" element={<ReportPage/>}/>
      <Route path="/Patients" element={<PatientsPage/>}/>
      <Route path="/Employee" element={<EmployeePage/>}/>
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="/MedicalStaff" element={<MedicalStaffPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
