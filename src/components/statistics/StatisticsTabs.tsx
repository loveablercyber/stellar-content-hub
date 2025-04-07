
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OverviewChart from './OverviewChart';
import PageStatsChart from './PageStatsChart';
import DeviceStatsChart from './DeviceStatsChart';

const StatisticsTabs: React.FC = () => {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>
        <TabsTrigger value="pages">Por Página</TabsTrigger>
        <TabsTrigger value="devices">Por Dispositivo</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <OverviewChart />
      </TabsContent>
      
      <TabsContent value="pages">
        <PageStatsChart />
      </TabsContent>
      
      <TabsContent value="devices">
        <DeviceStatsChart />
      </TabsContent>
    </Tabs>
  );
};

export default StatisticsTabs;
