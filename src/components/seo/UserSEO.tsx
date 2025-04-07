
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Users, Eye, ArrowUp, ArrowDown } from 'lucide-react';
import UserDemographics from './UserDemographics';
import UserBehavior from './UserBehavior';
import UserEngagement from './UserEngagement';

const UserSEO: React.FC = () => {
  const [activeTab, setActiveTab] = useState('demographics');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Visitantes Únicos</CardTitle>
            <CardDescription>Últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">8,249</div>
              <div className="flex items-center text-green-500">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span className="text-sm">12%</span>
              </div>
            </div>
            <Progress value={72} className="h-2 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            <CardDescription>Registros de Usuários</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">3.6%</div>
              <div className="flex items-center text-red-500">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span className="text-sm">0.8%</span>
              </div>
            </div>
            <Progress value={36} className="h-2 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
            <CardDescription>Tempo na página</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">2:15</div>
              <div className="flex items-center text-green-500">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span className="text-sm">18%</span>
              </div>
            </div>
            <Progress value={65} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="demographics">Demografia</TabsTrigger>
          <TabsTrigger value="behavior">Comportamento</TabsTrigger>
          <TabsTrigger value="engagement">Engajamento</TabsTrigger>
        </TabsList>
        
        <TabsContent value="demographics">
          <UserDemographics />
        </TabsContent>
        
        <TabsContent value="behavior">
          <UserBehavior />
        </TabsContent>
        
        <TabsContent value="engagement">
          <UserEngagement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserSEO;
