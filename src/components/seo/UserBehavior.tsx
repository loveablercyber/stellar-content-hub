
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, BarChart, Bar, ResponsiveContainer } from 'recharts';

const pageViewsData = [
  { name: 'Jan', views: 4000, uniqueUsers: 2400 },
  { name: 'Fev', views: 3000, uniqueUsers: 1398 },
  { name: 'Mar', views: 2000, uniqueUsers: 9800 },
  { name: 'Abr', views: 2780, uniqueUsers: 3908 },
  { name: 'Mai', views: 1890, uniqueUsers: 4800 },
  { name: 'Jun', views: 2390, uniqueUsers: 3800 },
  { name: 'Jul', views: 3490, uniqueUsers: 4300 },
];

const bounceRateData = [
  { name: 'Jan', rate: 45 },
  { name: 'Fev', rate: 43 },
  { name: 'Mar', rate: 48 },
  { name: 'Abr', rate: 40 },
  { name: 'Mai', rate: 38 },
  { name: 'Jun', rate: 35 },
  { name: 'Jul', rate: 32 },
];

const topPagesData = [
  { name: 'Página Inicial', views: 4500 },
  { name: 'Sobre Nós', views: 3200 },
  { name: 'Blog', views: 2800 },
  { name: 'Serviços', views: 2100 },
  { name: 'Contato', views: 1800 },
];

const UserBehavior: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Visualizações de Página</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={300}
                data={pageViewsData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="views" stroke="#8884d8" fill="#8884d8" name="Visualizações" />
                <Area type="monotone" dataKey="uniqueUsers" stroke="#82ca9d" fill="#82ca9d" name="Usuários Únicos" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Taxa de Rejeição</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={bounceRateData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rate" stroke="#ff7300" name="Taxa de Rejeição (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Páginas Mais Visitadas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={topPagesData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="views" fill="#00C49F" name="Visualizações" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserBehavior;
