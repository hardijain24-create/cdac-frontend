import { useNavigate } from 'react-router-dom';

export default function VerifyOTP() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/login');
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card otp-card">
        <h2>Verify OTP</h2>
        <form className="login-form" onSubmit={handleVerifyOTP}>
          <div className="form-group">
            <label>User Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="otp-inputs">
            <input type="text" maxLength="1" className="otp-box" required />
            <input type="text" maxLength="1" className="otp-box" required />
            <input type="text" maxLength="1" className="otp-box" required />
            <input type="text" maxLength="1" className="otp-box" required />
            <input type="text" maxLength="1" className="otp-box" required />
            <input type="text" maxLength="1" className="otp-box" required />
          </div>
          <button type="submit" className="submit-btn">Verify & Login</button>
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
