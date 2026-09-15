const http = require('http');

// Railway automatically assigns process.env.PORT
const PORT = process.env.PORT || 3000;

const htmlContent = `<!DOCTYPE html>
<html lang="uz" class="dark scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top Muslim Traders Academy | Halol Kripto & Smart Money Hub</title>

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        darkBg: '#06080D',
                        cardBg: '#0D121D',
                        cardBorder: '#1A2436',
                        goldAccent: '#FFD700',
                        goldDark: '#C5A028',
                        goldGlow: 'rgba(255, 215, 0, 0.18)',
                        emeraldGreen: '#00E676',
                        tradeRed: '#FF5252',
                        accentBlue: '#00F0FF',
                        accentPurple: '#A855F7',
                        instaPink: '#E1306C',
                        instaPurple: '#833AB4',
                        instaOrange: '#F77737'
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'glow-line': 'glowLine 3s ease-in-out infinite alternate',
                        'float': 'float 6s ease-in-out infinite'
                    },
                    keyframes: {
                        glowLine: {
                            '0%': { opacity: '0.3', transform: 'scaleX(0.95)' },
                            '100%': { opacity: '1', transform: 'scaleX(1)' }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        }
                    }
                }
            }
        }
    </script>

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #06080D;
            color: #F1F5F9;
            background-image: 
                radial-gradient(circle at 15% 15%, rgba(255, 215, 0, 0.03) 0%, transparent 40%),
                radial-gradient(circle at 85% 85%, rgba(0, 230, 118, 0.03) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(131, 58, 180, 0.02) 0%, transparent 60%);
        }
        .glass-card {
            background: rgba(13, 18, 29, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.07);
        }
        .glass-card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card-hover:hover {
            transform: translateY(-4px);
            border-color: rgba(255, 215, 0, 0.3);
            box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.15);
        }
        .insta-gradient-bg {
            background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
        }
        .insta-gradient-text {
            background: linear-gradient(45deg, #F77737, #E1306C, #833AB4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gradient-gold-text {
            background: linear-gradient(135deg, #FFF5B8 0%, #FFD700 50%, #C5A028 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gradient-green-text {
            background: linear-gradient(135deg, #B9F6CA 0%, #00E676 50%, #00B0FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #06080D;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #1A2436;
            border-radius: 4px;
        }
        .grid-cyber-pattern {
            background-size: 40px 40px;
            background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
    </style>
</head>
<body class="bg-darkBg text-slate-100 antialiased custom-scrollbar flex flex-col min-h-screen justify-between relative selection:bg-goldAccent selection:text-darkBg">

    <!-- TOP LIVE TICKER TAPE -->
    <div class="w-full bg-darkBg/95 border-b border-cardBorder/80 overflow-hidden sticky top-0 z-50 backdrop-blur-md">
        <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div>
            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
            {
            "symbols": [
                {"proName": "BINANCE:BTCUSDT", "title": "Bitcoin"},
                {"proName": "BINANCE:ETHUSDT", "title": "Ethereum"},
                {"proName": "CRYPTOCAP:BTC.D", "title": "BTC Dominance"},
                {"proName": "BINANCE:SOLUSDT", "title": "Solana"},
                {"proName": "BINANCE:BNBUSDT", "title": "BNB"}
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": true,
            "displayMode": "adaptive",
            "locale": "en"
            }
            </script>
        </div>
    </div>

    <!-- NAVIGATION HEADER -->
    <header class="bg-cardBg/80 border-b border-cardBorder/80 backdrop-blur-2xl sticky top-[46px] z-40 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                
                <!-- BRAND LOGO -->
                <a href="#hero" class="flex items-center space-x-3.5 group">
                    <div class="relative w-12 h-12 flex-shrink-0">
                        <svg class="w-full h-full drop-shadow-[0_0_15px_rgba(255,215,0,0.35)] transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" fill="#0D121D" stroke="url(#goldGrad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 35H35V20M80 35H65V20M20 65H35V80M80 65H65V80" stroke="#00E676" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="2 2"/>
                            <circle cx="35" cy="20" r="2" fill="#00E676"/>
                            <circle cx="65" cy="20" r="2" fill="#00E676"/>
                            <circle cx="35" cy="80" r="2" fill="#00E676"/>
                            <circle cx="65" cy="80" r="2" fill="#00E676"/>
                            <line x1="38" y1="28" x2="38" y2="72" stroke="#00E676" stroke-width="1.5"/>
                            <rect x="34" y="38" width="8" height="22" rx="1.5" fill="#00E676"/>
                            <line x1="62" y1="28" x2="62" y2="72" stroke="#FF5252" stroke-width="1.5"/>
                            <rect x="58" y="44" width="8" height="18" rx="1.5" fill="#FF5252"/>
                            <text x="50" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="28" fill="url(#goldGrad)" text-anchor="middle" letter-spacing="-1">TMT</text>
                            <defs>
                                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#FFF5B8"/>
                                    <stop offset="50%" stop-color="#FFD700"/>
                                    <stop offset="100%" stop-color="#C5A028"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div>
                        <div class="text-lg sm:text-xl font-black tracking-wider text-white flex items-center gap-1.5 leading-none">
                            TOP MUSLIM TRADERS <span class="gradient-gold-text">ACADEMY</span>
                        </div>
                        <span class="block text-[10px] text-emeraldGreen font-bold uppercase tracking-widest mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emeraldGreen animate-ping"></span>
                            Halol Kripto & Smart Money Hub
                        </span>
                    </div>
                </a>

                <!-- DESKTOP NAVIGATION -->
                <nav class="hidden xl:flex items-center space-x-6 text-xs xl:text-sm font-bold text-slate-300">
                    <a href="#hero" class="hover:text-goldAccent transition-colors">Bosh Sahifa</a>
                    <a href="#youtube" class="hover:text-red-400 transition-colors flex items-center gap-1.5">
                        <i class="fa-brands fa-youtube text-red-500"></i> Video Darslar
                    </a>
                    <a href="#halal" class="hover:text-goldAccent transition-colors flex items-center gap-1.5">
                        <i class="fa-solid fa-kaaba text-goldAccent"></i> Kripto Halolmi?
                    </a>
                    <a href="#calculator" class="hover:text-accentBlue transition-colors flex items-center gap-1.5">
                        <i class="fa-solid fa-calculator text-accentBlue"></i> Kalkulyator
                    </a>
                    <a href="#pdf-library" class="hover:text-accentPurple transition-colors flex items-center gap-1.5">
                        <i class="fa-solid fa-book-bookmark text-accentPurple"></i> PDF Kitoblar
                    </a>
                </nav>

                <div class="flex items-center space-x-3">
                    <a href="https://t.me/TopMuslimTradersBot" target="_blank" class="hidden md:flex items-center space-x-2 bg-gradient-to-r from-goldAccent to-goldDark text-darkBg font-extrabold px-4 py-2.5 rounded-xl shadow-lg hover:brightness-110 transition text-xs">
                        <i class="fa-solid fa-robot"></i>
                        <span>Aloqa Boti</span>
                    </a>
                    
                    <button id="openDrawerBtn" aria-label="Open Mobile Menu" class="flex items-center justify-center p-2.5 rounded-xl bg-darkBg border border-goldAccent/40 hover:border-goldAccent text-goldAccent transition focus:outline-none">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- SLIDE-OUT MOBILE SIDEBAR DRAWER OVERLAY -->
    <div id="drawerBackdrop" class="fixed inset-0 bg-black/85 backdrop-blur-md z-50 hidden opacity-0 transition-opacity duration-300"></div>

    <aside id="mobileDrawer" class="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-cardBg/95 border-l border-goldAccent/30 z-[60] transform translate-x-full flex flex-col justify-between p-6 shadow-2xl custom-scrollbar overflow-y-auto">
        <div>
            <div class="flex items-center justify-between pb-6 border-b border-cardBorder">
                <div class="flex items-center space-x-2.5">
                    <div class="w-8 h-8 rounded-lg bg-goldAccent/10 border border-goldAccent flex items-center justify-center font-black text-goldAccent text-xs">
                        TMT
                    </div>
                    <span class="font-bold text-sm text-white">Top Muslim Traders Academy</span>
                </div>
                <button id="closeDrawerBtn" aria-label="Close Menu" class="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-darkBg transition">
                    <i class="fa-solid fa-xmark text-xl"></i>
                </button>
            </div>

            <div class="mt-6 space-y-2">
                <div class="text-[11px] font-bold uppercase text-goldAccent tracking-wider mb-2">Bo'limlar</div>
                <a href="#hero" class="drawer-link flex items-center space-x-3 p-3 rounded-xl hover:bg-darkBg text-slate-200 hover:text-goldAccent transition font-semibold text-sm">
                    <i class="fa-solid fa-house text-goldAccent w-5"></i>
                    <span>Bosh Sahifa</span>
                </a>
                <a href="https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==" target="_blank" class="drawer-link flex items-center space-x-3 p-3 rounded-xl hover:bg-darkBg text-slate-200 hover:text-instaOrange transition font-semibold text-sm">
                    <i class="fa-brands fa-instagram text-instaPink w-5"></i>
                    <span>Instagram Sahifamiz</span>
                </a>
                <a href="#youtube" class="drawer-link flex items-center space-x-3 p-3 rounded-xl hover:bg-darkBg text-slate-200 hover:text-red-400 transition font-semibold text-sm">
                    <i class="fa-brands fa-youtube text-red-500 w-5"></i>
                    <span>Video Darslar</span>
                </a>
                <a href="#halal" class="drawer-link flex items-center space-x-3 p-3 rounded-xl hover:bg-darkBg text-slate-200 hover:text-goldAccent transition font-semibold text-sm">
                    <i class="fa-solid fa-kaaba text-goldAccent w-5"></i>
                    <span>Kripto Halolmi?</span>
                </a>
                <a href="#calculator" class="drawer-link flex items-center space-x-3 p-3 rounded-xl hover:bg-darkBg text-slate-200 hover:text-accentBlue transition font-semibold text-sm">
                    <i class="fa-solid fa-calculator text-accentBlue w-5"></i>
                    <span>Risk Kalkulyatori</span>
                </a>
                <a href="#pdf-library" class="drawer-link flex items-center space-x-3 p-3 rounded-xl hover:bg-darkBg text-slate-200 hover:text-accentPurple transition font-semibold text-sm">
                    <i class="fa-solid fa-book-bookmark text-accentPurple w-5"></i>
                    <span>Kitoblar & PDF</span>
                </a>
            </div>

            <div class="mt-8 space-y-2.5">
                <div class="text-[11px] font-bold uppercase text-slate-400 tracking-wider mb-2">Ijtimoiy Tarmoqlar</div>
                <a href="https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==" target="_blank" class="flex items-center justify-between p-3 rounded-xl bg-darkBg border border-instaPink/30 hover:border-instaPink text-xs">
                    <div class="flex items-center space-x-2.5">
                        <i class="fa-brands fa-instagram text-instaPink text-base"></i>
                        <span class="font-bold text-slate-200">@top_muslim_traders</span>
                    </div>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-500"></i>
                </a>
                <a href="https://t.me/Scalp_TMT" target="_blank" class="flex items-center justify-between p-3 rounded-xl bg-darkBg border border-cardBorder hover:border-accentBlue text-xs">
                    <div class="flex items-center space-x-2.5">
                        <i class="fa-brands fa-telegram text-accentBlue text-base"></i>
                        <span class="font-bold text-slate-200">@Scalp_TMT</span>
                    </div>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-500"></i>
                </a>
                <a href="https://t.me/TMT_Natijalari" target="_blank" class="flex items-center justify-between p-3 rounded-xl bg-darkBg border border-cardBorder hover:border-emeraldGreen text-xs">
                    <div class="flex items-center space-x-2.5">
                        <i class="fa-solid fa-chart-line text-emeraldGreen text-base"></i>
                        <span class="font-bold text-slate-200">@TMT_Natijalari</span>
                    </div>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-500"></i>
                </a>
            </div>
        </div>

        <div class="pt-6 border-t border-cardBorder mt-6">
            <a href="https://t.me/TopMuslimTradersBot" target="_blank" class="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-goldAccent to-goldDark text-darkBg font-black py-3 rounded-xl text-xs shadow-lg">
                <i class="fa-solid fa-robot"></i>
                <span>@TopMuslimTradersBot</span>
            </a>
        </div>
    </aside>

    <!-- HERO SECTION -->
    <section id="hero" class="relative py-16 lg:py-28 overflow-hidden border-b border-cardBorder grid-cyber-pattern">
        <div class="absolute top-10 left-1/4 w-96 h-96 bg-goldAccent/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div class="absolute bottom-10 right-1/4 w-96 h-96 bg-emeraldGreen/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-instaPurple/5 rounded-full blur-[160px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div class="inline-flex items-center space-x-2.5 bg-cardBg/90 border border-goldAccent/50 px-4 py-2 rounded-full text-xs font-extrabold text-goldAccent shadow-md backdrop-blur-xl">
                        <i class="fa-solid fa-shield-halal text-sm text-goldAccent"></i>
                        <span>Smart Money Concepts (SMC) & ICT Halol Kripto Savdosi</span>
                    </div>

                    <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                        Halol va Intizomli <br/>
                        <span class="gradient-gold-text">Top Muslim Traders Academy</span>
                    </h1>

                    <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Top Muslim Traders Academy — shariat tamoyillariga mos keluvchi Spot kriptovalyuta savdosi, Smart Money Concepts (SMC), ICT tahlili va intizomli risk-menedjmentni mukammal o'rgatuvchi xalqaro treyderlar akademiyasidir.
                    </p>

                    <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-3">
                        <a href="https://t.me/Scalp_TMT" target="_blank" class="flex items-center space-x-2.5 bg-gradient-to-r from-goldAccent to-goldDark hover:brightness-110 text-darkBg font-black px-7 py-4 rounded-2xl shadow-2xl text-xs sm:text-sm transition transform hover:-translate-y-0.5">
                            <i class="fa-brands fa-telegram text-xl"></i>
                            <span>Scalp Telegram Kanal</span>
                        </a>
                        <a href="https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==" target="_blank" class="flex items-center space-x-2.5 bg-gradient-to-r from-instaOrange via-instaPink to-instaPurple hover:opacity-95 text-white font-black px-7 py-4 rounded-2xl shadow-2xl text-xs sm:text-sm transition transform hover:-translate-y-0.5">
                            <i class="fa-brands fa-instagram text-xl"></i>
                            <span>Instagram Sahifamiz</span>
                        </a>
                    </div>

                    <div class="grid grid-cols-3 gap-4 pt-8 border-t border-cardBorder/80 max-w-lg mx-auto lg:mx-0">
                        <div class="glass-card p-4 rounded-2xl border border-cardBorder">
                            <div class="text-2xl sm:text-3xl font-black text-white">100%</div>
                            <div class="text-[11px] font-medium text-slate-400 mt-1">Spot & Halol Kripto</div>
                        </div>
                        <div class="glass-card p-4 rounded-2xl border border-cardBorder">
                            <div class="text-2xl sm:text-3xl font-black text-emeraldGreen">25K+</div>
                            <div class="text-[11px] font-medium text-slate-400 mt-1">Jami Obunachilar</div>
                        </div>
                        <div class="glass-card p-4 rounded-2xl border border-cardBorder">
                            <div class="text-2xl sm:text-3xl font-black text-goldAccent">SMC / ICT</div>
                            <div class="text-[11px] font-medium text-slate-400 mt-1">Smart Money Tahlil</div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5">
                    <div class="glass-card border border-goldAccent/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                        <div class="flex items-center justify-between pb-4 border-b border-cardBorder">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-xl bg-goldAccent/10 border border-goldAccent/40 text-goldAccent flex items-center justify-center font-bold text-lg">
                                    <i class="fa-solid fa-cubes"></i>
                                </div>
                                <div>
                                    <h3 class="font-extrabold text-sm text-white">TMT Rasmiy Ekotizimi</h3>
                                    <p class="text-[11px] text-slate-400">Tasdiqlangan ijtimoiy kanallar</p>
                                </div>
                            </div>
                            <span class="bg-emeraldGreen/20 text-emeraldGreen text-[10px] font-bold px-2.5 py-1 rounded-full border border-emeraldGreen/30 uppercase">ONLINE</span>
                        </div>

                        <div class="space-y-3 mt-5">
                            <a href="https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==" target="_blank" class="flex items-center justify-between p-3.5 rounded-2xl bg-darkBg/90 border border-instaPink/40 hover:border-instaPink transition group">
                                <div class="flex items-center space-x-3.5">
                                    <div class="w-10 h-10 rounded-xl insta-gradient-bg text-white flex items-center justify-center font-bold shadow-md">
                                        <i class="fa-brands fa-instagram text-xl"></i>
                                    </div>
                                    <div>
                                        <div class="text-sm font-bold text-white group-hover:text-instaOrange transition flex items-center gap-1.5">
                                            @top_muslim_traders
                                            <i class="fa-solid fa-circle-check text-accentBlue text-xs"></i>
                                        </div>
                                        <div class="text-xs text-slate-400">Instagram Video Reels & Darslar</div>
                                    </div>
                                </div>
                                <i class="fa-solid fa-arrow-up-right-from-square text-xs text-slate-500 group-hover:text-instaOrange"></i>
                            </a>

                            <a href="https://t.me/Scalp_TMT" target="_blank" class="flex items-center justify-between p-3.5 rounded-2xl bg-darkBg/90 border border-cardBorder hover:border-goldAccent transition group">
                                <div class="flex items-center space-x-3.5">
                                    <div class="w-10 h-10 rounded-xl bg-accentBlue/10 text-accentBlue flex items-center justify-center font-bold border border-accentBlue/30">
                                        <i class="fa-brands fa-telegram text-xl"></i>
                                    </div>
                                    <div>
                                        <div class="text-sm font-bold text-white group-hover:text-goldAccent transition">@Scalp_TMT</div>
                                        <div class="text-xs text-slate-400">Scalp Signallar & Tezkor Tahlillar</div>
                                    </div>
                                </div>
                                <i class="fa-solid fa-arrow-up-right-from-square text-xs text-slate-500 group-hover:text-goldAccent"></i>
                            </a>

                            <a href="https://t.me/TMT_Natijalari" target="_blank" class="flex items-center justify-between p-3.5 rounded-2xl bg-darkBg/90 border border-cardBorder hover:border-emeraldGreen transition group">
                                <div class="flex items-center space-x-3.5">
                                    <div class="w-10 h-10 rounded-xl bg-emeraldGreen/10 text-emeraldGreen flex items-center justify-center font-bold border border-emeraldGreen/30">
                                        <i class="fa-solid fa-chart-line text-lg"></i>
                                    </div>
                                    <div>
                                        <div class="text-sm font-bold text-white group-hover:text-emeraldGreen transition">@TMT_Natijalari</div>
                                        <div class="text-xs text-slate-400">O'quvchilar Real Natijalari</div>
                                    </div>
                                </div>
                                <i class="fa-solid fa-arrow-up-right-from-square text-xs text-slate-500 group-hover:text-emeraldGreen"></i>
                            </a>

                            <a href="https://t.me/TopMuslimTradersBot" target="_blank" class="flex items-center justify-between p-3.5 rounded-2xl bg-darkBg/90 border border-cardBorder hover:border-goldAccent transition group">
                                <div class="flex items-center space-x-3.5">
                                    <div class="w-10 h-10 rounded-xl bg-goldAccent/10 text-goldAccent flex items-center justify-center font-bold border border-goldAccent/30">
                                        <i class="fa-solid fa-robot text-lg"></i>
                                    </div>
                                    <div>
                                        <div class="text-sm font-bold text-white group-hover:text-goldAccent transition">@TopMuslimTradersBot</div>
                                        <div class="text-xs text-slate-400">Rasmiy Savol-Javob & Savdo Boti</div>
                                    </div>
                                </div>
                                <i class="fa-solid fa-arrow-up-right-from-square text-xs text-slate-500 group-hover:text-goldAccent"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- INSTAGRAM SHOWCASE & REELS HUB SECTION -->
    <section id="instagram" class="py-16 border-b border-cardBorder relative bg-darkBg/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="glass-card rounded-3xl p-8 sm:p-10 border border-instaPink/30 relative overflow-hidden">
                <div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-instaPink/10 rounded-full blur-3xl pointer-events-none"></div>

                <div class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10 pb-8 border-b border-cardBorder">
                    <div class="flex items-center space-x-4">
                        <div class="w-16 h-16 rounded-2xl insta-gradient-bg p-0.5 shadow-xl flex-shrink-0">
                            <div class="w-full h-full bg-cardBg rounded-[14px] flex items-center justify-center">
                                <i class="fa-brands fa-instagram text-3xl insta-gradient-text"></i>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h2 class="text-2xl sm:text-3xl font-black text-white">Instagram Sahifamiz</h2>
                                <span class="bg-instaPink/20 text-instaPink text-xs font-extrabold px-3 py-1 rounded-full border border-instaPink/40">OFFICIAL</span>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-400 mt-1">Har kuni yangi koinlar tahlili, SMC darsliklar va halol kripto Reels xabarlari</p>
                        </div>
                    </div>

                    <a href="https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==" target="_blank" class="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-gradient-to-r from-instaOrange via-instaPink to-instaPurple text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition duration-300 text-sm">
                        <i class="fa-brands fa-instagram text-xl"></i>
                        <span>@top_muslim_traders A'zo Bo'lish</span>
                    </a>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <a href="https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==" target="_blank" class="glass-card rounded-2xl p-4 border border-cardBorder glass-card-hover group block relative">
                        <div class="aspect-[9/16] rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-darkBg overflow-hidden relative flex flex-col justify-between p-4 border border-cardBorder">
                            <div class="flex items-center justify-between z-10">
                                <span class="bg-black/60 backdrop-blur-md text-[10px] text-white px-2.5 py-1 rounded-full font-bold border border-white/10">
                                    <i class="fa-solid fa-play text-instaPink mr-1"></i> REELS
                                </span>
                                <i class="fa-brands fa-instagram text-white text-lg opacity-80"></i>
                            </div>
                            <div class="z-10 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
                                <span class="text-[10px] font-bold text-goldAccent uppercase tracking-wide">SMC Darslik</span>
                                <p class="text-xs font-extrabold text-white mt-1 line-clamp-2">Order Block va Fair Value Gap haqiqatlari</p>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition"></div>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==" target="_blank" class="glass-card rounded-2xl p-4 border border-cardBorder glass-card-hover group block relative">
                        <div class="aspect-[9/16] rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-darkBg overflow-hidden relative flex flex-col justify-between p-4 border border-cardBorder">
                            <div class="flex items-center justify-between z-10">
                                <span class="bg-black/60 backdrop-blur-md text-[10px] text-white px-2.5 py-1 rounded-full font-bold border border-white/10">
                                    <i class="fa-solid fa-play text-instaPink mr-1"></i> REELS
                                </span>
                                <i class="fa-brands fa-instagram text-white text-lg opacity-80"></i>
                            </div>
                            <div class="z-10 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
                                <span class="text-[10px] font-bold text-emeraldGreen uppercase tracking-wide">Halol Kripto</span>
                                <p class="text-xs font-extrabold text-white mt-1 line-clamp-2">Qaysi altkoinlar shariatga to'liq mos keladi?</p>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition"></div>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==" target="_blank" class="glass-card rounded-2xl p-4 border border-cardBorder glass-card-hover group block relative">
                        <div class="aspect-[9/16] rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-darkBg overflow-hidden relative flex flex-col justify-between p-4 border border-cardBorder">
                            <div class="flex items-center justify-between z-10">
                                <span class="bg-black/60 backdrop-blur-md text-[10px] text-white px-2.5 py-1 rounded-full font-bold border border-white/10">
                                    <i class="fa-solid fa-play text-instaPink mr-1"></i> REELS
                                </span>
                                <i class="fa-brands fa-instagram text-white text-lg opacity-80"></i>
                            </div>
                            <div class="z-10 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
                                <span class="text-[10px] font-bold text-accentBlue uppercase tracking-wide">Psixologiya</span>
                                <p class="text-xs font-extrabold text-white mt-1 line-clamp-2">Treydingda FOMO ni yengish strategiyasi</p>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition"></div>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==" target="_blank" class="glass-card rounded-2xl p-4 border border-cardBorder glass-card-hover group block relative">
                        <div class="aspect-[9/16] rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-darkBg overflow-hidden relative flex flex-col justify-between p-4 border border-cardBorder">
                            <div class="flex items-center justify-between z-10">
                                <span class="bg-black/60 backdrop-blur-md text-[10px] text-white px-2.5 py-1 rounded-full font-bold border border-white/10">
                                    <i class="fa-solid fa-play text-instaPink mr-1"></i> REELS
                                </span>
                                <i class="fa-brands fa-instagram text-white text-lg opacity-80"></i>
                            </div>
                            <div class="z-10 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
                                <span class="text-[10px] font-bold text-accentPurple uppercase tracking-wide">Tahlil</span>
                                <p class="text-xs font-extrabold text-white mt-1 line-clamp-2">Bitcoin haftalik muhim zonalar va Liquidity</p>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- POSITION SIZE & RISK CALCULATOR SECTION -->
    <section id="calculator" class="py-16 border-b border-cardBorder bg-cardBg/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-10">
                <div class="inline-flex items-center space-x-2 bg-accentBlue/10 border border-accentBlue/30 text-accentBlue px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
                    <i class="fa-solid fa-calculator text-sm"></i>
                    <span>Intizomli Risk Menedjment</span>
                </div>
                <h2 class="text-2xl sm:text-4xl font-extrabold text-white">Halal Spot Position Size Calculator</h2>
                <p class="text-slate-400 text-xs sm:text-sm mt-2">Depozitingizni xavfga qo'ymasdan har bir bitim uchun aniq koin miqdori va Stop-Loss xavfini hisoblang.</p>
            </div>

            <div class="glass-card max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 border border-cardBorder shadow-2xl">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Jami Depozit ($ USDT)</label>
                            <input type="number" id="calcCapital" value="1000" class="w-full bg-darkBg border border-cardBorder focus:border-goldAccent text-white text-sm font-bold rounded-xl p-3.5 outline-none transition" placeholder="Masalan: 1000">
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Bitim uchun Risk (%)</label>
                            <input type="number" id="calcRiskPct" value="2" step="0.5" class="w-full bg-darkBg border border-cardBorder focus:border-goldAccent text-white text-sm font-bold rounded-xl p-3.5 outline-none transition" placeholder="Masalan: 2">
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Sotib olish narxi ($ Entry Price)</label>
                            <input type="number" id="calcEntry" value="100" class="w-full bg-darkBg border border-cardBorder focus:border-goldAccent text-white text-sm font-bold rounded-xl p-3.5 outline-none transition" placeholder="Masalan: 100">
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Stop-Loss narxi ($ Stop Price)</label>
                            <input type="number" id="calcStop" value="95" class="w-full bg-darkBg border border-cardBorder focus:border-goldAccent text-white text-sm font-bold rounded-xl p-3.5 outline-none transition" placeholder="Masalan: 95">
                        </div>

                        <button onclick="calculateRisk()" class="w-full bg-gradient-to-r from-goldAccent to-goldDark text-darkBg font-black py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition">
                            <i class="fa-solid fa-calculator mr-2"></i> Hisoblash
                        </button>
                    </div>

                    <div class="bg-darkBg/90 border border-goldAccent/30 rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full">
                        <div class="border-b border-cardBorder pb-4">
                            <span class="text-[10px] font-bold text-goldAccent uppercase tracking-widest">Natijalar</span>
                            <h3 class="text-lg font-black text-white mt-1">Bitim Parametrlari</h3>
                        </div>

                        <div class="space-y-3 text-xs">
                            <div class="flex items-center justify-between p-3 rounded-xl bg-cardBg border border-cardBorder">
                                <span class="text-slate-400">Ruxsat etilgan Xavf ($):</span>
                                <span id="resRiskUSD" class="font-bold text-tradeRed text-sm">$20.00</span>
                            </div>

                            <div class="flex items-center justify-between p-3 rounded-xl bg-cardBg border border-cardBorder">
                                <span class="text-slate-400">Stop-Loss Masofasi (%):</span>
                                <span id="resStopPct" class="font-bold text-white text-sm">5.00%</span>
                            </div>

                            <div class="flex items-center justify-between p-3 rounded-xl bg-cardBg border border-cardBorder">
                                <span class="text-slate-400">Position Size ($ USDT):</span>
                                <span id="resPosUSD" class="font-bold text-goldAccent text-base">$400.00</span>
                            </div>

                            <div class="flex items-center justify-between p-3 rounded-xl bg-cardBg border border-cardBorder">
                                <span class="text-slate-400">Koin Miqdori (Tokens):</span>
                                <span id="resCoins" class="font-bold text-emeraldGreen text-base">4.00 koin</span>
                            </div>
                        </div>

                        <div class="pt-3 text-[11px] text-slate-500 italic text-center">
                            *Spot savdosida har bir bitim uchun maksimal 1-2% xavf saqlash tavsiya etiladi.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- YOUTUBE VIDEO LESSONS SECTION -->
    <section id="youtube" class="py-16 border-b border-cardBorder bg-cardBg/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                    <div class="text-red-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                        <i class="fa-brands fa-youtube text-base"></i>
                        <span>Video Ta'lim Hubi</span>
                    </div>
                    <h2 class="text-2xl sm:text-4xl font-extrabold text-white">YouTube Darsliklar & SMC Tahlillar</h2>
                </div>
                <p class="text-slate-400 text-xs sm:text-sm max-w-md mt-2 md:mt-0">
                    Smart Money Concepts (SMC), ICT va kripto bozor strukturasi bo'yicha bepul video darsliklarimiz.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="glass-card border border-cardBorder rounded-2xl overflow-hidden glass-card-hover group flex flex-col justify-between">
                    <div>
                        <div class="relative aspect-video w-full bg-black">
                            <iframe class="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Smart Money Concepts" allowfullscreen></iframe>
                        </div>
                        <div class="p-5">
                            <span class="text-[10px] font-bold text-emeraldGreen bg-emeraldGreen/10 border border-emeraldGreen/30 px-2.5 py-1 rounded-full uppercase">SMC & Structure</span>
                            <h3 class="text-base font-bold text-white mt-3 group-hover:text-emeraldGreen transition line-clamp-2">
                                Smart Money Concepts: Order Block, BOS va CHoCH (To'liq Dars)
                            </h3>
                            <p class="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                                Bozor strukturasining sinishi va trend o'zgarishini real kripto grafiklarida to'g'ri aniqlash.
                            </p>
                        </div>
                    </div>
                    <div class="p-5 pt-0 border-t border-cardBorder/60 mt-2 flex items-center justify-between text-xs text-slate-400">
                        <span><i class="fa-solid fa-play text-red-500 mr-1.5"></i> Video Dars</span>
                        <span class="text-emeraldGreen font-bold">Bepul</span>
                    </div>
                </div>

                <div class="glass-card border border-cardBorder rounded-2xl overflow-hidden glass-card-hover group flex flex-col justify-between">
                    <div>
                        <div class="relative aspect-video w-full bg-black">
                            <iframe class="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Halal Crypto Trading" allowfullscreen></iframe>
                        </div>
                        <div class="p-5">
                            <span class="text-[10px] font-bold text-goldAccent bg-goldAccent/10 border border-goldAccent/30 px-2.5 py-1 rounded-full uppercase">Halol Kripto</span>
                            <h3 class="text-base font-bold text-white mt-3 group-hover:text-goldAccent transition line-clamp-2">
                                Kripto Savdosida Halol va Harom Chegaralari
                            </h3>
                            <p class="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                                Spot savdoda koinlarni tanlash, ribodan saqlanish hamda ulema fatvolari asosida tahlil.
                            </p>
                        </div>
                    </div>
                    <div class="p-5 pt-0 border-t border-cardBorder/60 mt-2 flex items-center justify-between text-xs text-slate-400">
                        <span><i class="fa-solid fa-play text-red-500 mr-1.5"></i> Video Dars</span>
                        <span class="text-emeraldGreen font-bold">Bepul</span>
                    </div>
                </div>

                <div class="glass-card border border-cardBorder rounded-2xl overflow-hidden glass-card-hover group flex flex-col justify-between">
                    <div>
                        <div class="relative aspect-video w-full bg-black">
                            <iframe class="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Risk Management" allowfullscreen></iframe>
                        </div>
                        <div class="p-5">
                            <span class="text-[10px] font-bold text-accentBlue bg-accentBlue/10 border border-accentBlue/30 px-2.5 py-1 rounded-full uppercase">Risk Management</span>
                            <h3 class="text-base font-bold text-white mt-3 group-hover:text-accentBlue transition line-clamp-2">
                                Depozitni Boshqarish va Riskni 1-2% da Cheklash
                            </h3>
                            <p class="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                                Har bir bitimda stop-loss va take-profit nisbatini 1:3 yoki 1:5 holatida saqlash tartibi.
                            </p>
                        </div>
                    </div>
                    <div class="p-5 pt-0 border-t border-cardBorder/60 mt-2 flex items-center justify-between text-xs text-slate-400">
                        <span><i class="fa-solid fa-play text-red-500 mr-1.5"></i> Video Dars</span>
                        <span class="text-emeraldGreen font-bold">Bepul</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ISLAMIC HALAL CRYPTO SECTION -->
    <section id="halal" class="py-16 border-b border-cardBorder relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-12">
                <div class="inline-flex items-center space-x-2 bg-goldAccent/10 border border-goldAccent/30 text-goldAccent px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
                    <i class="fa-solid fa-kaaba text-sm"></i>
                    <span>Shariat Tamoyillari va Shaffoflik</span>
                </div>
                <h2 class="text-2xl sm:text-4xl font-extrabold text-white">Kriptovalyuta Savdosi Halolmi?</h2>
                <p class="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    Muslim treyderlar uchun savdo intizomi va moliyaviy halollik birinchi o'rinda turadi. Biz faqat shariatga mos keluvchi Spot savdo qoidalariga va foydali loyihalarga e'tibor qaratamiz.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="glass-card border border-cardBorder rounded-2xl p-6 glass-card-hover">
                    <div class="w-12 h-12 rounded-xl bg-goldAccent/10 text-goldAccent flex items-center justify-center font-bold text-xl mb-4 border border-goldAccent/30">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white">1. Spot Savdo va Ega Chiqish (Qabd)</h3>
                    <p class="text-slate-400 text-xs mt-2 leading-relaxed">
                        Savdoda koinning to'liq egasi bo'lish va uni sotib olib, o'z hamyoningizda saqlash (Spot trading) tamoyili qo'llaniladi. Yo'q narsani sotish taqiqlanadi.
                    </p>
                </div>

                <div class="glass-card border border-cardBorder rounded-2xl p-6 glass-card-hover">
                    <div class="w-12 h-12 rounded-xl bg-tradeRed/10 text-tradeRed flex items-center justify-center font-bold text-xl mb-4 border border-tradeRed/30">
                        <i class="fa-solid fa-ban"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white">2. Ribo (Foiz) va Yelkasiz Savdo</h3>
                    <p class="text-slate-400 text-xs mt-2 leading-relaxed">
                        Marjinal va fyuchers savdosidagi foizli qarzlar (Swap, Interest rate, Riba) hamda ortiqcha xavfdan (Gharar) yiroq bo'lish shart.
                    </p>
                </div>

                <div class="glass-card border border-cardBorder rounded-2xl p-6 glass-card-hover">
                    <div class="w-12 h-12 rounded-xl bg-emeraldGreen/10 text-emeraldGreen flex items-center justify-center font-bold text-xl mb-4 border border-emeraldGreen/30">
                        <i class="fa-solid fa-magnifying-glass-dollar"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white">3. Loyiha Utility Tahlili</h3>
                    <p class="text-slate-400 text-xs mt-2 leading-relaxed">
                        Koin ortida turgan texnologiya, uning real jamiyatga foydasi va qimor (Maysir) unsurlaridan xoli ekanligi puxta tahlil etiladi.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- PDF BOOKS LIBRARY -->
    <section id="pdf-library" class="py-16 border-b border-cardBorder bg-cardBg/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                    <div class="text-accentPurple text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                        <i class="fa-solid fa-book-bookmark text-base"></i>
                        <span>PDF Kutubxona</span>
                    </div>
                    <h2 class="text-2xl sm:text-4xl font-extrabold text-white">Bepul Trading Kitoblar va Qo'llanmalar</h2>
                </div>
                <a href="https://t.me/trading_pdf1" target="_blank" class="mt-3 md:mt-0 text-xs font-extrabold text-accentPurple hover:text-purple-300 flex items-center gap-1.5 transition">
                    <span>Barcha PDF Kitoblarga O'tish (@trading_pdf1)</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="glass-card border border-cardBorder rounded-2xl p-6 glass-card-hover flex flex-col justify-between group">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-accentPurple/10 text-accentPurple flex items-center justify-center font-bold text-xl mb-4 border border-accentPurple/30 group-hover:scale-110 transition">
                            <i class="fa-solid fa-file-pdf"></i>
                        </div>
                        <span class="text-[10px] font-bold text-accentPurple bg-accentPurple/10 px-2.5 py-1 rounded-full uppercase border border-accentPurple/30">SMC Qo'llanma</span>
                        <h3 class="text-base font-bold text-white mt-3">Smart Money Concepts (SMC) Boshlang'ich va Murakkab Qo'llanma</h3>
                        <p class="text-slate-400 text-xs mt-2 leading-relaxed">
                            FVG (Fair Value Gap), Order Block, Liquidity Sweeps va Breaker Block strukturalari nazariyasi.
                        </p>
                    </div>
                    <div class="mt-6 flex items-center gap-2">
                        <button onclick="openPdfModal('Smart Money Concepts (SMC) Qo\'llanmasi', 'Ushbu qo\'llanmada institutsional treyding sirlari, liquidity sweep va Order Block zonalarida to\'g\'ri pozitsiya ochish qoidalari jamlangan.')" class="w-1/2 bg-darkBg border border-cardBorder hover:border-accentPurple text-slate-300 font-bold py-2.5 rounded-xl text-xs transition">
                            Ko'rish
                        </button>
                        <a href="https://t.me/trading_pdf1" target="_blank" class="w-1/2 flex items-center justify-center space-x-1.5 bg-accentPurple/20 hover:bg-accentPurple/30 text-accentPurple font-bold py-2.5 rounded-xl text-xs transition">
                            <i class="fa-solid fa-download"></i>
                            <span>Yuklash</span>
                        </a>
                    </div>
                </div>

                <div class="glass-card border border-cardBorder rounded-2xl p-6 glass-card-hover flex flex-col justify-between group">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-accentBlue/10 text-accentBlue flex items-center justify-center font-bold text-xl mb-4 border border-accentBlue/30 group-hover:scale-110 transition">
                            <i class="fa-solid fa-chart-pie"></i>
                        </div>
                        <span class="text-[10px] font-bold text-accentBlue bg-accentBlue/10 px-2.5 py-1 rounded-full uppercase border border-accentBlue/30">Fundamental Tahlil</span>
                        <h3 class="text-base font-bold text-white mt-3">Kripto Bozorida Fundamental Tahlil va Makroiqtisod</h3>
                        <p class="text-slate-400 text-xs mt-2 leading-relaxed">
                            Fed stavkasi, CPI va NFP xabarlarining Bitcoin va altkoinlar volatilligiga ta'sirini o'rganish.
                        </p>
                    </div>
                    <div class="mt-6 flex items-center gap-2">
                        <button onclick="openPdfModal('Fundamental Tahlil va Makroiqtisod', 'Makroiqtisodiy xabarlarni o\'qish va AQSh iqtisodiy kalendari (CPI, Fed, NFP) orqali koinlar narxini oldindan tahlil qilish.')" class="w-1/2 bg-darkBg border border-cardBorder hover:border-accentBlue text-slate-300 font-bold py-2.5 rounded-xl text-xs transition">
                            Ko'rish
                        </button>
                        <a href="https://t.me/trading_pdf1" target="_blank" class="w-1/2 flex items-center justify-center space-x-1.5 bg-accentBlue/20 hover:bg-accentBlue/30 text-accentBlue font-bold py-2.5 rounded-xl text-xs transition">
                            <i class="fa-solid fa-download"></i>
                            <span>Yuklash</span>
                        </a>
                    </div>
                </div>

                <div class="glass-card border border-cardBorder rounded-2xl p-6 glass-card-hover flex flex-col justify-between group">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-emeraldGreen/10 text-emeraldGreen flex items-center justify-center font-bold text-xl mb-4 border border-emeraldGreen/30 group-hover:scale-110 transition">
                            <i class="fa-solid fa-calculator"></i>
                        </div>
                        <span class="text-[10px] font-bold text-emeraldGreen bg-emeraldGreen/10 px-2.5 py-1 rounded-full uppercase border border-emeraldGreen/30">Psixologiya</span>
                        <h3 class="text-base font-bold text-white mt-3">Risk Management va Treyding Psixologiyasi</h3>
                        <p class="text-slate-400 text-xs mt-2 leading-relaxed">
                            FOMO va intizomsizlikni yo'qotish hamda pozitsiya hajmiga to'g'ri baho berish qoidalari.
                        </p>
                    </div>
                    <div class="mt-6 flex items-center gap-2">
                        <button onclick="openPdfModal('Risk Management va Psixologiya', 'Depozitingizni 1-2% dan oshirmagan holda saqlash hamda his-tuyg\'ularsiz savdo qilish algoritmi.')" class="w-1/2 bg-darkBg border border-cardBorder hover:border-emeraldGreen text-slate-300 font-bold py-2.5 rounded-xl text-xs transition">
                            Ko'rish
                        </button>
                        <a href="https://t.me/trading_pdf1" target="_blank" class="w-1/2 flex items-center justify-center space-x-1.5 bg-emeraldGreen/20 hover:bg-emeraldGreen/30 text-emeraldGreen font-bold py-2.5 rounded-xl text-xs transition">
                            <i class="fa-solid fa-download"></i>
                            <span>Yuklash</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-cardBg border-t border-cardBorder py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-cardBorder/60">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-lg bg-goldAccent/10 border border-goldAccent flex items-center justify-center font-black text-goldAccent text-xs">
                        TMT
                    </div>
                    <span class="text-base font-bold text-white">TOP MUSLIM TRADERS ACADEMY</span>
                </div>

                <div class="flex space-x-3">
                    <a href="https://www.instagram.com/top_muslim_traders?stkn=MWFiZWd6cGZua3d6aw==" target="_blank" aria-label="Instagram" class="w-10 h-10 rounded-xl bg-darkBg border border-cardBorder flex items-center justify-center text-slate-400 hover:text-instaPink hover:border-instaPink transition">
                        <i class="fa-brands fa-instagram text-lg"></i>
                    </a>
                    <a href="https://t.me/Scalp_TMT" target="_blank" aria-label="Telegram" class="w-10 h-10 rounded-xl bg-darkBg border border-cardBorder flex items-center justify-center text-slate-400 hover:text-accentBlue hover:border-accentBlue transition">
                        <i class="fa-brands fa-telegram text-lg"></i>
                    </a>
                    <a href="https://t.me/TopMuslimTradersBot" target="_blank" aria-label="Bot" class="w-10 h-10 rounded-xl bg-darkBg border border-cardBorder flex items-center justify-center text-slate-400 hover:text-goldAccent hover:border-goldAccent transition">
                        <i class="fa-solid fa-robot text-lg"></i>
                    </a>
                </div>
            </div>

            <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                <span>&copy; 2026 TOP MUSLIM TRADERS ACADEMY. Barcha huquqlar himoyalangan.</span>
                <p class="max-w-md text-[10px] text-slate-500 text-center sm:text-right">
                    Ogohlantirish: Kriptovalyuta savdosi yuqori volatillikka ega. Barcha tahlil va signallar faqat ta'limiy maqsadlarda taqdim etiladi.
                </p>
            </div>
        </div>
    </footer>

    <!-- INTERACTIVE PDF PREVIEW MODAL -->
    <div id="pdfModal" class="fixed inset-0 bg-black/85 backdrop-blur-md z-[70] hidden flex items-center justify-center p-4">
        <div class="glass-card border border-goldAccent/40 max-w-lg w-full rounded-3xl p-6 shadow-2xl relative">
            <button onclick="closePdfModal()" class="absolute top-4 right-4 text-slate-400 hover:text-white p-2">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
            
            <div class="w-12 h-12 rounded-2xl bg-goldAccent/10 text-goldAccent flex items-center justify-center text-2xl mb-4 border border-goldAccent/30">
                <i class="fa-solid fa-book-open"></i>
            </div>

            <h3 id="modalTitle" class="text-xl font-bold text-white mb-2">PDF Kitob</h3>
            <p id="modalDesc" class="text-xs text-slate-300 leading-relaxed mb-6">Kitob haqida ma'lumot...</p>

            <div class="flex items-center space-x-3">
                <a href="https://t.me/trading_pdf1" target="_blank" class="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-goldAccent to-goldDark text-darkBg font-black py-3 rounded-xl text-xs shadow-lg">
                    <i class="fa-solid fa-download"></i>
                    <span>Telegramda To'liq Yuklab Olish</span>
                </a>
            </div>
        </div>
    </div>

    <!-- CLIENT INTERACTIVE JAVASCRIPT -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const openDrawerBtn = document.getElementById('openDrawerBtn');
            const closeDrawerBtn = document.getElementById('closeDrawerBtn');
            const mobileDrawer = document.getElementById('mobileDrawer');
            const drawerBackdrop = document.getElementById('drawerBackdrop');
            const drawerLinks = document.querySelectorAll('.drawer-link');

            function openDrawer() {
                mobileDrawer.classList.remove('translate-x-full');
                drawerBackdrop.classList.remove('hidden');
                setTimeout(() => {
                    drawerBackdrop.classList.remove('opacity-0');
                }, 10);
                document.body.style.overflow = 'hidden';
            }

            function closeDrawer() {
                mobileDrawer.classList.add('translate-x-full');
                drawerBackdrop.classList.add('opacity-0');
                setTimeout(() => {
                    drawerBackdrop.classList.add('hidden');
                    document.body.style.overflow = '';
                }, 300);
            }

            if (openDrawerBtn) openDrawerBtn.addEventListener('click', openDrawer);
            if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
            if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

            drawerLinks.forEach(link => {
                link.addEventListener('click', closeDrawer);
            });

            calculateRisk();
        });

        function calculateRisk() {
            const capital = parseFloat(document.getElementById('calcCapital').value) || 0;
            const riskPct = parseFloat(document.getElementById('calcRiskPct').value) || 0;
            const entry = parseFloat(document.getElementById('calcEntry').value) || 0;
            const stop = parseFloat(document.getElementById('calcStop').value) || 0;

            if (capital <= 0 || entry <= 0 || stop <= 0 || entry <= stop) {
                document.getElementById('resRiskUSD').innerText = '$0.00';
                document.getElementById('resStopPct').innerText = '0.00%';
                document.getElementById('resPosUSD').innerText = '$0.00';
                document.getElementById('resCoins').innerText = '0.00 koin';
                return;
            }

            const riskUSD = capital * (riskPct / 100);
            const stopPct = ((entry - stop) / entry) * 100;
            const posUSD = riskUSD / (stopPct / 100);
            const coins = posUSD / entry;

            document.getElementById('resRiskUSD').innerText = '$' + riskUSD.toFixed(2);
            document.getElementById('resStopPct').innerText = stopPct.toFixed(2) + '%';
            document.getElementById('resPosUSD').innerText = '$' + posUSD.toFixed(2);
            document.getElementById('resCoins').innerText = coins.toFixed(2) + ' koin';
        }

        function openPdfModal(title, desc) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDesc').innerText = desc;
            document.getElementById('pdfModal').classList.remove('hidden');
        }

        function closePdfModal() {
            document.getElementById('pdfModal').classList.add('hidden');
        }
    </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
    // Health check endpoint for Railway monitoring
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
        return;
    }

    // Serve HTML page
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600'
    });
    res.end(htmlContent);
});

server.listen(PORT, () => {
    console.log(`Top Muslim Traders Academy Server is live on port ${PORT}`);
});