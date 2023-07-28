import Head from "./components/pages/Head";
import Home from "./components/pages/Home";

import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import { useState } from "react";
import Register from "./components/pages/Register";
import AddPublication from "./components/pages/AddPublication";
import Publications from "./components/pages/Publications";
import Publication from "./components/pages/Publication";

function App() {
  // const [login,setLogin] = useState(<Login/>)
  // setLogin(sessionStorage.length===0?<Login/>:<Account/>)
  let login = sessionStorage.length===0
  return (
    <div className="App">
      <Head/>
     
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/publications" element={<Publications />}/>

          <Route path="/login" element={login?<Login/>:<Account/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/addpublication" element={<AddPublication/>}/>
          <Route path="/publication" element={<Publication/>}/>
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
