
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Save } from 'lucide-react';
import { toast } from 'sonner';

const siteSettingsSchema = z.object({
  siteName: z.string().min(1, 'O nome do site é obrigatório'),
  siteDescription: z.string(),
  logoUrl: z.string().url('URL da logo inválida').or(z.string().length(0)),
  faviconUrl: z.string().url('URL do favicon inválida').or(z.string().length(0)),
  primaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Formato de cor inválido'),
  secondaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Formato de cor inválido'),
  facebookUrl: z.string().url('URL do Facebook inválida').or(z.string().length(0)),
  twitterUrl: z.string().url('URL do Twitter inválida').or(z.string().length(0)),
  instagramUrl: z.string().url('URL do Instagram inválida').or(z.string().length(0)),
  linkedinUrl: z.string().url('URL do LinkedIn inválida').or(z.string().length(0)),
  defaultMetaTitle: z.string(),
  defaultMetaDescription: z.string(),
  defaultMetaKeywords: z.string(),
  googleAnalyticsId: z.string(),
});

type SiteSettingsFormValues = z.infer<typeof siteSettingsSchema>;

const SiteSettings: React.FC = () => {
  const [saving, setSaving] = useState(false);

  // Mock data
  const defaultValues: SiteSettingsFormValues = {
    siteName: 'Meu Site CMS',
    siteDescription: 'Um site incrível feito com o nosso CMS',
    logoUrl: 'https://example.com/logo.png',
    faviconUrl: 'https://example.com/favicon.ico',
    primaryColor: '#1e40af',
    secondaryColor: '#3b82f6',
    facebookUrl: 'https://facebook.com/meusite',
    twitterUrl: 'https://twitter.com/meusite',
    instagramUrl: 'https://instagram.com/meusite',
    linkedinUrl: 'https://linkedin.com/company/meusite',
    defaultMetaTitle: '{page} | Meu Site CMS',
    defaultMetaDescription: 'Meu Site CMS - Um site incrível feito com o nosso CMS',
    defaultMetaKeywords: 'cms, site, web, conteúdo',
    googleAnalyticsId: 'UA-XXXXXXXXX-X',
  };

  const form = useForm<SiteSettingsFormValues>({
    resolver: zodResolver(siteSettingsSchema),
    defaultValues
  });

  const onSubmit = async (values: SiteSettingsFormValues) => {
    setSaving(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Site settings:', values);
      
      toast.success('Configurações salvas com sucesso!');
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Erro ao salvar as configurações');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="cms-heading">Configurações do Site</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Tabs defaultValue="general">
            <TabsList className="mb-4">
              <TabsTrigger value="general">Geral</TabsTrigger>
              <TabsTrigger value="appearance">Aparência</TabsTrigger>
              <TabsTrigger value="social">Redes Sociais</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Gerais</CardTitle>
                  <CardDescription>
                    Configure as informações básicas do seu site
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="siteName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome do Site</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome do seu site" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="siteDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição do Site</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descrição do seu site" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="appearance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Aparência</CardTitle>
                  <CardDescription>
                    Personalize a aparência do seu site
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="logoUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL da Logo</FormLabel>
                          <FormControl>
                            <Input placeholder="https://exemplo.com/logo.png" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="faviconUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL do Favicon</FormLabel>
                          <FormControl>
                            <Input placeholder="https://exemplo.com/favicon.ico" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="primaryColor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cor Primária</FormLabel>
                          <div className="flex gap-2">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <div 
                              className="w-10 h-10 rounded border" 
                              style={{ backgroundColor: field.value }}
                            />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="secondaryColor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cor Secundária</FormLabel>
                          <div className="flex gap-2">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <div 
                              className="w-10 h-10 rounded border" 
                              style={{ backgroundColor: field.value }}
                            />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="social" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                  <CardDescription>
                    Configure os links para suas redes sociais
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="facebookUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Facebook</FormLabel>
                          <FormControl>
                            <Input placeholder="https://facebook.com/seusite" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="twitterUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Twitter</FormLabel>
                          <FormControl>
                            <Input placeholder="https://twitter.com/seusite" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="instagramUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instagram</FormLabel>
                          <FormControl>
                            <Input placeholder="https://instagram.com/seusite" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="linkedinUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/company/seusite" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="seo" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>SEO Global</CardTitle>
                  <CardDescription>
                    Configure as informações de SEO padrão para o site
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="defaultMetaTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Título Padrão</FormLabel>
                        <FormControl>
                          <Input placeholder="{page} | Nome do Site" {...field} />
                        </FormControl>
                        <FormDescription>
                          Use {'{page}'} para incluir o título da página
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="defaultMetaDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição Padrão</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descrição padrão do site para SEO" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="defaultMetaKeywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Palavras-chave Padrão</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="palavra1, palavra2, palavra3" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Palavras-chave separadas por vírgula
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>
                    Configure ferramentas de análise para seu site
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="googleAnalyticsId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ID do Google Analytics</FormLabel>
                        <FormControl>
                          <Input placeholder="UA-XXXXXXXXX-X ou G-XXXXXXXXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-end mt-6">
            <Button type="submit" disabled={saving} className="bg-cms-primary hover:bg-cms-dark">
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Salvando...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Configurações
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SiteSettings;
