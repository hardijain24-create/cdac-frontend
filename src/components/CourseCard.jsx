function CourseCard({ course }) {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x180/333333/ffffff?text=Image+Not+Found';
  };

  return (
    <div className="course-card">
      <div className="course-image-container">
        <img 
          src={course.image} 
          alt={course.title} 
          className="course-image"
          onError={handleImageError}
        />
        <div className="course-overlay">
          <div className="course-logo">{course.language || 'COURSE'}</div>
        </div>
        <div className="video-count">{course.videoCount} videos</div>
      </div>
      <div className="course-info">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-subtitle">{course.subtitle}</p>
        <p className="course-description">{course.description}</p>
        {course.progress !== undefined && (
          <div className="progress-item">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="progress-text">{course.progress}% complete</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
