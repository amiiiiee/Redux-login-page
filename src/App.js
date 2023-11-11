import { Route, Routes } from "react-router-dom";
import Signup from "./Componets/Signup";
import Login from "./Componets/Login";
import Home from "./Componets/Home";


function App() {
  return (
    <div >
     <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />

     </Routes>
    </div>
  );
}

export default App;
