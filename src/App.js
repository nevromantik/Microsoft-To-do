import "./App.css";
import { useEffect, useState, useReducer, createContext } from "react";
import axios from "axios";
import LoginLayout from "./Pages/Login/LoginLayout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login/Login";
export const AppContext = createContext(null);

function App() {
  const [allUsers, setAllUsers] = useState("");
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    axios.get("http://localhost:4000/users").then((response) => {
      setAllUsers(response.data);
    });
    
  }, []);
  
 
  return (
    <div className="App">
      <AppContext.Provider value={{ allUsers,setSelectedUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginLayout/>}>
              <Route index element={<Login/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
