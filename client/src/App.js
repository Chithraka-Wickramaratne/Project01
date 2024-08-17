import './App.css';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as router, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';
import InsertPageReport from './pages/InsertPageReport';
import SearchPage from './pages/SearchPage';
import UpdatePageReport from './pages/UpdatePageReport';
import DeletePage from './pages/DeletePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="/home" element={<HomePage />}/>
      <Route path="/report" element={<ReportPage />}/>
      <Route path="/insertReport" element={<InsertPageReport />}/>
      <Route path="/searchPage" element={<SearchPage />}/>
      <Route path="/updatePageReport" element={<UpdatePageReport />}/>
      <Route path="/deletePage" element={<DeletePage />}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;