import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./context/ContextProvider";
import { Homepage } from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Login } from "./components/forms/Login/Login";
import { Registration } from "./components/forms/Registration/Registration";
import { Toaster } from "react-hot-toast";

const AppLayout = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/registration";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Toaster position="top-right" />
          <AppLayout />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
