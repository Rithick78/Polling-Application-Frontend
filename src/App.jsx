import { Route, Routes } from "react-router-dom"
import Header from "./pages/header/Header"
import Login from "./pages/auth/login/Login"
import Signup from "./pages/auth/signup/Signup"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/register" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
