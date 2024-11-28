import { InventoryItem } from '../types/inventory';

export const sampleInventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'レトルトカレー',
    quantity: 10,
    expirationDate: '2025-12-31',
    category: '食料品',
    notes: '1人前 200g',
    imageUrl: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=300'
  },
  {
    id: '2',
    name: '保存水 2L',
    quantity: 24,
    expirationDate: '2025-06-30',
    category: '飲料水',
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=300'
  },
  {
    id: '3',
    name: '救急箱セット',
    quantity: 1,
    expirationDate: '2026-12-31',
    category: '医療品',
    notes: '包帯、消毒液、絆創膏など',
    imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=300'
  },
  {
    id: '4',
    name: 'マスク',
    quantity: 100,
    expirationDate: '2023-12-31',
    category: '衛生用品',
    notes: '期限切れ',
    imageUrl: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=300'
  },
  {
    id: '5',
    name: '懐中電灯',
    quantity: 2,
    expirationDate: '2030-12-31',
    category: '防災用品',
    notes: '予備電池付き',
    imageUrl: 'https://images.unsplash.com/photo-1590279960537-0ac004c6a8cb?auto=format&fit=crop&w=300'
  },
  {
    id: '6',
    name: '乾電池（単三）',
    quantity: 24,
    expirationDate: '2024-03-31',
    category: 'その他',
    notes: '残り1ヶ月以内',
    imageUrl: 'https://images.unsplash.com/photo-1619641805634-b867f535071c?auto=format&fit=crop&w=300'
  },
  {
    id: '7',
    name: '缶詰（サバ）',
    quantity: 5,
    expirationDate: '2023-10-15',
    category: '食料品',
    notes: '期限切れ',
    imageUrl: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=300'
  },
  {
    id: '8',
    name: '消毒液',
    quantity: 2,
    expirationDate: '2024-02-28',
    category: '医療品',
    notes: '残り2ヶ月以内',
    imageUrl: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=300'
  },
  {
    id: '9',
    name: '非常食セット',
    quantity: 1,
    expirationDate: '2023-11-30',
    category: '食料品',
    notes: '期限切れ',
    imageUrl: 'https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&w=300'
  }
];