import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";

// Import styles
import "./styles/scss/main.scss";
import "./styles/scss/layout.scss";

// Import pages
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import RegisterBusinessPage from "./pages/auth/RegisterBusinessPage";
import RegisterTeamMemberPage from "./pages/auth/RegisterTeamMemberPage";
import RegistrationSuccessPage from "./pages/auth/RegistrationSuccessPage";
import DashboardPage from "./pages/DashboardPage";
import SalesPage from "./pages/SalesPage";
import RepairsPage from "./pages/RepairsPage";
import TeamMembers from "./components/TeamMembers";
import TeamMemberProfile from "./pages/TeamMemberProfile";
// import SupportPage from "./pages/SupportPage";
import Reviews from "./components/Reviews";
import AccountPage from "./pages/AccountPage";

// Import components
import ProtectedRoute from "./components/common/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import SupportPage from "./pages/SupportPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          />
          <Route path="/register-business" element={<RegisterBusinessPage />} />
          <Route path="/register-team" element={<RegisterTeamMemberPage />} />
          <Route
            path="/registration-success"
            element={<RegistrationSuccessPage />}
          />

          {/* Dashboard Routes */}
          <Route
            element={
              // <ProtectedRoute>
               
              // </ProtectedRoute>
              <DashboardLayout />
            }
          >
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/repairs" element={<RepairsPage />} />
            <Route path="/team-members" element={<TeamMembers />} />
            <Route path="/team-members/:id" element={<TeamMemberProfile />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/account" element={<AccountPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Provider>
  );
};

export default App;
