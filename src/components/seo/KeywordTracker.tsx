
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

const keywordsData = [
  { 
    keyword: 'cms responsivo', 
    position: 3, 
    change: 2, 
    volume: 1800, 
    difficulty: 'Média',
    url: '/produtos/cms'
  },
  { 
    keyword: 'melhor cms para blogs', 
    position: 5, 
    change: -1, 
    volume: 2500, 
    difficulty: 'Alta',
    url: '/blog/comparativo-cms'
  },
  { 
    keyword: 'cms para e-commerce', 
    position: 8, 
    change: 3, 
    volume: 3200, 
    difficulty: 'Alta',
    url: '/produtos/ecommerce'
  },
  { 
    keyword: 'gerenciador de conteúdo', 
    position: 12, 
    change: 0, 
    volume: 1500, 
    difficulty: 'Média',
    url: '/produtos/gerenciador'
  },
  { 
    keyword: 'cms open source', 
    position: 7, 
    change: 5, 
    volume: 2100, 
    difficulty: 'Baixa',
    url: '/produtos/opensource'
  },
  { 
    keyword: 'como criar um blog', 
    position: 15, 
    change: -2, 
    volume: 4500, 
    difficulty: 'Alta',
    url: '/blog/criar-blog'
  },
  { 
    keyword: 'hospedagem cms', 
    position: 4, 
    change: 1, 
    volume: 1200, 
    difficulty: 'Média',
    url: '/servicos/hospedagem'
  },
];

const KeywordTracker: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Rastreamento de Palavras-chave</CardTitle>
          <CardDescription>Posições no Google</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Palavra-chave</TableHead>
                <TableHead>Posição</TableHead>
                <TableHead>Mudança</TableHead>
                <TableHead>Volume de Busca</TableHead>
                <TableHead>Dificuldade</TableHead>
                <TableHead>URL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keywordsData.map((item) => (
                <TableRow key={item.keyword}>
                  <TableCell className="font-medium">{item.keyword}</TableCell>
                  <TableCell>{item.position}</TableCell>
                  <TableCell>
                    {item.change > 0 ? (
                      <div className="flex items-center text-green-500">
                        <ArrowUp className="h-4 w-4 mr-1" />
                        <span>{item.change}</span>
                      </div>
                    ) : item.change < 0 ? (
                      <div className="flex items-center text-red-500">
                        <ArrowDown className="h-4 w-4 mr-1" />
                        <span>{Math.abs(item.change)}</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-500">
                        <Minus className="h-4 w-4 mr-1" />
                        <span>0</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{item.volume}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        item.difficulty === 'Alta' 
                          ? 'bg-red-100 text-red-800 border-red-200' 
                          : item.difficulty === 'Média'
                          ? 'bg-yellow-100 text-yellow-800 border-yellow-200' 
                          : 'bg-green-100 text-green-800 border-green-200'
                      }
                    >
                      {item.difficulty}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-cms-primary font-medium">
                    {item.url}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default KeywordTracker;
