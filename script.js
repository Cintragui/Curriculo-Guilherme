/* =========================================================
   CONFIGURAÇÕES: coloque aqui seus links reais.
   Links vazios ficam desativados automaticamente.
   ========================================================= */
const CONFIG = {
  email: '',                                  // ex.: 'seu.email@gmail.com'
  linkedin: '',                               // ex.: 'https://www.linkedin.com/in/seu-perfil/'
  github: 'https://github.com/Cintragui'
};

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const tickets = []; // chamados da demo do Help Desk

/* ---------------- Idiomas ---------------- */
const EN = {
  'nav.sobre':'About','nav.projetos':'Projects','nav.tec':'Skills','nav.exp':'Experience','nav.contato':'Contact','nav.cv':'Résumé',
  'hero.eyebrow':'Open to IT opportunities','hero.h1a':"Hi, I'm",
  'hero.h2':'Web development, automation and solutions already in use.',
  'hero.desc':'Brazilian Army service member working in the IT Section and Systems Analysis and Development student. I turn everyday problems into systems people actually use, combining development, support and infrastructure.',
  'hero.cta1':'See projects','hero.cta2':'Try the live demo','hero.tag':'Available for interviews',
  'stat.1':'projects featured here','stat.2':'systems in use at work','stat.3':'years in the Brazilian Army','stat.4':'technologies I use daily',
  'sobre.k':'01 / who I am','sobre.h':'About <em>me</em>',
  'sobre.p1':'I am an IT professional with hands-on experience building solutions used in the workplace. I serve in the Brazilian Army, where I help modernize processes through web development, automation and technical support.',
  'sobre.p2':'I study <strong>Systems Analysis and Development</strong> at FACENS and I like learning by doing: every project on this site started from a real problem or an academic challenge.',
  'sobre.p3':'I am looking for an opportunity to grow as a developer on a team where I can deliver useful, reliable solutions.',
  'fact.1':'Development','fact.1s':'Web and interfaces','fact.2':'Automation','fact.2s':'Workflows and processes','fact.3':'Infrastructure','fact.3s':'Support and networks','fact.4':'Learning','fact.4s':'Degree and hands-on projects',
  'proj.k':'02 / portfolio','proj.h':'Featured <em>projects</em>',
  'proj.p':'Projects from real and academic settings. Screens are recreations with fictional data: no internal data or access from the organization appears here.',
  'feat.type':'automation • professional project • interactive demo','feat.h':'WhatsApp Help Desk',
  'feat.p':'A bot that receives, organizes and tracks the unit\'s IT tickets over WhatsApp: users pick a category, get a ticket number and a technician handles it from the panel. Together with a colleague, the project grew into a <strong>full ticketing platform with a notice board on the unit\'s TVs</strong>.',
  'feat.l1':'Service menus and request categories','feat.l2':'Ticket numbers created and looked up instantly','feat.l3':'Technician assignment and closing','feat.l4':'Satisfaction survey after service',
  'feat.try':'→ Try it: open a ticket and watch it on the technician panel. (Demo in Portuguese.)',
  'feat.note':'Demo with fictional data, recreated to show the flow. The real system runs only on the internal network.',
  'board.h':'Technician panel','board.empty':'No tickets yet. Open one on the phone.',
  'p2.type':'web • professional project','p2.h':'Institutional Website','p2.p':'Building and customizing pages, components and visuals for the institutional website of the Sorocaba Regional Support Base.',
  'p3.type':'web • professional project','p3.h':'Corporate Intranet','p3.p':'Organizing internal content and resources in a central web environment, focused on navigation, consistency and usability.',
  'p4.type':'ai • academic project','p4.h':'Smart Traffic Lights','p4.p':'Prototype of adaptive traffic light control using SUMO simulation and vehicle flow analysis to support signal timing decisions.',
  'tag.vc':'Computer Vision','more':'Learn more',
  'tec.k':'03 / tools','tec.h':'My <em>tech stack</em>','tec.1':'Programming','tec.2':'Back-end and automation','tec.3':'Web structure','tec.4':'Interfaces','tec.6':'Studies and projects','tec.7':'Prototypes and AI','tec.8':'Version control',
  'exp.k':'04 / journey','exp.h':'Experience and <em>education</em>',
  'exp.1d':'2026 — present','exp.1h':'IT Section • Brazilian Army','exp.1p':'Technical support, infrastructure, development and automation of internal processes at the Sorocaba Regional Support Base. Built the WhatsApp Help Desk, the institutional website and the intranet.',
  'exp.2d':'2021 — present','exp.2h':'Brazilian Army','exp.2p':'Administrative, operational and support duties, focused on responsibility, organization and problem solving.',
  'exp.3d':'in progress','exp.3h':'Systems Analysis and Development • FACENS','exp.3p':'Software development, databases, networks, software engineering and hands-on projects such as Smart Traffic Lights.',
  'ct.k':'05 / contact','ct.h':"Let's talk about <em>your opening?</em>",'ct.p':'I am available for interviews and open to opportunities in technology. Pick the channel you prefer.',
  'ct.send':'Send','ct.copy':'Copy','ct.in':'View my profile','ct.cvk':'résumé','ct.cv':'Open PDF',
  'ft':'handmade with HTML, CSS and JavaScript','top':'Back to top ↑',
  'dlg.k':'project details','dlg.h':'Main contributions','dlg.d':'Public demos and descriptions do not include internal data or access from the organization.'
};
const UI = {
  pt:{copied:'E-mail copiado!',noEmail:'E-mail ainda não configurado',tickets:n=>n+(n===1?' chamado':' chamados'),title:'Guilherme Cintra | Desenvolvedor e Profissional de TI'},
  en:{copied:'Email copied!',noEmail:'Email not configured yet',tickets:n=>n+(n===1?' ticket':' tickets'),title:'Guilherme Cintra | Developer and IT Professional'}
};
const PROJECTS = {
  pt:{
    portal:{title:'Portal Institucional',text:'Desenvolvimento e personalização de páginas institucionais usando Joomla e tecnologias web.',items:['Estruturação de páginas e conteúdo','Ajustes responsivos e melhorias de usabilidade','Personalização de banners e componentes visuais','Organização e apresentação de documentos']},
    intranet:{title:'Intranet Corporativa',text:'Ambiente interno para facilitar o acesso a informações e recursos organizacionais.',items:['Organização de conteúdos internos','Padronização da navegação','Personalização de interfaces','Manutenção e evolução contínua']},
    traffic:{title:'Sistema Inteligente de Controle Semafórico',text:'Projeto acadêmico de um sistema que adapta os tempos dos semáforos conforme o fluxo de veículos e o tamanho das filas.',items:['Simulação de cruzamentos no SUMO','Lógica de decisão com pontuação por veículos e filas','Experimentos com visão computacional (OpenCV)','Interface de acompanhamento e administração em desenvolvimento']}
  },
  en:{
    portal:{title:'Institutional Website',text:'Building and customizing institutional pages with Joomla and web technologies.',items:['Page and content structure','Responsive fixes and usability improvements','Custom banners and visual components','Document organization and presentation']},
    intranet:{title:'Corporate Intranet',text:'Internal environment that makes information and organizational resources easier to reach.',items:['Internal content organization','Consistent navigation','Custom interfaces','Ongoing maintenance and improvements']},
    traffic:{title:'Smart Traffic Light Control System',text:'Academic project of a system that adapts traffic light timing to vehicle flow and queue length.',items:['Intersection simulation in SUMO','Decision logic scoring vehicles and queues','Computer vision experiments (OpenCV)','Monitoring and admin interface in progress']}
  }
};
let LANG = 'pt';
const ORIG = new Map();
const GLYPHS = 'abcdefghijklmnopqrstuvwxyz#%&*+=<>/';
function scramble(el, to){
  const from = el.textContent, len = Math.max(from.length, to.length), dur = 480, t0 = performance.now();
  (function step(now){
    const p = Math.min(1, (now - t0) / dur); let s = '';
    for (let i = 0; i < len; i++){ const lim = i / len, c = to[i] || '';
      s += p >= lim + .25 || c === ' ' ? c : (p > lim ? GLYPHS[Math.random() * GLYPHS.length | 0] : (from[i] || '')); }
    el.textContent = p < 1 ? s : to; if (p < 1) requestAnimationFrame(step);
  })(t0);
}
function applyLang(l, anim){
  LANG = l; document.documentElement.lang = l === 'en' ? 'en' : 'pt-BR'; document.title = UI[l].title;
  $$('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n; if (!ORIG.has(el)) ORIG.set(el, el.innerHTML);
    const html = l === 'en' ? (EN[k] ?? ORIG.get(el)) : ORIG.get(el);
    if (html === el.innerHTML) return;
    const plain = !/[<&]/.test(html) && !el.children.length;
    if (anim && !reduce && plain && html.length < 50) scramble(el, html);
    else { el.innerHTML = html; if (anim && !reduce) el.animate([{opacity:0,filter:'blur(5px)'},{opacity:1,filter:'blur(0)'}],{duration:450,easing:'ease-out'}); }
  });
  $('#langCur').textContent = l === 'en' ? 'EN' : 'PT';
  updateBoardCount();
  try { localStorage.setItem('gc-lang', l); } catch(e){}
}
(function(){
  let l = null; try { l = localStorage.getItem('gc-lang'); } catch(e){}
  if (!l) l = (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  if (l === 'en') applyLang('en');
  $('#langBtn').addEventListener('click', () => applyLang(LANG === 'pt' ? 'en' : 'pt', true));
})();

/* ---------------- Tema claro/escuro ---------------- */
$('#themeBtn').addEventListener('click', () => {
  const r = document.documentElement, btn = $('#themeBtn');
  const cur = r.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  const nx = cur === 'dark' ? 'light' : 'dark';
  const go = () => { r.dataset.theme = nx; try { localStorage.setItem('gc-theme', nx); } catch(e){} };
  btn.classList.add('spin'); setTimeout(() => btn.classList.remove('spin'), 600);
  if (!document.startViewTransition || reduce) { go(); return; }
  const b = btn.getBoundingClientRect(), x = b.left + b.width / 2, y = b.top + b.height / 2;
  const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.startViewTransition(go).ready.then(() => r.animate(
    { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
    { duration: 650, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' }));
});

/* ---------------- Menu, header e link ativo ---------------- */
const menuButton = $('.menu-toggle'), navLinks = $('#nav-links');
const setMenu = open => { navLinks.classList.toggle('open', open); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); };
menuButton.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
const hdr = $('#hdr'); const onScroll = () => hdr.classList.toggle('solid', scrollY > 20);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
const secObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$('.nav-links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => secObs.observe(s));
$('#year').textContent = new Date().getFullYear();

/* ---------------- Reveals + contadores ---------------- */
function countUp(el){
  const end = +el.dataset.count, suf = el.dataset.suffix || '';
  if (reduce) { el.textContent = end + suf; return; }
  const t0 = performance.now(), dur = 1200;
  (function step(now){ const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(end * e) + (p === 1 ? suf : ''); if (p < 1) requestAnimationFrame(step); })(t0);
}
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in'); e.target.querySelectorAll('[data-count]').forEach(countUp); io.unobserve(e.target);
}), { threshold: .12 });
function arm(){ $$('.rv, .section-heading h2, .contact h2').forEach(el => io.observe(el)); $('#h1').classList.add('in'); }

/* ---------------- Loader (rápido, só na primeira visita da sessão) ---------------- */
(function(){
  const L = $('#loader'); let seen = false;
  try { seen = sessionStorage.getItem('gc-loaded'); sessionStorage.setItem('gc-loaded', '1'); } catch(e){}
  if (reduce || seen) { L.remove(); arm(); return; }
  const w = 'guilherme', t = $('#ltxt'); let i = 0;
  const iv = setInterval(() => { t.textContent = w.slice(0, ++i);
    if (i >= w.length) { clearInterval(iv); setTimeout(() => { L.classList.add('out'); setTimeout(arm, 200); setTimeout(() => L.remove(), 700); }, 220); } }, 55);
})();

/* ---------------- Grade de pontos interativa ---------------- */
(function(){
  const c = $('#dots'), x = c.getContext('2d'); let W, H, dpr, mx = -999, my = -999, raf = 0;
  const col = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  function size(){ const r = c.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height; c.width = W * dpr; c.height = H * dpr; draw(); }
  function draw(){
    raf = 0; x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, W, H);
    const base = col('--dot'), hot = col('--dot-hot'), G = 26;
    for (let yy = 13; yy < H; yy += G) for (let xx = 13; xx < W; xx += G){
      const d = Math.hypot(xx - mx, yy - my), k = Math.max(0, 1 - d / 170);
      x.fillStyle = k > 0 ? hot : base; x.globalAlpha = k > 0 ? Math.max(.15, k) : 1;
      x.beginPath(); x.arc(xx, yy, 1.1 + k * 1.6, 0, 7); x.fill();
    }
    x.globalAlpha = 1;
  }
  const sec = c.parentElement;
  sec.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; if (!raf && !reduce) raf = requestAnimationFrame(draw); });
  sec.addEventListener('pointerleave', () => { mx = my = -999; if (!raf) raf = requestAnimationFrame(draw); });
  new ResizeObserver(size).observe(c);
  new MutationObserver(() => requestAnimationFrame(draw)).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
})();

/* ---------------- Brilho que segue o mouse ---------------- */
$$('.glow-card').forEach(el => el.addEventListener('pointermove', e => {
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px');
}));

/* ---------------- Foto com inclinação 3D ---------------- */
(function(){
  const f = $('[data-tilt]'); if (!f || reduce || !finePointer) return;
  const area = f.closest('.hero-photo');
  area.addEventListener('pointermove', e => {
    const r = f.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    f.classList.add('tracking');
    f.style.setProperty('--ry', ((px - .5) * 16).toFixed(2) + 'deg'); f.style.setProperty('--rx', ((.5 - py) * 12).toFixed(2) + 'deg');
    f.style.setProperty('--sx', (px * 100) + '%'); f.style.setProperty('--sy', (py * 100) + '%');
  });
  area.addEventListener('pointerleave', () => { f.classList.remove('tracking'); f.style.setProperty('--ry', '0deg'); f.style.setProperty('--rx', '0deg'); });
})();

/* ---------------- Linha do tempo que preenche ao rolar ---------------- */
(function(){
  const tl = $('#timeline'); if (!tl) return; let raf = 0;
  const upd = () => { raf = 0; const r = tl.getBoundingClientRect(), vh = innerHeight;
    const p = Math.min(1, Math.max(0, (vh * .75 - r.top) / r.height)); tl.style.setProperty('--p', p.toFixed(3)); };
  addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(upd); }, { passive: true }); upd();
})();

/* ---------------- Links (LinkedIn, GitHub, e-mail) ---------------- */
const toast = msg => { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toast.tm); toast.tm = setTimeout(() => t.classList.remove('on'), 2200); };
$$('[data-link]').forEach(a => {
  const k = a.dataset.link, v = CONFIG[k];
  if (!v) { a.removeAttribute('href'); a.classList.add('unconfigured'); a.setAttribute('aria-disabled', 'true'); return; }
  if (k === 'email') a.href = 'mailto:' + v;
  else { a.href = v; a.target = '_blank'; a.rel = 'noopener noreferrer'; }
});
$('#emailTxt').textContent = CONFIG.email || '—';
$('#copyEmail').addEventListener('click', async () => {
  if (!CONFIG.email) { toast(UI[LANG].noEmail); return; }
  try { await navigator.clipboard.writeText(CONFIG.email); }
  catch(e){ const r = document.createRange(); r.selectNodeContents($('#emailTxt')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
  toast(UI[LANG].copied);
});

/* ---------------- Currículo: esconde os botões se o PDF não existir ---------------- */
(async function(){
  const cv = $$('[data-cv]'); if (!cv.length) return;
  try { const r = await fetch(cv[0].getAttribute('href'), { method: 'HEAD' }); if (!r.ok) throw 0; }
  catch(e){ cv.forEach(a => a.hidden = true); }
})();

/* ---------------- Detalhes dos projetos ---------------- */
const dialog = $('#project-dialog');
$$('[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = PROJECTS[LANG][button.dataset.project];
  $('#dialog-title').textContent = p.title; $('#dialog-text').textContent = p.text;
  $('#dialog-list').replaceChildren(...p.items.map(item => { const li = document.createElement('li'); li.textContent = item; return li; }));
  dialog.showModal();
}));
$('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

/* =========================================================
   DEMO: Help Desk via WhatsApp (simulação com dados fictícios)
   ========================================================= */
function updateBoardCount(){ const c = $('#hdCount'); if (c) c.textContent = UI[LANG].tickets(tickets.length); }
(function(){
  const chat = $('#hdChat'), opts = $('#hdOpts'), board = $('#hdBoard'), status = $('#phStatus');
  const CATS = ['🖨️ Impressora', '🌐 Rede / Internet', '💻 Computador', '🔑 Acesso / Senha'];
  const PROBS = {
    '🖨️ Impressora': ['Não imprime', 'Papel atolado', 'Sem toner'],
    '🌐 Rede / Internet': ['Sem internet', 'Rede lenta', 'Wi-Fi não conecta'],
    '💻 Computador': ['Não liga', 'Muito lento', 'Tela azul'],
    '🔑 Acesso / Senha': ['Esqueci a senha', 'Conta bloqueada', 'Novo acesso']
  };
  const TECHS = ['Sgt Lima', 'Cb Souza', 'Sd Ferreira'];
  let timers = [], current = null;
  const later = (fn, ms) => timers.push(setTimeout(fn, reduce ? Math.min(ms, 150) : ms));
  const now = () => new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));
  const scroll = () => chat.scrollTo({ top: chat.scrollHeight, behavior: reduce ? 'auto' : 'smooth' });
  function bubble(who, html){ const d = document.createElement('div'); d.className = 'bubble ' + who; d.innerHTML = html + `<time>${now()}</time>`; chat.appendChild(d); scroll(); }
  function bot(html, then, wait = 750){
    status.textContent = 'digitando…';
    const t = document.createElement('div'); t.className = 'bubble bot typing'; t.innerHTML = '<i></i><i></i><i></i>'; chat.appendChild(t); scroll();
    later(() => { t.remove(); status.textContent = 'online'; bubble('bot', html); then && then(); }, wait);
  }
  function choices(list, cb){
    opts.replaceChildren(...list.map(txt => { const b = document.createElement('button'); b.type = 'button'; b.textContent = txt;
      b.onclick = () => { opts.replaceChildren(); bubble('me', esc(txt)); cb(txt); }; return b; }));
  }
  function renderBoard(){
    if (!tickets.length) { board.innerHTML = `<li class="board-empty" data-i18n="board.empty">${LANG === 'en' ? EN['board.empty'] : 'Nenhum chamado ainda. Abra um pelo celular ao lado.'}</li>`; updateBoardCount(); return; }
    const label = { aberto: 'ABERTO', atendimento: 'EM ATENDIMENTO', concluido: 'CONCLUÍDO' };
    board.innerHTML = tickets.map(t => `<li class="ticket" data-id="${t.id}"><div class="ticket-top"><span>#${t.id}</span><span class="st st-${t.st}">${label[t.st]}</span></div><b>${esc(t.cat)} · ${esc(t.prob)}</b><small>${t.tech ? 'Técnico: ' + t.tech : 'Aguardando técnico'}${t.nota ? ' · ' + '★'.repeat(t.nota) : ''}</small></li>`).join('');
    updateBoardCount();
  }
  function flash(id){ const el = board.querySelector(`[data-id="${id}"]`); if (el) { el.classList.add('flash'); setTimeout(() => el.classList.remove('flash'), 900); } }
  function menu(){
    bot('Como posso ajudar? Escolha uma opção:', () => choices(['1️⃣ Abrir chamado', '2️⃣ Consultar protocolo', '3️⃣ Falar com técnico'], c => {
      if (c.startsWith('1')) abrir();
      else if (c.startsWith('2')) consultar();
      else bot('Um técnico foi avisado e vai falar com você em instantes. Enquanto isso, que tal abrir um chamado? Assim fica tudo registrado. 😉', menu);
    }));
  }
  function abrir(){
    bot('Qual é a <b>categoria</b> do problema?', () => choices(CATS, cat =>
      bot('Entendi. O que está acontecendo?', () => choices(PROBS[cat], prob => criar(cat, prob)))));
  }
  function criar(cat, prob){
    const id = new Date().getFullYear() + '-' + String(1000 + Math.floor(Math.random() * 9000));
    const t = { id, cat, prob, st: 'aberto', tech: null, nota: 0 }; tickets.unshift(t); current = t; renderBoard(); flash(id);
    bot(`✅ Chamado registrado!\nProtocolo: <b>#${id}</b>\n\nVocê vai receber as atualizações por aqui.`, () => {
      later(() => { t.st = 'atendimento'; t.tech = TECHS[Math.random() * TECHS.length | 0]; renderBoard(); flash(id);
        bot(`👨‍🔧 O técnico <b>${t.tech}</b> assumiu o seu chamado <b>#${id}</b>.`, () => {
          later(() => { t.st = 'concluido'; renderBoard(); flash(id);
            bot(`✔️ Chamado <b>#${id}</b> concluído!\n\nComo você avalia o atendimento?`, () => choices(['⭐ 1', '⭐ 2', '⭐ 3', '⭐ 4', '⭐ 5'], n => {
              t.nota = +n.slice(-1); renderBoard(); flash(id);
              bot('Obrigado pela avaliação! 💚 Ela ajuda a melhorar o suporte.', () => choices(['↺ Voltar ao menu'], menu));
            }));
          }, 2600);
        });
      }, 2200);
    });
  }
  function consultar(){
    if (!current) { bot('Você ainda não tem chamados. Que tal abrir um?', menu); return; }
    const label = { aberto: 'aberto, aguardando técnico', atendimento: 'em atendimento com ' + current.tech, concluido: 'concluído' };
    bot(`🔎 Protocolo <b>#${current.id}</b>\n${current.cat} · ${current.prob}\nStatus: <b>${label[current.st]}</b>`, () => choices(['↺ Voltar ao menu'], menu));
  }
  function start(){
    timers.forEach(clearTimeout); timers = []; chat.replaceChildren(); opts.replaceChildren(); status.textContent = 'online';
    bot('Olá! 👋 Sou o assistente do <b>Help Desk de TI</b>.', menu, 500);
  }
  $('#hdReset').addEventListener('click', () => { tickets.length = 0; current = null; renderBoard(); start(); });
  new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { start(); o.disconnect(); } }, { threshold: .3 }).observe($('.phone'));
  renderBoard();
})();
