import "./App.css";
import Navbar from "./components/Navbar";
import PostJob from "./components/Postjob";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import MyCandidates from "./components/MyCandidates";
import MyJobs from "./components/MyJobs";

function App() {
  return (
    <div className="bg">
       <Navbar />
      <Routes>
        {/* <Route path="/postjob" element={<PostJob />} /> */}
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route
          path="/dashboard/analytics"
          element={<Analytics />}
          className="middle-container"
        />
        <Route
          path="/dashboard/candidates"
          element={<MyCandidates />}
          className="middle-container"
        />
        <Route
          path="/dashboard/myjobs"
          element={<MyJobs />}
          className="middle-container"
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
