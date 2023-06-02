import "./App.css";
import { useEffect, useState, useReducer, createContext } from "react";
import axios from "axios";
import LoginLayout from "./Pages/Login/LoginLayout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Auth/Login";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
import Tasks from "./Components/Tasks/Tasks";
import { BsSun } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
export const AppContext = createContext(null);

function App() {
  const [allUsers, setAllUsers] = useState("");
  const [catId, setCatId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [currentUser, setCurrentUser] = useState({});
  const [selectedCatId, setSelectedCatId] = useState("");
  const [defaultCategory, setDefaultCategory] = useState([
    { title: "La mia giornata", icon: BsSun, background: null },
    { title: "Importante", icon: AiOutlineStar, background: null },
    { title: "Pianificato", icon: BiBookContent, background: null },
    { title: "Assegnate a me", icon: BiUser, background: null },
    { title: "Attività", icon: FiHome, background: null },
  ]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setAllUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          allUsers,
          setCurrentUser,
          currentUser,
          defaultCategory,
          setDefaultCategory,
          catId,
          setCatId,
          selectedCategory,
          setSelectedCategory,
          setSelectedCatId,
          selectedCatId,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginLayout />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route path="tasks" element={<Tasks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
