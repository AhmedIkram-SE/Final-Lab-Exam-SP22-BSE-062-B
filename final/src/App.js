import "./App.css";
import ApiFetch from "./components/ApiFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Dragons from "./components/Dragons";
import Missions from "./components/Missions";
import MyProfile from "./components/MyProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Dragons" element={<Dragons />} />
            <Route path="/Missions" element={<Missions />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
