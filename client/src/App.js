import logo from "./logo.svg";
import "./App.css";
import UserRoutes from "./Routes/UserRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<UserRoutes />} />
      <Route element={<PrivateRoutes />}>
        <Route exact path="/admin/*" element={<AdminRoutes />} />
      </Route>
    </Routes>
  );
}

export default App;
