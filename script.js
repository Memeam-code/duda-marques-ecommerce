/* ============================================================
   DUDA MARQUES — script.js
   ============================================================ */

/* ── CONFIGURAÇÕES DA LOJA ─────────────────────────────────── */
const CONFIG = {
  NOME_LOJA:       "DUDA MARQUES",
  SLOGAN:          "COSMÉTICOS PROFISSIONAIS",
  WHATSAPP:        "5521985873917",      // número com DDI
  WHATSAPP_DISPLAY:"(21) 98587-3917",
  FRETE_PAC:       19.90,
  FRETE_SEDEX:     39.90,
  FRETE_GRATIS:    299,                  // valor mínimo p/ frete grátis
  COR_PRIMARIA:    "#C8A96E",
  ANO_COPY:        2024,
};

/* ── DADOS DOS PRODUTOS ────────────────────────────────────── */
/*
   Para adicionar um produto:
   1. Escolha a linha correta no array LINHAS
   2. Adicione um objeto ao array produtos[] seguindo o modelo abaixo:
   {
     id:      (número único),
     nome:    "Nome do produto",
     desc:    "Descrição curta de até 1 linha",
     preco:   00.00,
     img:     ""           ← URL da imagem (deixe vazio para placeholder)
   }
*/
const LINHAS = [
  {
    id:      "shampoos",
    nome:    "SHAMPOOS",
    tag:     "Limpeza & Cuidado",
    desc:    "Limpeza profunda e cuidado especializado para cada tipo de cabelo.",
    cor:     "#DDE8F0",
    emoji:   "🧴",
    icone:   "images/banner-shampoos-agua.png",
    banner:  "images/banner-shampoos.jpeg",
    produtos: [
      {
        id: 1, nome: "Shampoo E.D.T.A",
        desc: "Limpeza profunda + neutralização de metais pesados",
        detalhes: "Composto pelo ativo etilenodiaminotetracético (quelador de metais pesados), esse shampoo efetua uma limpeza profunda no córtex e ao mesmo tempo neutraliza a ação dos metais pesados, evitando futuros cortes químicos com ativos incompatíveis.",
        beneficios: [
          "Quelador de metais pesados (E.D.T.A)",
          "Limpeza profunda do córtex",
          "Neutraliza metais residuais",
          "Previne cortes químicos futuros",
        ],
        variantes: [
          { sku: "1-1L",   tamanho: "1 L",    preco: 50.00, img: "images/shampoo-edta-1L-v2.jpeg" },
          { sku: "1-300",  tamanho: "300 ml", preco: 25.00, img: "images/shampoo-edta-300ml-v2.jpeg" },
        ]
      },
      {
        id: 2, nome: "Shampoo Hidratante",
        desc: "Limpeza profunda com maciez e brilho",
        detalhes: "Tem a função de efetuar uma limpeza profunda no córtex, deixando o cabelo macio, sedoso e com brilho natural intenso.",
        beneficios: [
          "Limpeza profunda do córtex",
          "Deixa o cabelo macio",
          "Devolve o brilho natural",
          "Indicado para uso diário",
        ],
        variantes: [
          { sku: "2-1L",   tamanho: "1 L",    preco: 50.00, img: "images/shampoo-hidratante-1L.jpeg" },
          { sku: "2-300",  tamanho: "300 ml", preco: 25.00, img: "images/shampoo-hidratante-300ml.jpeg" },
        ]
      },
      {
        id: 3, nome: "Shampoo Anti Caspa",
        desc: "Elimina a caspa e controla a oleosidade",
        detalhes: "Composto pelos ativos cetoconazol e ácido salicílico, age como antifúngico, atuando contra a levedura Malassezia — principal envolvida na caspa. Reduz a quantidade do fungo no couro cabeludo, diminui coceira, vermelhidão e descamação, controlando quadros como dermatite seborreica.",
        beneficios: [
          "Ação antifúngica com cetoconazol",
          "Reduz coceira e vermelhidão",
          "Combate caspa e descamação",
          "Controla dermatite seborreica",
        ],
        variantes: [
          { sku: "3-1L",   tamanho: "1 L",    preco: 50.00, img: "images/shampoo-anticaspa-1L.jpeg" },
          { sku: "3-300",  tamanho: "300 ml", preco: 25.00, img: "images/shampoo-anticaspa-300ml.jpeg" },
        ]
      },
      {
        id: 4,
        nome: "Shampoo Mentolado",
        desc: "Limpeza profunda com sensação refrescante e ação antisséptica",
        classe: "frio",
        detalhes: "Tem a função de fazer uma limpeza profunda no córtex, combatendo a oleosidade do couro cabeludo. Causa leve vasodilatação (estimulando a circulação local) e tem ação antisséptica suave, dando aquela sensação de couro cabeludo \"geladinho\" e limpo.",
        beneficios: [
          "Limpeza profunda do córtex",
          "Combate a oleosidade do couro cabeludo",
          "Leve vasodilatação (estimula a circulação)",
          "Ação antisséptica suave",
          "Sensação refrescante \"geladinha\"",
        ],
        modoUso: "Aplique no cabelo úmido, massageie suavemente o couro cabeludo, deixe agir por 1 a 2 minutos para sentir a sensação refrescante e enxágue.",
        variantes: [
          { sku: "4-1L",   tamanho: "1 L",    preco: 100.00, img: "images/shampoo-mentolado-1L.jpeg" },
          { sku: "4-300",  tamanho: "300 ml", preco: 50.00,  img: "images/shampoo-mentolado-300ml.jpeg" },
        ]
      },
      {
        id: 5, nome: "Shampoo Matizador",
        desc: "Limpeza profunda + efeito platinado",
        detalhes: "Composto por pigmento 100% aniônico, tem a função de efetuar uma limpeza profunda no córtex e devolver o efeito platinado aos cabelos loiros e grisalhos.",
        beneficios: [
          "Pigmento 100% aniônico",
          "Limpeza profunda do córtex",
          "Devolve o efeito platinado",
          "Ideal para loiros e grisalhos",
        ],
        tamanho: "300 ml", preco: 50.00,
        img: "images/shampoo-matizador-300ml.jpeg"
      },
    ],
  },
  {
    id:      "mascaras",
    nome:    "MÁSCARAS CAPILARES",
    tag:     "Tratamento Intensivo",
    desc:    "Tratamentos intensivos para recuperar a beleza e saúde dos seus fios.",
    cor:     "#F0DDE8",
    emoji:   "✨",
    icone:   "images/banner-mascaras-rosa.png",
    banner:  "images/banner-mascaras.jpeg",
    produtos: [
      {
        id: 24, nome: "Máscara Antioxidante",
        desc: "Protege os fios dos radicais livres",
        detalhes: "Composta por ativos antioxidantes, é usada em cabelos que passaram por processo de coloração e descoloração — neutralizando os resíduos de peróxido de hidrogênio e evitando futuros cortes químicos.",
        beneficios: [
          "Neutraliza resíduos de peróxido",
          "Indicada pós coloração/descoloração",
          "Previne cortes químicos",
          "Protege contra radicais livres",
        ],
        variantes: [
          { sku: "24-1K",   tamanho: "1 kg",   preco: 80.00, img: "images/mascara-antioxidante-1kg.jpeg" },
          { sku: "24-650",  tamanho: "650 g", preco: 55.00, img: "images/mascara-antioxidante-650g.jpeg" },
        ]
      },
      {
        id: 6, nome: "Máscara Lipídica",
        desc: "Nutrição lipídica profunda",
        detalhes: "Atua devolvendo os lipídios (gordura) à fibra, restaurando o brilho e a maciez perdidos do cabelo.",
        beneficios: [
          "Devolve lipídios à fibra capilar",
          "Restaura brilho natural",
          "Aumenta a maciez dos fios",
        ],
        variantes: [
          { sku: "6-1K",   tamanho: "1 kg",   preco: 50.00, img: "images/mascara-lipidica-1kg.jpeg" },
          { sku: "6-650",  tamanho: "650 g", preco: 35.00, img: "images/mascara-lipidica-650g.jpeg" },
        ]
      },
      {
        id: 7, nome: "Máscara Hídrica",
        desc: "Hidratação profunda em até 3 minutos",
        detalhes: "Age devolvendo a parte hídrica (água) ao córtex, restaurando o brilho natural da fibra capilar.",
        beneficios: [
          "Repõe água no córtex capilar",
          "Devolve brilho natural",
          "Hidratação profunda rápida",
        ],
        variantes: [
          { sku: "7-1K",   tamanho: "1 kg",   preco: 50.00, img: "images/mascara-hidrica-1kg.jpeg" },
          { sku: "7-650",  tamanho: "650 g", preco: 35.00, img: "images/mascara-hidrica-650g.jpeg" },
        ]
      },
      {
        id: 8, nome: "Máscara Reconstrutora",
        desc: "Reconstrói a fibra capilar por dentro",
        detalhes: "Rica em aminoácidos e proteínas, age instantaneamente na fibra capilar através das ligações peptídicas e pontes de enxofre (cisteína).",
        beneficios: [
          "Rica em aminoácidos e proteínas",
          "Refaz ligações peptídicas",
          "Reconstrói pontes de enxofre",
          "Ação instantânea na fibra",
        ],
        variantes: [
          { sku: "8-1K",   tamanho: "1 kg",   preco: 50.00, img: "images/mascara-reconstrutora-1kg.jpeg" },
          { sku: "8-650",  tamanho: "650 g", preco: 35.00, img: "images/mascara-reconstrutora-650g.jpeg" },
        ]
      },
      {
        id: 9, nome: "Máscara Matizadora",
        desc: "Neutraliza tons amarelados e devolve o efeito platinado",
        detalhes: "Composta por pigmento 100% aniônico, tem a finalidade de tratar a fibra capilar e devolver o efeito platinado aos cabelos loiros e grisalhos.",
        beneficios: [
          "Pigmento 100% aniônico",
          "Devolve efeito platinado",
          "Trata e matiza ao mesmo tempo",
          "Ideal para loiros e grisalhos",
        ],
        variantes: [
          { sku: "9-1K",   tamanho: "1 kg",   preco: 50.00, img: "images/mascara-matizadora-1kg.jpeg" },
          { sku: "9-650",  tamanho: "650 g", preco: 35.00, img: "images/mascara-matizadora-650g.jpeg" },
        ]
      },
      {
        id: 10, nome: "Máscara para Cabelos Afro",
        desc: "Tratamento especial para cabelos extremamente secos",
        detalhes: "Criada para tratar cabelos extremamente secos. Por ser uma fibra frágil e sem brilho, ela trata, estabiliza o pH e devolve brilho e maciez aos fios afro.",
        beneficios: [
          "Trata cabelos extremamente secos",
          "Estabiliza o pH da fibra",
          "Devolve brilho e maciez",
          "Específica para fios afro",
        ],
        variantes: [
          { sku: "10-1K",  tamanho: "1 kg",   preco: 50.00, img: "images/mascara-afro-1kg.jpeg" },
          { sku: "10-650", tamanho: "650 g", preco: 35.00, img: "images/mascara-afro-650g.jpeg" },
        ]
      },
      {
        id: 11, nome: "Máscara Super Reconstrutora",
        desc: "O dobro de ativos para fios muito danificados",
        detalhes: "Com o dobro dos ativos da reconstrutora tradicional. Rica em aminoácidos e proteínas, age instantaneamente na fibra capilar através das ligações peptídicas e pontes de enxofre (cisteína).",
        beneficios: [
          "Dobro de ativos reconstrutores",
          "Rica em aminoácidos e proteínas",
          "Refaz ligações peptídicas",
          "Para danos químicos severos",
        ],
        variantes: [
          { sku: "11-1K",  tamanho: "1 kg",   preco: 80.00, img: "images/mascara-super-reconstrutora-1kg.jpeg" },
          { sku: "11-650", tamanho: "650 g",  preco: 55.00, img: "images/mascara-super-reconstrutora-650g.jpeg" },
        ]
      },
      {
        id: 12, nome: "Máscara Super Hidratante",
        desc: "Hidratação intensa para fios desidratados",
        variantes: [
          { sku: "12-1K",  tamanho: "1 kg",   preco: 80.00, img: "images/mascara-super-hidratante-1kg.jpeg" },
          { sku: "12-650", tamanho: "650 g", preco: 55.00, img: "images/mascara-super-hidratante-650g.jpeg" },
        ]
      },
      {
        id: 13, nome: "Máscara para Cabelos Super Ressecados",
        desc: "Restaura fios fragilizados por processos químicos",
        detalhes: "Aplicada em cabelos fragilizados por processos químicos que perderam boa parte da estrutura no córtex. Tem a função de devolver toda a estrutura do córtex, deixando a fibra macia e com brilho.",
        beneficios: [
          "Restaura estrutura do córtex",
          "Indicada para danos químicos severos",
          "Devolve maciez à fibra",
          "Recupera o brilho perdido",
        ],
        variantes: [
          { sku: "13-1K",  tamanho: "1 kg",   preco: 50.00, img: "images/mascara-super-ressecados-1kg.jpeg" },
          { sku: "13-650", tamanho: "650 g", preco: 35.00, img: "images/mascara-super-ressecados-650g.jpeg" },
        ]
      },
    ],
  },
  {
    id:      "tratamento",
    nome:    "TRATAMENTO RECONSTRUTOR",
    tag:     "Alta Performance",
    desc:    "Tecnologia avançada para reconstrução completa dos fios danificados.",
    cor:     "#E8F0DD",
    emoji:   "💎",
    icone:   "images/banner-tratamento-proteina.png",
    banner:  "images/banner-tratamento.jpeg",
    produtos: [
      {
        id: 14, nome: "Queratina",
        desc: "Reconstrução intensa com queratina hidrolisada",
        detalhes: "A queratina hidrolisada contendo os 20 aminoácidos penetra no córtex refazendo as ligações peptídicas e pontes de enxofre (cisteína), reconstruindo a fibra capilar de dentro para fora.",
        beneficios: [
          "Queratina hidrolisada com 20 aminoácidos",
          "Penetra profundamente no córtex",
          "Refaz ligações peptídicas",
          "Restaura pontes de enxofre (cisteína)",
        ],
        tamanho: "1 L", preco: 50.00, img: "images/queratina-1L.jpeg"
      },
      {
        id: 15, nome: "Colágeno",
        desc: "Reconstrução para cabelos emborrachados e quebradiços",
        detalhes: "Age criando uma liga no córtex em cabelos emborrachados e quebradiços por corte químico, parando instantaneamente o corte químico e reconstruindo a fibra capilar.",
        beneficios: [
          "Para o corte químico instantaneamente",
          "Indicado para cabelos emborrachados",
          "Reconstrói cabelos quebradiços",
          "Cria liga no córtex capilar",
        ],
        tamanho: "500 ml", preco: 50.00, img: "images/colageno-500ml.jpeg"
      },
      {
        id: 16, nome: "Caseína",
        desc: "Blend de proteínas para recuperação instantânea",
        detalhes: "Blend de proteínas e aminoácidos atuando na recuperação instantânea da fibra capilar, repondo nutrientes essenciais ao córtex.",
        beneficios: [
          "Blend de proteínas e aminoácidos",
          "Recuperação instantânea da fibra",
          "Repõe nutrientes essenciais",
        ],
        tamanho: "500 ml", preco: 50.00, img: "images/caseina-500ml.jpeg"
      },
    ],
  },
  {
    id:      "finalizadores",
    nome:    "FINALIZADORES",
    tag:     "Acabamento Perfeito",
    desc:    "O toque final perfeito para definição, brilho e proteção dos seus fios.",
    cor:     "#F0E8DD",
    emoji:   "💫",
    icone:   "images/banner-finalizadores-seda.png",
    banner:  "images/banner-finalizadores.png",
    produtos: [
      {
        id: 17, nome: "Creme de Pentear",
        desc: "Facilita o penteado e deixa o cabelo macio",
        detalhes: "Sua função é tratar e deixar o cabelo macio, facilitando muito na hora de pentear sem causar quebras ou nós.",
        beneficios: [
          "Tratamento durante o penteado",
          "Deixa o cabelo macio",
          "Facilita o desembaraço",
          "Reduz quebras na escovação",
        ],
        variantes: [
          { sku: "17-1K",  tamanho: "1 kg",   preco: 50.00, img: "images/creme-pentear-1kg.jpeg" },
          { sku: "17-650", tamanho: "650 g",  preco: 35.00, img: "images/creme-pentear-650g.jpeg" },
          { sku: "17-300", tamanho: "300 g",  preco: 20.00, img: "images/creme-pentear-300g.jpeg" },
        ]
      },
      {
        id: 18, nome: "Ativador de Cachos",
        desc: "Trata, estabiliza o pH e redefine os cachos",
        detalhes: "Criado no intuito de tratar a fibra capilar, estabilizar o pH e redefinir os cachos novamente, dando vida e movimento aos fios cacheados.",
        beneficios: [
          "Trata a fibra capilar",
          "Estabiliza o pH dos fios",
          "Redefine os cachos naturais",
          "Devolve movimento e vida aos cachos",
        ],
        variantes: [
          { sku: "18-1L",  tamanho: "1 L",    preco: 100.00, img: "images/ativador-cachos-1L.jpeg" },
          { sku: "18-650", tamanho: "650 g",  preco: 65.00,  img: "images/ativador-cachos-650g.jpeg" },
        ]
      },
      {
        id: 19, nome: "Defrizante (Anti Térmico)",
        desc: "Protege a fibra do calor da chapinha e secador",
        detalhes: "Composto por ativos anti térmicos, é utilizado na hora de escovar e pranchar, protegendo a fibra de super aquecimento e evitando o desbotamento da cor.",
        beneficios: [
          "Ativos anti térmicos",
          "Protege da escova e chapinha",
          "Evita super aquecimento da fibra",
          "Previne desbotamento da cor",
        ],
        tamanho: "500 ml", preco: 50.00, img: "images/defrizante-500ml.jpeg"
      },
    ],
  },
  {
    id:      "oleo",
    nome:    "ÓLEO CAPILAR",
    tag:     "Nutrição & Brilho",
    desc:    "Nutrição e brilho incomparáveis com a leveza dos melhores óleos capilares.",
    cor:     "#EEE8D5",
    emoji:   "✦",
    icone:   "images/banner-oleo-dourado.png",
    banner:  "images/banner-oleo.jpeg",
    produtos: [
      {
        id: 20, nome: "Óleo Bifásico para Escovação",
        desc: "Bifásico (aquosa + oleosa) com proteção térmica",
        detalhes: "Separado em duas fases — aquosa e oleosa — tem a função principal de tratar a fibra e proteger do super aquecimento, evitando o desbotamento da fibra capilar na hora de escovar e pranchar.",
        beneficios: [
          "Fórmula em duas fases (aquosa + oleosa)",
          "Trata enquanto protege",
          "Protetor térmico para escova e chapinha",
          "Previne desbotamento da fibra",
          "Brilho e maciez instantâneos",
        ],
        tamanho: "300 ml", preco: 50.00, img: "images/oleo-bifasico-300ml.jpeg"
      },
    ],
  },
  {
    id:      "progressiva",
    nome:    "LINHA PROGRESSIVA",
    tag:     "Alisamento Profissional",
    desc:    "Alisamento e selagem para fios lisos, brilhantes e sem frizz duradouros.",
    cor:     "#E8DDF0",
    emoji:   "🌟",
    icone:   "images/banner-progressivas-roxo.png",
    banner:  "images/banner-progressivas.jpeg",
    produtos: [
      { id: 21, nome: "Progressiva Orgânica", desc: "Alisamento natural sem formol, com ativos orgânicos",   tamanho: "1 L", preco: 100.00, img: "images/progressiva-organica-1000ml.jpeg" },
      { id: 22, nome: "Progressiva Redutora", desc: "Reduz volume e alinha os fios com efeito duradouro",   tamanho: "1 L", preco: 100.00, img: "images/progressiva-redutora-1000ml.jpeg" },
    ],
  },
  {
    id:      "corporal",
    nome:    "CORPORAL",
    tag:     "Cuidado da Pele",
    desc:    "Cuidado completo para a pele com ativos de alta performance.",
    cor:     "#DCE8F0",
    emoji:   "🌸",
    icone:   "images/banner-corporal-creme.png",
    banner:  "images/banner-corporal.png",   /* foto real do produto */
    produtos: [
      { id: 23, nome: "Creme Corporal Hidratante", desc: "Hidratação intensa e nutrição profunda da pele", tamanho: "650 g", preco: 50.00, img: "images/creme-corporal-650g.jpeg" },
    ],
  },
];

/* ── SUPABASE ──────────────────────────────────────────────── */
const SUPABASE_URL  = "https://uuarmzyntcqrbpludyrp.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1YXJtenludGNxcmJwbHVkeXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1MDU5MzAsImV4cCI6MjA5MzA4MTkzMH0.1-R24RJrvoaR7XI3x7eaoXUPzXyH2h0WrrHnIZb_xQ4";
let supabase = null;

/* ============================================================
   STATE
   ============================================================ */
let cart          = [];     // [{id, linhaId, nome, preco, img, emoji, qty}]
let checkoutStep  = 1;
let checkoutData  = {};

/* ============================================================
   HELPERS
   ============================================================ */
const fmt = v => v.toFixed(2).replace('.', ',');

function findProduto(produtoId) {
  for (const linha of LINHAS) {
    const p = linha.produtos.find(p => p.id === produtoId);
    if (p) return { ...p, emoji: linha.emoji, linhaId: linha.id };
  }
  return null;
}

/**
 * Encontra um produto pelo SKU (suporta variantes).
 * SKU para produtos simples = String(id)
 * SKU para variantes = ex. "4-1L"
 */
function findBySku(sku) {
  for (const linha of LINHAS) {
    for (const p of linha.produtos) {
      if (p.variantes) {
        for (const v of p.variantes) {
          if (v.sku === sku) {
            return {
              sku:        v.sku,
              productId:  p.id,
              nome:       p.nome,
              desc:       p.desc,
              tamanho:    v.tamanho,
              preco:      v.preco,
              img:        v.img,
              classe:     p.classe || "",
              emoji:      linha.emoji,
              linhaId:    linha.id,
            };
          }
        }
      } else if (String(p.id) === sku) {
        return {
          sku:        String(p.id),
          productId:  p.id,
          nome:       p.nome,
          desc:       p.desc,
          tamanho:    p.tamanho,
          preco:      p.preco,
          img:        p.img,
          classe:     p.classe || "",
          emoji:      linha.emoji,
          linhaId:    linha.id,
        };
      }
    }
  }
  return null;
}

function cartTotal() {
  return cart.reduce((s, i) => s + i.preco * i.qty, 0);
}

function cartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function freteValor() {
  const tipo = document.querySelector('input[name="frete"]:checked')?.value || 'pac';
  return tipo === 'sedex' ? CONFIG.FRETE_SEDEX : CONFIG.FRETE_PAC;
}

/* ============================================================
   BOOT — APPLY CONFIG
   ============================================================ */
function initSupabase() {
  if (window.supabase && SUPABASE_URL && SUPABASE_ANON) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  }
}

function applyConfig() {
  const whatsLink = `https://wa.me/${CONFIG.WHATSAPP}`;

  // Texts
  document.title = CONFIG.NOME_LOJA;
  document.querySelectorAll('#logo-name, #mobile-logo, #footer-logo-text').forEach(el => {
    el.textContent = CONFIG.NOME_LOJA;
  });
  document.querySelectorAll('.logo-sub').forEach(el => {
    el.textContent = CONFIG.SLOGAN;
  });
  document.getElementById('footer-copy').textContent =
    `© ${CONFIG.ANO_COPY} ${CONFIG.NOME_LOJA} · Todos os direitos reservados`;

  // WhatsApp links
  document.querySelectorAll('[href="https://wa.me/5521985873917"]').forEach(el => {
    el.href = whatsLink;
  });
  const fwEl = document.getElementById('wa-float');
  if (fwEl) fwEl.href = whatsLink;
  const ftWa = document.getElementById('footer-whatsapp');
  if (ftWa) { ftWa.href = whatsLink; ftWa.textContent = CONFIG.WHATSAPP_DISPLAY; }

  // Frete — preços não exibidos; calculados pelo vendedor

  // CSS primary color
  document.documentElement.style.setProperty('--primary', CONFIG.COR_PRIMARIA);
}

/* ============================================================
   NAV
   ============================================================ */
function buildNav() {
  const lists = [
    document.getElementById('nav-list'),
    document.getElementById('mobile-nav-list'),
    document.getElementById('footer-links'),
  ];
  const items = getLinhasVisiveis().map(l =>
    `<li><a href="#${l.id}" class="nav-link" data-id="${l.id}">${l.nome}</a></li>`
  ).join('');
  lists.forEach(ul => { if (ul) ul.innerHTML = items; });
}

/* ============================================================
   CAROUSEL
   ============================================================ */
function buildCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  track.innerHTML = getLinhasVisiveis().map(l => `
    <div class="carousel-item" data-id="${l.id}" role="button" tabindex="0" aria-label="Ver linha ${l.nome}">
      <div class="carousel-circle">
        ${l.icone
          ? `<img src="${l.icone}" alt="${l.nome}" class="carousel-circle-img" onerror="this.outerHTML='<span>${l.emoji}</span>'" />`
          : `<span>${l.emoji}</span>`}
      </div>
      <span class="carousel-label">${l.nome}</span>
    </div>
  `).join('');

  track.querySelectorAll('.carousel-item').forEach(el => {
    el.addEventListener('click', () => scrollToLine(el.dataset.id));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') scrollToLine(el.dataset.id);
    });
  });

  document.getElementById('carousel-prev')?.addEventListener('click', () => {
    track.scrollBy({ left: -240, behavior: 'smooth' });
  });
  document.getElementById('carousel-next')?.addEventListener('click', () => {
    track.scrollBy({ left: 240, behavior: 'smooth' });
  });
}

function scrollToLine(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.querySelectorAll('.carousel-item').forEach(el => {
    el.classList.toggle('active', el.dataset.id === id);
  });
}

/* ============================================================
   PRODUCT SECTIONS
   ============================================================ */
/**
 * Verifica se um produto tem foto real cadastrada.
 * Para produtos com variantes, basta UMA variante ter foto.
 */
function temFoto(p) {
  if (p.variantes && p.variantes.length) return p.variantes.some(v => v.img);
  return Boolean(p.img);
}

/** Retorna apenas as linhas com produtos que têm foto */
function getLinhasVisiveis() {
  return LINHAS
    .map(l => ({ ...l, produtos: l.produtos.filter(temFoto) }))
    .filter(l => l.produtos.length > 0);
}

function buildProductSections() {
  const container = document.getElementById('product-sections');
  if (!container) return;
  const linhasVisiveis = getLinhasVisiveis();
  container.innerHTML = linhasVisiveis.map(l => {
    // Visual do "badge" — usa banner se existir, senão usa emoji
    const badgeHtml = l.banner
      ? `<div class="line-banner-img" style="background:${l.cor}">
           <img src="${l.banner}" alt="${l.nome}" loading="lazy"
                onerror="this.parentElement.innerHTML='<div class=&quot;line-emoji-badge&quot;>${l.emoji}</div>'" />
         </div>`
      : `<div class="line-emoji-badge">${l.emoji}</div>`;

    return `
    <section class="line-section" id="${l.id}" aria-label="Linha ${l.nome}">

      <!-- Banner colorido da linha (estilo Kérastase) -->
      <div class="line-section-header ${l.banner ? 'has-banner' : ''}" style="background:${l.cor}">
        <div class="container">
          <div class="line-header-inner">
            ${badgeHtml}
            <div>
              <p class="line-tag">${l.tag}</p>
              <h2 class="line-name">${l.nome}</h2>
              <p class="line-desc">${l.desc}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid de produtos -->
      <div class="container">
        <div class="products-grid">
          ${l.produtos.map(p => productCard(p, l)).join('')}
        </div>
      </div>

    </section>
  `;
  }).join('');
}

function productCard(p, l) {
  // Produto com variantes (múltiplos tamanhos)
  if (p.variantes && p.variantes.length) {
    const v0 = p.variantes[0];
    const imgContent = v0.img
      ? `<img src="${v0.img}" alt="${p.nome}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=&quot;img-placeholder&quot; style=&quot;background:${l.cor}&quot;>${l.emoji}</div>'" />`
      : `<div class="img-placeholder" style="background:${l.cor}">${l.emoji}</div>`;
    const sizes = p.variantes.map((v, i) => `
      <button class="size-btn ${i === 0 ? 'active' : ''}" data-sku="${v.sku}" data-preco="${v.preco}" data-img="${v.img || ''}">
        ${v.tamanho}
      </button>
    `).join('');
    const classeExtra = p.classe ? `is-${p.classe}` : '';
    return `
      <article class="product-card has-variants ${classeExtra}" data-id="${p.id}" ${classeExtra ? 'data-tilt data-tilt-max="8" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2"' : ''}>
        ${classeExtra === 'is-frio' ? '<div class="snow-overlay"></div>' : ''}
        <div class="product-img">${imgContent}</div>
        <div class="product-info">
          <span class="product-size variant-size">${v0.tamanho}</span>
          <h3 class="product-name">${p.nome}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="size-selector">
            ${sizes}
          </div>
          <div class="product-footer">
            <span class="product-price variant-price">R$ ${fmt(v0.preco)}</span>
            <button class="btn-add" data-sku="${v0.sku}" aria-label="Adicionar ${p.nome} ao carrinho">
              + CARRINHO
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // Produto simples
  const imgContent = p.img
    ? `<img src="${p.img}" alt="${p.nome}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=&quot;img-placeholder&quot; style=&quot;background:${l.cor}&quot;>${l.emoji}</div>'" />`
    : `<div class="img-placeholder" style="background:${l.cor}">${l.emoji}</div>`;
  const tamanho = p.tamanho ? `<span class="product-size">${p.tamanho}</span>` : '';
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-img">${imgContent}</div>
      <div class="product-info">
        ${tamanho}
        <h3 class="product-name">${p.nome}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="product-price">R$ ${fmt(p.preco)}</span>
          <button class="btn-add" data-sku="${p.id}" aria-label="Adicionar ${p.nome} ao carrinho">
            + CARRINHO
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ============================================================
   PRODUCT DETAIL MODAL
   ============================================================ */
let pmCurrentProduct = null;
let pmCurrentSku     = null;

function findProductoCompletoById(produtoId) {
  for (const linha of LINHAS) {
    const p = linha.produtos.find(p => p.id === produtoId);
    if (p) return { ...p, _linha: linha };
  }
  return null;
}

function openProductModal(produtoId) {
  const p = findProductoCompletoById(Number(produtoId));
  if (!p) return;
  pmCurrentProduct = p;
  pmCurrentSku = p.variantes ? p.variantes[0].sku : String(p.id);
  renderProductModal();
  const overlay = document.getElementById('product-modal-overlay');
  const modal   = document.getElementById('product-modal');
  if (overlay) {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  }
  if (modal) modal.classList.toggle('is-frio', p.classe === 'frio');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('product-modal-overlay')?.classList.remove('open');
  document.getElementById('product-modal-overlay')?.setAttribute('aria-hidden', 'true');
  if (!document.querySelector('.cart-drawer.open')) document.body.style.overflow = '';
  pmCurrentProduct = null;
  pmCurrentSku = null;
}

function renderProductModal() {
  const p = pmCurrentProduct;
  if (!p) return;
  const body = document.getElementById('product-modal-body');
  if (!body) return;

  // Variante atual
  let variant = null;
  if (p.variantes) {
    variant = p.variantes.find(v => v.sku === pmCurrentSku) || p.variantes[0];
  }
  const tamanhoAtual = variant ? variant.tamanho : (p.tamanho || '');
  const precoAtual   = variant ? variant.preco : p.preco;
  const imgAtual     = variant ? variant.img : p.img;

  // Imagem
  const imgHtml = imgAtual
    ? `<img id="pm-img" src="${imgAtual}" alt="${p.nome}" onerror="this.parentElement.innerHTML='<div class=&quot;img-placeholder&quot;>${p._linha.emoji}</div>'" />`
    : `<div class="img-placeholder">${p._linha.emoji}</div>`;

  // Detalhes
  const detalhes = p.detalhes
    ? `<p class="pm-section-title">Sobre o Produto</p><p class="pm-detalhes">${p.detalhes}</p>`
    : '';

  // Benefícios
  const beneficios = p.beneficios && p.beneficios.length
    ? `<p class="pm-section-title">Benefícios</p><ul class="pm-beneficios">${p.beneficios.map(b => `<li>${b}</li>`).join('')}</ul>`
    : '';

  // Modo de uso
  const modoUso = p.modoUso
    ? `<p class="pm-section-title">Modo de Uso</p><p class="pm-modo-uso">${p.modoUso}</p>`
    : '';

  // Seletor de tamanhos
  let sizesHtml = '';
  if (p.variantes && p.variantes.length > 1) {
    sizesHtml = `
      <div>
        <p class="pm-size-label">Escolha o Tamanho</p>
        <div class="pm-sizes">
          ${p.variantes.map(v => `
            <button class="pm-size-btn ${v.sku === pmCurrentSku ? 'active' : ''}" data-sku="${v.sku}">
              ${v.tamanho}
            </button>
          `).join('')}
        </div>
      </div>`;
  } else if (tamanhoAtual) {
    sizesHtml = `<p class="pm-size-label">Tamanho: <strong>${tamanhoAtual}</strong></p>`;
  }

  body.innerHTML = `
    <div class="pm-image">${imgHtml}</div>
    <div class="pm-info">
      <span class="pm-tag">${p._linha.nome}</span>
      <h2 class="pm-name">${p.nome}</h2>
      <p class="pm-short">${p.desc}</p>
      ${detalhes ? `<div class="pm-divider"></div>${detalhes}` : ''}
      ${beneficios}
      ${modoUso}
      <div class="pm-divider"></div>
      <div class="pm-bottom">
        ${sizesHtml}
        <div class="pm-price" id="pm-price">R$ ${fmt(precoAtual)}</div>
        <button class="pm-add-btn" id="pm-add">+ ADICIONAR AO CARRINHO</button>
      </div>
    </div>
  `;

  // Listeners
  body.querySelectorAll('.pm-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      pmCurrentSku = btn.dataset.sku;
      renderProductModal();
    });
  });
  document.getElementById('pm-add')?.addEventListener('click', () => {
    addToCart(pmCurrentSku);
    closeProductModal();
    setTimeout(openCart, 200);
  });
}

/* ============================================================
   CART
   ============================================================ */
function addToCart(sku) {
  const prod = findBySku(String(sku));
  if (!prod) return;
  const existing = cart.find(i => i.sku === prod.sku);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...prod, qty: 1 });
  }
  updateCartUI();
  const tamLabel = prod.tamanho ? ` (${prod.tamanho})` : '';
  showToast(`✓ ${prod.nome}${tamLabel} adicionado ao carrinho`);
  bumpCartIcon();
}

function removeFromCart(sku) {
  cart = cart.filter(i => i.sku !== sku);
  updateCartUI();
  renderCartBody();
}

function updateQty(sku, delta) {
  const item = cart.find(i => i.sku === sku);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartUI();
  renderCartBody();
}

function updateCartUI() {
  const count = cartCount();
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
  renderCartBody();
}

function bumpCartIcon() {
  const btn = document.getElementById('cart-btn');
  btn?.classList.remove('bump');
  void btn?.offsetWidth;
  btn?.classList.add('bump');
  btn?.addEventListener('animationend', () => btn.classList.remove('bump'), { once: true });
}

function renderCartBody() {
  const body   = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if (!body || !footer) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p>Seu carrinho está vazio</p>
        <small>Adicione produtos para continuar</small>
      </div>`;
    footer.innerHTML = '';
    return;
  }

  body.innerHTML = cart.map(item => {
    const tamLabel = item.tamanho ? `<small class="cart-item-size">${item.tamanho}</small>` : '';
    return `
    <div class="cart-item" data-sku="${item.sku}">
      <div class="cart-item-img">${item.img
        ? `<img src="${item.img}" alt="${item.nome}" onerror="this.outerHTML='${item.emoji}'" />`
        : item.emoji}</div>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.nome}</p>
        ${tamLabel}
        <p class="cart-item-price">R$ ${fmt(item.preco)} × ${item.qty}</p>
        <div class="cart-qty-row">
          <button class="qty-btn" data-action="dec" data-sku="${item.sku}" aria-label="Diminuir">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-sku="${item.sku}" aria-label="Aumentar">+</button>
        </div>
        <button class="cart-item-remove" data-sku="${item.sku}">Remover</button>
      </div>
      <span class="cart-item-subtotal">R$ ${fmt(item.preco * item.qty)}</span>
    </div>
  `;}).join('');

  const total  = cartTotal();

  footer.innerHTML = `
    <div class="cart-subtotal-row">
      <span>Subtotal</span>
      <span>R$ ${fmt(total)}</span>
    </div>
    <button class="btn btn-primary btn-full" id="btn-checkout" style="margin-top:14px">
      FINALIZAR PEDIDO
    </button>
  `;

  // Events
  body.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sku = btn.dataset.sku;
      const dir = btn.dataset.action === 'inc' ? 1 : -1;
      updateQty(sku, dir);
    });
  });
  body.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.sku));
  });
  document.getElementById('btn-checkout')?.addEventListener('click', openCheckout);
}

function openCart() {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('drawer-overlay')?.classList.add('visible');
  document.getElementById('cart-drawer')?.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('drawer-overlay')?.classList.remove('visible');
  document.getElementById('cart-drawer')?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ============================================================
   CHECKOUT
   ============================================================ */
function openCheckout() {
  closeCart();
  checkoutStep = 1;
  goToStep(1);
  document.getElementById('checkout-overlay')?.classList.add('open');
  document.getElementById('checkout-overlay')?.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkout-overlay')?.classList.remove('open');
  document.getElementById('checkout-overlay')?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function goToStep(n) {
  checkoutStep = n;
  [1, 2, 3].forEach(i => {
    const el = document.getElementById(`step-${i}`);
    if (el) el.classList.toggle('hidden', i !== n);
    const dot = document.querySelector(`[data-step="${i}"]`);
    if (dot) {
      dot.classList.toggle('active', i === n);
      dot.classList.toggle('done', i < n);
    }
    const lines = document.querySelectorAll('.step-line');
    lines.forEach((line, idx) => line.classList.toggle('done', idx < n - 1));
  });
  if (n === 2) renderShippingSummary();
  if (n === 3) renderReview();
}

/* ── ViaCEP ── */
async function fetchCEP() {
  const cepInput = document.getElementById('f-cep');
  const msg      = document.getElementById('cep-msg');
  let   cep      = cepInput.value.replace(/\D/g, '');
  if (cep.length !== 8) {
    msg.textContent = 'CEP inválido. Informe 8 dígitos.';
    msg.className = 'cep-msg err';
    return;
  }
  msg.textContent = 'Buscando...';
  msg.className = 'cep-msg';
  try {
    const res  = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    if (data.erro) throw new Error('CEP não encontrado');
    document.getElementById('f-rua').value    = data.logradouro || '';
    document.getElementById('f-bairro').value = data.bairro     || '';
    document.getElementById('f-cidade').value = data.localidade || '';
    document.getElementById('f-uf').value     = data.uf         || '';
    msg.textContent = '✓ Endereço encontrado!';
    msg.className = 'cep-msg ok';
    document.getElementById('f-num').focus();
  } catch {
    msg.textContent = 'CEP não encontrado. Preencha manualmente.';
    msg.className = 'cep-msg err';
  }
}

/* ── Step 1 validation ── */
function validateStep1() {
  const fields = ['f-nome','f-tel','f-cep','f-rua','f-num','f-bairro','f-cidade','f-uf'];
  let ok = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value.trim()) {
      el.classList.add('error');
      ok = false;
    } else {
      el.classList.remove('error');
    }
  });
  if (!ok) { showToast('⚠️ Preencha todos os campos obrigatórios'); return false; }
  checkoutData = {
    nome:        document.getElementById('f-nome').value.trim(),
    tel:         document.getElementById('f-tel').value.trim(),
    cep:         document.getElementById('f-cep').value.trim(),
    rua:         document.getElementById('f-rua').value.trim(),
    numero:      document.getElementById('f-num').value.trim(),
    complemento: document.getElementById('f-comp').value.trim(),
    bairro:      document.getElementById('f-bairro').value.trim(),
    cidade:      document.getElementById('f-cidade').value.trim(),
    uf:          document.getElementById('f-uf').value.trim(),
  };
  return true;
}

/* ── Shipping summary ── */
function renderShippingSummary() {
  const el = document.getElementById('order-summary-2');
  if (!el) return;
  const sub  = cartTotal();
  const tipo = document.querySelector('input[name="frete"]:checked')?.value || 'pac';
  el.innerHTML = `
    <div class="order-mini-summary">
      ${cart.map(i => `
        <div class="summary-row">
          <span>${i.nome}${i.tamanho ? ' ('+i.tamanho+')' : ''} × ${i.qty}</span>
          <span>R$ ${fmt(i.preco * i.qty)}</span>
        </div>`).join('')}
      <div class="summary-row">
        <span>Frete (${tipo.toUpperCase()})</span>
        <span style="color:var(--text);font-style:italic">A calcular</span>
      </div>
      <div class="summary-row total">
        <span>Subtotal produtos</span>
        <span>R$ ${fmt(sub)}</span>
      </div>
    </div>`;
}

/* ── Review ── */
function renderReview() {
  const el = document.getElementById('review-block');
  if (!el) return;
  const tipo = document.querySelector('input[name="frete"]:checked')?.value || 'pac';
  const sub  = cartTotal();
  const addr = `${checkoutData.rua}, ${checkoutData.numero}${checkoutData.complemento ? ', '+checkoutData.complemento : ''} — ${checkoutData.bairro}, ${checkoutData.cidade} - ${checkoutData.uf}, CEP ${checkoutData.cep}`;
  el.innerHTML = `
    <div class="review-section">
      <p class="review-section-title">Produtos</p>
      ${cart.map(i => `
        <div class="review-item">
          <div class="review-row">
            <span>${i.nome}${i.tamanho ? ' ('+i.tamanho+')' : ''} × ${i.qty}</span>
            <span><strong>R$ ${fmt(i.preco * i.qty)}</strong></span>
          </div>
        </div>`).join('')}
      <div class="review-total">
        <span>SUBTOTAL PRODUTOS</span>
        <span>R$ ${fmt(sub)}</span>
      </div>
    </div>
    <div class="review-section">
      <p class="review-section-title">Dados do Cliente</p>
      <div class="review-row"><span>Nome</span><span>${checkoutData.nome}</span></div>
      <div class="review-row"><span>WhatsApp</span><span>${checkoutData.tel}</span></div>
    </div>
    <div class="review-section">
      <p class="review-section-title">Endereço de Entrega</p>
      <p style="font-size:.84rem;color:var(--text)">${addr}</p>
    </div>
    <div class="review-section">
      <p class="review-section-title">Forma de Envio</p>
      <div class="review-row">
        <span>${tipo === 'sedex' ? '🚀 SEDEX' : '📦 PAC'}</span>
        <span style="color:var(--text);font-style:italic">Frete a calcular</span>
      </div>
    </div>`;
}

/* ── Confirm → WhatsApp ── */
function confirmOrder() {
  const tipo = document.querySelector('input[name="frete"]:checked')?.value || 'pac';
  const sub  = cartTotal();
  const addr = `${checkoutData.rua}, ${checkoutData.numero}${checkoutData.complemento ? ', '+checkoutData.complemento : ''}, ${checkoutData.bairro}, ${checkoutData.cidade} - ${checkoutData.uf}, CEP: ${checkoutData.cep}`;
  const itens = cart.map(i => {
    const tam = i.tamanho ? ` (${i.tamanho})` : '';
    return `• ${i.nome}${tam} ×${i.qty} — R$ ${fmt(i.preco * i.qty)}`;
  }).join('\n');
  const msg = `🛍️ *NOVO PEDIDO — ${CONFIG.NOME_LOJA}*

*Produtos:*
${itens}

*Subtotal produtos:* R$ ${fmt(sub)}
*Envio:* ${tipo.toUpperCase()} — frete a calcular

*Dados do Cliente:*
Nome: ${checkoutData.nome}
WhatsApp: ${checkoutData.tel}
Endereço: ${addr}${checkoutData.complemento ? '\nComplemento: ' + checkoutData.complemento : ''}`;

  const encoded = encodeURIComponent(msg);
  // Salva pedido no Supabase
  saveOrderToSupabase({
    customer_name:        checkoutData.nome,
    customer_email:       null,
    customer_phone:       checkoutData.tel,
    address_street:       checkoutData.rua,
    address_number:       checkoutData.numero,
    address_complement:   checkoutData.complemento,
    address_neighborhood: checkoutData.bairro,
    address_city:         checkoutData.cidade,
    address_state:        checkoutData.uf,
    address_cep:          checkoutData.cep,
    shipping_method:      tipo,
    shipping_cost:        null,
    items:                cart.map(i => ({ sku: i.sku, nome: i.nome, tamanho: i.tamanho || null, preco: i.preco, qty: i.qty })),
    subtotal:             sub,
    total:                sub,
    status:               'pending',
  });

  closeCheckout();
  showSuccess();
  setTimeout(() => {
    window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${encoded}`, '_blank');
  }, 800);
  cart = [];
  updateCartUI();
}

async function saveOrderToSupabase(orderData) {
  if (!supabase) return;
  try {
    await supabase.from('orders').insert([orderData]);
  } catch (e) {
    console.warn('Supabase save failed (non-critical):', e);
  }
}

function showSuccess() {
  const el = document.getElementById('success-overlay');
  if (el) { el.classList.remove('hidden'); el.setAttribute('aria-hidden','false'); }
}

function hideSuccess() {
  const el = document.getElementById('success-overlay');
  if (el) { el.classList.add('hidden'); el.setAttribute('aria-hidden','true'); }
  document.body.style.overflow = '';
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg) {
  const wrap = document.getElementById('toast-wrap');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

/* ============================================================
   MOBILE NAV
   ============================================================ */
function openMobileNav() {
  document.getElementById('mobile-nav')?.classList.add('open');
  document.getElementById('mobile-overlay')?.classList.add('visible');
  document.getElementById('hamburger')?.classList.add('open');
  document.getElementById('mobile-nav')?.setAttribute('aria-hidden','false');
}

function closeMobileNav() {
  document.getElementById('mobile-nav')?.classList.remove('open');
  document.getElementById('mobile-overlay')?.classList.remove('visible');
  document.getElementById('hamburger')?.classList.remove('open');
  document.getElementById('mobile-nav')?.setAttribute('aria-hidden','true');
}

/* ============================================================
   SCROLL → sticky header highlight
   ============================================================ */
function onScroll() {
  const header = document.getElementById('header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 20);

  // highlight nav link based on visible section
  const sections = LINHAS.map(l => document.getElementById(l.id)).filter(Boolean);
  let active = null;
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight * 0.5) active = sec.id;
  });
  document.querySelectorAll('.nav-link, .mobile-nav-list a').forEach(a => {
    a.classList.toggle('active', a.dataset.id === active);
  });
}

/* ============================================================
   CEP MASK
   ============================================================ */
function cepMask(e) {
  let v = e.target.value.replace(/\D/g, '');
  if (v.length > 5) v = v.slice(0,5) + '-' + v.slice(5,8);
  e.target.value = v;
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */
function attachEvents() {
  // Cart
  document.getElementById('cart-btn')?.addEventListener('click', openCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  document.getElementById('drawer-overlay')?.addEventListener('click', closeCart);

  // Mobile nav
  document.getElementById('hamburger')?.addEventListener('click', openMobileNav);
  document.getElementById('mobile-nav-close')?.addEventListener('click', closeMobileNav);
  document.getElementById('mobile-overlay')?.addEventListener('click', closeMobileNav);
  document.querySelectorAll('#mobile-nav-list a').forEach(a => {
    a.addEventListener('click', closeMobileNav);
  });

  // Click handler para o grid de produtos (delegated)
  document.getElementById('product-sections')?.addEventListener('click', e => {
    // 1) Botão Adicionar ao carrinho — não abre modal
    const btn = e.target.closest('.btn-add');
    if (btn) {
      e.stopPropagation();
      addToCart(btn.dataset.sku);
      return;
    }
    // 2) Seletor de tamanho no card — não abre modal
    const sizeBtn = e.target.closest('.size-btn');
    if (sizeBtn) {
      e.stopPropagation();
      const card = sizeBtn.closest('.product-card');
      if (!card) return;
      card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      sizeBtn.classList.add('active');
      const priceEl = card.querySelector('.variant-price');
      if (priceEl) priceEl.textContent = `R$ ${fmt(Number(sizeBtn.dataset.preco))}`;
      const sizeBadge = card.querySelector('.variant-size');
      if (sizeBadge) sizeBadge.textContent = sizeBtn.textContent.trim();
      const addBtn = card.querySelector('.btn-add');
      if (addBtn) addBtn.dataset.sku = sizeBtn.dataset.sku;
      const img = card.querySelector('.product-img img');
      if (img && sizeBtn.dataset.img) img.src = sizeBtn.dataset.img;
      return;
    }
    // 3) Click no card → abre modal de detalhes
    const card = e.target.closest('.product-card');
    if (card) openProductModal(card.dataset.id);
  });

  // Modal events
  document.getElementById('product-modal-close')?.addEventListener('click', closeProductModal);
  document.getElementById('product-modal-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('product-modal-overlay')) closeProductModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProductModal();
  });

  // CEP
  document.getElementById('btn-cep')?.addEventListener('click', fetchCEP);
  document.getElementById('f-cep')?.addEventListener('input', cepMask);
  document.getElementById('f-cep')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); fetchCEP(); }
  });

  // Checkout form step 1
  document.getElementById('form-step1')?.addEventListener('submit', e => {
    e.preventDefault();
    if (validateStep1()) goToStep(2);
  });

  // Checkout step 2 → 3
  document.getElementById('btn-next-3')?.addEventListener('click', () => goToStep(3));
  document.getElementById('btn-back-1')?.addEventListener('click', () => goToStep(1));

  // Checkout step 3 → confirm
  document.getElementById('btn-confirm')?.addEventListener('click', confirmOrder);
  document.getElementById('btn-back-2')?.addEventListener('click', () => goToStep(2));

  // Close checkout
  document.getElementById('checkout-close')?.addEventListener('click', closeCheckout);
  document.getElementById('checkout-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('checkout-overlay')) closeCheckout();
  });

  // Shipping change → refresh summary
  document.querySelectorAll('input[name="frete"]').forEach(r => {
    r.addEventListener('change', renderShippingSummary);
  });

  // Success close
  document.getElementById('btn-success-close')?.addEventListener('click', hideSuccess);

  // Smooth nav scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // Scroll
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ============================================================
   ❄️  EFEITO GELADO (neve + tilt) — produtos com classe "frio"
   ============================================================ */
const FLAKES = ['❄', '❅', '❆', '✻', '✼'];

function spawnFlake(card) {
  const overlay = card.querySelector('.snow-overlay');
  if (!overlay) return;
  const flake = document.createElement('span');
  flake.className = 'snowflake';
  flake.textContent = FLAKES[Math.floor(Math.random() * FLAKES.length)];
  flake.style.left           = Math.random() * 100 + '%';
  flake.style.fontSize       = (Math.random() * 12 + 8) + 'px';
  flake.style.animationDuration = (Math.random() * 3 + 3) + 's';
  flake.style.animationDelay = (Math.random() * 2) + 's';
  flake.style.opacity        = (Math.random() * 0.5 + 0.4).toFixed(2);
  overlay.appendChild(flake);
  setTimeout(() => flake.remove(), 6000);
}

function startSnowEffect() {
  const cards = document.querySelectorAll('.product-card.is-frio');
  cards.forEach(card => {
    // Spawn flake every ~400ms while card is in viewport
    setInterval(() => {
      const rect = card.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) spawnFlake(card);
    }, 400);
  });
}

function startTiltEffect() {
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'));
  }
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
  applyConfig();
  buildNav();
  buildCarousel();
  buildProductSections();
  updateCartUI();
  attachEvents();
  onScroll();
  startSnowEffect();
  setTimeout(startTiltEffect, 100);
  initLenis();
  initFluidCursor();
  setTimeout(initGSAP, 120); // aguarda DOM do buildProductSections
});

/* ============================================================
   LENIS — SMOOTH SCROLL
   ============================================================ */
function initLenis() {
  if (typeof Lenis === 'undefined') return;
  const lenis = new Lenis({
    duration:   1.4,
    easing:     t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  // Integra com GSAP ScrollTrigger
  lenis.on('scroll', () => {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.update();
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Fecha carrinho/modal ao scrollar com Lenis
  lenis.on('scroll', onScroll);

  window.__lenis = lenis;
}

/* ============================================================
   GSAP — ANIMAÇÕES DE SCROLL
   ============================================================ */
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // -- Hero: título entra suave --
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    gsap.from(heroTitle, {
      y: 50, opacity: 0, duration: 1.1,
      ease: 'power3.out', delay: 0.2,
    });
  }
  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge) {
    gsap.from(heroBadge, {
      y: 20, opacity: 0, duration: 0.8,
      ease: 'power2.out', delay: 0.1,
    });
  }
  const heroCtas = document.querySelector('.hero-ctas');
  if (heroCtas) {
    gsap.from(heroCtas, {
      y: 30, opacity: 0, duration: 0.9,
      ease: 'power2.out', delay: 0.45,
    });
  }

  // -- Logo borboleta: pulsa ao carregar --
  const butterfly = document.querySelector('.logo-butterfly');
  if (butterfly) {
    gsap.from(butterfly, {
      scale: 0, opacity: 0, rotation: -20,
      duration: 0.9, ease: 'back.out(1.7)', delay: 0.1,
    });
  }

  // -- Carrossel de linhas --
  gsap.from('.carousel-item', {
    y: 40, opacity: 0, duration: 0.7,
    stagger: 0.08, ease: 'power2.out',
    scrollTrigger: {
      trigger: '.linhas-carousel',
      start: 'top 85%',
    },
  });

  // -- Cabeçalho de cada seção de linha --
  document.querySelectorAll('.line-section-header').forEach(el => {
    gsap.from(el, {
      x: -60, opacity: 0, duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%' },
    });
  });

  // -- Cards de produto: entram em grid escalonado --
  document.querySelectorAll('.products-grid').forEach(grid => {
    const cards = grid.querySelectorAll('.product-card');
    gsap.from(cards, {
      y: 60, opacity: 0, duration: 0.75,
      stagger: 0.1, ease: 'power2.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 82%',
      },
    });
  });

  // -- Bottom bar: sobe ao entrar na tela --
  gsap.from('.bottom-bar', {
    y: 44, duration: 0.6, ease: 'power2.out', delay: 1.2,
  });

  // -- WhatsApp float: pulsa suave (infinito) --
  const waBtn = document.getElementById('wa-float');
  if (waBtn) {
    gsap.to(waBtn, {
      scale: 1.08, duration: 1.2,
      repeat: -1, yoyo: true, ease: 'sine.inOut',
    });
  }
}

/* ============================================================
   FLUID CURSOR
   ============================================================ */
function initFluidCursor() {
  const canvas = document.getElementById('fluid-cursor-canvas');
  if (!canvas) return;

  // Só ativa em dispositivos com mouse (não touch)
  const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!hasHover) { canvas.style.display = 'none'; return; }

  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  canvas.width = W; canvas.height = H;

  window.addEventListener('resize', () => {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W; canvas.height = H;
  });

  // Círculo principal (cursor) e ponto de mira
  const cursor   = { x: W / 2, y: H / 2 };
  const follower = { x: W / 2, y: H / 2 };
  let   isHover  = false;

  window.addEventListener('mousemove', e => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
  });

  // Detecta hover em elementos clicáveis
  document.addEventListener('mouseover', e => {
    isHover = !!(e.target.closest('a, button, .size-btn, .product-card, .carousel-item'));
  });
  document.addEventListener('mouseout', () => { isHover = false; });

  // Trilha de partículas fluidas
  const trail = Array.from({ length: 18 }, () => ({
    x: W / 2, y: H / 2, alpha: 0,
  }));

  function lerp(a, b, t) { return a + (b - a) * t; }

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);

    // Follower segue o cursor com inércia
    follower.x = lerp(follower.x, cursor.x, 0.11);
    follower.y = lerp(follower.y, cursor.y, 0.11);

    // Atualiza trilha
    trail.unshift({ x: cursor.x, y: cursor.y, alpha: 1 });
    if (trail.length > 18) trail.pop();

    // Desenha trilha fluida
    trail.forEach((p, i) => {
      p.alpha = lerp(p.alpha, 0, 0.07);
      const size = lerp(5, 1, i / trail.length);
      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 169, 110, ${p.alpha * 0.35})`;
      ctx.fill();
    });

    // Círculo externo (follower)
    const outerR = isHover ? 28 : 18;
    ctx.beginPath();
    ctx.arc(follower.x, follower.y, outerR, 0, Math.PI * 2);
    ctx.strokeStyle = isHover
      ? 'rgba(200, 169, 110, 0.85)'
      : 'rgba(200, 169, 110, 0.55)';
    ctx.lineWidth = isHover ? 2 : 1.2;
    ctx.stroke();

    // Ponto central (cursor)
    ctx.beginPath();
    ctx.arc(cursor.x, cursor.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(200, 169, 110, 0.9)';
    ctx.fill();

    requestAnimationFrame(drawFrame);
  }

  drawFrame();
}
