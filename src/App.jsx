import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./context/ContextProvider";
import { Homepage } from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Login } from "./components/forms/Login/Login";
import { Registration } from "./components/forms/Registration/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
