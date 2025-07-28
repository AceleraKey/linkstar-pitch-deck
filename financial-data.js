// Dados financeiros reais extraídos do Plano de Negócios e Dashboard HTML da LinkStar

// Dados de MRR (Receita Recorrente Mensal) - Baseados nas projeções do plano
const mrrProjections = {
    labels: ['Jan/26', 'Fev/26', 'Mar/26', 'Abr/26', 'Mai/26', 'Jun/26', 'Jul/26'],
    pessimista: [50000, 80000, 120000, 160000, 200000, 240000, 275000],
    realista: [150000, 250000, 350000, 420000, 480000, 520000, 550000],
    otimista: [300000, 500000, 700000, 850000, 950000, 1050000, 1100000]
};

// Dados de custos mensais reais do dashboard
const monthlyCosts = {
    labels: ['Ago/25', 'Set/25', 'Out/25', 'Nov/25', 'Dez/25', 'Jan/26', 'Fev/26', 'Mar/26', 'Abr/26', 'Mai/26', 'Jun/26', 'Jul/26'],
    costs: [95000, 125000, 165000, 185000, 175000, 145000, 125000, 85000, 85000, 85000, 85000, 85000],
    cumulative: [95000, 220000, 385000, 570000, 745000, 890000, 1015000, 1100000, 1185000, 1270000, 1355000, 1440000]
};

// Estrutura de custos por categoria (do dashboard HTML)
const costBreakdown = {
    desenvolvimento: 450000, // 40%
    marketing: 220000, // 20%
    operacao: 330000, // 30%
    capex: 131000 // 10%
};

// Dados de CAC e LTV baseados no plano
const unitEconomics = {
    cac: 35, // Custo de Aquisição de Cliente
    ltv: 375, // Lifetime Value
    paybackMonths: 1.5,
    ltvCacRatio: 10.7
};

// Projeção de ROI para investidores
const roiProjection = {
    labels: ['Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5'],
    roi: [0, 1.5, 4, 10, 20] // Múltiplos do investimento inicial
};

// Dados de burn rate (saldo de caixa)
const burnRate = {
    labels: ['Ago/25', 'Set/25', 'Out/25', 'Nov/25', 'Dez/25', 'Jan/26', 'Fev/26', 'Mar/26'],
    cashBalance: [1000000, 875000, 750000, 585000, 400000, 225000, 100000, 15000],
    monthlyCosts: [125000, 125000, 165000, 185000, 175000, 145000, 125000, 85000]
};

// Dados de conversão de usuários (baseado nos 22M de seguidores do Léo Santana)
const userConversion = {
    totalFollowers: 22000000,
    conversionRates: {
        pessimista: 0.0005, // 0.05%
        realista: 0.001, // 0.10%
        otimista: 0.002 // 0.20%
    },
    subscribers: {
        pessimista: 11000,
        realista: 22000,
        otimista: 44000
    }
};

// Estrutura de planos de assinatura
const subscriptionPlans = {
    bronze: { price: 0, percentage: 90 },
    fan: { price: 19.90, percentage: 7 },
    superfan: { price: 39.90, percentage: 3 }
};

// Cronograma de fases do projeto
const projectPhases = [
    { name: 'Concepção', period: 'Ago-Out/25', cost: 390000 },
    { name: 'Desenvolvimento', period: 'Nov-Dez/25', cost: 310000 },
    { name: 'Lançamento', period: 'Jan-Fev/26', cost: 260000 },
    { name: 'Crescimento', period: 'Mar-Jul/26', cost: 265000 },
    { name: 'Expansão', period: 'Ago/26+', cost: 'Series A' }
];

// Equipamentos CAPEX
const equipmentCosts = [
    { item: 'Câmeras Profissionais (3x)', cost: 45000 },
    { item: 'Switcher de Vídeo', cost: 25000 },
    { item: 'Drone com Câmera 4K', cost: 15000 },
    { item: 'Sistema de Áudio', cost: 20000 },
    { item: 'Iluminação LED', cost: 18000 },
    { item: 'Computadores e Servidores', cost: 8000 }
];

// Dados de mercado
const marketData = {
    brazilMusicRevenue: 3486000000, // R$ 3.486 bilhões
    globalStreamingUsers: 752000000, // 752 milhões
    nationalMusicPercentage: 76, // 76% das músicas mais ouvidas são nacionais
    medallionFunding: 13700000 // US$ 13.7 milhões
};

// Estrutura societária
const equityStructure = {
    rafaelGandarela: 60,
    diegoPeixoto: 10,
    eduardoAzulay: 10,
    leoSantana: 10,
    investidorAnjo: 10
};

export {
    mrrProjections,
    monthlyCosts,
    costBreakdown,
    unitEconomics,
    roiProjection,
    burnRate,
    userConversion,
    subscriptionPlans,
    projectPhases,
    equipmentCosts,
    marketData,
    equityStructure
};

