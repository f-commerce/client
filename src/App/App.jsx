import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { AdminSignIn } from "../pages/AdminSignIn";
import { AdminDashboard } from "../pages/AdminDashboard";
import { ContactForm } from "../pages/ContactForm";
import { AuthProvider } from "../context/AuthContext";

import UserProfile from "../pages/UserProfile/UserProfile";
import Footer from "../components/particles/Footer";
import "./App.css";
import  { PrivateRoute,  AdminPrivateRoute } from "../Context/PrivateRoutes";



const App = () => {

  

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="/login" element={<SignIn />} />
          <Route path="/admin/login" element={<AdminSignIn />} />

          <Route path="/*" element={<NotFound />} />
          {/* // *-_-* -------------rutas protegidas en frontend ------------- *-_-* // */}
          <Route element={<AdminPrivateRoute isAllowed={false} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>

        

          <Route element={<PrivateRoute isAllowed={false} />}>
            <Route path="/user-profile" element={<UserProfile />} />
          </Route>
          {/* // *-_-* ------------- fin de rutas protegidas en frontend ------------- *-_-* // */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
