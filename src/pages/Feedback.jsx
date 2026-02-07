import { Search, Settings, Bell } from 'lucide-react';
import { useState } from 'react';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    // Handle feedback submission here
    alert('Thank you for your feedback! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="feedback-container">
          <h2 className="page-title">Send Feedback to SPRIO</h2>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="feedback-message">Describe the feedback or issue</label>
              <textarea
                id="feedback-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="8"
                placeholder="We would appreciate your feedback..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
