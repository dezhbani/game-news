import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#2e323d" highlightColor="#3c4155">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </SkeletonTheme >
    </>
  )
}

export default App;
