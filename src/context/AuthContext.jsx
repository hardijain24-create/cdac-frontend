import React, { createContext, useContext, useState, useEffect } from 'react';
import { STUDENT_CREDENTIALS, ADMIN_CREDENTIALS } from '../data/students';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedIsAdmin = localStorage.getItem('isAdmin');
    
    if (storedUser && storedIsAdmin) {
      const userData = JSON.parse(storedUser);
      const adminStatus = JSON.parse(storedIsAdmin);
      setUser(userData);
      setIsAuthenticated(true);
      setIsAdmin(adminStatus);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Check admin credentials first
      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        const adminUser = {
          id: 'admin',
          email: ADMIN_CREDENTIALS.email,
          name: 'Administrator',
          role: 'admin'
        };
        
        setUser(adminUser);
        setIsAuthenticated(true);
        setIsAdmin(true);
        
        // Store in localStorage for session persistence
        localStorage.setItem('user', JSON.stringify(adminUser));
        localStorage.setItem('isAdmin', JSON.stringify(true));
        
        return { success: true, user: adminUser, redirect: '/admin' };
      }

      // Check student credentials
      const student = STUDENT_CREDENTIALS.find(
        student => student.email === email && student.password === password
      );

      if (student) {
        const userStudent = {
          id: student.id,
          email: student.email,
          name: student.name,
          rollNumber: student.rollNumber,
          course: student.course,
          role: 'student'
        };
        
        setUser(userStudent);
        setIsAuthenticated(true);
        setIsAdmin(false);
        
        // Store in localStorage for session persistence
        localStorage.setItem('user', JSON.stringify(userStudent));
        localStorage.setItem('isAdmin', JSON.stringify(false));
        
        return { success: true, user: userStudent, redirect: '/' };
      }

      return { success: false, error: 'Invalid email or password' };
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    
    // Clear localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
  };

  const value = {
    user,
    isAuthenticated,
    isAdmin,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
