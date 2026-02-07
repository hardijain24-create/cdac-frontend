import { Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StudentLogin() {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Mail className="login-icon" size={32} />
        </div>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>User Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="submit-btn">Login</button>
          <button
            type="button"
            className="link-btn"
            onClick={handleForgotPassword}
          >
            Forgot password? <span>Reset here</span>
          </button>
        </form>
        <div className="google-signin">
          <div className="divider">or</div>
          <button className="google-btn">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.335z"/>
              <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
