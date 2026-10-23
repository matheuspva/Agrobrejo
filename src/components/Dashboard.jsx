import React from 'react';
import { Users, Home, Scale, DollarSign, AlertTriangle } from 'lucide-react';
import { mockDashboardData } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* Título da Seção */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Painel SADRMA / Nutricionistas</h1>
        <p className="text-gray-600">Visão geral da agricultura familiar e segurança alimentar no município.</p>
      </div>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total de Produtores</p>
            <p className="text-2xl font-bold text-gray-800">{mockDashboardData.totalProdutores}</p>
          </div>
          <div className="bg-emerald-50 p-3 rounded-full text-emerald-600">
            <Users className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Famílias Atendidas</p>
            <p className="text-2xl font-bold text-gray-800">{mockDashboardData.familiasAtendidas}</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-full text-blue-600">
            <Home className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Volume Arrecadado</p>
            <p className="text-2xl font-bold text-gray-800">{(mockDashboardData.volumeArrecadadoKg / 1000).toFixed(1)} toneladas</p>
          </div>
          <div className="bg-amber-50 p-3 rounded-full text-amber-600">
            <Scale className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Recurso Investido</p>
            <p className="text-2xl font-bold text-gray-800">{mockDashboardData.recursoInvestido}</p>
          </div>
          <div className="bg-emerald-50 p-3 rounded-full text-emerald-600">
            <DollarSign className="h-6 w-6" />
          </div>
        </div>

      </div>

      {/* Alerta Logístico / Nutricional */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg flex items-start space-x-3">
        <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-sm font-semibold text-amber-800">Alertas Nutricionais e Logísticos</h3>
          <p className="text-sm text-amber-700">
            Há {mockDashboardData.alertasNutricionais} lotes próximos ao vencimento aguardando despacho para as escolas municipais da rede PNAE.
          </p>
        </div>
      </div>

    </div>
  );
}