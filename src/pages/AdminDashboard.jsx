import { useState, useEffect } from 'react';
import { Users, BookOpen, Activity, Settings, Upload, Play, Trash2, Edit } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { STUDENT_CREDENTIALS } from '../data/students';
import { getAllVideos, addVideo } from '../data/videos';
import VideoUpload from '../components/VideoUpload';

function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeCourses: 0,
    totalVideos: 0,
    recentActivity: 0
  });
  const [videos, setVideos] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Calculate stats from student data
    const allVideos = getAllVideos();
    setVideos(allVideos);
    setStats({
      totalStudents: STUDENT_CREDENTIALS.length,
      activeCourses: new Set(STUDENT_CREDENTIALS.map(s => s.course)).size,
      totalVideos: allVideos.length,
      recentActivity: 23 // Mock data
    });
  }, []);

  const handleVideoUpload = (newVideo) => {
    setVideos(prev => [newVideo, ...prev]);
    setStats(prev => ({
      ...prev,
      totalVideos: prev.totalVideos + 1
    }));
  };

  const handleDeleteVideo = (videoId) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      setVideos(prev => prev.filter(video => video.id !== videoId));
      setStats(prev => ({
        ...prev,
        totalVideos: prev.totalVideos - 1
      }));
    }
  };

  const handleQuickAction = (action) => {
    switch (action) {
      case 'students':
        setActiveTab('students');
        break;
      case 'courses':
        alert('Course Management - This feature will be available soon!');
        break;
      case 'reports':
        alert('Reports Dashboard - This feature will be available soon!');
        break;
      case 'settings':
        alert('Platform Settings - This feature will be available soon!');
        break;
      default:
        break;
    }
  };

  const recentStudents = STUDENT_CREDENTIALS.slice(0, 5);

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="admin-header">
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="admin-subtitle">Manage CDAC Learning Platform</p>
        </div>

        {/* Tab Navigation */}
        <div className="admin-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            Videos ({videos.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            Students
          </button>
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <Users size={24} />
                </div>
                <div className="stat-info">
                  <h3 className="stat-number">{stats.totalStudents}</h3>
                  <p className="stat-label">Total Students</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <BookOpen size={24} />
                </div>
                <div className="stat-info">
                  <h3 className="stat-number">{stats.activeCourses}</h3>
                  <p className="stat-label">Active Courses</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Activity size={24} />
                </div>
                <div className="stat-info">
                  <h3 className="stat-number">{stats.totalVideos}</h3>
                  <p className="stat-label">Total Videos</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Settings size={24} />
                </div>
                <div className="stat-info">
                  <h3 className="stat-number">{stats.recentActivity}</h3>
                  <p className="stat-label">Recent Activity</p>
                </div>
              </div>
            </div>

            {/* Recent Students */}
            <div className="admin-section">
              <h2 className="section-title">Recent Students</h2>
              <div className="students-table">
                <div className="table-header">
                  <div>Name</div>
                  <div>Email</div>
                  <div>Roll Number</div>
                  <div>Course</div>
                </div>
                {recentStudents.map((student) => (
                  <div key={student.id} className="table-row">
                    <div className="student-name">{student.name}</div>
                    <div className="student-email">{student.email}</div>
                    <div className="student-roll">{student.rollNumber}</div>
                    <div className="student-course">{student.course}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'videos' && (
          <div className="admin-section">
            <div className="section-header">
              <h2 className="section-title">Video Management</h2>
              <button 
                className="upload-video-btn"
                onClick={() => setShowUploadModal(true)}
              >
                <Upload size={16} />
                Upload New Video
              </button>
            </div>

            <div className="videos-grid">
              {videos.map((video) => (
                <div key={video.id} className="video-card-admin">
                  <div className="video-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="video-overlay">
                      <Play size={24} />
                    </div>
                  </div>
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-description">{video.description}</p>
                    <div className="video-meta">
                      <span className="video-course">{video.course}</span>
                      <span className="video-duration">{video.duration}</span>
                    </div>
                    <div className="video-actions">
                      <button className="action-btn-small edit-btn">
                        <Edit size={14} />
                      </button>
                      <button 
                        className="action-btn-small delete-btn"
                        onClick={() => handleDeleteVideo(video.id)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="admin-section">
            <h2 className="section-title">All Students</h2>
            <div className="students-table">
              <div className="table-header">
                <div>Name</div>
                <div>Email</div>
                <div>Roll Number</div>
                <div>Course</div>
              </div>
              {STUDENT_CREDENTIALS.map((student) => (
                <div key={student.id} className="table-row">
                  <div className="student-name">{student.name}</div>
                  <div className="student-email">{student.email}</div>
                  <div className="student-roll">{student.rollNumber}</div>
                  <div className="student-course">{student.course}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="admin-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-btn" onClick={() => handleQuickAction('students')}>
              <Users size={20} />
              Manage Students
            </button>
            <button className="action-btn" onClick={() => handleQuickAction('courses')}>
              <BookOpen size={20} />
              Manage Courses
            </button>
            <button className="action-btn" onClick={() => handleQuickAction('reports')}>
              <Activity size={20} />
              View Reports
            </button>
            <button className="action-btn" onClick={() => handleQuickAction('settings')}>
              <Settings size={20} />
              Platform Settings
            </button>
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <VideoUpload 
            onClose={() => setShowUploadModal(false)}
            onUploadSuccess={handleVideoUpload}
          />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
