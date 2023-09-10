import { Navbar, Home, Footer, Courses, InCourses, Test } from "./index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="font-Inter bg-Solitude">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:namelink" element={<InCourses />} />
          <Route path="/courses/:namelink/test" element={<Test />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
