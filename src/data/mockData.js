export const mockDashboardData = {
  totalProdutores: 142,
  familiasAtendidas: 530,
  volumeArrecadadoKg: 18500,
  recursoInvestido: "R$ 245.800,00",
  alertasNutricionais: 3,
};

export const mockComprasPAA = [
  { id: 1, produtor: "José da Silva", comunidade: "Brejo Velho", produto: "Banana Pacovã", quantidadeKg: 500, precoKg: 4.50, status: "Aprovado" },
  { id: 2, produtor: "Maria do Carmo", comunidade: "Serra dos Cavalos", produto: "Mandioca (Farinha)", quantidadeKg: 300, precoKg: 8.00, status: "Pendente" },
  { id: 3, produtor: "Antônio Santos", comunidade: "Fazenda Nova", produto: "Tomate Orgânico", quantidadeKg: 200, precoKg: 6.50, status: "Entregue" },
];

export const mockFeiraDigital = [
  { id: "LOTE-001", produtor: "José da Silva", produto: "Banana Pacovã", colheita: "2026-10-20", validade: "2026-10-30", status: "Em Trânsito" },
  { id: "LOTE-002", produtor: "Maria do Carmo", produto: "Mandioca", colheita: "2026-10-18", validade: "2026-11-18", status: "Disponível na Feira" },
];