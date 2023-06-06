import "./App.css";
import { useEffect, useState, useReducer, createContext } from "react";
import axios from "axios";
import LoginLayout from "./Pages/Login/LoginLayout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Auth/Login";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
import Tasks from "./Components/Tasks/Tasks";
import treeImg from "./Assets/backgroundImgs/albero.jpg";
import carImg from "./Assets/backgroundImgs/auto.png";
import Loading from "./Components/Loading/Loading";
import fieldImg from "./Assets/backgroundImgs/campo.jpg";
import cartImg from "./Assets/backgroundImgs/cartoon.jpg";
import defaultImg from "./Assets/backgroundImgs/default.png";
import desertImg from "./Assets/backgroundImgs/desert.png";
import lhImg from "./Assets/backgroundImgs/faro.jpg";
import greenImg from "./Assets/backgroundImgs/green.png";
import islandImg from "./Assets/backgroundImgs/island.jpg";
import uniqId from "uniqid";
export const AppContext = createContext(null);

function App() {
  const [allUsers, setAllUsers] = useState("");
  const [catId, setCatId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [options, setOptions] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [selectedCatId, setSelectedCatId] = useState("");
  const [selectedDefaultCatId, setSelectedDefaultCatId] = useState("");

  const backgroundImages = {
    colors: [
      { hex: "#866fbf", id: uniqId() },
      { hex: "#d1b1da", id: uniqId() },
      { hex: "#ea5f7d", id: uniqId() },
      { hex: "#579e39", id: uniqId() },
      { hex: "#24c16e", id: uniqId() },
      { hex: "#999999", id: uniqId() },
      { hex: "#9fc5e8", id: uniqId() },
      { hex: "#db9bea", id: uniqId() },
      { hex: "#f7e8fa", id: uniqId() },
      { hex: "#e69138", id: uniqId() },
      { hex: "#3d85c6", id: uniqId() },
      { hex: "#fa1212", id: uniqId() },
      { hex: "#4800ff", id: uniqId() },
      { hex: "#ffc008", id: uniqId() },
      { hex: "#947373", id: uniqId() },
      { hex: "#6a8196", id: uniqId() },
    ],
    imgs: [
      { url: treeImg, id: uniqId() },
      { url: carImg, id: uniqId() },
      { url: fieldImg, id: uniqId() },
      { url: cartImg, id: uniqId() },
      { url: defaultImg, id: uniqId() },
      { url: desertImg, id: uniqId() },
      { url: lhImg, id: uniqId() },
      { url: greenImg, id: uniqId() },
      { url: islandImg, id: uniqId() },
    ],
  };
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setAllUsers(response.data);
    });
  }, []);
  const [catIdForBg, setCatIdForBg] = useState("");

  const [completed, setCompleted] = useState([]);
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          allUsers,
          setCurrentUser,
          currentUser,
          options,
          setOptions,
          catId,
          setCatId,
          selectedCategory,
          setSelectedCategory,
          setSelectedCatId,
          selectedCatId,
          selectedDefaultCatId,
          setSelectedDefaultCatId,
          backgroundImages,
          setCatIdForBg,
          catIdForBg,
          completed,
          setCompleted,
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
