const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const querystring = require('querystring');

const PORT = process.env.PORT || 3000;
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'ChangeMe123!';
const CONTENT_FILE = path.join(__dirname, 'content.json');

const defaultContent = {
  heroBadge: 'Smart Money Concepts (SMC) & ICT Halol Kripto Savdosi',
  heroTitle1: 'Halol va Intizomli',
  heroTitle2: 'Top Muslim Traders Academy',
  heroDesc: "Top Muslim Traders Academy — shariat tamoyillariga mos keluvchi Spot kriptovalyuta savdosi, Smart Money Concepts (SMC), ICT tahlili va intizomli risk-menedjmentni mukammal o'rgatuvchi xalqaro treyderlar akademiyasidir.",
  stat1Value: '100%', stat1Label: 'Spot & Halol Kripto',
  stat2Value: '25K+', stat2Label: 'Jami Obunachilar',
  stat3Value: 'SMC / ICT', stat3Label: 'Smart Money Tahlil',
  telegramBot: 'https://t.me/TopMuslimTradersBot',
  telegramChannel: 'https://t.me/Scalp_TMT',
  telegramResults: 'https://t.me/TMT_Natijalari',
  instagram: 'https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==',
  heroImage: '',
  logoImage: ''
};

function loadContent() {
  try {
    const raw = fs.readFileSync(CONTENT_FILE, 'utf8');
    return Object.assign({}, defaultContent, JSON.parse(raw));
  } catch (e) {
    return Object.assign({}, defaultContent);
  }
}
function saveContent(c) {
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(c, null, 2), 'utf8');
}
let content = loadContent();

const sessions = new Set();
function parseCookies(req) {
  const header = req.headers.cookie;
  const cookies = {};
  if (!header) return cookies;
  header.split(';').forEach(pair => {
    const idx = pair.indexOf('=');
    if (idx > -1) cookies[pair.slice(0, idx).trim()] = decodeURIComponent(pair.slice(idx + 1).trim());
  });
  return cookies;
}
function isAuthenticated(req) {
  const cookies = parseCookies(req);
  return !!(cookies.admin_session && sessions.has(cookies.admin_session));
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (data.length > 15 * 1024 * 1024) { reject(new Error('Payload too large')); req.destroy(); }
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}
function safeEqual(a, b) {
  const bufA = Buffer.from(String(a)); const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}
function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function logoHtml(c) {
  if (c.logoImage) {
    return `<img src="${c.logoImage}" alt="Logo" class="w-full h-full object-contain rounded-xl">`;
  }
  return `<svg class="w-full h-full drop-shadow-[0_0_15px_rgba(255,215,0,0.35)] transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" fill="#0D121D" stroke="url(#goldGrad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 35H35V20M80 35H65V20M20 65H35V80M80 65H65V80" stroke="#00E676" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="2 2"/>
      <circle cx="35" cy="20" r="2" fill="#00E676"/><circle cx="65" cy="20" r="2" fill="#00E676"/>
      <circle cx="35" cy="80" r="2" fill="#00E676"/><circle cx="65" cy="80" r="2" fill="#00E676"/>
      <line x1="38" y1="28" x2="38" y2="72" stroke="#00E676" stroke-width="1.5"/><rect x="34" y="38" width="8" height="22" rx="1.5" fill="#00E676"/>
      <line x1="62" y1="28" x2="62" y2="72" stroke="#FF5252" stroke-width="1.5"/><rect x="58" y="44" width="8" height="18" rx="1.5" fill="#FF5252"/>
      <text x="50" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="28" fill="url(#goldGrad)" text-anchor="middle" letter-spacing="-1">TMT</text>
      <defs><linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFF5B8"/><stop offset="50%" stop-color="#FFD700"/><stop offset="100%" stop-color="#C5A028"/></linearGradient></defs>
    </svg>`;
}

function buildPublicHtml(c) {
  return `<!DOCTYPE html>
<html lang="uz" class="dark scroll-smooth">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Top Muslim Traders Academy | Halol Kripto & Smart Money Hub</title>
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = { darkMode: 'class', theme: { extend: {
  colors: { darkBg:'#06080D', cardBg:'#0D121D', cardBorder:'#1A2436', goldAccent:'#FFD700', goldDark:'#C5A028',
    emeraldGreen:'#00E676', tradeRed:'#FF5252', accentBlue:'#00F0FF', accentPurple:'#A855F7',
    instaPink:'#E1306C', instaPurple:'#833AB4', instaOrange:'#F77737' },
  fontFamily: { sans: ['Plus Jakarta Sans','Inter','sans-serif'] }
} } }
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
body{font-family:'Plus Jakarta Sans',sans-serif;background-color:#06080D;color:#F1F5F9;}
.glass-card{background:rgba(13,18,29,0.75);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.07);}
.glass-card-hover{transition:all .3s cubic-bezier(.4,0,.2,1);}
.glass-card-hover:hover{transform:translateY(-4px);border-color:rgba(255,215,0,.3);box-shadow:0 12px 30px -10px rgba(0,0,0,.8),0 0 20px rgba(255,215,0,.15);}
.insta-gradient-bg{background:linear-gradient(45deg,#405DE6,#5851DB,#833AB4,#C13584,#E1306C,#FD1D1D);}
.gradient-gold-text{background:linear-gradient(135deg,#FFF5B8 0%,#FFD700 50%,#C5A028 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.grid-cyber-pattern{background-size:40px 40px;background-image:linear-gradient(to right,rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.02) 1px,transparent 1px);}
</style>
</head>
<body class="bg-darkBg text-slate-100 antialiased flex flex-col min-h-screen justify-between relative">

<header class="bg-cardBg/80 border-b border-cardBorder/80 backdrop-blur-2xl sticky top-0 z-40">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <a href="#hero" class="flex items-center space-x-3.5 group">
        <div class="relative w-12 h-12 flex-shrink-0">${logoHtml(c)}</div>
        <div>
          <div class="text-lg sm:text-xl font-black tracking-wider text-white leading-none">
            TOP MUSLIM TRADERS <span class="gradient-gold-text">ACADEMY</span>
          </div>
          <span class="block text-[10px] text-emeraldGreen font-bold uppercase tracking-widest mt-1">Halol Kripto & Smart Money Hub</span>
        </div>
      </a>
      <nav class="hidden xl:flex items-center space-x-6 text-sm font-bold text-slate-300">
        <a href="#hero" class="hover:text-goldAccent">Bosh Sahifa</a>
        <a href="#youtube" class="hover:text-red-400"><i class="fa-brands fa-youtube text-red-500"></i> Video Darslar</a>
        <a href="#halal" class="hover:text-goldAccent"><i class="fa-solid fa-kaaba text-goldAccent"></i> Kripto Halolmi?</a>
        <a href="#calculator" class="hover:text-accentBlue"><i class="fa-solid fa-calculator text-accentBlue"></i> Kalkulyator</a>
        <a href="#pdf-library" class="hover:text-accentPurple"><i class="fa-solid fa-book-bookmark text-accentPurple"></i> PDF Kitoblar</a>
      </nav>
      <a href="${esc(c.telegramBot)}" target="_blank" class="hidden md:flex items-center space-x-2 bg-gradient-to-r from-goldAccent to-goldDark text-darkBg font-extrabold px-4 py-2.5 rounded-xl text-xs">
        <i class="fa-solid fa-robot"></i><span>Aloqa Boti</span>
      </a>
    </div>
  </div>
</header>

<section id="hero" class="relative py-16 lg:py-28 border-b border-cardBorder grid-cyber-pattern">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    ${c.heroImage ? `<div class="mb-10 rounded-3xl overflow-hidden border border-goldAccent/30 shadow-2xl"><img src="${c.heroImage}" alt="Banner" class="w-full max-h-[420px] object-cover"></div>` : ''}
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
        <div class="inline-flex items-center space-x-2.5 bg-cardBg/90 border border-goldAccent/50 px-4 py-2 rounded-full text-xs font-extrabold text-goldAccent">
          <i class="fa-solid fa-shield-halal"></i><span>${esc(c.heroBadge)}</span>
        </div>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
          ${esc(c.heroTitle1)}<br/><span class="gradient-gold-text">${esc(c.heroTitle2)}</span>
        </h1>
        <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">${esc(c.heroDesc)}</p>
        <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-3">
          <a href="${esc(c.telegramChannel)}" target="_blank" class="flex items-center space-x-2.5 bg-gradient-to-r from-goldAccent to-goldDark text-darkBg font-black px-7 py-4 rounded-2xl text-sm">
            <i class="fa-brands fa-telegram text-xl"></i><span>Scalp Telegram Kanal</span>
          </a>
          <a href="${esc(c.instagram)}" target="_blank" class="flex items-center space-x-2.5 bg-gradient-to-r from-instaOrange via-instaPink to-instaPurple text-white font-black px-7 py-4 rounded-2xl text-sm">
            <i class="fa-brands fa-instagram text-xl"></i><span>Instagram Sahifamiz</span>
          </a>
        </div>
        <div class="grid grid-cols-3 gap-4 pt-8 border-t border-cardBorder/80 max-w-lg mx-auto lg:mx-0">
          <div class="glass-card p-4 rounded-2xl border border-cardBorder">
            <div class="text-2xl sm:text-3xl font-black text-white">${esc(c.stat1Value)}</div>
            <div class="text-[11px] font-medium text-slate-400 mt-1">${esc(c.stat1Label)}</div>
          </div>
          <div class="glass-card p-4 rounded-2xl border border-cardBorder">
            <div class="text-2xl sm:text-3xl font-black text-emeraldGreen">${esc(c.stat2Value)}</div>
            <div class="text-[11px] font-medium text-slate-400 mt-1">${esc(c.stat2Label)}</div>
          </div>
          <div class="glass-card p-4 rounded-2xl border border-cardBorder">
            <div class="text-2xl sm:text-3xl font-black text-goldAccent">${esc(c.stat3Value)}</div>
            <div class="text-[11px] font-medium text-slate-400 mt-1">${esc(c.stat3Label)}</div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-5">
        <div class="glass-card border border-goldAccent/30 rounded-3xl p-6">
          <div class="space-y-3">
            <a href="${esc(c.instagram)}" target="_blank" class="flex items-center justify-between p-3.5 rounded-2xl bg-darkBg/90 border border-instaPink/40">
              <div class="flex items-center space-x-3.5">
                <div class="w-10 h-10 rounded-xl insta-gradient-bg text-white flex items-center justify-center"><i class="fa-brands fa-instagram text-xl"></i></div>
                <div><div class="text-sm font-bold text-white">Instagram</div><div class="text-xs text-slate-400">Video Reels & Darslar</div></div>
              </div>
            </a>
            <a href="${esc(c.telegramChannel)}" target="_blank" class="flex items-center justify-between p-3.5 rounded-2xl bg-darkBg/90 border border-cardBorder">
              <div class="flex items-center space-x-3.5">
                <div class="w-10 h-10 rounded-xl bg-accentBlue/10 text-accentBlue flex items-center justify-center"><i class="fa-brands fa-telegram text-xl"></i></div>
                <div><div class="text-sm font-bold text-white">Telegram Kanal</div><div class="text-xs text-slate-400">Signallar & Tahlillar</div></div>
              </div>
            </a>
            <a href="${esc(c.telegramResults)}" target="_blank" class="flex items-center justify-between p-3.5 rounded-2xl bg-darkBg/90 border border-cardBorder">
              <div class="flex items-center space-x-3.5">
                <div class="w-10 h-10 rounded-xl bg-emeraldGreen/10 text-emeraldGreen flex items-center justify-center"><i class="fa-solid fa-chart-line"></i></div>
                <div><div class="text-sm font-bold text-white">Natijalar</div><div class="text-xs text-slate-400">O'quvchilar natijalari</div></div>
              </div>
            </a>
            <a href="${esc(c.telegramBot)}" target="_blank" class="flex items-center justify-between p-3.5 rounded-2xl bg-darkBg/90 border border-cardBorder">
              <div class="flex items-center space-x-3.5">
                <div class="w-10 h-10 rounded-xl bg-goldAccent/10 text-goldAccent flex items-center justify-center"><i class="fa-solid fa-robot"></i></div>
                <div><div class="text-sm font-bold text-white">Bot</div><div class="text-xs text-slate-400">Savol-Javob</div></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="bg-cardBg border-t border-cardBorder py-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
    &copy; 2026 TOP MUSLIM TRADERS ACADEMY. Barcha huquqlar himoyalangan.
  </div>
</footer>
</body>
</html>`;
}

function loginPageHtml(error) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Admin Kirish</title>
<script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-slate-900 text-white min-h-screen flex items-center justify-center">
<form method="POST" action="/admin/login" class="bg-slate-800 p-8 rounded-2xl w-full max-w-sm space-y-4">
  <h1 class="text-xl font-bold text-center">Admin Panel</h1>
  ${error ? `<div class="bg-red-500/20 text-red-300 text-sm p-2 rounded">${esc(error)}</div>` : ''}
  <input name="username" placeholder="Login" class="w-full p-3 rounded bg-slate-700 text-white" required>
  <input name="password" type="password" placeholder="Parol" class="w-full p-3 rounded bg-slate-700 text-white" required>
  <button class="w-full bg-yellow-500 text-black font-bold p-3 rounded">Kirish</button>
</form></body></html>`;
}

function adminPageHtml(c, message) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Admin Panel</title>
<script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-slate-900 text-white min-h-screen p-6">
<div class="max-w-3xl mx-auto space-y-6">
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold">Saytni boshqarish</h1>
    <form method="POST" action="/admin/logout"><button class="bg-red-600 px-4 py-2 rounded text-sm">Chiqish</button></form>
  </div>
  ${message ? `<div class="bg-green-500/20 text-green-300 p-3 rounded">${esc(message)}</div>` : ''}
  <form id="editForm" class="space-y-4 bg-slate-800 p-6 rounded-2xl">
    <div><label class="text-xs text-slate-400">Hero belgi (badge)</label>
      <input name="heroBadge" value="${esc(c.heroBadge)}" class="w-full p-2 rounded bg-slate-700"></div>
    <div><label class="text-xs text-slate-400">Sarlavha 1-qator</label>
      <input name="heroTitle1" value="${esc(c.heroTitle1)}" class="w-full p-2 rounded bg-slate-700"></div>
    <div><label class="text-xs text-slate-400">Sarlavha 2-qator (oltin rang)</label>
      <input name="heroTitle2" value="${esc(c.heroTitle2)}" class="w-full p-2 rounded bg-slate-700"></div>
    <div><label class="text-xs text-slate-400">Tavsif matni</label>
      <textarea name="heroDesc" rows="3" class="w-full p-2 rounded bg-slate-700">${esc(c.heroDesc)}</textarea></div>
    <div class="grid grid-cols-3 gap-3">
      <div><input name="stat1Value" value="${esc(c.stat1Value)}" placeholder="Statistika 1" class="w-full p-2 rounded bg-slate-700 mb-1">
        <input name="stat1Label" value="${esc(c.stat1Label)}" class="w-full p-2 rounded bg-slate-700 text-xs"></div>
      <div><input name="stat2Value" value="${esc(c.stat2Value)}" placeholder="Statistika 2" class="w-full p-2 rounded bg-slate-700 mb-1">
        <input name="stat2Label" value="${esc(c.stat2Label)}" class="w-full p-2 rounded bg-slate-700 text-xs"></div>
      <div><input name="stat3Value" value="${esc(c.stat3Value)}" placeholder="Statistika 3" class="w-full p-2 rounded bg-slate-700 mb-1">
        <input name="stat3Label" value="${esc(c.stat3Label)}" class="w-full p-2 rounded bg-slate-700 text-xs"></div>
    </div>
    <div><label class="text-xs text-slate-400">Telegram Bot havolasi</label>
      <input name="telegramBot" value="${esc(c.telegramBot)}" class="w-full p-2 rounded bg-slate-700"></div>
    <div><label class="text-xs text-slate-400">Telegram Kanal havolasi</label>
      <input name="telegramChannel" value="${esc(c.telegramChannel)}" class="w-full p-2 rounded bg-slate-700"></div>
    <div><label class="text-xs text-slate-400">Telegram Natijalar havolasi</label>
      <input name="telegramResults" value="${esc(c.telegramResults)}" class="w-full p-2 rounded bg-slate-700"></div>
    <div><label class="text-xs text-slate-400">Instagram havolasi</label>
      <input name="instagram" value="${esc(c.instagram)}" class="w-full p-2 rounded bg-slate-700"></div>

    <div><label class="text-xs text-slate-400">Logo rasmi (ixtiyoriy)</label>
      <input type="file" id="logoFile" accept="image/*" class="w-full text-sm">
      <input type="hidden" name="logoImage" id="logoImage" value="${esc(c.logoImage)}"></div>
    <div><label class="text-xs text-slate-400">Hero banner rasmi (ixtiyoriy)</label>
      <input type="file" id="heroFile" accept="image/*" class="w-full text-sm">
      <input type="hidden" name="heroImage" id="heroImage" value="${esc(c.heroImage)}"></div>

    <button type="submit" class="w-full bg-yellow-500 text-black font-bold p-3 rounded">Saqlash</button>
  </form>
  <a href="/" target="_blank" class="text-blue-400 text-sm">Saytni ko'rish →</a>
</div>
<script>
function fileToBase64(input, hiddenId) {
  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { document.getElementById(hiddenId).value = reader.result; };
    reader.readAsDataURL(file);
  });
}
fileToBase64(document.getElementById('logoFile'), 'logoImage');
fileToBase64(document.getElementById('heroFile'), 'heroImage');

document.getElementById('editForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {};
  formData.forEach((v, k) => { data[k] = v; });
  const res = await fetch('/admin/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) { window.location.reload(); } else { alert('Xatolik yuz berdi'); }
});
</script>
</body></html>`;
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      return res.end('OK');
    }

    if (req.url === '/admin/login' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(loginPageHtml());
    }

    if (req.url === '/admin/login' && req.method === 'POST') {
      const body = await readBody(req);
      const parsed = querystring.parse(body);
      if (safeEqual(parsed.username, ADMIN_USER) && safeEqual(parsed.password, ADMIN_PASS)) {
        const token = crypto.randomBytes(32).toString('hex');
        sessions.add(token);
        res.writeHead(302, {
          'Set-Cookie': `admin_session=${token}; HttpOnly; Path=/; Max-Age=86400`,
          'Location': '/admin'
        });
        return res.end();
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(loginPageHtml('Login yoki parol noto\'g\'ri'));
    }

    if (req.url === '/admin/logout' && req.method === 'POST') {
      const cookies = parseCookies(req);
      if (cookies.admin_session) sessions.delete(cookies.admin_session);
      res.writeHead(302, { 'Location': '/admin/login' });
      return res.end();
    }

    if (req.url === '/admin' && req.method === 'GET') {
      if (!isAuthenticated(req)) {
        res.writeHead(302, { 'Location': '/admin/login' });
        return res.end();
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(adminPageHtml(content));
    }

    if (req.url === '/admin/save' && req.method === 'POST') {
      if (!isAuthenticated(req)) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'unauthorized' }));
      }
      const body = await readBody(req);
      const updates = JSON.parse(body);
      content = Object.assign({}, content, updates);
      saveContent(content);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ ok: true }));
    }

    // Public site
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache'
    });
    res.end(buildPublicHtml(content));
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server error: ' + err.message);
  }
});

server.listen(PORT, () => {
  console.log(`Top Muslim Traders Academy Server is live on port ${PORT}`);
});
