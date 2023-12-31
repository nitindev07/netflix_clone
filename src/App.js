import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Singup from "./pages/Singup";


function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<Singup/>}/>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
