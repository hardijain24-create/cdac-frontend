import { useNavigate } from 'react-router-dom';

export default function GenerateOTP() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/login');
  };

  const handleGenerateOTP = (e) => {
    e.preventDefault();
    // Handle OTP generation logic here
    navigate('/verify-otp');
  };

  return (
    <div className="login-container">
      <div className="login-card otp-card">
        <h2>Generate OTP</h2>
        <form className="login-form" onSubmit={handleGenerateOTP}>
          <div className="form-group">
            <label>User Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="submit-btn">Generate OTP</button>
          <button
            type="button"
            className="link-btn"
            onClick={handleBack}
          >
            Already have an account? <span>Login here</span>
          </button>
        </form>
      </div>
    </div>
  );
}
