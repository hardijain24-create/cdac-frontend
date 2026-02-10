import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";

/* =======================
   AUTH CONTEXT
======================= */
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

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
import AdminDashboard from "./pages/AdminDashboard";
import AdminProfile from "./pages/AdminProfile";
import StudentProfile from "./pages/StudentProfile";
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

// Profile component that renders different profiles based on user role
function ProfileRoutes() {
  const { user } = useAuth();
  
  if (user?.role === 'admin') {
    return <AdminProfile />;
  } else {
    return <StudentProfile />;
  }
}

/* =======================
   MAIN APP
======================= */
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* ---------- AUTH ROUTES ---------- */}
          <Route path="/login" element={<StudentLogin />} />
          <Route path="/generate-otp" element={<GenerateOTP />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ---------- APP ROUTES ---------- */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <AdminDashboard />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/videos"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Videos />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/videos/list"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <VideoList />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/videos/:id"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <VideoList />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/watchlist"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Watchlist />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <History />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <ProfileRoutes />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Settings />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/help"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Help />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/feedback"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Feedback />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          {/* ---------- FALLBACK ---------- */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
