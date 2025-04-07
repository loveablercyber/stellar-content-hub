
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AreaChart, 
  Legend, 
  Tooltip, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Area, 
  ResponsiveContainer 
} from 'recharts';
import { mockDailyStats } from '@/data/mockStatisticsData';

const OverviewChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visualizações e Visitantes Únicos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={mockDailyStats}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="pageViews" 
                name="Visualizações" 
                stroke="#1e40af" 
                fill="#3b82f6" 
                fillOpacity={0.6} 
              />
              <Area 
                type="monotone" 
                dataKey="uniqueVisitors" 
                name="Visitantes Únicos" 
                stroke="#0891b2" 
                fill="#06b6d4" 
                fillOpacity={0.6} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverviewChart;
