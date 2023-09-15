import { Route, Routes } from "react-router-dom";
import Resources from "../Components/Resources";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp1 from "../Components/SignUp1";
import SignUp2 from "../Components/SignUp2";
import StudentDashboard from "../Components/StudentDashboard";
import College from "../Components/College";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/resource" element={<Resources />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup1" element={<SignUp1 />} />
      <Route path="/signup2" element={<SignUp2 />} />
      <Route path="/studentdashboard/*" element={<StudentDashboard />} />
      <Route path="/studentdashboard/:collegeId" element={<College />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;
