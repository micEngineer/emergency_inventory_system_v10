import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { getDaysUntilExpiration, isExpired } from '../utils/dateUtils';

interface ExpirationBadgeProps {
  expirationDate: string;
}

export function ExpirationBadge({ expirationDate }: ExpirationBadgeProps) {
  const daysUntilExpiration = getDaysUntilExpiration(expirationDate);
  const expired = isExpired(expirationDate);
  
  if (expired) {
    return (
      <div className="flex items-center space-x-1 text-red-600 bg-red-50 px-2 py-1 rounded-md">
        <AlertTriangle className="w-4 h-4" />
        <span className="text-sm font-medium">期限切れ</span>
      </div>
    );
  }
  
  if (daysUntilExpiration <= 30) {
    return (
      <div className="flex items-center space-x-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
        <Clock className="w-4 h-4" />
        <span className="text-sm font-medium">残り{daysUntilExpiration}日</span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-2 py-1 rounded-md">
      <CheckCircle className="w-4 h-4" />
      <span className="text-sm font-medium">期限内</span>
    </div>
  );
}