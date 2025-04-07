
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
import { Search, FilePlus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Page } from '@/types/page';
import { mockPages } from '@/data/mockPages';
import { formatDate } from '@/utils/formatters';
import PageActions from './PageActions';
import StatusBadge from './StatusBadge';

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

  const handleDeletePage = (pageId: string) => {
    setPages(pages.filter(page => page.id !== pageId));
    toast.success('Página excluída com sucesso!');
    setDeletePageId(null);
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
                    <StatusBadge published={page.published} />
                  </TableCell>
                  <TableCell className="text-right">
                    <PageActions
                      page={page}
                      onPublishToggle={handlePublishToggle}
                      onDeleteConfirm={handleDeletePage}
                    />
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
