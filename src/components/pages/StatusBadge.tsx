
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface StatusBadgeProps {
  published: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ published }) => {
  return (
    <Badge 
      variant={published ? "default" : "outline"} 
      className={published ? "bg-green-100 text-green-800 hover:bg-green-100" : "text-gray-500"}
    >
      {published ? 'Publicada' : 'Rascunho'}
    </Badge>
  );
};

export default StatusBadge;
