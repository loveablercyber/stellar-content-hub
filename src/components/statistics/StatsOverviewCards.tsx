
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StatsOverviewCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Total de Visualizações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">1.094</div>
          <p className="text-sm text-green-600 mt-1">+12% em relação ao período anterior</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Visitantes Únicos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">712</div>
          <p className="text-sm text-green-600 mt-1">+8% em relação ao período anterior</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Tempo Médio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">2m 47s</div>
          <p className="text-sm text-red-600 mt-1">-5% em relação ao período anterior</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsOverviewCards;
