
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, XAxis, YAxis } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp,
  BarChart2,
  Clock,
  Plus,
  ArrowRight
} from 'lucide-react';

const recentPages = [
  { id: '1', title: 'Página Inicial', views: 245, lastUpdated: '3 dias atrás' },
  { id: '2', title: 'Sobre Nós', views: 120, lastUpdated: '1 semana atrás' },
  { id: '3', title: 'Serviços', views: 189, lastUpdated: '2 dias atrás' },
  { id: '4', title: 'Contato', views: 87, lastUpdated: '5 dias atrás' },
];

const COLORS = ['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];

const pageViewsData = [
  { name: 'Seg', views: 120 },
  { name: 'Ter', views: 145 },
  { name: 'Qua', views: 160 },
  { name: 'Qui', views: 135 },
  { name: 'Sex', views: 178 },
  { name: 'Sáb', views: 143 },
  { name: 'Dom', views: 124 },
];

const trafficSourceData = [
  { name: 'Direto', value: 40 },
  { name: 'Orgânico', value: 30 },
  { name: 'Redes Sociais', value: 20 },
  { name: 'Referência', value: 10 },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="cms-heading mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total de Visualizações</p>
                <p className="text-3xl font-bold">3,287</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Eye className="h-5 w-5 text-cms-primary" />
              </div>
            </div>
            <div className="mt-2 text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>12% a mais que semana passada</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Páginas Publicadas</p>
                <p className="text-3xl font-bold">27</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <FileText className="h-5 w-5 text-cms-primary" />
              </div>
            </div>
            <div className="mt-2 text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>3 novas esta semana</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Usuários Cadastrados</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Users className="h-5 w-5 text-cms-primary" />
              </div>
            </div>
            <div className="mt-2 text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>2 novos este mês</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tempo Médio na Página</p>
                <p className="text-3xl font-bold">2:47</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Clock className="h-5 w-5 text-cms-primary" />
              </div>
            </div>
            <div className="mt-2 text-xs text-red-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 transform rotate-180" />
              <span>5% menos que semana passada</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Visualizações nos Últimos 7 Dias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={pageViewsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="views" 
                    name="Visualizações" 
                    fill="#1e40af" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Fontes de Tráfego</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficSourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {trafficSourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Páginas mais visualizadas</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => navigate('/statistics')}>
              Ver todas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentPages.map((page) => (
                <div key={page.id} className="flex items-center">
                  <div className="space-y-1 flex-1">
                    <p className="font-medium leading-none">{page.title}</p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="mr-1 h-3 w-3" /> 
                      Atualizada {page.lastUpdated}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{page.views}</span>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => navigate(`/pages/${page.id}`)}>
                      Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Ações Rápidas</CardTitle>
            <CardDescription>Acesse rapidamente as funcionalidades mais utilizadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => navigate('/pages/new')}
              >
                <Plus className="mr-2 h-4 w-4" />
                Nova Página
              </Button>
              
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => navigate('/statistics')}
              >
                <BarChart2 className="mr-2 h-4 w-4" />
                Ver Estatísticas
              </Button>
              
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => navigate('/settings')}
              >
                <FileText className="mr-2 h-4 w-4" />
                Configurações
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
