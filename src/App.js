import "./App.css";
import { LandingPage } from "./Components/LandingPage"
import { Routes, Route } from "react-router-dom";
import { SignupPage } from "./Components/SignupPage";
import { EmailVerification } from "./Components/EmailVerification";
import { LoginPage } from "./Components/LoginPage";
import { Dashboard } from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/"
          element={<LandingPage />}
        />

        <Route exact path="/signup"
          element={<SignupPage />}
        />

        <Route exact path="/login"
          element={<LoginPage />}
        />

        <Route exact path="/forget-password"
          element={<ForgetPassword />}
        />

        <Route exact path="/users/:id/verify/:token"
          element={<EmailVerification />}
        />

        <Route exact path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>
    </div>
  );
}

export default App;

function ForgetPassword() {
  return (
    <div>
      <h1>Sorry working on it</h1>
    </div>
  );
}
