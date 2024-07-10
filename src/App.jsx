import "./App.css";
import AdminLogin from "./admin/AdminLogin";
import CitizenRagistration from "./citezen/CitizenRagistration";
import CitizenLogin from "./citezen/CitizenLogin";
import CounsellorDetail from "./counsellors/CounsellorDetail";
import CounsellorLogin from "./counsellors/CounsellorsLogin";
import CounsellorRagistration from "./counsellors/CounsellorsRagistration";
import Footer from "./componants/Footer";
import Navbar from "./componants/Navbar";
import CitizenDetail from "./citezen/CitizenDetail";
import ComplaintForm from "./citezen/ComplaintForm";
import ComplaintView from "./componants/ComplaintView";
import { Route,Routes } from "react-router-dom";
import FunctionalityBoxPage from "./componants/FunctionalityBoxPage";
import ComplaintCards from "./componants/ComplaintCards";
import { useSelector } from 'react-redux';
import WelcomePage from "./componants/WelcomePage";
import AboutUs from "./componants/AboutUs";
import Protected from "./componants/Protected";

function App() {


  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/CitizenLogin" element={<CitizenLogin/>} />
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/CounsellorLogin" element={<CounsellorLogin/>}/>
      <Route path="/CitizenRagistration" element={<CitizenRagistration/>}/>
      <Route path="/CounsellorRagistration" element={<CounsellorRagistration/>}/>
      <Route path="/" element={isLoggedIn ? <FunctionalityBoxPage/>: <WelcomePage/>}/>
      <Route path="/CitizenDetail" element={<Protected Componant={CitizenDetail} />}/>
      <Route path="/Complaints" element={<Protected Componant={ComplaintView} />}/>
      <Route path="/ComplaintForm" element={<Protected Componant={ComplaintForm} />}/>
      <Route path="/ViewComplaints" element={<Protected Componant={ComplaintCards} />}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
    </Routes>
    {/* <CitizenRagistration/> */}
    {/* <CounsellorDetail/> */}
    {/* <CitizenDetail/> */}
    {/* <ComplaintForm/> */}
    {/* <CitizenLogin/> */}
    {/* <CounsellorRagistration/> */}
    <Footer/>
    </>
  );
}

export default App;
