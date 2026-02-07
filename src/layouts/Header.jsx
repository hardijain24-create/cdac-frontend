import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Settings, Bell, User, LogOut, HelpCircle } from 'lucide-react';

function Header() {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const accountDropdownRef = useRef(null);
  const navigate = useNavigate();

  const accountMenuItems = [
    { icon: User, label: 'Profile', action: () => { navigate('/profile'); setShowAccountMenu(false); } },
    { icon: Settings, label: 'Settings', action: () => { navigate('/settings'); setShowAccountMenu(false); } },
    { icon: HelpCircle, label: 'Help', action: () => { navigate('/help'); setShowAccountMenu(false); } },
    { icon: LogOut, label: 'Logout', action: () => { navigate('/login'); setShowAccountMenu(false); } },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
        setShowAccountMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome, Vedang!</h1>
        <p className="welcome-subtitle">Revolutionize your future with CDAC</p>
      </div>
      
      <div className="header-actions">
        <div className="search-bar">
          <Search className="search-icon" size={18} />
          <input type="text" placeholder="Search course/video/playlist" />
        </div>
        
                
        <button className="icon-button">
          <Bell size={20} />
        </button>
        
        <div className="account-dropdown" ref={accountDropdownRef}>
          <button 
            className="icon-button account-button"
            onClick={() => setShowAccountMenu(!showAccountMenu)}
          >
            <User size={20} />
          </button>
          
          {showAccountMenu && (
            <div className="account-menu">
              {accountMenuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    className="account-menu-item"
                    onClick={item.action}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
