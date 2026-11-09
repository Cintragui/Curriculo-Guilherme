/* =========================================================
   CONFIGURAÇÕES: coloque aqui seus links reais.
   Links vazios ficam desativados automaticamente.
   ========================================================= */
const CONFIG = {
  email: 'guicintradoraciotto@gmail.com',
  linkedin: 'https://www.linkedin.com/in/guilherme-cintra-doraciotto',
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
  'p4.type':'ai • academic project','p4.h':'SINALYX · Smart Traffic Lights','p4.p':'A mobility platform that detects vehicles with AI on cameras and videos, adjusts traffic light timing and shows everything in a web control center, with a city simulated in SUMO.',
  'p5.type':'web system • professional project','p5.h':'Inventory System','p5.p':'An app to audit IT equipment from a phone: it reads data from photos of the equipment, generates QR code labels and exports Excel and PDF reports.',
  'tag.vc':'Computer Vision','more':'Learn more','more.full':'See full project details',
  'tec.k':'03 / tools','tec.h':'My <em>tech stack</em>','tec.1':'Programming','tec.2':'Back-end and automation','tec.3':'Web structure','tec.4':'Interfaces','tec.6':'Studies and projects','tec.7':'Prototypes and AI','tec.8':'Version control',
  'exp.k':'04 / journey','exp.h':'Experience and <em>education</em>',
  'exp.1d':'2026 — present','exp.1h':'IT Section • Brazilian Army','exp.1p':'Technical support, infrastructure, development and automation of internal processes at the Sorocaba Regional Support Base. Built the WhatsApp Help Desk, the institutional website, the intranet and the inventory system.',
  'exp.2d':'2021 — 2026','exp.2h':'Health Section • Brazilian Army','exp.2p':'Private, then Health Corporal, promoted on merit. Medical bill auditing, spending reports and charts in Excel, and recognized for mapping and improving processes. Transport Chief in a humanitarian operation on the Venezuelan border (2025).',
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
/* ---------------- Conteúdo da janela de detalhes de cada projeto ---------------- */
const DLG_LABELS = {
  pt:{challenge:'o desafio',flow:'como funciona',built:'o que eu construí',stack:'tecnologias e arquitetura',result:'resultado',learned:'o que aprendi'},
  en:{challenge:'the challenge',flow:'how it works',built:'what I built',stack:'stack and architecture',result:'outcome',learned:'what I learned'}
};
const PROJECTS = {
  pt:{
    bot:{
      type:'automação • projeto profissional', title:'Help Desk via WhatsApp',
      tag:'Um bot que transformou pedidos soltos de suporte em chamados organizados, rastreáveis e avaliados, e que virou a base de uma plataforma interna maior.',
      stats:[['3 sistemas','nasceram dele: chamados, fila de despacho e mural de TV'],['Ponta a ponta','da abertura à pesquisa de satisfação'],['100%','rodando na rede interna da unidade']],
      challenge:'Os pedidos de suporte de TI chegavam por mensagens soltas, ligações e conversas no corredor. Sem registro, era difícil saber <strong>o que estava pendente, quem estava atendendo e quanto tempo cada problema levava</strong>. Eu queria um canal que as pessoas já usassem no dia a dia, sem precisar instalar nada.',
      flow:['Usuário manda mensagem','Escolhe a categoria','Recebe o protocolo','Técnico assume','Chamado concluído','Avaliação do atendimento'],
      built:[
        ['Menu de atendimento','Fluxo de conversa guiado por opções, que organiza a solicitação por categoria antes de chegar ao técnico.'],
        ['Protocolos','Cada pedido gera um número único, que o usuário consulta a qualquer momento para saber o status.'],
        ['Atribuição e encerramento','O técnico assume o chamado, o usuário é avisado e o encerramento fica registrado.'],
        ['Pesquisa de satisfação','Ao final, o usuário avalia o atendimento, o que gera um retorno para melhorar o suporte.'],
        ['Execução automatizada','O bot roda sozinho em um computador Windows da seção e se mantém disponível sem intervenção manual.'],
        ['Evolução para plataforma','Em parceria com um colega, o projeto virou uma central de chamados com prioridade e histórico, fila online de despacho e avisos nas TVs.']
      ],
      stack:['Node.js','JavaScript','whatsapp-web.js','Windows','Rede interna'],
      result:'O suporte passou a ter <strong>registro de tudo o que entra</strong>, status visível para quem pediu e avaliação de quem foi atendido. O projeto provou o valor da ideia e abriu caminho para a plataforma interna que hoje organiza o suporte, o despacho e a comunicação nas telas da unidade.',
      learned:['Projetar um fluxo de conversa simples para quem não é da área de TI','Automação com Node.js e integração com o WhatsApp','Tratar estados de um chamado (aberto, em atendimento, concluído)','Trabalhar em dupla para evoluir um protótipo até virar um sistema','Usar ferramentas de IA como apoio no desenvolvimento, validando cada fluxo na prática']
    },
    inventory:{
      type:'sistema web • projeto profissional', title:'Sistema de Inventário',
      tag:'Do celular à planilha: uma aplicação que cadastra os materiais de informática a partir de fotos e transforma a conferência em uma leitura de QR code.',
      stats:[['13','campos padronizados por material'],['36','commits no repositório'],['14','backups diários mantidos'],['12','etiquetas QR por folha A4']],
      challenge:'Conferir os materiais de informática significa ir de seção em seção, digitar patrimônio, série e especificações de cada equipamento e depois consolidar tudo. O objetivo foi <strong>reduzir a digitação, padronizar os dados e registrar cada mudança</strong>, usando o celular e sem enviar nenhuma imagem para fora da rede interna.',
      flow:['Fotos do equipamento','OCR sugere os dados','Equipe revisa e salva','Etiqueta QR impressa','Conferência pelo celular','Relatório em Excel ou PDF'],
      built:[
        ['Cadastro a partir de fotos','OCR local com Tesseract lê etiquetas e telas de especificações, aceita fotos HEIC de iPhone e mostra as diferenças para a pessoa revisar antes de salvar.'],
        ['Etiquetas com QR code','Etiqueta individual ou folha A4 com 12 por página. Ao escanear, a ficha do material abre direto no celular.'],
        ['Modo conferência','Escolha da seção, leitura dos QR codes e marcação como localizado, divergente ou não localizado, com progresso e lista de pendentes.'],
        ['Histórico completo','Mudanças de seção, arquivamento e resultados de conferência ficam registrados, com motivo quando exigido.'],
        ['Relatórios','Exportação em Excel com as 13 colunas e em PDF com opção de fotos, respeitando os filtros da lista.'],
        ['Painel e app instalável','Dashboard com gráficos, layout em cards no celular e ícone na tela inicial.'],
        ['Segurança','Senhas com PBKDF2 (310 mil iterações), sessões que expiram em 8 horas, token CSRF e contas separadas de administrador e membro.'],
        ['Backups e operação','Cópia automática diária do banco, backup completo em ZIP e utilitários de instalação e recuperação de acesso no Windows.']
      ],
      stack:['Python','SQLite','JavaScript','HTML5','CSS3','Tesseract OCR','Pillow','openpyxl','ReportLab','PWA'],
      result:'Um <strong>piloto completo para rede interna</strong>: celular e computador usam o mesmo banco de dados, a leitura das fotos acelera o cadastro e, mesmo sem OCR disponível, cadastro, fotos e relatórios continuam funcionando.',
      learned:['Lidar com fotos reais de celular, em que o OCR erra e a pessoa precisa revisar','Criar um servidor HTTP em Python sem framework, com sessões e controle de acesso','Modelar histórico para auditar cada mudança','Gerar Excel, PDF e QR codes no servidor','Projetar para falhas: backups, recuperação de acesso e funcionamento sem OCR']
    },
    portal:{
      type:'web • projeto profissional', title:'Portal Institucional',
      tag:'A vitrine pública da Base de Apoio Regional de Sorocaba: páginas mais claras, visual padronizado e informação fácil de achar.',
      stats:[['Público','site aberto à comunidade'],['Responsivo','no celular e no computador'],['Contínuo','manutenção e evolução']],
      challenge:'Um site institucional precisa comunicar com clareza para públicos muito diferentes, do militar ao cidadão, e manter documentos e notícias sempre atualizados, <strong>dentro dos padrões visuais da instituição</strong>.',
      built:[
        ['Estrutura de páginas','Organização do conteúdo em páginas e menus que levam a pessoa direto ao que procura.'],
        ['Componentes visuais','Criação e personalização de banners, blocos e elementos com HTML, CSS e JavaScript dentro do Joomla.'],
        ['Responsividade','Ajustes para o site funcionar bem em telas pequenas, onde está boa parte dos acessos.'],
        ['Documentos','Organização e apresentação de documentos e informações institucionais de forma acessível.']
      ],
      stack:['Joomla (CMS)','HTML5','CSS3','JavaScript'],
      result:'Um portal <strong>mais organizado, com identidade visual consistente</strong> e mais fácil de navegar e de manter atualizado pela equipe.',
      learned:['Personalizar um CMS sem quebrar atualizações','Pensar em usabilidade e acessibilidade para o público geral','Padronização visual e responsividade na prática']
    },
    intranet:{
      type:'web • projeto profissional', title:'Intranet Corporativa',
      tag:'Um ponto único para as informações e os recursos internos da unidade, pensado para ser simples de usar no dia a dia.',
      stats:[['1 lugar','para conteúdos e recursos internos'],['Padronizada','navegação e visual consistentes'],['Contínua','manutenção e evolução']],
      challenge:'Informações internas espalhadas em vários lugares fazem as pessoas perderem tempo procurando. A ideia foi <strong>centralizar tudo num ambiente web interno</strong> com uma navegação que qualquer pessoa entenda.',
      built:[
        ['Organização de conteúdo','Estruturação das informações e dos recursos internos por seções claras.'],
        ['Navegação padronizada','Menus e páginas seguindo o mesmo padrão, para a pessoa não se perder.'],
        ['Interfaces personalizadas','Ajustes visuais para deixar o ambiente mais limpo e fácil de ler.'],
        ['Manutenção contínua','Atualização e evolução do ambiente conforme surgem novas necessidades.']
      ],
      stack:['Joomla (CMS)','HTML5','CSS3','Rede interna'],
      result:'Um ambiente <strong>centralizado e padronizado</strong>, que facilita o acesso do efetivo às informações e aos recursos da unidade.',
      learned:['Arquitetura da informação: organizar conteúdo para ser encontrado','Manter um sistema em uso sem atrapalhar quem depende dele','Ouvir os usuários para priorizar melhorias']
    },
    traffic:{
      type:'ia • projeto acadêmico', title:'SINALYX · Semáforos Inteligentes',
      tag:'Uma plataforma de mobilidade que enxerga o trânsito com visão computacional, decide os tempos dos semáforos e mostra tudo numa central de controle web.',
      stats:[['189','commits no repositório'],['6','cenários de tráfego simulados'],['3','perfis de acesso'],['24h','de trânsito simulado']],
      challenge:'Semáforos com tempo fixo não se adaptam ao trânsito real: uma via fica parada com fila enquanto a outra está vazia. O objetivo foi criar um sistema que <strong>meça o fluxo de verdade e ajuste os tempos dos sinais</strong>, testado com segurança numa cidade simulada antes de qualquer uso real.',
      flow:['Câmera, vídeo ou SUMO','YOLO detecta veículos','Filas por aproximação','Lógica decide o tempo','Semáforo ajustado','Central acompanha ao vivo'],
      built:[
        ['Detecção com IA','Veículos detectados em tempo real com YOLO e OpenCV, com zonas por aproximação, linha virtual de contagem e mapa de calor.'],
        ['Gêmeo digital no SUMO','Uma cidade simulada controlada via TraCI, com "Sala de Controle" que mostra o cruzamento ao vivo e um gerador contínuo de tráfego.'],
        ['Onda verde','Planejador no mapa geográfico que coordena vários semáforos para o fluxo andar sem paradas.'],
        ['Corredor de emergência','Prioridade para veículos de emergência abrindo caminho nos cruzamentos.'],
        ['Leitura de placas','Reconhecimento automático de placas (ALPR) com rastreio no vídeo e alertas.'],
        ['Central web','Painel em Flask com mapa (Leaflet), cards de cada cruzamento com prévia de vídeo, várias câmeras por cruzamento e diagnóstico de operação.'],
        ['Câmeras IP reais','Ponte RTSP para MJPEG com reconexão, testada com câmera Intelbras, sem expor credenciais no navegador.'],
        ['Segurança','Login com senhas em hash, perfis de administrador, operador e visualizador, e gravação atômica dos dados.']
      ],
      stack:['Python','Flask','YOLO (Ultralytics)','OpenCV','SUMO + TraCI','fast-alpr','SQLite','JavaScript','Leaflet'],
      result:'O que começou como protótipo virou uma <strong>plataforma completa e demonstrável</strong>, com modo "feira" que roda sozinho com cenas e legendas para apresentações. O sistema compara o controle adaptativo com o tempo fixo em cenários simulados e foi documentado com guias de operação, integração e segurança.',
      learned:['Visão computacional aplicada a um problema real','Simulação de tráfego e controle por API (TraCI)','Arquitetura de uma aplicação web com várias fontes de dados ao vivo','Segurança: credenciais fora do código, perfis de acesso e hash de senhas','Levar um projeto do protótipo a uma versão apresentável, com testes e documentação']
    }
  },
  en:{
    bot:{
      type:'automation • professional project', title:'WhatsApp Help Desk',
      tag:'A bot that turned scattered support requests into organized, trackable and rated tickets, and became the foundation of a larger internal platform.',
      stats:[['3 systems','grew out of it: tickets, meeting queue and TV board'],['End to end','from opening to satisfaction survey'],['100%','running on the unit\'s internal network']],
      challenge:'IT support requests arrived through loose messages, calls and hallway conversations. With no record, it was hard to know <strong>what was pending, who was handling it and how long each problem took</strong>. I wanted a channel people already used every day, with nothing to install.',
      flow:['User sends a message','Picks a category','Gets a ticket number','Technician takes it','Ticket closed','Service rated'],
      built:[
        ['Service menu','Option-driven conversation that sorts each request by category before it reaches a technician.'],
        ['Ticket numbers','Every request gets a unique number the user can look up anytime to check the status.'],
        ['Assignment and closing','A technician takes the ticket, the user is notified and the closing is recorded.'],
        ['Satisfaction survey','At the end the user rates the service, giving feedback to improve support.'],
        ['Automated execution','The bot runs on its own on a Windows machine in the section, available without manual work.'],
        ['Grew into a platform','With a colleague, it became a ticketing platform with priority and history, an online meeting queue and notices on TVs.']
      ],
      stack:['Node.js','JavaScript','whatsapp-web.js','Windows','Internal network'],
      result:'Support now has <strong>a record of everything that comes in</strong>, visible status for whoever asked and ratings from whoever was helped. The project proved the idea and paved the way for the internal platform that now organizes support, queues and on-screen communication at the unit.',
      learned:['Designing a simple conversation flow for non-technical users','Automation with Node.js and WhatsApp integration','Handling ticket states (open, in progress, closed)','Working as a pair to grow a prototype into a system','Using AI tools to support development, validating every flow in practice']
    },
    inventory:{
      type:'web system • professional project', title:'Inventory System',
      tag:'From phone to spreadsheet: an app that registers IT equipment from photos and turns the audit into a QR code scan.',
      stats:[['13','standardized fields per item'],['36','commits in the repository'],['14','daily backups kept'],['12','QR labels per A4 sheet']],
      challenge:'Auditing IT equipment means going from section to section, typing asset tags, serial numbers and specs for each item, then consolidating it all. The goal was to <strong>cut typing, standardize the data and record every change</strong>, using a phone and without sending any image outside the internal network.',
      flow:['Equipment photos','OCR suggests the data','Team reviews and saves','QR label printed','Audit by phone','Excel or PDF report'],
      built:[
        ['Registration from photos','Local OCR with Tesseract reads labels and spec screens, accepts iPhone HEIC photos and shows differences for review before saving.'],
        ['QR code labels','Single labels or A4 sheets with 12 per page. Scanning one opens the item record right on the phone.'],
        ['Audit mode','Pick a section, scan the QR codes and mark items as found, divergent or not found, with progress and a pending list.'],
        ['Full history','Section moves, archiving and audit results are recorded, with a reason when required.'],
        ['Reports','Excel export with the 13 columns and PDF with optional photos, honoring the list filters.'],
        ['Dashboard and installable app','Dashboard with charts, card layout on phones and a home screen icon.'],
        ['Security','PBKDF2 password hashing (310k iterations), sessions that expire after 8 hours, CSRF token and separate admin and member accounts.'],
        ['Backups and operations','Automatic daily database copy, full ZIP backup and Windows utilities for setup and access recovery.']
      ],
      stack:['Python','SQLite','JavaScript','HTML5','CSS3','Tesseract OCR','Pillow','openpyxl','ReportLab','PWA'],
      result:'A <strong>complete pilot for the internal network</strong>: phones and computers share the same database, photo reading speeds up registration and, even without OCR, registration, photos and reports keep working.',
      learned:['Handling real phone photos, where OCR makes mistakes and people must review','Building a Python HTTP server without a framework, with sessions and access control','Modeling history to audit every change','Generating Excel, PDF and QR codes on the server','Designing for failure: backups, access recovery and working without OCR']
    },
    portal:{
      type:'web • professional project', title:'Institutional Website',
      tag:'The public face of the Sorocaba Regional Support Base: clearer pages, consistent visuals and information that is easy to find.',
      stats:[['Public','site open to the community'],['Responsive','on phones and desktops'],['Ongoing','maintenance and improvements']],
      challenge:'An institutional website must speak clearly to very different audiences, from service members to citizens, and keep documents and news up to date, <strong>within the institution\'s visual standards</strong>.',
      built:[
        ['Page structure','Content organized into pages and menus that take people straight to what they need.'],
        ['Visual components','Custom banners, blocks and elements built with HTML, CSS and JavaScript inside Joomla.'],
        ['Responsiveness','Fixes so the site works well on small screens, where much of the traffic comes from.'],
        ['Documents','Organizing and presenting institutional documents and information in an accessible way.']
      ],
      stack:['Joomla (CMS)','HTML5','CSS3','JavaScript'],
      result:'A <strong>more organized portal with a consistent visual identity</strong>, easier to navigate and easier for the team to keep up to date.',
      learned:['Customizing a CMS without breaking updates','Usability and accessibility for a general audience','Visual consistency and responsiveness in practice']
    },
    intranet:{
      type:'web • professional project', title:'Corporate Intranet',
      tag:'A single place for the unit\'s internal information and resources, designed to be simple to use every day.',
      stats:[['1 place','for internal content and resources'],['Consistent','navigation and visuals'],['Ongoing','maintenance and improvements']],
      challenge:'Internal information scattered across many places makes people waste time searching. The goal was to <strong>centralize everything in an internal web environment</strong> with navigation anyone can understand.',
      built:[
        ['Content organization','Internal information and resources structured into clear sections.'],
        ['Consistent navigation','Menus and pages following the same pattern so nobody gets lost.'],
        ['Custom interfaces','Visual tweaks to make the environment cleaner and easier to read.'],
        ['Ongoing maintenance','Updating and evolving the environment as new needs appear.']
      ],
      stack:['Joomla (CMS)','HTML5','CSS3','Internal network'],
      result:'A <strong>centralized, consistent environment</strong> that makes the unit\'s information and resources easier for staff to reach.',
      learned:['Information architecture: organizing content so it can be found','Maintaining a live system without disrupting its users','Listening to users to prioritize improvements']
    },
    traffic:{
      type:'ai • academic project', title:'SINALYX · Smart Traffic Lights',
      tag:'A mobility platform that sees traffic through computer vision, decides traffic light timing and shows everything in a web control center.',
      stats:[['189','commits in the repository'],['6','simulated traffic scenarios'],['3','access roles'],['24h','of simulated traffic']],
      challenge:'Fixed-time traffic lights don\'t adapt to real traffic: one road sits in a queue while the other is empty. The goal was a system that <strong>measures real flow and adjusts signal timing</strong>, tested safely in a simulated city before any real use.',
      flow:['Camera, video or SUMO','YOLO detects vehicles','Queues per approach','Logic picks the timing','Signal adjusted','Live control center'],
      built:[
        ['AI detection','Real-time vehicle detection with YOLO and OpenCV, with zones per approach, a virtual counting line and a heat map.'],
        ['SUMO digital twin','A simulated city controlled via TraCI, with a "Control Room" showing the intersection live and a continuous traffic generator.'],
        ['Green wave','A planner on a geographic map that coordinates several lights so traffic flows without stopping.'],
        ['Emergency corridor','Priority for emergency vehicles, clearing the way through intersections.'],
        ['License plate reading','Automatic plate recognition (ALPR) with tracking on video and alerts.'],
        ['Web control center','Flask dashboard with a map (Leaflet), intersection cards with video previews, multiple cameras per intersection and operations diagnostics.'],
        ['Real IP cameras','RTSP to MJPEG bridge with reconnection, tested with an Intelbras camera, without exposing credentials to the browser.'],
        ['Security','Login with hashed passwords, admin/operator/viewer roles and atomic data writes.']
      ],
      stack:['Python','Flask','YOLO (Ultralytics)','OpenCV','SUMO + TraCI','fast-alpr','SQLite','JavaScript','Leaflet'],
      result:'What started as a prototype became a <strong>complete, demo-ready platform</strong>, with a self-running "fair mode" with scenes and captions for presentations. It compares adaptive control with fixed timing in simulated scenarios and is documented with operation, integration and security guides.',
      learned:['Computer vision applied to a real problem','Traffic simulation and API control (TraCI)','Architecture of a web app with several live data sources','Security: credentials out of the code, access roles and password hashing','Taking a project from prototype to a presentable version with tests and documentation']
    }
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
  const p = PROJECTS[LANG][button.dataset.project], L = DLG_LABELS[LANG];
  $('#dlgType').textContent = p.type; $('#dialog-title').textContent = p.title; $('#dlgTag').textContent = p.tag;
  $('#dlgStats').innerHTML = p.stats.map(([v, l]) => `<div><b>${v}</b><span>${l}</span></div>`).join('');
  const sec = (h, inner) => `<section class="dlg-sec"><h3>${h}</h3>${inner}</section>`;
  let html = sec(L.challenge, `<p>${p.challenge}</p>`);
  if (p.flow) html += sec(L.flow, `<div class="dlg-flow">${p.flow.map(s => `<span>${s}</span>`).join('<i>→</i>')}</div>`);
  html += sec(L.built, `<div class="dlg-feats">${p.built.map(([t, d]) => `<div><b>${t}</b><span>${d}</span></div>`).join('')}</div>`);
  html += sec(L.stack, `<div class="tags">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>`);
  html += `<div class="dlg-two"><div class="dlg-box hl">${sec(L.result, `<p>${p.result}</p>`)}</div><div class="dlg-box">${sec(L.learned, `<ul>${p.learned.map(s => `<li>${s}</li>`).join('')}</ul>`)}</div></div>`;
  $('#dlgBody').innerHTML = html;
  dialog.showModal(); dialog.scrollTop = 0;
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
