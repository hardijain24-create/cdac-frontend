import { Home, BookOpen, Heart, History, Settings, LogOut, LayoutDashboard, Users, GraduationCap } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // For admin users, show only Home option
  if (user?.role === 'admin') {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <span className="sidebar-logo">CDAC</span>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/admin" className="nav-item">
            <Home size={20} />
            <span>Home</span>
          </NavLink>
        </nav>
        <div className="sidebar-footer">
          <NavLink to="/profile" className="nav-item">
            <Settings size={20} />
            <span>Profile</span>
          </NavLink>
          <button onClick={handleLogout} className="nav-item logout-btn">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    );
  }

  // For students, show full navigation
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">CDAC</span>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-item">
          <Home size={20} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/videos" className="nav-item">
          <BookOpen size={20} />
          <span>My Courses</span>
        </NavLink>
        <NavLink to="/watchlist" className="nav-item">
          <Heart size={20} />
          <span>Watchlist</span>
        </NavLink>
        <NavLink to="/history" className="nav-item">
          <History size={20} />
          <span>History</span>
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <NavLink to="/settings" className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
        <button onClick={handleLogout} className="nav-item logout-btn">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
