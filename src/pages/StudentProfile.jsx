import { useState } from 'react';
import { User, BookOpen, Award, Clock, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function StudentProfile() {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('personal');

  const studentSettings = {
    personal: {
      title: 'Personal Information',
      icon: User,
      fields: [
        { label: 'Full Name', value: user?.name || 'Rahul', type: 'text' },
        { label: 'Email', value: user?.email || 'student1@cdac.edu', type: 'email' },
        { label: 'Roll Number', value: user?.rollNumber || 'CDAC2024001', type: 'text' },
        { label: 'Course', value: user?.course || 'C++ Data Structures', type: 'text' },
        { label: 'Enrollment Date', value: '2024-01-15', type: 'date' }
      ]
    },
    academic: {
      title: 'Academic Progress',
      icon: BookOpen,
      fields: [
        { label: 'Current Progress', value: '75%', type: 'progress' },
        { label: 'Completed Videos', value: '45 / 60', type: 'text' },
        { label: 'Assignments Submitted', value: '12 / 15', type: 'text' },
        { label: 'Average Score', value: '85.5%', type: 'text' },
        { label: 'Attendance Rate', value: '92%', type: 'text' }
      ]
    },
    achievements: {
      title: 'Achievements & Certificates',
      icon: Award,
      fields: [
        { label: 'Course Completion', value: 'C++ Basics - Completed', type: 'badge' },
        { label: 'Programming Quiz', value: 'Score: 95/100', type: 'badge' },
        { label: 'Data Structures', value: 'In Progress', type: 'badge' },
        { label: 'Algorithm Challenge', value: 'Participated', type: 'badge' }
      ]
    },
    activity: {
      title: 'Recent Activity',
      icon: Clock,
      fields: [
        { label: 'Last Login', value: 'Today, 2:30 PM', type: 'text' },
        { label: 'Video Watched', value: 'Introduction to Pointers', type: 'text' },
        { label: 'Time Spent', value: '2h 15m', type: 'text' },
        { label: 'Quiz Attempted', value: 'Arrays and Linked Lists Quiz', type: 'text' }
      ]
    },
    preferences: {
      title: 'Learning Preferences',
      icon: Settings,
      fields: [
        { label: 'Video Quality', value: 'HD (1080p)', type: 'select' },
        { label: 'Playback Speed', value: '1.0x', type: 'select' },
        { label: 'Subtitle Language', value: 'English', type: 'select' },
        { label: 'Email Notifications', value: 'Daily digest', type: 'select' },
        { label: 'Study Reminders', value: 'Enabled', type: 'toggle' }
      ]
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'progress':
        return (
          <div className="progress-field">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: field.value }}></div>
            </div>
            <span className="progress-text">{field.value}</span>
          </div>
        );
      case 'badge':
        return (
          <div className="badge-container">
            <span className={`achievement-badge ${field.value.toLowerCase().replace(' ', '-')}`}>
              {field.value}
            </span>
          </div>
        );
      case 'select':
        return (
          <select className="form-select" defaultValue={field.value}>
            {field.label === 'Video Quality' && (
              <>
                <option>Auto</option>
                <option>HD (1080p)</option>
                <option>SD (480p)</option>
                <option>720p</option>
              </>
            )}
            {field.label === 'Playback Speed' && (
              <>
                <option>0.5x</option>
                <option>0.75x</option>
                <option>1.0x</option>
                <option>1.25x</option>
                <option>1.5x</option>
                <option>2.0x</option>
              </>
            )}
            {field.label === 'Subtitle Language' && (
              <>
                <option>English</option>
                <option>Hindi</option>
                <option>Disabled</option>
              </>
            )}
            {field.label === 'Email Notifications' && (
              <>
                <option>Real-time</option>
                <option>Daily digest</option>
                <option>Weekly summary</option>
                <option>Disabled</option>
              </>
            )}
          </select>
        );
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
      default:
        return <input type="text" value={field.value} readOnly className="form-input" />;
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="profile-header">
          <h1 className="page-title">Student Profile</h1>
          <p className="profile-subtitle">Manage your personal information and learning preferences</p>
        </div>

        <div className="profile-layout">
          {/* Sidebar Navigation */}
          <div className="profile-sidebar">
            {Object.entries(studentSettings).map(([key, section]) => (
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
                {studentSettings[activeSection].icon && <studentSettings[activeSection].icon size={20} />}
                {studentSettings[activeSection].title}
              </h2>
              
              <div className="settings-grid">
                {studentSettings[activeSection].fields.map((field, index) => (
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

export default StudentProfile;
