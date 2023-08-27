import {
  Navbar,
  Home,
  Footer,
  Courses,
} from "./index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="font-Inter bg-Solitude">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses/>}/> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
