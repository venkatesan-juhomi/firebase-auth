import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { PublicRoute } from "./routes/PublicRoute";
import { PrivateRoute } from "./routes/PrivateRoute";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" isAuth={isAuth}>
          <Login/>
        </PublicRoute>
        <PrivateRoute path="/" isAuth={isAuth}>
          <ProtectedRoutes/>
        </PrivateRoute>
      </Switch>
    </Router>    
  );
}

export default App;