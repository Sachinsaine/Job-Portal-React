import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./components/Homepage/Homepage";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Login } from "./components/forms/Login/Login";
import { Registration } from "./components/forms/Registration/Registration";
import { Toaster } from "react-hot-toast";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { AuthProvider } from "./context/AuthProvider";
import { JobsPage } from "./components/JobsPage/JobsPage";
import { AddJobs } from "./components/forms/AddJobs/AddJobs";
import { Myapplication } from "./components/MyApplications/MyApplictions";
import { JobContextProvider } from "./context/JobContextProvider";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import CareersPage from "./components/Careers/Careers";
import AboutPage from "./components/Apout/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <JobContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Registration />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/jobspage" element={<JobsPage />} />
                <Route path="/postjobs" element={<AddJobs />} />
                <Route path="/myapplicatoins" element={<Myapplication />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Route>
            </Routes>
            <Footer />
            <Toaster position="top-right" />
          </JobContextProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
