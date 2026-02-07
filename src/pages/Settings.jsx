import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Bell, Shield, Palette, Moon, Sun } from 'lucide-react';

function Settings() {
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useState('dark');

  const handleSettingClick = (setting) => {
    console.log('Opening setting:', setting);
    
    if (setting === 'profile') {
      navigate('/profile');
    } else if (setting === 'privacy') {
      // Handle privacy settings
      console.log('Opening privacy settings');
    } else if (setting === 'notifications') {
      // Handle notification settings
      console.log('Opening notification settings');
    } else if (setting === 'theme') {
      // Toggle between dark and light themes
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setCurrentTheme(newTheme);
      console.log('Theme changed to:', newTheme);
      // Apply theme to document
      document.documentElement.setAttribute('data-theme', newTheme);
    } else if (setting === 'language') {
      // Handle language settings
      console.log('Opening language settings');
      alert('Language settings coming soon! Currently only English is supported.');
    } else {
      console.log('Unknown setting:', setting);
    }
  };

  const getThemeIcon = () => {
    return currentTheme === 'dark' ? <Moon size={20} /> : <Sun size={20} />;
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="settings-container">
          <h2 className="page-title">Settings</h2>
          
          <div className="settings-sections">
            {/* Account Settings */}
            <div className="settings-section">
              <h3 className="settings-section-title">Account Settings</h3>
              <div className="settings-group">
                <div 
                  className="setting-item"
                  onClick={() => handleSettingClick('profile')}
                >
                  <User size={20} className="setting-icon" />
                  <div className="setting-info">
                    <label>Profile Information</label>
                    <p>Update your personal details</p>
                  </div>
                </div>
                <div 
                  className="setting-item"
                  onClick={() => handleSettingClick('privacy')}
                >
                  <Shield size={20} className="setting-icon" />
                  <div className="setting-info">
                    <label>Privacy & Security</label>
                    <p>Manage your privacy settings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="settings-section">
              <h3 className="settings-section-title">Notifications</h3>
              <div className="settings-group">
                <div 
                  className="setting-item"
                  onClick={() => handleSettingClick('notifications')}
                >
                  <Bell size={20} className="setting-icon" />
                  <div className="setting-info">
                    <label>Push Notifications</label>
                    <p>Manage notification preferences</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appearance Settings */}
            <div className="settings-section">
              <h3 className="settings-section-title">Appearance</h3>
              <div className="settings-group">
                <div 
                  className="setting-item"
                  onClick={() => handleSettingClick('theme')}
                >
                  <div className="theme-toggle">
                    {getThemeIcon()}
                  </div>
                  <div className="setting-info">
                    <label>Theme</label>
                    <p>Current: {currentTheme === 'dark' ? 'Dark' : 'Light'} Mode</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
