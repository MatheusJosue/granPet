export type PriceTable = {
  titulo: string;
  nota?: string;
  colunas: string[];
  linhas: string[][];
};

const faixas = ["0 a 10kg", "10 a 20kg", "20 a 30kg", "30 a 50kg", "50 a 70kg"];

function tabelaPorFaixa(
  titulo: string,
  valores: number[],
  nota?: string,
): PriceTable {
  return {
    titulo,
    nota,
    colunas: ["Porte", "Valor"],
    linhas: faixas.map((faixa, i) => [faixa, formatBRL(valores[i])]),
  };
}

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function tabelaPacote(
  titulo: string,
  porBanho: number[],
  pacote: number[],
  nota?: string,
): PriceTable {
  return {
    titulo,
    nota,
    colunas: ["Porte", "Valor por banho", "Valor do pacote"],
    linhas: faixas.map((faixa, i) => [
      faixa,
      formatBRL(porBanho[i]),
      formatBRL(pacote[i]),
    ]),
  };
}

export const banhoAvulso: PriceTable[] = [
  tabelaPorFaixa("Banho avulso — pelo curto", [55, 65, 90, 120, 160]),
  tabelaPorFaixa("Banho avulso — pelo longo", [60, 78, 120, 150, 240]),
  tabelaPorFaixa(
    "Banho avulso — sub-pelo",
    [65, 90, 160, 240, 320],
    "Spitz, Akita, Chow Chow, Husky, Samoieda, Bernese, Collie, Pequinês, West Highland White Terrier, Pastor de Shetland.",
  ),
  {
    titulo: "Banho — gatos",
    colunas: ["Porte", "Valor"],
    linhas: [
      ["Pequeno", formatBRL(120)],
      ["Grande", formatBRL(150)],
      ["Extra grande", formatBRL(180)],
    ],
  },
];

export const higienizacaoETosa: PriceTable[] = [
  tabelaPorFaixa(
    "Tosa higiênica avulsa",
    [10, 15, 20, 25, 30],
    "Já incluída automaticamente em qualquer pacote de banho.",
  ),
  tabelaPorFaixa("Tosa na tesoura — avulsa", [120, 145, 180, 230, 320]),
  tabelaPorFaixa(
    "Tosa na máquina — pelo curto (avulsa)",
    [93, 115, 175, 230, 275],
  ),
  tabelaPorFaixa(
    "Tosa na máquina — pelo longo (avulsa)",
    [98, 120, 185, 240, 290],
  ),
  tabelaPorFaixa(
    "Tosa avulsa — sub-pelo",
    [140, 180, 300, 400, 500],
    "Spitz, Akita, Chow Chow, Husky, Samoieda, Bernese, Collie, Pequinês, West Highland White Terrier, Pastor de Shetland.",
  ),
  {
    titulo: "Tosa — gatos",
    colunas: ["Serviço", "Valor"],
    linhas: [["Tosa de gato (todos os portes)", formatBRL(200)]],
  },
  {
    titulo: "Tosa trimming — Golden Retriever",
    nota: "Duração aproximada de 3h. Sempre cobrada no valor avulso (já inclui o banho) — não disponível em pacotes.",
    colunas: ["Serviço", "Valor"],
    linhas: [["Tosa trimming Golden", formatBRL(250)]],
  },
];

export const pacotes: PriceTable[] = [
  tabelaPacote(
    "Pacote mensal — pelo curto",
    [45, 55, 75, 95, 120],
    [180, 220, 300, 380, 480],
  ),
  tabelaPacote(
    "Pacote mensal — pelo longo",
    [50, 60, 80, 97.5, 192],
    [200, 240, 320, 390, 768],
  ),
  tabelaPacote(
    "Pacote mensal — sub-pelo",
    [52.5, 72.5, 127.5, 192.5, 250],
    [210, 290, 510, 770, 1000],
  ),
  tabelaPacote(
    "Pacote quinzenal — sub-pelo",
    [58.5, 81, 144, 216, 288],
    [117, 162, 288, 432, 576],
    "Exclusivo para raças de sub-pelo.",
  ),
  tabelaPacote(
    "Pacote quinzenal — Golden Retriever",
    [54, 70.2, 120, 135, 216],
    [108, 140.4, 240, 270, 432],
    "Exclusivo para Golden Retriever.",
  ),
];

export const pacotesInfo = [
  "Pacote mensal: 4 banhos + 1 tosa higiênica + 1 hidratação + limpeza de ouvidos + corte de unhas.",
  "Pacote quinzenal (sub-pelo e Golden): inclui 1 tosa higiênica, limpeza de ouvidos e corte de unhas.",
  "Tosa na tesoura/máquina não está incluída no valor do pacote de banho — é cobrada à parte quando solicitada.",
  "Primeiro banho do pet na GranPet: 50% de desconto (promoção não válida para tosa).",
  "Agendando os banhos do pacote mensal para segunda, terça ou quarta-feira: 10% de desconto adicional (20% no primeiro mês).",
];

export const extras: PriceTable[] = [
  tabelaPorFaixa("Remoção de nó", [20, 30, 40, 50, 60]),
  tabelaPorFaixa("Remoção de pelo (desembolo)", [15, 30, 45, 60, 75]),
  {
    titulo: "Hidratação",
    nota: "Reconstrução, nutrição e hidratação da pelagem.",
    colunas: ["Linha", "Valor"],
    linhas: [
      ["Flash", formatBRL(35)],
      ["Hidra Luxo", formatBRL(45)],
      ["Pro-Volume", formatBRL(45)],
      ["Sense", formatBRL(45)],
      ["Liso", formatBRL(45)],
      ["Detox", formatBRL(45)],
      ["William", formatBRL(45)],
    ],
  },
  {
    titulo: "Outros extras",
    colunas: ["Serviço", "Valor"],
    linhas: [
      ["Corte de unha avulso", formatBRL(20)],
      ["Banho de ozônio terapêutico", formatBRL(25)],
    ],
  },
];
