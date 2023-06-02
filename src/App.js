import "./App.css";
import { useEffect, useState, useReducer, createContext } from "react";
import axios from "axios";
import LoginLayout from "./Pages/Login/LoginLayout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Auth/Login";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
export const AppContext = createContext(null);

function App() {
  const [allUsers, setAllUsers] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setAllUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ allUsers, setCurrentUser, currentUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginLayout />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="dashboard" element={<DashboardLayout />}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
