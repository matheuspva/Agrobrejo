import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ComprasPAA from './components/ComprasPAA';
import FeiraDigital from './components/Rastreabilidade';
import { mockFeiraDigital } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Estado global de lotes para rastreabilidade
  const [lotes, setLotes] = useState(mockFeiraDigital);

  // Função para cadastrar uma nova compra e GERAR O LOTE AUTOMATICAMENTE
  const handleAdicionarCompraELote = (novaCompra) => {
    // 1. Criar o código do novo lote (ex: LOTE-003, LOTE-004...)
    const proximoNumero = lotes.length + 1;
    const codigoLote = `LOTE-${String(proximoNumero).padStart(3, '0')}`;

    // 2. Montar o objeto do lote com data de colheita e validade estimada
    const hoje = new Date().toISOString().split('T')[0];
    const dataValidade = new Date();
    dataValidade.setDate(dataValidade.getDate() + 15); // Validade padrão de 15 dias

    const novoLote = {
      id: codigoLote,
      produtor: novaCompra.produtor,
      produto: novaCompra.produto,
      colheita: hoje,
      validade: dataValidade.toISOString().split('T')[0],
      status: 'Disponível na Feira',
    };

    // 3. Adicionar na lista de rastreabilidade da Feira Digital
    setLotes([novoLote, ...lotes]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'compras' && (
          <ComprasPAA onAdicionarCompra={handleAdicionarCompraELote} />
        )}
        {activeTab === 'feira' && <FeiraDigital lotes={lotes} />}
      </main>

      <footer className="bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        AgroBrejo — Sistema de Gestão Agrícola e Segurança Alimentar | Brejo da Madre de Deus - PE
      </footer>
    </div>
  );
}

export default App;