import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";

/* =======================
   AUTH PAGES
======================= */
import StudentLogin from "./auth/StudentLogin";
import GenerateOTP from "./auth/GenerateOTP";
import VerifyOTP from "./auth/VerifyOTP";
import ForgotPassword from "./auth/ForgotPassword";

/* =======================
   LAYOUT
======================= */
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

/* =======================
   APP PAGES
======================= */
import Dashboard from "./pages/Dashboard";
import Videos from "./pages/Videos";
import VideoList from "./pages/VideoList";
import Watchlist from "./pages/Watchlist";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Feedback from "./pages/Feedback";

/* =======================
   APP LAYOUT WRAPPER
======================= */
function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">
        <Header />
        <div className="app-content">{children}</div>
      </div>
    </div>
  );
}

/* =======================
   MAIN APP
======================= */
export default function App() {
  return (
    <Router>
      <Routes>
        {/* ---------- AUTH ROUTES ---------- */}
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/generate-otp" element={<GenerateOTP />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ---------- APP ROUTES ---------- */}
        <Route
          path="/"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />

        <Route
          path="/videos"
          element={
            <AppLayout>
              <Videos />
            </AppLayout>
          }
        />

        <Route
          path="/videos/list"
          element={
            <AppLayout>
              <VideoList />
            </AppLayout>
          }
        />

        <Route
          path="/videos/:id"
          element={
            <AppLayout>
              <VideoList />
            </AppLayout>
          }
        />

        <Route
          path="/watchlist"
          element={
            <AppLayout>
              <Watchlist />
            </AppLayout>
          }
        />

        <Route
          path="/history"
          element={
            <AppLayout>
              <History />
            </AppLayout>
          }
        />

        <Route
          path="/profile"
          element={
            <AppLayout>
              <Profile />
            </AppLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <AppLayout>
              <Settings />
            </AppLayout>
          }
        />

        <Route
          path="/help"
          element={
            <AppLayout>
              <Help />
            </AppLayout>
          }
        />

        <Route
          path="/feedback"
          element={
            <AppLayout>
              <Feedback />
            </AppLayout>
          }
        />

        {/* ---------- FALLBACK ---------- */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
