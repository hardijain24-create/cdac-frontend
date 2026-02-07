import { Home, Video, History, Bookmark } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'courses', label: 'My Courses', icon: Video, path: '/videos' },
    { id: 'watchlist', label: 'Watchlist', icon: Bookmark, path: '/watchlist' },
    { id: 'history', label: 'History', icon: History, path: '/history' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">CDAC</div>
      </div>
      <nav className="nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <Icon className="nav-icon" size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
