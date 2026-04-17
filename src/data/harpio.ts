export type PricingTier = {
  faixa: number;
  start: number;
  final: number;
  ato1: number;
  ato2: number;
  ato3: number;
  ato4: number;
  total: number;
  garantia: string;
};

export const pricingTiers: PricingTier[] = [
  { faixa: 1, start: 2000, final: 5000, ato1: 1750, ato2: 2500, ato3: 2000, ato4: 1000, total: 7250, garantia: "1 mês" },
  { faixa: 2, start: 5001, final: 8000, ato1: 2800, ato2: 4000, ato3: 3200, ato4: 1600, total: 11600, garantia: "2 meses" },
  { faixa: 3, start: 8001, final: 12000, ato1: 4200, ato2: 6000, ato3: 4800, ato4: 2400, total: 17400, garantia: "3 meses" },
  { faixa: 4, start: 12001, final: 15000, ato1: 5250, ato2: 7500, ato3: 6000, ato4: 3000, total: 21750, garantia: "4 meses" },
  { faixa: 5, start: 15001, final: 20000, ato1: 7000, ato2: 10000, ato3: 8000, ato4: 4000, total: 29000, garantia: "5 meses" },
  { faixa: 6, start: 20001, final: 25000, ato1: 8750, ato2: 12500, ato3: 10000, ato4: 5000, total: 36250, garantia: "6 meses" },
  { faixa: 7, start: 25001, final: 35000, ato1: 12250, ato2: 17500, ato3: 14000, ato4: 7000, total: 50750, garantia: "7 meses" },
  { faixa: 8, start: 35001, final: 50000, ato1: 17500, ato2: 25000, ato3: 20000, ato4: 10000, total: 72500, garantia: "sob demanda" },
];

export const atoSplits = [
  { key: "ato1", label: "1º ATO", title: "Strategic Mapping", subtitle: "Competition", share: 0.35 },
  { key: "ato2", label: "2º ATO", title: "Approach & Screening", subtitle: "Sprint", share: 0.05 },
  { key: "ato3", label: "3º ATO", title: "Interview", subtitle: "HeadHunter Expert", share: 0.4 },
  { key: "ato4", label: "4º ATO", title: "Placement", subtitle: "", share: 0.2 },
] as const;

export type AtoGroup = {
  ato: "ato1" | "ato2" | "ato3" | "ato4";
  title: string;
  tagline?: string;
  items: string[];
};

export const deliverables: AtoGroup[] = [
  // 1º ATO
  {
    ato: "ato1",
    title: "Análise do Segmento",
    items: [
      "Análise setorial — visão macro",
      "Tendências de contratação para o setor",
      "Perfis e áreas críticas para atração de talentos",
      "Análise da concorrência (mínimo de 10 players)",
    ],
  },
  {
    ato: "ato1",
    title: "Zoom Organizacional — Talent",
    items: [
      "Contexto da empresa no setor analisado",
      "Zoom na área de Talent Acquisition (informações públicas)",
      "Maturidade percebida (Glassdoor, LinkedIn, Reclame Aqui, Indeed, Google)",
      "Análise das vagas abertas (Carreiras | LinkedIn)",
      "Análise estratégica das top skills",
    ],
  },
  {
    ato: "ato1",
    title: "Análise da Job Description",
    items: [
      "Análise crítica da JD (Vaga vs Empresa vs Setor)",
      "Revisão da JD e panorama da vaga",
      "Perguntas estratégicas de alinhamento com stakeholders",
      "Análise crítica do pacote (Fixo vs Bônus/Variável vs Benefícios)",
      "Perfil idealizado para a função",
      "Empresas para campo de busca (hunting)",
    ],
  },
  {
    ato: "ato1",
    title: "Mapeamento Estratégico (Concorrência)",
    items: [
      "Alinhamento da vaga com stakeholders",
      "Mapeamento de 20 profissionais com aderência >70%",
      "Dados: nome, cargo atual, segmento, empresa, tempo de experiência e evidências de aderência",
    ],
  },
  // 2º ATO
  {
    ato: "ato2",
    title: "Invista com Confiança",
    tagline: "Previsibilidade e segurança no seu orçamento de recrutamento",
    items: [
      "Entrevista garantida ou seu investimento de volta",
      "Chega de ghosting — seu tempo é valioso",
    ],
  },
  {
    ato: "ato2",
    title: "Acesso a Talentos Passivos de Alto Nível",
    items: [
      "Talent pool exclusivo, fora do radar dos job boards",
      "Profissionais já validados por nossos especialistas",
      "Alcance candidatos que outras empresas não conseguem",
    ],
  },
  {
    ato: "ato2",
    title: "Engajamento Profissional e Estratégico",
    items: [
      "Apresentação da oportunidade de forma consultiva",
      "Alinhamento de expectativas desde o primeiro contato",
    ],
  },
  {
    ato: "ato2",
    title: "Agilidade Imbatível no Processo",
    items: [
      "Elimine a triagem demorada de currículos",
      "Prioridade no agendamento de entrevistas",
      "Redução drástica do tempo total de contratação",
      "Até 10x mais econômico que consultorias tradicionais",
    ],
  },
  // 3º ATO
  {
    ato: "ato3",
    title: "Qualidade Assegurada em Cada Etapa",
    items: [
      "Profissionais validados por especialistas em recrutamento",
      "Perfis enriquecidos com análises comportamentais e técnicas",
      "Maior assertividade para contratações de sucesso",
      "Shortlist com candidatos avaliados e realmente interessados",
    ],
  },
  {
    ato: "ato3",
    title: "Calibração de Perfil — 100% Alinhamento",
    items: [
      "Deep diving na cultura organizacional",
      "Mapeamento de requisitos técnicos",
      "Definição de soft skills prioritárias",
      "Alinhamento de faixa salarial",
    ],
  },
  {
    ato: "ato3",
    title: "Hunting Ativo — 150+ Perfis/Sprint",
    items: [
      "Busca em bases proprietárias",
      "Abordagem direta de competidores",
      "Ativação de networking estratégico",
      "Mapeamento de lideranças do setor",
    ],
  },
  {
    ato: "ato3",
    title: "Deep Assessment — Top 3-5 Shortlist",
    items: [
      "Entrevistas por competência",
      "Avaliação de fit cultural",
      "Validação técnica especializada",
      "Análise de potencial de crescimento",
    ],
  },
  // 4º ATO
  {
    ato: "ato4",
    title: "Contratação Garantida",
    tagline: "No modelo Expert, aplicamos garantia por permanência na função",
    items: [
      "Acompanhamento da proposta e negociação final",
      "Suporte no onboarding do profissional contratado",
      "Garantia de reposição conforme faixa contratada",
    ],
  },
];

export const brlFormat = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
