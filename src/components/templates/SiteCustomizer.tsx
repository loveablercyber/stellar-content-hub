
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Palette, Image, Save, Loader2, Layout } from 'lucide-react';

const SiteCustomizer: React.FC = () => {
  const [saving, setSaving] = useState(false);
  const [colors, setColors] = useState({
    primary: '#1e40af',
    secondary: '#3b82f6',
    accent: '#60a5fa',
    text: '#1e293b',
    background: '#ffffff',
  });

  const handleColorChange = (colorKey: keyof typeof colors, value: string) => {
    setColors((prev) => ({
      ...prev,
      [colorKey]: value,
    }));
  };

  const handleSaveChanges = () => {
    setSaving(true);
    
    // Simulate saving changes
    setTimeout(() => {
      setSaving(false);
      toast.success('Alterações salvas com sucesso!');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="colors">
        <TabsList>
          <TabsTrigger value="colors">
            <Palette className="h-4 w-4 mr-2" />
            Cores
          </TabsTrigger>
          <TabsTrigger value="images">
            <Image className="h-4 w-4 mr-2" />
            Imagens
          </TabsTrigger>
          <TabsTrigger value="layout">
            <Layout className="h-4 w-4 mr-2" />
            Layout
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="colors" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Cores do Site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Cor Primária</Label>
                  <div className="flex gap-2">
                    <Input
                      id="primaryColor"
                      type="color"
                      value={colors.primary}
                      onChange={(e) => handleColorChange('primary', e.target.value)}
                      className="w-14 h-10 p-1"
                    />
                    <Input
                      value={colors.primary}
                      onChange={(e) => handleColorChange('primary', e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="secondaryColor">Cor Secundária</Label>
                  <div className="flex gap-2">
                    <Input
                      id="secondaryColor"
                      type="color"
                      value={colors.secondary}
                      onChange={(e) => handleColorChange('secondary', e.target.value)}
                      className="w-14 h-10 p-1"
                    />
                    <Input
                      value={colors.secondary}
                      onChange={(e) => handleColorChange('secondary', e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="accentColor">Cor de Destaque</Label>
                  <div className="flex gap-2">
                    <Input
                      id="accentColor"
                      type="color"
                      value={colors.accent}
                      onChange={(e) => handleColorChange('accent', e.target.value)}
                      className="w-14 h-10 p-1"
                    />
                    <Input
                      value={colors.accent}
                      onChange={(e) => handleColorChange('accent', e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="textColor">Cor do Texto</Label>
                  <div className="flex gap-2">
                    <Input
                      id="textColor"
                      type="color"
                      value={colors.text}
                      onChange={(e) => handleColorChange('text', e.target.value)}
                      className="w-14 h-10 p-1"
                    />
                    <Input
                      value={colors.text}
                      onChange={(e) => handleColorChange('text', e.target.value)}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="backgroundColor">Cor de Fundo</Label>
                <div className="flex gap-2">
                  <Input
                    id="backgroundColor"
                    type="color"
                    value={colors.background}
                    onChange={(e) => handleColorChange('background', e.target.value)}
                    className="w-14 h-10 p-1"
                  />
                  <Input
                    value={colors.background}
                    onChange={(e) => handleColorChange('background', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <h3 className="text-lg font-medium mb-3">Prévia das Cores</h3>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {Object.entries(colors).map(([key, color]) => (
                    <div key={key} className="flex flex-col items-center">
                      <div
                        className="w-16 h-16 rounded border"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-xs mt-1 capitalize">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="images" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Imagens do Site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="logoUpload" className="block mb-2">Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-32 border rounded flex items-center justify-center bg-gray-50">
                      <div className="text-center p-2">
                        <Image className="mx-auto h-10 w-10 text-gray-400" />
                        <p className="text-xs text-gray-500 mt-1">Prévia do logo</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Input id="logoUpload" type="file" className="mb-2" />
                      <p className="text-xs text-muted-foreground">
                        Recomendado: PNG ou SVG com fundo transparente, 200x200px
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Label htmlFor="bannerUpload" className="block mb-2">Banner Principal</Label>
                  <div className="space-y-2">
                    <div className="w-full aspect-[3/1] border rounded flex items-center justify-center bg-gray-50">
                      <div className="text-center p-4">
                        <Image className="mx-auto h-10 w-10 text-gray-400" />
                        <p className="text-sm text-gray-500 mt-2">Imagem do banner principal</p>
                      </div>
                    </div>
                    <Input id="bannerUpload" type="file" />
                    <p className="text-xs text-muted-foreground">
                      Recomendado: Formato 3:1, mínimo 1200x400px
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Label htmlFor="faviconUpload" className="block mb-2">Favicon</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 border rounded flex items-center justify-center bg-gray-50">
                      <div className="text-center">
                        <Image className="mx-auto h-6 w-6 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <Input id="faviconUpload" type="file" className="mb-2" />
                      <p className="text-xs text-muted-foreground">
                        Recomendado: Formato ICO ou PNG, 32x32px
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="layout" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Layout do Site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Estilo do Menu</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border rounded-md p-2 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-gray-100 flex flex-col">
                          <div className="h-6 bg-gray-200 w-full"></div>
                          <div className="flex-1 flex items-center justify-center">
                            <p className="text-xs text-center">Menu Horizontal</p>
                          </div>
                        </div>
                      </div>
                      <div className="border rounded-md p-2 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-gray-100 flex">
                          <div className="w-1/4 bg-gray-200 h-full"></div>
                          <div className="flex-1 flex items-center justify-center">
                            <p className="text-xs text-center">Menu Vertical</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Estilo do Rodapé</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border rounded-md p-2 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-gray-100 flex flex-col">
                          <div className="flex-1"></div>
                          <div className="h-8 bg-gray-200 w-full"></div>
                        </div>
                        <p className="text-xs text-center mt-1">Rodapé Simples</p>
                      </div>
                      <div className="border rounded-md p-2 cursor-pointer hover:border-primary">
                        <div className="h-20 bg-gray-100 flex flex-col">
                          <div className="flex-1"></div>
                          <div className="h-12 bg-gray-200 w-full"></div>
                        </div>
                        <p className="text-xs text-center mt-1">Rodapé Completo</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Label>Fontes</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="space-y-2">
                      <Label htmlFor="headingFont" className="text-sm">Fonte de Títulos</Label>
                      <select 
                        id="headingFont" 
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="inter">Inter</option>
                        <option value="roboto">Roboto</option>
                        <option value="opensans">Open Sans</option>
                        <option value="montserrat">Montserrat</option>
                        <option value="playfair">Playfair Display</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bodyFont" className="text-sm">Fonte de Texto</Label>
                      <select 
                        id="bodyFont" 
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="inter">Inter</option>
                        <option value="roboto">Roboto</option>
                        <option value="opensans">Open Sans</option>
                        <option value="lato">Lato</option>
                        <option value="sourcesanspro">Source Sans Pro</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end">
        <Button onClick={handleSaveChanges} disabled={saving}>
          {saving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Salvando...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Salvar Alterações
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SiteCustomizer;
