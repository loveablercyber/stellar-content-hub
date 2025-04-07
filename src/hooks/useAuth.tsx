
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'admin' | 'editor' | 'viewer';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing auth token on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('cms_token');
        if (token) {
          // This would be a call to the backend to validate token
          // For now, we'll simulate a successful response
          const mockUser: User = {
            id: '1',
            email: 'admin@example.com',
            name: 'Admin User',
            role: 'admin'
          };
          setUser(mockUser);
        }
      } catch (error) {
        console.error('Auth verification failed:', error);
        localStorage.removeItem('cms_token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // This would be a call to the backend for authentication
      // For now, we'll simulate a successful login
      if (email === 'admin@example.com' && password === 'password') {
        const mockUser: User = {
          id: '1',
          email: 'admin@example.com',
          name: 'Admin User',
          role: 'admin'
        };
        const mockToken = 'mock_jwt_token';
        
        localStorage.setItem('cms_token', mockToken);
        setUser(mockUser);
        toast.success('Login realizado com sucesso!');
        navigate('/dashboard');
      } else {
        toast.error('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    setLoading(true);
    try {
      // This would be a call to the backend for registration
      // For now, we'll simulate a successful registration
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        role: 'editor'
      };
      const mockToken = 'mock_jwt_token';
      
      localStorage.setItem('cms_token', mockToken);
      setUser(mockUser);
      toast.success('Registro realizado com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Erro ao registrar');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('cms_token');
    setUser(null);
    toast.success('Logout realizado com sucesso');
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
