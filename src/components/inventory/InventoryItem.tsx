import React from 'react';
import { Edit2, Trash2, Image as ImageIcon, Calendar, Package } from 'lucide-react';
import { InventoryItem as InventoryItemType } from '../../types/inventory';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { formatDate } from '../../utils/dateUtils';
import { ExpirationBadge } from '../ExpirationBadge';

interface InventoryItemProps {
  item: InventoryItemType;
  onEdit: (item: InventoryItemType) => void;
  onDelete: (id: string) => void;
  categoryColor: string;
}

export function InventoryItem({ item, onEdit, onDelete, categoryColor }: InventoryItemProps) {
  return (
    <Card className="hover-scale animate-fade-in">
      <div className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="w-full sm:w-24 h-48 sm:h-24 mb-3 sm:mb-0 flex-shrink-0 rounded-lg overflow-hidden">
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-gray-300" />
              </div>
            )}
          </div>
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
              <div className="space-y-1 w-full sm:w-auto">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Package className="w-4 h-4 mr-1" />
                    <span>{item.quantity}個</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(item.expirationDate)}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge color={categoryColor}>{item.category}</Badge>
                  <ExpirationBadge expirationDate={item.expirationDate} />
                </div>
                {item.notes && (
                  <p className="text-sm text-gray-600 mt-2">{item.notes}</p>
                )}
              </div>
              <div className="flex space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2">
                <button
                  onClick={() => onEdit(item)}
                  className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors"
                  title="編集"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  title="削除"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}