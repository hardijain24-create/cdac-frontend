import { useState } from 'react';
import { Mail, User, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(email, password);
      
      if (result.success) {
        navigate(result.redirect || '/');
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          {userType === 'admin' ? (
            <Shield className="login-icon" size={32} />
          ) : (
            <Mail className="login-icon" size={32} />
          )}
        </div>
        
        <div className="user-type-toggle">
          <button
            type="button"
            className={`toggle-btn ${userType === 'student' ? 'active' : ''}`}
            onClick={() => setUserType('student')}
          >
            <User size={16} />
            Student
          </button>
          <button
            type="button"
            className={`toggle-btn ${userType === 'admin' ? 'active' : ''}`}
            onClick={() => setUserType('admin')}
          >
            <Shield size={16} />
            Admin
          </button>
        </div>

        <h2>{userType === 'admin' ? 'Admin Login' : 'Student Login'}</h2>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>{userType === 'admin' ? 'Admin Email' : 'Student Email'}</label>
            <input
              type="email"
              placeholder={userType === 'admin' ? 'Enter admin email' : 'Enter student email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <button
            type="button"
            className="link-btn"
            onClick={handleForgotPassword}
          >
            Forgot password? <span>Reset here</span>
          </button>
        </form>

        {userType === 'student' && (
          <div className="demo-credentials">
            <div className="divider">Demo Credentials</div>
            <div className="demo-info">
              <p><strong>Email:</strong> student1@cdac.edu</p>
              <p><strong>Password:</strong> student123</p>
              <p className="demo-note">(Students 1-16 available with same password)</p>
            </div>
          </div>
        )}

        {userType === 'admin' && (
          <div className="demo-credentials">
            <div className="divider">Admin Credentials</div>
            <div className="demo-info">
              <p><strong>Email:</strong> admin@cdac.edu</p>
              <p><strong>Password:</strong> admin123</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
