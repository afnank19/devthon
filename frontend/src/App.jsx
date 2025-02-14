import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/User/UserProfile";
import Course from "./pages/User/Course";
import Certificate from "./pages/User/Certificate";
import UserHomePage from "./pages/User/UserHomePage";
// import AIVocal from "./pages/AIVocal";
import InstrProfile from "./pages/Instructor/InstrProfile";
import CreateCourse from "./pages/Instructor/CreateCourse";
import AddLesson from "./pages/Instructor/AddLesson";
import CoursePage from "./pages//Instructor/CoursePage";
import EditCourse from "./pages/Instructor/EditCourse";
import AIVocal from "./pages/AIVocal";
import InstructorFeedback from "./pages/Instructor/InstructorFeedback";


function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Users */}
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/course" element={<Course />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/userHomePage" element={<UserHomePage />} />
        {/* Instructor */}
        <Route path="/instructorProfile" element={<InstrProfile />} />
        <Route path="/createCourse" element={<CreateCourse />} />
        <Route path="/addLesson" element={<AddLesson />} />
        <Route path="/coursePage" element={<CoursePage />} />
        <Route path="/editCourse" element={<EditCourse />} />
        <Route path="/instructorFeedback" element={<InstructorFeedback />} />

        {/* Misc */}
        <Route path="/aiVocal" element={<AIVocal />} />
        
      </Routes>
    </>
  );
}

export default App;
