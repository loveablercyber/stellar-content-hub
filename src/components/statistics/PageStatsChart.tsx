
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  PieChart, 
  Tooltip, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Bar, 
  Pie, 
  ResponsiveContainer,
  Cell,
  Legend
} from 'recharts';
import { mockPageStats, COLORS } from '@/data/mockStatisticsData';

const PageStatsChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visualizações por Página</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mockPageStats}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="views" 
                  name="Visualizações" 
                  fill="#1e40af" 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockPageStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                  nameKey="name"
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                >
                  {mockPageStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PageStatsChart;
