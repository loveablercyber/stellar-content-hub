
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserSEO from './UserSEO';
import SEOAnalytics from './SEOAnalytics';
import KeywordTracker from './KeywordTracker';

const SEODashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="cms-heading">SEO Dashboard</h1>
      </div>

      <Tabs defaultValue="usuarios" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="usuarios">Usuários</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="keywords">Palavras-chave</TabsTrigger>
        </TabsList>
        
        <TabsContent value="usuarios">
          <UserSEO />
        </TabsContent>
        
        <TabsContent value="analytics">
          <SEOAnalytics />
        </TabsContent>
        
        <TabsContent value="keywords">
          <KeywordTracker />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEODashboard;
