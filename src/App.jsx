import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./components/Dashboard";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
