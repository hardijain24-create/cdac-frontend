import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/login');
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Reset Password</h2>
        <form className="login-form" onSubmit={handleResetPassword}>
          <div className="form-group">
            <label>New Password *</label>
            <input type="password" placeholder="Enter new password" required />
          </div>
          <div className="form-group">
            <label>Confirm Password *</label>
            <input type="password" placeholder="Confirm new password" required />
          </div>
          <button type="submit" className="submit-btn">Reset Password</button>
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
