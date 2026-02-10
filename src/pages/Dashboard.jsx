import { Search, Settings, Bell } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { getAllVideos, getVideosByCourse } from '../data/videos';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();
  
  // Get videos based on user's course (for students) or all videos (for admin)
  const videos = user?.role === 'admin' 
    ? getAllVideos().slice(0, 6) // Show latest 6 videos for admin
    : getVideosByCourse(user?.course || 'C++ Data Structures');

  const courses = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x180/FF5733/ffffff?text=C%2B%2B+DSA',
      videoCount: videos.filter(v => v.course === 'C++ Data Structures').length,
      title: 'C++ Data Structures & Algorithms',
      subtitle: 'Master DSA with C++',
      description: 'Learn fundamental data structures and algorithms using C++. This course covers everything from arrays to graphs, preparing you for technical interviews.',
      progress: 75,
      language: 'C++'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x180/33FF57/ffffff?text=Python+Intro',
      videoCount: videos.filter(v => v.course === 'Python Programming').length,
      title: 'Python for Beginners',
      subtitle: 'Start your coding journey',
      description: 'An introductory course to Python programming. Learn the basics of Python syntax, data types, and control flow.',
      progress: 40,
      language: 'Python'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x180/3357FF/ffffff?text=Web+Dev',
      videoCount: videos.filter(v => v.course === 'Full-Stack Development').length,
      title: 'Full-Stack Web Development',
      subtitle: 'Build modern web applications',
      description: 'Become a full-stack developer. This course covers front-end (React) and back-end (Node.js) development, databases, and deployment.',
      progress: 60,
      language: 'Full-Stack'
    },
  ];

  const myCourses = [
    {
      id: 2,
      image: 'https://via.placeholder.com/300x180/33FF57/ffffff?text=Python+Intro',
      videoCount: videos.filter(v => v.course === 'Python Programming').length,
      title: 'Python for Beginners',
      subtitle: 'Start your coding journey',
      description: 'Learn fundamental data structures and algorithms using C++. This course covers everything from arrays to graphs, preparing you for technical interviews.',
      progress: 40,
      language: 'Python'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x180/3357FF/ffffff?text=Web+Dev',
      videoCount: videos.filter(v => v.course === 'Full-Stack Development').length,
      title: 'Full-Stack Web Development',
      subtitle: 'Build modern web applications',
      description: 'Become a full-stack developer. This course covers front-end (React) and back-end (Node.js) development, databases, and deployment.',
      progress: 60,
      language: 'Full-Stack'
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <section className="welcome-section">
          <div className="welcome-card">
            <h1>Welcome, {user?.name || 'User'}!</h1>
            <p>
              {user?.role === 'admin' 
                ? 'Manage and upload educational content for students'
                : 'Ready to continue your learning journey?'
              }
            </p>
          </div>
        </section>

        {user?.role === 'admin' && (
          <section className="courses-section">
            <h2 className="section-title">Recent Uploads</h2>
            <div className="courses-grid">
              {videos.slice(0, 3).map((video) => (
                <div key={video.id} className="course-card">
                  <div className="course-image-container">
                    <img src={video.thumbnail} alt={video.title} className="course-image" />
                    <div className="course-overlay">
                      <div className="course-logo">{video.category}</div>
                    </div>
                    <div className="video-count">{video.duration}</div>
                  </div>
                  <div className="course-info">
                    <h3 className="course-title">{video.title}</h3>
                    <p className="course-subtitle">{video.instructor}</p>
                    <p className="course-description">{video.description}</p>
                    <div className="video-meta">
                      <span className="video-course">{video.course}</span>
                      <span className="video-duration">{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="courses-section">
          <h2 className="section-title">
            {user?.role === 'admin' ? 'Course Overview' : 'Continue playing'}
          </h2>
          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <section className="courses-section">
          <h2 className="section-title">My Courses</h2>
          <div className="courses-grid-compact">
            {myCourses.map((course) => (
              <div key={course.id} className="course-card-compact">
                <div className="course-image-compact">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="course-info-compact">
                  <h3 className="course-title-compact">{course.title}</h3>
                  <p className="course-subtitle-compact">{course.subtitle}</p>
                  <p className="course-description-compact">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
