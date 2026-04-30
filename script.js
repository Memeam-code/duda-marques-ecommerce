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
    produtos: [
      { id: 1,  nome: "Shampoo Anticaspa",    desc: "Elimina a caspa e controla a oleosidade",          preco: 49.90, img: "" },
      { id: 2,  nome: "Shampoo Hidratante",   desc: "Hidratação profunda para cabelos secos",           preco: 44.90, img: "" },
      { id: 3,  nome: "Shampoo com EDTA",     desc: "Remove resíduos minerais e purifica os fios",     preco: 54.90, img: "" },
      { id: 4,  nome: "Shampoo Mentolado",    desc: "Sensação refrescante com ação estimulante",       preco: 47.90, img: "" },
    ],
  },
  {
    id:      "mascaras",
    nome:    "MÁSCARAS CAPILARES",
    tag:     "Tratamento Intensivo",
    desc:    "Tratamentos intensivos para recuperar a beleza e saúde dos seus fios.",
    cor:     "#F0DDE8",
    emoji:   "✨",
    produtos: [
      { id: 5,  nome: "Máscara Antioxidante",           desc: "Protege os fios dos radicais livres",            preco: 79.90,  img: "" },
      { id: 6,  nome: "Máscara Matizadora",             desc: "Neutraliza tons amarelados e avermelhados",      preco: 89.90,  img: "" },
      { id: 7,  nome: "Máscara para Cabelos Afro",      desc: "Nutrição especial para cachos e crespos",       preco: 99.90,  img: "" },
      { id: 8,  nome: "Máscara Hidratação Intensiva",   desc: "Hidratação profunda em até 3 minutos",          preco: 84.90,  img: "" },
      { id: 9,  nome: "Máscara Super Ressecados",       desc: "Restaura fios extremamente danificados",        preco: 109.90, img: "" },
      { id: 10, nome: "Máscara Reconstrução Intensiva", desc: "Reconstrói a fibra capilar por dentro",         preco: 129.90, img: "" },
    ],
  },
  {
    id:      "tratamento",
    nome:    "TRATAMENTO RECONSTRUTOR",
    tag:     "Alta Performance",
    desc:    "Tecnologia avançada para reconstrução completa dos fios danificados.",
    cor:     "#E8F0DD",
    emoji:   "💎",
    produtos: [
      { id: 11, nome: "Colágeno, Caseína e Queratina", desc: "Tripla ação reconstrutora para fios danificados", preco: 149.90, img: "" },
    ],
  },
  {
    id:      "finalizadores",
    nome:    "FINALIZADORES",
    tag:     "Acabamento Perfeito",
    desc:    "O toque final perfeito para definição, brilho e proteção dos seus fios.",
    cor:     "#F0E8DD",
    emoji:   "💫",
    produtos: [
      { id: 12, nome: "Ativador de Cachos",         desc: "Define e hidrata cachos naturais",       preco: 59.90, img: "" },
      { id: 13, nome: "Creme de Pentear",           desc: "Facilita o penteado e reduz o frizz",   preco: 54.90, img: "" },
      { id: 14, nome: "Defrizante Protetor Térmico",desc: "Controla o frizz e protege do calor",   preco: 69.90, img: "" },
    ],
  },
  {
    id:      "oleo",
    nome:    "ÓLEO CAPILAR",
    tag:     "Nutrição & Brilho",
    desc:    "Nutrição e brilho incomparáveis com a leveza dos melhores óleos capilares.",
    cor:     "#EEE8D5",
    emoji:   "✦",
    produtos: [
      { id: 15, nome: "Óleo Bifásico", desc: "Bi-fase nutritivo para brilho e maciez", preco: 89.90, img: "" },
    ],
  },
  {
    id:      "progressiva",
    nome:    "LINHA PROGRESSIVA",
    tag:     "Alisamento Profissional",
    desc:    "Alisamento e selagem para fios lisos, brilhantes e sem frizz duradouros.",
    cor:     "#E8DDF0",
    emoji:   "🌟",
    produtos: [
      { id: 16, nome: "Progressiva Ácida",       desc: "Alisamento gradual com pH controlado",       preco: 189.90, img: "" },
      { id: 17, nome: "Progressiva com Formol",  desc: "Alisamento intenso de longa duração",        preco: 229.90, img: "" },
    ],
  },
  {
    id:      "corporal",
    nome:    "CORPORAL",
    tag:     "Cuidado da Pele",
    desc:    "Cuidado completo para a pele com ativos de alta performance.",
    cor:     "#DCE8F0",
    emoji:   "🌸",
    produtos: [
      { id: 18, nome: "Creme Corporal Ácido Hialurônico", desc: "Hidratação intensa e rejuvenescimento da pele", preco: 69.90, img: "" },
    ],
  },
];

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

  // Frete
  const pp = document.getElementById('price-pac');
  const ps = document.getElementById('price-sedex');
  if (pp) pp.textContent = `R$ ${fmt(CONFIG.FRETE_PAC)}`;
  if (ps) ps.textContent = `R$ ${fmt(CONFIG.FRETE_SEDEX)}`;

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
  const items = LINHAS.map(l =>
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
  track.innerHTML = LINHAS.map(l => `
    <div class="carousel-item" data-id="${l.id}" role="button" tabindex="0" aria-label="Ver linha ${l.nome}">
      <div class="carousel-circle" style="background:${l.cor}">
        <span>${l.emoji}</span>
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
function buildProductSections() {
  const container = document.getElementById('product-sections');
  if (!container) return;
  container.innerHTML = LINHAS.map(l => `
    <section class="line-section" id="${l.id}" aria-label="Linha ${l.nome}">
      <div class="container">
        <div class="line-header">
          <div class="line-hero-img" style="background:${l.cor}">
            <div class="img-placeholder" style="background:${l.cor}">${l.emoji}</div>
          </div>
          <div class="line-meta">
            <p class="line-tag">${l.tag}</p>
            <h2 class="line-name">${l.nome}</h2>
            <p class="line-desc">${l.desc}</p>
          </div>
        </div>
        <div class="products-grid">
          ${l.produtos.map(p => productCard(p, l)).join('')}
        </div>
      </div>
    </section>
  `).join('');
}

function productCard(p, l) {
  const imgContent = p.img
    ? `<img src="${p.img}" alt="${p.nome}" loading="lazy" />`
    : `<div class="img-placeholder" style="background:${l.cor}">${l.emoji}</div>`;
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-img">${imgContent}</div>
      <div class="product-info">
        <h3 class="product-name">${p.nome}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="product-price">R$ ${fmt(p.preco)}</span>
          <button class="btn-add" data-pid="${p.id}" aria-label="Adicionar ${p.nome} ao carrinho">
            + CARRINHO
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ============================================================
   CART
   ============================================================ */
function addToCart(produtoId) {
  const prod = findProduto(produtoId);
  if (!prod) return;
  const existing = cart.find(i => i.id === produtoId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...prod, qty: 1 });
  }
  updateCartUI();
  showToast(`✓ ${prod.nome} adicionado ao carrinho`);
  bumpCartIcon();
}

function removeFromCart(produtoId) {
  cart = cart.filter(i => i.id !== produtoId);
  updateCartUI();
  renderCartBody();
}

function updateQty(produtoId, delta) {
  const item = cart.find(i => i.id === produtoId);
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

  body.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-img">${item.img
        ? `<img src="${item.img}" alt="${item.nome}" />`
        : item.emoji}</div>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.nome}</p>
        <p class="cart-item-price">R$ ${fmt(item.preco)} × ${item.qty}</p>
        <div class="cart-qty-row">
          <button class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="Diminuir">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="Aumentar">+</button>
        </div>
        <button class="cart-item-remove" data-id="${item.id}">Remover</button>
      </div>
      <span class="cart-item-subtotal">R$ ${fmt(item.preco * item.qty)}</span>
    </div>
  `).join('');

  const total  = cartTotal();
  const falta  = Math.max(0, CONFIG.FRETE_GRATIS - total);
  const pct    = Math.min(100, (total / CONFIG.FRETE_GRATIS) * 100);
  const gratis = total >= CONFIG.FRETE_GRATIS;

  footer.innerHTML = `
    <div class="cart-progress"><div class="cart-progress-bar" style="width:${pct}%"></div></div>
    <p class="cart-free-shipping">
      ${gratis
        ? '🎉 Você ganhou frete grátis!'
        : `Faltam R$ ${fmt(falta)} para frete grátis`}
    </p>
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
      const id  = Number(btn.dataset.id);
      const dir = btn.dataset.action === 'inc' ? 1 : -1;
      updateQty(id, dir);
    });
  });
  body.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(Number(btn.dataset.id)));
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
  const fields = ['f-nome','f-email','f-tel','f-cep','f-rua','f-num','f-bairro','f-cidade','f-uf'];
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
    email:       document.getElementById('f-email').value.trim(),
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
  const fv   = tipo === 'sedex' ? CONFIG.FRETE_SEDEX : CONFIG.FRETE_PAC;
  const freeShip = sub >= CONFIG.FRETE_GRATIS;
  el.innerHTML = `
    <div class="order-mini-summary">
      ${cart.map(i => `
        <div class="summary-row">
          <span>${i.nome} × ${i.qty}</span>
          <span>R$ ${fmt(i.preco * i.qty)}</span>
        </div>`).join('')}
      <div class="summary-row">
        <span>Frete</span>
        <span>${freeShip ? '<span style="color:var(--green)">Grátis</span>' : `R$ ${fmt(fv)}`}</span>
      </div>
      <div class="summary-row total">
        <span>Total</span>
        <span>R$ ${fmt(sub + (freeShip ? 0 : fv))}</span>
      </div>
    </div>`;
}

/* ── Review ── */
function renderReview() {
  const el = document.getElementById('review-block');
  if (!el) return;
  const tipo = document.querySelector('input[name="frete"]:checked')?.value || 'pac';
  const fv   = tipo === 'sedex' ? CONFIG.FRETE_SEDEX : CONFIG.FRETE_PAC;
  const sub  = cartTotal();
  const freeShip = sub >= CONFIG.FRETE_GRATIS;
  const total = sub + (freeShip ? 0 : fv);
  const addr = `${checkoutData.rua}, ${checkoutData.numero}${checkoutData.complemento ? ', '+checkoutData.complemento : ''} — ${checkoutData.bairro}, ${checkoutData.cidade} - ${checkoutData.uf}, CEP ${checkoutData.cep}`;
  el.innerHTML = `
    <div class="review-section">
      <p class="review-section-title">Produtos</p>
      ${cart.map(i => `
        <div class="review-item">
          <div class="review-row">
            <span>${i.nome} × ${i.qty}</span>
            <span><strong>R$ ${fmt(i.preco * i.qty)}</strong></span>
          </div>
        </div>`).join('')}
      <div class="review-total">
        <span>TOTAL</span>
        <span>R$ ${fmt(total)}</span>
      </div>
    </div>
    <div class="review-section">
      <p class="review-section-title">Dados do Cliente</p>
      <div class="review-row"><span>Nome</span><span>${checkoutData.nome}</span></div>
      <div class="review-row"><span>WhatsApp</span><span>${checkoutData.tel}</span></div>
      <div class="review-row"><span>E-mail</span><span>${checkoutData.email}</span></div>
    </div>
    <div class="review-section">
      <p class="review-section-title">Endereço de Entrega</p>
      <p style="font-size:.84rem;color:var(--text)">${addr}</p>
    </div>
    <div class="review-section">
      <p class="review-section-title">Forma de Envio</p>
      <div class="review-row">
        <span>${tipo === 'sedex' ? '🚀 SEDEX' : '📦 PAC'}</span>
        <span>${freeShip ? '<span style="color:var(--green)">Grátis</span>' : `R$ ${fmt(fv)}`}</span>
      </div>
    </div>`;
}

/* ── Confirm → WhatsApp ── */
function confirmOrder() {
  const tipo = document.querySelector('input[name="frete"]:checked')?.value || 'pac';
  const fv   = tipo === 'sedex' ? CONFIG.FRETE_SEDEX : CONFIG.FRETE_PAC;
  const sub  = cartTotal();
  const freeShip = sub >= CONFIG.FRETE_GRATIS;
  const total = sub + (freeShip ? 0 : fv);
  const addr = `${checkoutData.rua}, ${checkoutData.numero}${checkoutData.complemento ? ', '+checkoutData.complemento : ''}, ${checkoutData.bairro}, ${checkoutData.cidade} - ${checkoutData.uf}, CEP: ${checkoutData.cep}`;
  const itens = cart.map(i => `• ${i.nome} ×${i.qty} — R$ ${fmt(i.preco * i.qty)}`).join('\n');
  const msg = `🛍️ *NOVO PEDIDO — ${CONFIG.NOME_LOJA}*

*Produtos:*
${itens}

*Subtotal:* R$ ${fmt(sub)}
*Frete (${tipo.toUpperCase()}):* ${freeShip ? 'Grátis' : `R$ ${fmt(fv)}`}
*TOTAL:* R$ ${fmt(total)}

*Dados do Cliente:*
Nome: ${checkoutData.nome}
WhatsApp: ${checkoutData.tel}
E-mail: ${checkoutData.email}
Endereço: ${addr}${checkoutData.complemento ? '\nComplemento: ' + checkoutData.complemento : ''}`;

  const encoded = encodeURIComponent(msg);
  closeCheckout();
  showSuccess();
  setTimeout(() => {
    window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${encoded}`, '_blank');
  }, 800);
  cart = [];
  updateCartUI();
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

  // Add to cart (delegated)
  document.getElementById('product-sections')?.addEventListener('click', e => {
    const btn = e.target.closest('.btn-add');
    if (btn) addToCart(Number(btn.dataset.pid));
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
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  buildNav();
  buildCarousel();
  buildProductSections();
  updateCartUI();
  attachEvents();
  onScroll();
});
