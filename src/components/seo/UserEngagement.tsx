
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const engagementData = [
  { name: 'Jan', sessions: 4000, avgTime: 2.5 },
  { name: 'Fev', sessions: 3000, avgTime: 2.3 },
  { name: 'Mar', sessions: 2000, avgTime: 2.1 },
  { name: 'Abr', sessions: 2780, avgTime: 2.4 },
  { name: 'Mai', sessions: 1890, avgTime: 2.6 },
  { name: 'Jun', sessions: 2390, avgTime: 2.8 },
  { name: 'Jul', sessions: 3490, avgTime: 3.0 },
];

const userActions = [
  { action: 'Visualização de Página', count: 25489, growth: 12 },
  { action: 'Cliques em Links', count: 18653, growth: 8 },
  { action: 'Downloads', count: 4325, growth: 15 },
  { action: 'Formulários Enviados', count: 2140, growth: -3 },
  { action: 'Inscrições Newsletter', count: 1298, growth: 22 },
];

const UserEngagement: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Métricas de Engajamento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={engagementData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="sessions" stroke="#8884d8" name="Sessões" />
                <Line yAxisId="right" type="monotone" dataKey="avgTime" stroke="#82ca9d" name="Tempo Médio (min)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Ações dos Usuários</CardTitle>
          <CardDescription>Últimos 30 dias</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ação</TableHead>
                <TableHead>Contagem</TableHead>
                <TableHead>Crescimento</TableHead>
                <TableHead>Distribuição</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userActions.map((item) => (
                <TableRow key={item.action}>
                  <TableCell className="font-medium">{item.action}</TableCell>
                  <TableCell>{item.count.toLocaleString()}</TableCell>
                  <TableCell className={item.growth > 0 ? 'text-green-500' : 'text-red-500'}>
                    {item.growth > 0 ? `+${item.growth}%` : `${item.growth}%`}
                  </TableCell>
                  <TableCell className="w-[200px]">
                    <Progress
                      value={Math.max(5, Math.min(100, (item.count / 25489) * 100))}
                      className="h-2"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserEngagement;
