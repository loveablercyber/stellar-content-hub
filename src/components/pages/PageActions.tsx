
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Button
} from "@/components/ui/button";
import {
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  Globe,
  EyeOff,
} from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Page } from '@/types/page';

interface PageActionsProps {
  page: Page;
  onPublishToggle: (pageId: string) => void;
  onDeleteConfirm: (pageId: string) => void;
}

const PageActions: React.FC<PageActionsProps> = ({ 
  page, 
  onPublishToggle, 
  onDeleteConfirm 
}) => {
  return (
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
        <DropdownMenuItem onClick={() => onPublishToggle(page.id)}>
          {page.published ? (
            <>
              <EyeOff className="mr-2 h-4 w-4" />
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
                onClick={() => onDeleteConfirm(page.id)} 
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Excluir
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PageActions;
