import { Route, Routes } from "react-router-dom";
import Resources from "../Components/Resources";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp1 from "../Components/SignUp1";
import SignUp2 from "../Components/SignUp2";
import StudentDashboard from "../Components/StudentDashboard";
import Applied from "../Components/Applied";
import VisaNPrep from "../Components/VisaNPrep";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/resource" element={<Resources />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup1" element={<SignUp1 />} />
      <Route path="/signup2" element={<SignUp2 />} />
      <Route path="/studentdashboard" element={<StudentDashboard/>} />
      <Route path="/studentdashboard/applied" element={<Applied/>}/>
      <Route path="/studentdashboard/analytics" element={<Applied/>}/>
      <Route path="/studentdashboard/visanprep" element={<VisaNPrep/>}/>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;
