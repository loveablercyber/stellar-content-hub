
import { Page } from '@/types/page';

export const mockPages: Page[] = [
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
