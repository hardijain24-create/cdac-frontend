import {
  Search,
  Settings,
  Bell,
  User,
  Book,
  FileText,
} from "lucide-react";

export default function Profile() {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="profile-container">
          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-avatar">
              <User size={64} />
            </div>
            <h2 className="profile-name">Vedang Mavani</h2>
            <p className="profile-status">Student • Active</p>
          </div>

          {/* Personal Details */}
          <div className="profile-section">
            <h3>Personal Details</h3>
            <div className="profile-info-grid">
              <div className="profile-info-item">
                <span className="info-label">Email</span>
                <span className="info-value">gkmavani@gmail.com</span>
              </div>
              <div className="profile-info-item">
                <span className="info-label">Phone</span>
                <span className="info-value">+91 12345 67890</span>
              </div>
              <div className="profile-info-item">
                <span className="info-label">Courses</span>
                <span className="info-value">3 Active</span>
              </div>
              <div className="profile-info-item">
                <span className="info-label">Progress</span>
                <span className="info-value">67% Overall</span>
              </div>
            </div>
          </div>

          {/* Tracking Status */}
          <div className="profile-section">
            <h3>Tracking Status</h3>
            <div className="status-cards">
              <div className="status-card">
                <Book size={24} />
                <div>
                  <p className="card-label">Courses Taken</p>
                  <p className="card-value">5</p>
                </div>
              </div>

              <div className="status-card">
                <FileText size={24} />
                <div>
                  <p className="card-label">Course Status</p>
                  <p className="card-value">In Progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="profile-section">
            <h3>Progress</h3>

            <div className="progress-item">
              <label>Overall Progress</label>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "45%" }}
                />
              </div>
            </div>

            <div className="progress-item">
              <label>Completion Rate</label>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "78%" }}
                />
              </div>
            </div>
          </div>

          <button className="profile-edit-button">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
