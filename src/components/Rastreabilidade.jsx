import React, { useState } from 'react';
import { Tag, Search, CheckCircle2, Truck } from 'lucide-react';

export default function FeiraDigital({ lotes = [] }) {
  const [filtro, setFiltro] = useState('');

  const lotesFiltrados = lotes.filter(
    (item) =>
      item.id.toLowerCase().includes(filtro.toLowerCase()) ||
      item.produtor.toLowerCase().includes(filtro.toLowerCase()) ||
      item.produto.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Feira Digital & Rastreabilidade</h1>
        <p className="text-gray-600">Acompanhamento da origem dos alimentos através das etiquetas de lote geradas.</p>
      </div>

      {/* Busca */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center space-x-3">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por código do lote (ex: LOTE-003), produto ou produtor..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full text-sm outline-none text-gray-700"
        />
      </div>

      {/* Grid de Lotes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lotesFiltrados.map((lote) => (
          <div key={lote.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-flex items-center space-x-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-mono font-bold">
                  <Tag className="h-3 w-3" />
                  <span>{lote.id}</span>
                </span>
                <h3 className="text-lg font-bold text-gray-800 mt-2">{lote.produto}</h3>
              </div>
              <span className={`inline-flex items-center space-x-1 text-xs px-2.5 py-1 rounded-full font-medium ${
                lote.status === 'Disponível na Feira' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {lote.status === 'Disponível na Feira' ? <CheckCircle2 className="h-3 w-3" /> : <Truck className="h-3 w-3" />}
                <span>{lote.status}</span>
              </span>
            </div>

            <div className="text-sm text-gray-600 space-y-1 pt-2 border-t border-gray-50">
              <p><span className="font-semibold text-gray-700">Produtor Responsável:</span> {lote.produtor}</p>
              <p><span className="font-semibold text-gray-700">Data de Registro/Colheita:</span> {lote.colheita}</p>
              <p><span className="font-semibold text-gray-700">Validade Estimada:</span> {lote.validade}</p>
            </div>
          </div>
        ))}

        {lotesFiltrados.length === 0 && (
          <div className="col-span-full bg-white p-8 text-center text-gray-500 rounded-lg border border-dashed border-gray-300">
            Nenhum lote encontrado.
          </div>
        )}
      </div>
    </div>
  );
}