import { InventoryItem } from '../types/inventory';
import { isExpired } from './dateUtils';

export function searchItems(items: InventoryItem[], searchQuery: string): InventoryItem[] {
  const query = searchQuery.toLowerCase().trim();
  
  if (!query) return items;
  
  return items.filter(item => 
    item.name.toLowerCase().includes(query) ||
    item.notes?.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );
}

export function filterByCategory(items: InventoryItem[], category: string | null): InventoryItem[] {
  if (!category) return items;
  return items.filter(item => item.category === category);
}

export function filterExpiredItems(items: InventoryItem[]): InventoryItem[] {
  return items.filter(item => isExpired(item.expirationDate));
}