import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" replace={true} />;
}

// const Logout = () => {
//   const navigate = useNavigate();
//   localStorage.clear();
//   navigate("login/");
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<RegisterAndLogout />} />
        <Route path="logout/" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
