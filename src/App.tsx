import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Propsdata from './Components/Propsdata';
import StudentInformation from './Components/StudentInformation';

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/propsdata" element={<Propsdata />} />
                <Route path="/student-information" element={<StudentInformation />} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
