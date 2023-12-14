import { Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PersistLogin from "./utils/PersistLogin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AuhtLayout from "./utils/AuthLayout";

const App = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route path="/*" element={<Layout />}>
        <Route element={<PersistLogin />}>
          <Route index element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Route>

      {/* Public Routes */}
      <Route path="/*" element={<AuhtLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default App;
