import { Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PersistLogin from "./utils/PersistLogin";

const App = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route path="/*" element={<Layout />}>
        <Route element={<PersistLogin />}>
          <Route index element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Route>

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
