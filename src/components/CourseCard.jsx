import { useState } from 'react';
import { Play, Clock, Users, Star, BookOpen, Award } from 'lucide-react';

function CourseCard({ course }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getDifficultyColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return '#4CAF50';
      case 'intermediate': return '#FF9800';
      case 'advanced': return '#f44336';
      default: return '#9E9E9E';
    }
  };

  const getRatingStars = (rating = 0) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <div 
      className="course-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="course-image-container">
        {imageError ? (
          <div className="image-error">
            <div className="error-icon">⚠️</div>
            <span>Image not available</span>
          </div>
        ) : (
          <>
            <img 
              src={course.image} 
              alt={course.title} 
              className="course-image"
              onError={handleImageError}
            />
            <div className="course-overlay">
              <div className="overlay-content">
                <div className="course-logo">{course.language || 'COURSE'}</div>
                <div className="course-level" style={{ backgroundColor: getDifficultyColor(course.level) }}>
                  {course.level || 'Beginner'}
                </div>
                <div className="course-duration">
                  <Clock size={14} />
                  {course.duration || 'N/A'}
                </div>
              </div>
              {isHovered && (
                <div className="play-button-overlay">
                  <Play size={32} />
                </div>
              )}
            </div>
            {course.featured && (
              <div className="featured-badge">
                <Award size={16} />
                Featured
              </div>
            )}
            <div className="video-count">
              <Users size={14} />
              {course.videoCount || 0} videos
            </div>
          </>
        )}
      </div>
      
      <div className="course-info">
        <div className="course-header">
          <h3 className="course-title">{course.title}</h3>
          <div className="course-meta-inline">
            <span className="course-instructor">{course.instructor || 'CDAC Faculty'}</span>
            {course.rating && (
              <div className="rating-inline">
                {getRatingStars(course.rating)}
                <span className="rating-number">({course.rating})</span>
              </div>
            )}
          </div>
        </div>
        
        <p className="course-subtitle">{course.subtitle}</p>
        <p className="course-description">{course.description}</p>
        
        <div className="course-details">
          <div className="detail-item">
            <BookOpen size={16} className="detail-icon" />
            <div className="detail-content">
              <span className="detail-label">Category:</span>
              <span className="detail-value">{course.category || 'Programming'}</span>
            </div>
          </div>
          
          <div className="detail-item">
            <Users size={16} className="detail-icon" />
            <div className="detail-content">
              <span className="detail-label">Students:</span>
              <span className="detail-value">{course.enrolledStudents || '156'}</span>
            </div>
          </div>
          
          <div className="detail-item">
            <Clock size={16} className="detail-icon" />
            <div className="detail-content">
              <span className="detail-label">Duration:</span>
              <span className="detail-value">{course.totalDuration || '8 weeks'}</span>
            </div>
          </div>
        </div>

        {course.progress !== undefined && (
          <div className="progress-section">
            <div className="progress-header">
              <span className="progress-label">Your Progress</span>
              <span className="progress-percentage">{course.progress}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <div className="progress-stats">
              <div className="stat-item">
                <span className="stat-label">Completed</span>
                <span className="stat-value">{Math.floor(course.progress * (course.totalVideos || 60) / 100)} / {course.totalVideos || 60}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Remaining</span>
                <span className="stat-value">{Math.ceil((100 - course.progress) * (course.totalVideos || 60) / 100)} videos</span>
              </div>
            </div>
          </div>
        )}

        <div className="course-actions">
          <button className="action-btn primary">
            <Play size={16} />
            Continue Learning
          </button>
          <button className="action-btn secondary">
            <BookOpen size={16} />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
