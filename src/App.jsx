import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./context/ContextProvider";
import { Homepage } from "./components/Homepage/Homepage";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Login } from "./components/forms/Login/Login";
import { Registration } from "./components/forms/Registration/Registration";
import { Toaster } from "react-hot-toast";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { AuthProvider } from "./context/AuthProvider";

const AppLayout = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/signin" || location.pathname === "/signup";
  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ContextProvider>
            <Toaster position="top-right" />
            <AppLayout />
          </ContextProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
