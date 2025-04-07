
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-cms-primary">CMS Admin</h1>
          <p className="mt-2 text-gray-600">Sistema de Gerenciamento de Conteúdo</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
