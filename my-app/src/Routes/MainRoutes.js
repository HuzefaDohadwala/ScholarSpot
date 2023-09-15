import { Route, Routes } from "react-router-dom";
import Resources from "../Components/Resources";
import Home from "../Components/Home";
import Login from "../Components/Login";

function MainRoutes() {
    return(
        
        <Routes>
        <Route path="/resource" element={<Resources/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        
        </Routes>
    )
}

export default MainRoutes;
