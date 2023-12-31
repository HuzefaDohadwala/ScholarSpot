import { Route, Routes } from "react-router-dom";
import Resources from "../Components/Resources";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp1 from "../Components/SignUp1";
import SignUp2 from "../Components/SignUp2";
import StudentDashboard from "../Components/StudentDashboard";
import College from "../Components/College";
import Applied from "../Components/Applied";
import Analytics from "../Components/Analytics";
import VisaNPrep from "../Components/VisaNPrep";
import ScholarshipDetailPage from "../Components/ScholarshipDetailPage";
import EasyApplyForm from "../Components/EasyApplyForm";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/resource" element={<Resources />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup1" element={<SignUp1 />} />
      <Route path="/signup2" element={<SignUp2 />} />
      <Route path="/studentdashboard/user/:mongoId" element={<StudentDashboard />} />
      <Route path="/studentdashboard/:collegeId" element={<College />} />
      <Route path="/studentdashboard/applied" element={<Applied />} />
      <Route path="/studentdashboard/analytics" element={<Analytics />} />
      <Route path="/studentdashboard/visanprep" element={<VisaNPrep />} />
      <Route path="/scholarship-details/:collegeId" element={< ScholarshipDetailPage/>} />
      <Route path="/easy-apply-form" element={< EasyApplyForm />} />
      <Route path="/" element={<Home />} />
    </Routes>

    
  );
}

export default MainRoutes;
