import React, { useState } from 'react';
import { PlusCircle, ShoppingBag, CheckCircle, Clock } from 'lucide-react';
import { mockComprasPAA } from '../data/mockData';

export default function ComprasPAA({ onAdicionarCompra }) {
  const [compras, setCompras] = useState(mockComprasPAA);
  const [produtor, setProdutor] = useState('');
  const [comunidade, setComunidade] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidadeKg, setQuantidadeKg] = useState('');
  const [precoKg, setPrecoKg] = useState('');

  const valorTotalCalculado = (Number(quantidadeKg) || 0) * (Number(precoKg) || 0);

  const handleAdicionarCompra = (e) => {
    e.preventDefault();
    if (!produtor || !produto || !quantidadeKg || !precoKg) return;

    const novaCompra = {
      id: compras.length + 1,
      produtor,
      comunidade: comunidade || 'Sede',
      produto,
      quantidadeKg: Number(quantidadeKg),
      precoKg: Number(precoKg),
      status: 'Pendente',
    };

    // Salva na lista de compras
    setCompras([novaCompra, ...compras]);
    
    // Dispara a geração automática do lote para a Feira Digital
    if (onAdicionarCompra) {
      onAdicionarCompra(novaCompra);
    }

    // Limpar formulário
    setProdutor('');
    setComunidade('');
    setProduto('');
    setQuantidadeKg('');
    setPrecoKg('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Gestão de Compras PAA / PNAE</h1>
        <p className="text-gray-600">Registro de aquisições e geração automática de etiquetas de rastreabilidade.</p>
      </div>

      {/* Formulário */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <PlusCircle className="h-5 w-5 text-emerald-600" />
          <span>Registrar Nova Compra (Gera Lote Automaticamente)</span>
        </h2>

        <form onSubmit={handleAdicionarCompra} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Produtor</label>
            <input
              type="text"
              placeholder="Ex: Severino de Souza"
              value={produtor}
              onChange={(e) => setProdutor(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Comunidade Rural</label>
            <input
              type="text"
              placeholder="Ex: Serra dos Cavalos"
              value={comunidade}
              onChange={(e) => setComunidade(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Produto / Cultivo</label>
            <input
              type="text"
              placeholder="Ex: Cenoura"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade (kg)</label>
            <input
              type="number"
              placeholder="Ex: 150"
              value={quantidadeKg}
              onChange={(e) => setQuantidadeKg(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preço por kg (R$)</label>
            <input
              type="number"
              step="0.01"
              placeholder="Ex: 4.50"
              value={precoKg}
              onChange={(e) => setPrecoKg(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Valor Total Estimado</label>
            <div className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm font-bold text-emerald-700">
              R$ {valorTotalCalculado.toFixed(2)}
            </div>
          </div>

          <div className="md:col-span-3 flex justify-end">
            <button
              type="submit"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-5 py-2 rounded-md transition text-sm flex items-center space-x-2"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Confirmar Registro e Gerar Lote</span>
            </button>
          </div>
        </form>
      </div>

      {/* Tabela de Compras */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Histórico de Pedidos</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3">Produtor</th>
                <th className="px-6 py-3">Comunidade</th>
                <th className="px-6 py-3">Produto</th>
                <th className="px-6 py-3">Qtd (kg)</th>
                <th className="px-6 py-3">Preço / kg</th>
                <th className="px-6 py-3">Total</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {compras.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{c.produtor}</td>
                  <td className="px-6 py-4">{c.comunidade}</td>
                  <td className="px-6 py-4">{c.produto}</td>
                  <td className="px-6 py-4">{c.quantidadeKg} kg</td>
                  <td className="px-6 py-4">R$ {c.precoKg.toFixed(2)}</td>
                  <td className="px-6 py-4 font-bold text-gray-800">
                    R$ {(c.quantidadeKg * c.precoKg).toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      c.status === 'Aprovado' ? 'bg-emerald-100 text-emerald-800' :
                      c.status === 'Entregue' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {c.status === 'Aprovado' || c.status === 'Entregue' ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <Clock className="h-3 w-3" />
                      )}
                      <span>{c.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}