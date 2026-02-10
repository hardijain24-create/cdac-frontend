// Video data storage (will be replaced with MongoDB)
export let VIDEOS_DATA = [
  {
    id: 1,
    title: 'Introduction to C++ Programming',
    description: 'Learn the basics of C++ programming language, including syntax, data types, and control structures.',
    course: 'C++ Data Structures',
    instructor: 'Dr. Rajesh Kumar',
    duration: '45:30',
    thumbnail: 'https://via.placeholder.com/400x225/FF5733/ffffff?text=C%2B%2B+Intro',
    videoUrl: '#',
    category: 'Programming',
    level: 'Beginner',
    uploadedBy: 'admin',
    uploadDate: '2024-01-15',
    views: 1250
  },
  {
    id: 2,
    title: 'Arrays and Linked Lists',
    description: 'Deep dive into arrays and linked lists data structures with practical examples.',
    course: 'C++ Data Structures',
    instructor: 'Dr. Rajesh Kumar',
    duration: '52:15',
    thumbnail: 'https://via.placeholder.com/400x225/FF5733/ffffff?text=Arrays+and+LL',
    videoUrl: '#',
    category: 'Data Structures',
    level: 'Intermediate',
    uploadedBy: 'admin',
    uploadDate: '2024-01-18',
    views: 890
  },
  {
    id: 3,
    title: 'Python Variables and Data Types',
    description: 'Understanding variables and data types in Python programming.',
    course: 'Python Programming',
    instructor: 'Prof. Anita Sharma',
    duration: '38:45',
    thumbnail: 'https://via.placeholder.com/400x225/33FF57/ffffff?text=Python+Vars',
    videoUrl: '#',
    category: 'Programming',
    level: 'Beginner',
    uploadedBy: 'admin',
    uploadDate: '2024-01-20',
    views: 1560
  }
];

// Function to add new video (for admin use)
export const addVideo = (videoData) => {
  const newVideo = {
    id: VIDEOS_DATA.length + 1,
    ...videoData,
    uploadedBy: 'admin',
    uploadDate: new Date().toISOString().split('T')[0],
    views: 0
  };
  VIDEOS_DATA.unshift(newVideo);
  return newVideo;
};

// Function to get videos by course
export const getVideosByCourse = (courseName) => {
  return VIDEOS_DATA.filter(video => video.course === courseName);
};

// Function to get all videos
export const getAllVideos = () => {
  return VIDEOS_DATA;
};
