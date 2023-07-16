import Head from "./components/pages/Head";
import Home from "./components/pages/Home";

import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import { useState } from "react";
import Register from "./components/pages/Register";

function App() {
  // const [login,setLogin] = useState(<Login/>)
  // setLogin(sessionStorage.length===0?<Login/>:<Account/>)
  let login = sessionStorage.length===0
  return (
    <div className="App">
      <Head/>
     
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={login?<Login/>:<Account/>} />
          <Route path="/register" element={<Register/>}/>
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
