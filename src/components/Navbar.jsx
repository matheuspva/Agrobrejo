import React from 'react';
import { LayoutDashboard, ShoppingCart, Store, Sprout } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="bg-emerald-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo e Título */}
          <div className="flex items-center space-x-3">
            <Sprout className="h-8 w-8 text-emerald-300" />
            <span className="font-bold text-xl tracking-wide">AgroBrejo</span>
            <span className="text-xs bg-emerald-700 px-2 py-1 rounded text-emerald-200 hidden sm:inline-block">
              Brejo da Madre de Deus - PE
            </span>
          </div>

          {/* Botões de Navegação */}
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                activeTab === 'dashboard' ? 'bg-emerald-900 text-white' : 'text-emerald-100 hover:bg-emerald-700'
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden md:inline">Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('compras')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                activeTab === 'compras' ? 'bg-emerald-900 text-white' : 'text-emerald-100 hover:bg-emerald-700'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden md:inline">Compras PAA/PNAE</span>
            </button>

            <button
              onClick={() => setActiveTab('feira')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                activeTab === 'feira' ? 'bg-emerald-900 text-white' : 'text-emerald-100 hover:bg-emerald-700'
              }`}
            >
              <Store className="h-4 w-4" />
              <span className="hidden md:inline">Rastreabilidade</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}