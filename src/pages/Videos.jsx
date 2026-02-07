import { Search, Settings, Bell, ChevronRight } from 'lucide-react';

function Videos() {
  const featuredCourse = {
    title: 'C++',
    subtitle: 'Applications of DBMS Languages',
    description: 'Master database management with practical C++ applications and learn how to build efficient data-driven systems.',
    thumbnail: 'https://images.pexels.com/photos/34803988/pexels-photo-34803988.jpeg?auto=compress&cs=tinysrgb&h=350',
  };

  const topics = [
    { id: 1, title: 'C++ Introduction, Functions and Applications of C++ Language', url: '#' },
    { id: 2, title: 'Data Structures in C++', url: '#' },
    { id: 3, title: 'Object Oriented Programming', url: '#' },
    { id: 4, title: 'Advanced C++ Concepts', url: '#' },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="videos-layout">
          <div className="videos-main">
            <div className="featured-video">
              <img src={featuredCourse.thumbnail} alt={featuredCourse.title} />
            </div>
            <div className="video-details">
              <span className="video-badge">Previously watched</span>
              <h1 className="video-main-title">{featuredCourse.title}</h1>
              <h2 className="video-main-subtitle">{featuredCourse.subtitle}</h2>
              <p className="video-description">{featuredCourse.description}</p>
            </div>
          </div>

          <aside className="videos-sidebar">
            <div className="topics-section">
              <h3 className="topics-title">Up next</h3>
              <div className="topics-list">
                {topics.map((topic) => (
                  <a key={topic.id} href={topic.url} className="topic-item">
                    <span className="topic-text">{topic.title}</span>
                    <ChevronRight size={16} className="topic-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Videos;
