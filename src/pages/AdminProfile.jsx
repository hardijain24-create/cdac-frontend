import { useState } from 'react';
import { User, Shield, Settings, Bell, Database, Key } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function AdminProfile() {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('personal');

  const adminSettings = {
    personal: {
      title: 'Personal Information',
      icon: User,
      fields: [
        { label: 'Name', value: 'Administrator', type: 'text' },
        { label: 'Email', value: 'admin@cdac.edu', type: 'email' },
        { label: 'Role', value: 'System Administrator', type: 'text' },
        { label: 'Department', value: 'CDAC Management', type: 'text' }
      ]
    },
    security: {
      title: 'Security Settings',
      icon: Shield,
      fields: [
        { label: 'Two-Factor Authentication', value: 'Enabled', type: 'toggle' },
        { label: 'Session Timeout', value: '30 minutes', type: 'select' },
        { label: 'Login Alerts', value: 'Enabled', type: 'toggle' },
        { label: 'Password Policy', value: 'Strong (8+ chars)', type: 'text' }
      ]
    },
    notifications: {
      title: 'Notification Preferences',
      icon: Bell,
      fields: [
        { label: 'Email Notifications', value: 'All', type: 'select' },
        { label: 'System Alerts', value: 'Critical only', type: 'select' },
        { label: 'Student Activities', value: 'Daily digest', type: 'select' },
        { label: 'Upload Notifications', value: 'Real-time', type: 'toggle' }
      ]
    },
    system: {
      title: 'System Configuration',
      icon: Settings,
      fields: [
        { label: 'Platform Version', value: 'v2.1.0', type: 'text' },
        { label: 'Database Status', value: 'Connected', type: 'status' },
        { label: 'Storage Used', value: '2.3 GB / 10 GB', type: 'progress' },
        { label: 'Active Users', value: '16 / 50', type: 'text' }
      ]
    },
    database: {
      title: 'Database Management',
      icon: Database,
      fields: [
        { label: 'Last Backup', value: '2024-02-10 02:30', type: 'text' },
        { label: 'Auto Backup', value: 'Daily at 2:00 AM', type: 'text' },
        { label: 'Storage Location', value: 'MongoDB Cloud', type: 'text' },
        { label: 'Export Data', value: 'Available', type: 'button' }
      ]
    },
    api: {
      title: 'API Configuration',
      icon: Key,
      fields: [
        { label: 'API Key', value: 'sk-********************************', type: 'password' },
        { label: 'Webhook URL', value: 'https://api.cdac.edu/webhook', type: 'url' },
        { label: 'Rate Limit', value: '1000 requests/hour', type: 'text' },
        { label: 'API Status', value: 'Active', type: 'status' }
      ]
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'toggle':
        return (
          <div className="toggle-switch">
            <span className="toggle-value">{field.value}</span>
            <label className="toggle-label">
              <input type="checkbox" defaultChecked={field.value === 'Enabled'} />
              <span className="toggle-slider"></span>
            </label>
          </div>
        );
      case 'select':
        return (
          <select className="form-select" defaultValue={field.value}>
            {field.label === 'Session Timeout' && (
              <>
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
              </>
            )}
            {field.label === 'Email Notifications' && (
              <>
                <option>All</option>
                <option>Important only</option>
                <option>Daily digest</option>
                <option>Disabled</option>
              </>
            )}
            {field.label === 'Student Activities' && (
              <>
                <option>Real-time</option>
                <option>Daily digest</option>
                <option>Weekly summary</option>
                <option>Disabled</option>
              </>
            )}
          </select>
        );
      case 'progress':
        return (
          <div className="progress-field">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '23%' }}></div>
            </div>
            <span className="progress-text">{field.value}</span>
          </div>
        );
      case 'status':
        return (
          <div className="status-field">
            <span className={`status-indicator ${field.value.toLowerCase()}`}></span>
            <span>{field.value}</span>
          </div>
        );
      case 'button':
        return (
          <button className="export-btn">
            Export Database
          </button>
        );
      case 'password':
        return (
          <div className="password-field">
            <span>•••••••••••</span>
            <button className="change-btn">Change</button>
          </div>
        );
      default:
        return <input type="text" value={field.value} readOnly className="form-input" />;
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="profile-header">
          <h1 className="page-title">Admin Profile</h1>
          <p className="profile-subtitle">Manage your administrator account and system settings</p>
        </div>

        <div className="profile-layout">
          {/* Sidebar Navigation */}
          <div className="profile-sidebar">
            {Object.entries(adminSettings).map(([key, section]) => (
              <button
                key={key}
                className={`sidebar-item ${activeSection === key ? 'active' : ''}`}
                onClick={() => setActiveSection(key)}
              >
                <section.icon size={18} />
                <span>{section.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="profile-content">
            <div className="settings-section">
              <h2 className="settings-title">
                {adminSettings[activeSection].icon && <adminSettings[activeSection].icon size={20} />}
                {adminSettings[activeSection].title}
              </h2>
              
              <div className="settings-grid">
                {adminSettings[activeSection].fields.map((field, index) => (
                  <div key={index} className="setting-item">
                    <label className="setting-label">{field.label}</label>
                    <div className="setting-value">
                      {renderField(field)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
