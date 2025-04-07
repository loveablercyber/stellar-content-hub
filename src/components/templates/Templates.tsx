
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Download, Palette } from 'lucide-react';
import { toast } from 'sonner';
import TemplateCard from './TemplateCard';
import { templates } from './templatesData';
import SiteCustomizer from './SiteCustomizer';

const Templates: React.FC = () => {
  const [installingTemplate, setInstallingTemplate] = useState<string | null>(null);

  const handleInstallTemplate = (templateId: string) => {
    setInstallingTemplate(templateId);
    
    // Simulate installation process
    setTimeout(() => {
      setInstallingTemplate(null);
      toast.success('Template instalado com sucesso!');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <h1 className="cms-heading">Modelos e Personalização</h1>
      
      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="templates">Modelos Prontos</TabsTrigger>
          <TabsTrigger value="customize">Personalizar Site</TabsTrigger>
        </TabsList>
        
        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                isInstalling={installingTemplate === template.id}
                onInstall={() => handleInstallTemplate(template.id)}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="customize" className="space-y-6">
          <SiteCustomizer />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Templates;
