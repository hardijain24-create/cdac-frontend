import { Search, Settings, Bell } from 'lucide-react';

function VideoList() {
  const videos = [
    {
      id: 1,
      title: 'C++',
      subtitle: 'Data Structures and Algorithms',
      thumbnail: 'https://images.pexels.com/photos/34803988/pexels-photo-34803988.jpeg?auto=compress&cs=tinysrgb&h=350',
      duration: '45:30',
    },
    {
      id: 2,
      title: 'C++',
      subtitle: 'Object Oriented Programming',
      thumbnail: 'https://images.pexels.com/photos/20432872/pexels-photo-20432872.jpeg?auto=compress&cs=tinysrgb&h=350',
      duration: '38:15',
    },
    {
      id: 3,
      title: 'C++',
      subtitle: 'Advanced C++ Concepts',
      thumbnail: 'https://images.pexels.com/photos/18485544/pexels-photo-18485544.jpeg?auto=compress&cs=tinysrgb&h=350',
      duration: '52:40',
    },
    {
      id: 4,
      title: 'C++ Basics',
      subtitle: 'Getting Started',
      thumbnail: 'https://images.pexels.com/photos/18477121/pexels-photo-18477121.jpeg?auto=compress&cs=tinysrgb&h=350',
      duration: '28:20',
    },
    {
      id: 5,
      title: 'C++',
      subtitle: 'Memory Management',
      thumbnail: 'https://images.pexels.com/photos/18477127/pexels-photo-18477127.jpeg?auto=compress&cs=tinysrgb&h=350',
      duration: '41:05',
    },
    {
      id: 6,
      title: 'C++',
      subtitle: 'STL and Algorithms',
      thumbnail: 'https://images.pexels.com/photos/18464992/pexels-photo-18464992.jpeg?auto=compress&cs=tinysrgb&h=350',
      duration: '55:18',
    },
    {
      id: 7,
      title: 'C++',
      subtitle: 'Templates and Generic Programming',
      thumbnail: 'https://images.pexels.com/photos/34803988/pexels-photo-34803988.jpeg?auto=compress&cs=tinysrgb&h=350',
      duration: '49:25',
    },
    {
      id: 8,
      title: 'C++',
      subtitle: 'Modern C++ Features',
      thumbnail: 'https://images.pexels.com/photos/20432872/pexels-photo-20432872.jpeg?auto=compress&cs=tinysrgb&h=350',
      duration: '36:50',
    },
    {
      id: 9,
      title: 'C++',
      subtitle: 'Design Patterns',
      thumbnail: 'https://images.pexels.com/photos/18485544/pexels-photo-18485544.jpeg?auto=compress&cs=tinysrgb&h=350',
      duration: '58:12',
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <h2 className="page-title">My Courses</h2>
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <span className="video-duration">{video.duration}</span>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-subtitle">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoList;
