
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const trafficData = [
  { name: 'Jan', organico: 4000, pago: 2400, direto: 1800 },
  { name: 'Fev', organico: 3000, pago: 1398, direto: 1700 },
  { name: 'Mar', organico: 2000, pago: 9800, direto: 1600 },
  { name: 'Abr', organico: 2780, pago: 3908, direto: 2000 },
  { name: 'Mai', organico: 1890, pago: 4800, direto: 2181 },
  { name: 'Jun', organico: 2390, pago: 3800, direto: 2500 },
  { name: 'Jul', organico: 3490, pago: 4300, direto: 2300 },
];

const searchEnginesData = [
  { name: 'Google', value: 68 },
  { name: 'Bing', value: 12 },
  { name: 'Yahoo', value: 8 },
  { name: 'DuckDuckGo', value: 7 },
  { name: 'Outros', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const SEOAnalytics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Fontes de Tráfego</CardTitle>
          <CardDescription>Últimos 7 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={trafficData}
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
                <Line type="monotone" dataKey="organico" stroke="#8884d8" name="Tráfego Orgânico" />
                <Line type="monotone" dataKey="pago" stroke="#82ca9d" name="Tráfego Pago" />
                <Line type="monotone" dataKey="direto" stroke="#ff7300" name="Tráfego Direto" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Buscadores</CardTitle>
          <CardDescription>Distribuição por mecanismo de busca</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={300}>
                <Pie
                  data={searchEnginesData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {searchEnginesData.map((entry, index) => (
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
  );
};

export default SEOAnalytics;
