import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';
import { SignupDataProvider } from './Components/SignUpDataContext';  // adjust the path

function App() {
  return (
    <>
    <Navbar/>
    <MainRoutes/>
    <Footer/>
    </>

  );
}

export default App;
