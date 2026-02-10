import { useState } from 'react';
import { Upload, X, Film, Clock, Tag, BookOpen } from 'lucide-react';
import { addVideo } from '../data/videos';

const VideoUpload = ({ onClose, onUploadSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    course: 'C++ Data Structures',
    instructor: '',
    duration: '',
    category: 'Programming',
    level: 'Beginner',
    videoUrl: '',
    thumbnail: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    'C++ Data Structures',
    'Python Programming', 
    'Full-Stack Development',
    'Web Development',
    'Data Science',
    'Machine Learning',
    'Cloud Computing',
    'DevOps',
    'Blockchain',
    'Cybersecurity',
    'Mobile Development',
    'AI & ML',
    'Database Management',
    'Software Testing',
    'Network Security',
    'Cloud Architecture'
  ];

  const categories = [
    'Programming',
    'Data Structures',
    'Web Development',
    'Database',
    'Algorithms',
    'Tutorial',
    'Lecture'
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.instructor.trim()) newErrors.instructor = 'Instructor name is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    if (!formData.videoUrl.trim()) newErrors.videoUrl = 'Video URL is required';
    if (!formData.thumbnail.trim()) newErrors.thumbnail = 'Thumbnail URL is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newVideo = addVideo(formData);
      onUploadSuccess(newVideo);
      onClose();
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <div className="video-upload-overlay">
      <div className="video-upload-modal">
        <div className="modal-header">
          <h2>Upload New Video</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form className="upload-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Video Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className={errors.title ? 'error' : ''}
                placeholder="Enter video title"
              />
              {errors.title && <span className="error-text">{errors.title}</span>}
            </div>
            
            <div className="form-group">
              <label>Instructor Name *</label>
              <input
                type="text"
                value={formData.instructor}
                onChange={(e) => handleChange('instructor', e.target.value)}
                className={errors.instructor ? 'error' : ''}
                placeholder="Enter instructor name"
              />
              {errors.instructor && <span className="error-text">{errors.instructor}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className={errors.description ? 'error' : ''}
              placeholder="Enter video description"
              rows={3}
            />
            {errors.description && <span className="error-text">{errors.description}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Course *</label>
              <select
                value={formData.course}
                onChange={(e) => handleChange('course', e.target.value)}
              >
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Duration *</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => handleChange('duration', e.target.value)}
                className={errors.duration ? 'error' : ''}
                placeholder="e.g., 45:30"
              />
              {errors.duration && <span className="error-text">{errors.duration}</span>}
            </div>
            
            <div className="form-group">
              <label>Level</label>
              <select
                value={formData.level}
                onChange={(e) => handleChange('level', e.target.value)}
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Video URL *</label>
            <input
              type="url"
              value={formData.videoUrl}
              onChange={(e) => handleChange('videoUrl', e.target.value)}
              className={errors.videoUrl ? 'error' : ''}
              placeholder="https://example.com/video.mp4"
            />
            {errors.videoUrl && <span className="error-text">{errors.videoUrl}</span>}
          </div>

          <div className="form-group">
            <label>Thumbnail URL *</label>
            <input
              type="url"
              value={formData.thumbnail}
              onChange={(e) => handleChange('thumbnail', e.target.value)}
              className={errors.thumbnail ? 'error' : ''}
              placeholder="https://example.com/thumbnail.jpg"
            />
            {errors.thumbnail && <span className="error-text">{errors.thumbnail}</span>}
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="upload-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Upload size={16} className="animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload size={16} />
                  Upload Video
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoUpload;
