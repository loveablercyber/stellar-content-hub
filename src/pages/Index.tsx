
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Redirect to dashboard if already authenticated
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-4xl font-bold text-cms-primary sm:text-5xl md:text-6xl">
          Sistema de Gerenciamento de Conteúdo
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Uma plataforma completa para gerenciar o conteúdo do seu site, com recursos de SEO, 
          estatísticas de acesso e muito mais.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button
            onClick={() => navigate('/login')}
            className="bg-cms-primary hover:bg-cms-dark text-white px-8 py-3 text-base rounded-md"
          >
            Entrar
          </Button>
          <Button
            onClick={() => navigate('/register')}
            variant="outline"
            className="px-8 py-3 text-base rounded-md"
          >
            Registrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
