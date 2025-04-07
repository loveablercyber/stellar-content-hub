
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Loader2, Save, ArrowLeft, Eye } from 'lucide-react';
import { toast } from 'sonner';

const pageSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  slug: z.string().min(1, 'O slug é obrigatório').regex(/^[a-z0-9-]+$/, 'O slug deve conter apenas letras minúsculas, números e hífens'),
  content: z.string(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  metaKeywords: z.string().optional(),
  published: z.boolean().default(false),
});

type PageFormValues = z.infer<typeof pageSchema>;

interface MockPage extends PageFormValues {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  author: string;
}

const mockExistingPages: MockPage[] = [
  {
    id: '1',
    title: 'Página Inicial',
    slug: 'home',
    content: '<h1>Bem-vindo ao nosso site!</h1><p>Esta é a página inicial do nosso site.</p>',
    metaTitle: 'Página Inicial | Meu Site',
    metaDescription: 'Página inicial do meu site com informações sobre nossos serviços.',
    metaKeywords: 'página inicial, home, site, serviços',
    published: true,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-03-20'),
    author: 'Admin User'
  },
  {
    id: '2',
    title: 'Sobre Nós',
    slug: 'about',
    content: '<h1>Sobre Nossa Empresa</h1><p>Somos uma empresa dedicada a fornecer os melhores serviços.</p>',
    metaTitle: 'Sobre Nós | Meu Site',
    metaDescription: 'Conheça mais sobre nossa empresa e nossa história.',
    metaKeywords: 'sobre, empresa, história, valores',
    published: true,
    createdAt: new Date('2023-02-10'),
    updatedAt: new Date('2023-02-10'),
    author: 'Admin User'
  }
];

const PageEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const isEditMode = !!id;

  // Fetch page data if in edit mode
  const existingPage = isEditMode 
    ? mockExistingPages.find(page => page.id === id) 
    : null;

  const defaultValues: PageFormValues = existingPage 
    ? {
        title: existingPage.title,
        slug: existingPage.slug,
        content: existingPage.content,
        metaTitle: existingPage.metaTitle || '',
        metaDescription: existingPage.metaDescription || '',
        metaKeywords: existingPage.metaKeywords || '',
        published: existingPage.published
      }
    : {
        title: '',
        slug: '',
        content: '',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        published: false
      };

  const form = useForm<PageFormValues>({
    resolver: zodResolver(pageSchema),
    defaultValues
  });

  const onSubmit = async (values: PageFormValues) => {
    setSaving(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Page data:', values);
      
      toast.success(isEditMode 
        ? 'Página atualizada com sucesso!' 
        : 'Página criada com sucesso!');
      
      navigate('/pages');
    } catch (error) {
      console.error('Error saving page:', error);
      toast.error('Erro ao salvar a página');
    } finally {
      setSaving(false);
    }
  };

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    form.setValue('title', title);
    
    if (!isEditMode || !form.getValues('slug')) {
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      
      form.setValue('slug', slug);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => navigate('/pages')}
          className="h-9 w-9"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="cms-heading">
          {isEditMode ? 'Editar Página' : 'Nova Página'}
        </h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6">
            <Tabs defaultValue="content">
              <TabsList className="mb-4">
                <TabsTrigger value="content">Conteúdo</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
                <TabsTrigger value="settings">Configurações</TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Título</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Título da página" 
                                {...field} 
                                onChange={handleTitleChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="slug-da-pagina" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              URL da página: /pagina/{field.value}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Conteúdo</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Conteúdo da página (HTML ou Markdown)" 
                                className="min-h-[300px]"
                                {...field} 
                              />
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
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="metaTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Título SEO</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Título para SEO" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Título que aparecerá nos resultados de busca
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="metaDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Descrição SEO</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Descrição para SEO" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Descrição que aparecerá nos resultados de busca
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="metaKeywords"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Palavras-chave</FormLabel>
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
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="published"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Publicada</FormLabel>
                              <FormDescription>
                                Esta página está visível no site
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-between mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/pages')}
              >
                Cancelar
              </Button>
              
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    // Preview functionality would go here
                    toast.info('Funcionalidade de preview em desenvolvimento');
                  }}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Visualizar
                </Button>
                
                <Button type="submit" disabled={saving} className="bg-cms-primary hover:bg-cms-dark">
                  {saving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Salvando...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Salvar
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PageEditor;
