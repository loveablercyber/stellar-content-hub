
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Download, Loader2 } from 'lucide-react';
import { Template } from './types';

interface TemplateCardProps {
  template: Template;
  isInstalling: boolean;
  onInstall: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ 
  template, 
  isInstalling, 
  onInstall 
}) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={template.image} 
          alt={template.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle>{template.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-2">{template.description}</p>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Páginas incluídas:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {template.pages.map((page, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                {page}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onInstall} 
          disabled={isInstalling}
          className="w-full"
        >
          {isInstalling ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Instalando...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Instalar Template
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
