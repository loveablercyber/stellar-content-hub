
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  Search,
  FilePlus,
  Globe,
  GlobeOff,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

interface Page {
  id: string;
  title: string;
  slug: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}

const mockPages: Page[] = [
  {
    id: '1',
    title: 'Página Inicial',
    slug: 'home',
    author: 'Admin User',
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-03-20'),
    published: true
  },
  {
    id: '2',
    title: 'Sobre Nós',
    slug: 'about',
    author: 'Admin User',
    createdAt: new Date('2023-02-10'),
    updatedAt: new Date('2023-02-10'),
    published: true
  },
  {
    id: '3',
    title: 'Serviços',
    slug: 'services',
    author: 'Editor User',
    createdAt: new Date('2023-03-05'),
    updatedAt: new Date('2023-04-12'),
    published: true
  },
  {
    id: '4',
    title: 'Contato',
    slug: 'contact',
    author: 'Editor User',
    createdAt: new Date('2023-03-15'),
    updatedAt: new Date('2023-03-15'),
    published: true
  },
  {
    id: '5',
    title: 'Blog',
    slug: 'blog',
    author: 'Admin User',
    createdAt: new Date('2023-04-01'),
    updatedAt: new Date('2023-05-10'),
    published: true
  },
  {
    id: '6',
    title: 'Termos de Uso',
    slug: 'terms',
    author: 'Admin User',
    createdAt: new Date('2023-05-12'),
    updatedAt: new Date('2023-05-12'),
    published: false
  },
  {
    id: '7',
    title: 'Política de Privacidade',
    slug: 'privacy',
    author: 'Admin User',
    createdAt: new Date('2023-05-12'),
    updatedAt: new Date('2023-05-12'),
    published: false
  }
];

const PagesList: React.FC = () => {
  const [pages, setPages] = useState<Page[]>(mockPages);
  const [searchQuery, setSearchQuery] = useState('');
  const [deletePageId, setDeletePageId] = useState<string | null>(null);

  const filteredPages = pages.filter(page => 
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePublishToggle = (pageId: string) => {
    setPages(pages.map(page => 
      page.id === pageId ? { ...page, published: !page.published } : page
    ));
    
    const page = pages.find(p => p.id === pageId);
    if (page) {
      toast.success(`Página ${page.published ? 'despublicada' : 'publicada'} com sucesso!`);
    }
  };

  const handleDeletePage = () => {
    if (deletePageId) {
      setPages(pages.filter(page => page.id !== deletePageId));
      toast.success('Página excluída com sucesso!');
      setDeletePageId(null);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="cms-heading">Gerenciar Páginas</h1>
        <Link to="/pages/new">
          <Button className="bg-cms-primary hover:bg-cms-dark">
            <FilePlus className="mr-2 h-4 w-4" />
            Nova Página
          </Button>
        </Link>
      </div>

      <div className="flex items-center mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar páginas..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Autor</TableHead>
              <TableHead>Criado em</TableHead>
              <TableHead>Atualizado em</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPages.length > 0 ? (
              filteredPages.map((page) => (
                <TableRow key={page.id}>
                  <TableCell className="font-medium">{page.title}</TableCell>
                  <TableCell>{page.slug}</TableCell>
                  <TableCell>{page.author}</TableCell>
                  <TableCell>{formatDate(page.createdAt)}</TableCell>
                  <TableCell>{formatDate(page.updatedAt)}</TableCell>
                  <TableCell>
                    <Badge variant={page.published ? "default" : "outline"} className={page.published ? "bg-green-100 text-green-800 hover:bg-green-100" : "text-gray-500"}>
                      {page.published ? 'Publicada' : 'Rascunho'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link to={`/pages/${page.id}`} className="flex items-center w-full">
                            <Eye className="mr-2 h-4 w-4" />
                            Visualizar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to={`/pages/${page.id}/edit`} className="flex items-center w-full">
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handlePublishToggle(page.id)}>
                          {page.published ? (
                            <>
                              <GlobeOff className="mr-2 h-4 w-4" />
                              Despublicar
                            </>
                          ) : (
                            <>
                              <Globe className="mr-2 h-4 w-4" />
                              Publicar
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <DropdownMenuItem onSelect={(e) => {
                              e.preventDefault();
                              setDeletePageId(page.id);
                            }} className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Excluir
                            </DropdownMenuItem>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                              <AlertDialogDescription>
                                Tem certeza que deseja excluir a página "{page.title}"? Esta ação não pode ser desfeita.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={handleDeletePage} 
                                className="bg-red-600 text-white hover:bg-red-700"
                              >
                                Excluir
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                  Nenhuma página encontrada
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PagesList;
