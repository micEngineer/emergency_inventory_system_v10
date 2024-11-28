import React from 'react';
import { ShieldCheck, Plus, Settings, Menu } from 'lucide-react';

interface HeaderProps {
  onAddItem: () => void;
  onToggleSettings: () => void;
}

export function Header({ onAddItem, onToggleSettings }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-50 p-2 rounded-lg">
              <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Emergency Inventory</h1>
              <p className="hidden sm:block text-sm text-gray-500">Prepare for tomorrow, today</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={onToggleSettings}
              className="p-2 sm:px-3 sm:py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              aria-label="Settings"
            >
              <Settings className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Settings</span>
            </button>
            <button
              onClick={onAddItem}
              className="p-2 sm:px-4 sm:py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              aria-label="Add Item"
            >
              <Plus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Add Item</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}