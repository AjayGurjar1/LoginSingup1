import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Login from "./Components/LoginSignup/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/LoginSignup/Signup";
import Profile from "./Components/LoginSignup/Profile";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
