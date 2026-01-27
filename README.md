<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sergio Guillén Pampliega | Agente de Transformación Digital</title>
    <meta name="description" content="Experto en Inteligencia Artificial y Automatización de Procesos. Transforma tu empresa con soluciones digitales.">
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        dark: {
                            950: '#050505',
                            900: '#0A0A0A', 
                            800: '#121212', 
                            700: '#1C1C1C', 
                        },
                        accent: {
                            cyan: '#00F0FF',
                            blue: '#2D7FF9',
                            purple: '#9D4EDD',
                            pink: '#F72585'
                        }
                    },
                    backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                        'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
                    },
                    animation: {
                        'float': 'float 8s ease-in-out infinite',
                        'float-delayed': 'float 8s ease-in-out 4s infinite',
                        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'shimmer': 'shimmer 2.5s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        pulseGlow: {
                            '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                            '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                        },
                        shimmer: {
                            '0%': { backgroundPosition: '-1000px 0' },
                            '100%': { backgroundPosition: '1000px 0' }
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Base Styles & Reset */
        body { 
            background-color: #050505; 
            color: #E5E7EB; 
            overflow-x: hidden; 
        }

        /* Smooth Scrolling hack for Safari */
        html { scroll-behavior: smooth; }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }

        /* Background Orbs Animation */
        .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: -1;
            opacity: 0.4;
            animation: float 10s infinite ease-in-out;
        }

        /* Glassmorphism Classes */
        .glass-nav {
            background: rgba(10, 10, 10, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glass-card {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
        }
        
        .glass-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            opacity: 0;
            transition: opacity 0.4s;
        }

        .glass-card:hover {
            transform: translateY(-5px);
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
            border-color: rgba(255, 255, 255, 0.15);
            box-shadow: 0 20px 40px -20px rgba(0,0,0,0.5);
        }

        .glass-card:hover::before { opacity: 1; }

        /* Icon Glow on Hover */
        .glass-card:hover .icon-box {
            transform: scale(1.1);
            background: rgba(255,255,255,0.1);
        }

        /* Typography Enhancements */
        .text-gradient {
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(to right, #60A5FA, #00F0FF, #9D4EDD);
        }

        /* Reveal Animation */
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Custom Gradients for Sections */
        .gradient-border {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
        }
        .gradient-border::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 1px;
            background: linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
        }
    </style>
</head>
<body class="antialiased selection:bg-accent-cyan selection:text-black relative font-sans">

    <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        <div class="orb w-[500px] h-[500px] bg-accent-blue/20 top-[-100px] left-[-100px]"></div>
        <div class="orb w-[400px] h-[400px] bg-accent-purple/20 bottom-[10%] right-[-50px] animation-delay-2000"></div>
        <div class="orb w-[300px] h-[300px] bg-accent-cyan/10 top-[40%] left-[20%] animation-delay-4000"></div>
    </div>

    <nav class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div class="glass-nav rounded-full px-2 py-2 flex items-center justify-between shadow-2xl shadow-black/20 w-full max-w-4xl relative">
            
            <a href="#" class="px-6 font-display font-bold text-xl tracking-tight text-white hover:text-accent-cyan transition-colors">
                SG<span class="text-accent-cyan">.</span>
            </a>

            <div class="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1">
                <a href="#inicio" class="px-6 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all">Inicio</a>
                <a href="#servicios" class="px-6 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all">Servicios</a>
                <a href="#sobre-mi" class="px-6 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all">Sobre Mí</a>
            </div>

            <div class="hidden md:block pr-2">
                <a href="#contacto" class="px-6 py-2.5 bg-white text-black rounded-full font-bold text-sm hover:bg-accent-cyan transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]">
                    Contactar
                </a>
            </div>

            <button id="menu-btn" class="md:hidden p-3 text-white rounded-full hover:bg-white/10 transition-colors">
                <i class="ph-bold ph-list text-xl"></i>
            </button>
        </div>

        <div id="mobile-menu" class="absolute top-full mt-4 w-[90%] max-w-sm bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex-col gap-4 shadow-2xl transform scale-95 opacity-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <a href="#inicio" class="block p-3 rounded-xl hover:bg-white/5 text-lg font-medium text-white" onclick="toggleMenu()">Inicio</a>
            <a href="#servicios" class="block p-3 rounded-xl hover:bg-white/5 text-lg font-medium text-white" onclick="toggleMenu()">Servicios</a>
            <a href="#sobre-mi" class="block p-3 rounded-xl hover:bg-white/5 text-lg font-medium text-white" onclick="toggleMenu()">Sobre Mí</a>
            <a href="#contacto" class="block mt-4 p-4 bg-accent-blue text-center rounded-xl font-bold text-white shadow-lg shadow-blue-500/20" onclick="toggleMenu()">Contactar Ahora</a>
        </div>
    </nav>

    <section id="inicio" class="relative z-10 min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        <div class="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            
            <div class="space-y-8 order-2 lg:order-1 relative">
                <div class="animate-fade-in opacity-0" style="animation-fill-mode: forwards; animation-delay: 0.1s;">
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-bold uppercase tracking-widest mb-6">
                        <span class="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
                        Disponible para proyectos
                    </span>
                    
                    <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight text-white mb-6">
                        Transforma <br/>
                        <span class="text-gradient">Tu Negocio.</span>
                    </h1>
                    
                    <p class="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light">
                        Soy <strong class="text-white font-medium">Sergio Guillén</strong>, Agente de Transformación Digital. Especialista en optimizar empresas mediante <span class="text-white border-b border-accent-cyan/50">Inteligencia Artificial</span> y <span class="text-white border-b border-accent-purple/50">Automatización</span>.
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in opacity-0" style="animation-fill-mode: forwards; animation-delay: 0.3s;">
                    <a href="#contacto" class="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105">
                        <span class="relative z-10 flex items-center gap-2">Consultoría Gratuita <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i></span>
                        <div class="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a href="#servicios" class="px-8 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-center">
                        Ver Servicios
                    </a>
                </div>

                <div class="pt-8 flex items-center gap-4 opacity-70">
                    <div class="flex -space-x-3">
                        <div class="w-10 h-10 rounded-full bg-gray-800 border-2 border-dark-900 flex items-center justify-center text-xs">AI</div>
                        <div class="w-10 h-10 rounded-full bg-gray-700 border-2 border-dark-900 flex items-center justify-center text-xs">Auto</div>
                        <div class="w-10 h-10 rounded-full bg-gray-600 border-2 border-dark-900 flex items-center justify-center text-xs">MKT</div>
                    </div>
                    <p class="text-sm text-gray-500 font-medium">+3 años generando impacto real.</p>
                </div>
            </div>

            <div class="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                <div class="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 blur-[100px] rounded-full"></div>
                
                <div class="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                    <img src="https://res.cloudinary.com/dg3peytgm/image/upload/IMG_7667_snrmuc.jpg" 
                         alt="Sergio Guillén Ponencia" 
                         class="w-full h-full object-cover grayscale-[20%] contrast-125 hover:scale-105 transition-transform duration-700">
                    
                    <div class="absolute bottom-6 left-6 right-6 p-4 bg-dark-900/80 backdrop-blur-xl rounded-xl border border-white/10 flex items-center gap-4 shadow-lg">
                        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center text-black shrink-0">
                            <i class="ph-fill ph-rocket-launch text-2xl"></i>
                        </div>
                        <div>
                            <p class="text-xs text-accent-cyan font-bold uppercase tracking-wider">ROI Promedio</p>
                            <p class="text-white text-lg font-bold font-display">+300% en Clientes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

    <section id="servicios" class="relative z-10 py-32">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="text-center max-w-3xl mx-auto mb-24 reveal">
                <span class="text-accent-cyan font-bold tracking-widest uppercase text-xs mb-4 block">Áreas de Impacto</span>
                <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                    Soluciones <span class="text-gray-500">Integrales</span>
                </h2>
                <p class="text-lg text-gray-400 font-light">
                    No vendo herramientas, implemento sistemas que hacen que tu empresa funcione mejor, más rápido y con menos costes.
                </p>
            </div>

            <div class="space-y-32">
                <div class="reveal">
                    <div class="flex items-end justify-between mb-10 border-b border-white/10 pb-6">
                        <h3 class="text-3xl font-display font-bold text-white flex items-center gap-3">
                            <span class="text-accent-blue opacity-50">01.</span> Inteligencia Artificial
                        </h3>
                        <div class="hidden md:block px-4 py-1 rounded-full border border-accent-blue/30 text-accent-blue text-xs font-bold uppercase">Eficiencia</div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="glass-card p-8 rounded-3xl group">
                            <div class="icon-box w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-blue mb-6 transition-transform duration-300">
                                <i class="ph-fill ph-chat-circle-text text-3xl"></i>
                            </div>
                            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">Chatbots 24/7</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">Atención al cliente automatizada que se siente humana. Resuelve dudas y cualifica leads mientras duermes.</p>
                        </div>
                        
                        <div class="glass-card p-8 rounded-3xl group">
                            <div class="icon-box w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-blue mb-6 transition-transform duration-300">
                                <i class="ph-fill ph-brain text-3xl"></i>
                            </div>
                            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">Cerebro Corporativo (RAG)</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">Asistentes IA entrenados con tus propios datos. Pregunta a tu base de conocimiento y obtén respuestas al instante.</p>
                        </div>

                        <div class="glass-card p-8 rounded-3xl group">
                            <div class="icon-box w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-blue mb-6 transition-transform duration-300">
                                <i class="ph-fill ph-magic-wand text-3xl"></i>
                            </div>
                            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">Generación de Contenido</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">Creación de informes, emails y posts adaptados perfectamente al tono de voz de tu marca.</p>
                        </div>
                        
                        <div class="glass-card p-8 rounded-3xl group">
                            <div class="icon-box w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-blue mb-6 transition-transform duration-300">
                                <i class="ph-fill ph-chart-polar text-3xl"></i>
                            </div>
                            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">Análisis Predictivo</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">Segmentación de clientes y detección de oportunidades ocultas en tus datos mediante algoritmos.</p>
                        </div>
                    </div>
                </div>

                <div class="reveal">
                    <div class="flex items-end justify-between mb-10 border-b border-white/10 pb-6">
                        <h3 class="text-3xl font-display font-bold text-white flex items-center gap-3">
                            <span class="text-accent-purple opacity-50">02.</span> Automatizaciones
                        </h3>
                        <div class="hidden md:block px-4 py-1 rounded-full border border-accent-purple/30 text-accent-purple text-xs font-bold uppercase">Productividad</div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="glass-card p-8 rounded-3xl group">
                            <div class="mb-4 text-accent-purple"><i class="ph-fill ph-arrows-merge text-3xl"></i></div>
                            <h4 class="text-lg font-bold text-white mb-2">Marketing & Ventas</h4>
                            <p class="text-gray-500 text-xs">Captación, nurturing y cierre automático.</p>
                        </div>
                        <div class="glass-card p-8 rounded-3xl group">
                            <div class="mb-4 text-accent-purple"><i class="ph-fill ph-files text-3xl"></i></div>
                            <h4 class="text-lg font-bold text-white mb-2">Administración</h4>
                            <p class="text-gray-500 text-xs">Facturación y gestión documental sin errores.</p>
                        </div>
                        <div class="glass-card p-8 rounded-3xl group">
                            <div class="mb-4 text-accent-purple"><i class="ph-fill ph-users-three text-3xl"></i></div>
                            <h4 class="text-lg font-bold text-white mb-2">Recursos Humanos</h4>
                            <p class="text-gray-500 text-xs">Onboarding y gestión de talento fluida.</p>
                        </div>
                        <div class="glass-card p-8 rounded-3xl group">
                            <div class="mb-4 text-accent-purple"><i class="ph-fill ph-kanban text-3xl"></i></div>
                            <h4 class="text-lg font-bold text-white mb-2">Gestión de Proyectos</h4>
                            <p class="text-gray-500 text-xs">Conexión entre equipos y tareas.</p>
                        </div>
                    </div>
                </div>

                <div class="reveal">
                    <div class="flex items-end justify-between mb-10 border-b border-white/10 pb-6">
                        <h3 class="text-3xl font-display font-bold text-white flex items-center gap-3">
                            <span class="text-accent-cyan opacity-50">03.</span> Transformación Digital
                        </h3>
                        <div class="hidden md:block px-4 py-1 rounded-full border border-accent-cyan/30 text-accent-cyan text-xs font-bold uppercase">Evolución</div>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="glass-card p-8 rounded-3xl group border-l-4 border-l-accent-cyan">
                            <h4 class="text-xl font-bold text-white mb-2">Embudos de Venta</h4>
                            <p class="text-gray-400 text-sm">Diseño estratégico de landing pages y funnels que convierten visitas en dinero.</p>
                        </div>
                         <div class="glass-card p-8 rounded-3xl group border-l-4 border-l-accent-cyan">
                            <h4 class="text-xl font-bold text-white mb-2">Digitalización de Procesos</h4>
                            <p class="text-gray-400 text-sm">Elimina el papel y el Excel. Pasa a herramientas en la nube conectadas.</p>
                        </div>
                         <div class="glass-card p-8 rounded-3xl group border-l-4 border-l-accent-cyan">
                            <h4 class="text-xl font-bold text-white mb-2">Business Intelligence</h4>
                            <p class="text-gray-400 text-sm">Dashboards visuales para tomar decisiones basadas en datos reales.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section id="sobre-mi" class="relative z-10 py-32 bg-dark-900/50 border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-20 items-center reveal">
                
                <div class="space-y-8">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-white">
                        Más que un consultor, <br>
                        <span class="text-gray-500">un socio estratégico.</span>
                    </h2>
                    
                    <div class="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                        <p>
                            Mi background combina la lógica de la <strong class="text-white font-medium">Ingeniería de Datos</strong> con la creatividad del <strong class="text-white font-medium">Marketing</strong>. Esta mezcla es lo que permite que mis soluciones no solo funcionen técnicamente, sino que vendan.
                        </p>
                        <p>
                            Mi misión es clara: democratizar el acceso a la tecnología punta para que empresas ambiciosas puedan competir (y ganar) en mercados saturados.
                        </p>
                        <p>
                            Cada solución que diseño es personalizada. No creo en las fórmulas mágicas de "cortar y pegar". Tu negocio es único, tu solución también debe serlo.
                        </p>
                    </div>

                    <div class="pt-4">
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <h3 class="text-3xl font-bold text-white mb-1">20+</h3>
                                <p class="text-sm text-gray-500 uppercase tracking-wider">Automatizaciones Activas</p>
                            </div>
                            <div>
                                <h3 class="text-3xl font-bold text-white mb-1">15+</h3>
                                <p class="text-sm text-gray-500 uppercase tracking-wider">Chatbots Desplegados</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative">
                    <div class="absolute inset-0 bg-accent-cyan blur-[80px] opacity-20"></div>
                    <div class="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 bg-dark-800">
                        <img src="https://res.cloudinary.com/dg3peytgm/image/upload/v1769542383/yo_terraza_celohz.png" 
                             onerror="this.src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop'"
                             alt="Sergio Guillén" 
                             class="w-full h-auto object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500">
                        
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                            <p class="text-white font-bold text-lg">Sergio Guillén</p>
                            <p class="text-accent-cyan text-sm">Murcia, España</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-32 reveal">
                <h3 class="text-2xl font-bold text-white mb-10 border-l-4 border-accent-purple pl-4">Proyectos Recientes</h3>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    <div class="glass-card p-8 rounded-3xl md:col-span-2 relative overflow-hidden group">
                        <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <i class="ph-fill ph-share-network text-9xl"></i>
                        </div>
                        <div class="relative z-10 h-full flex flex-col">
                            <div class="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center text-accent-purple mb-6">
                                <i class="ph-fill ph-rocket text-2xl"></i>
                            </div>
                            <h4 class="text-2xl font-bold text-white mb-2">Ecosistema de Redes Sociales IA</h4>
                            <p class="text-gray-400 mb-8 max-w-lg">Sistema autónomo para 3 empresas distintas. Generación de ideas, guiones, diseño de posts y programación automática.</p>
                            <div class="mt-auto flex gap-4 text-sm font-medium">
                                <span class="bg-white/5 px-3 py-1 rounded text-green-400">-80% Tiempo</span>
                                <span class="bg-white/5 px-3 py-1 rounded text-green-400">+50% Consistencia</span>
                            </div>
                        </div>
                    </div>

                    <div class="glass-card p-8 rounded-3xl flex flex-col group">
                        <div class="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center text-accent-blue mb-6">
                            <i class="ph-fill ph-envelope-simple-open text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-2">Email Marketing Automático</h4>
                        <p class="text-gray-400 text-sm mb-6">Hiper-personalización de correos según el comportamiento del usuario.</p>
                        <div class="mt-auto border-t border-white/5 pt-4">
                            <p class="text-2xl font-bold text-white">+36% <span class="text-xs font-normal text-gray-500 align-middle">Tasa de apertura</span></p>
                        </div>
                    </div>

                    <div class="glass-card p-8 rounded-3xl flex flex-col group">
                        <div class="w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center text-accent-cyan mb-6">
                            <i class="ph-fill ph-shield-check text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-2">IA Privada & Local</h4>
                        <p class="text-gray-400 text-sm mb-6">Implementación de modelos LLM Open Source (Ollama) en servidores propios.</p>
                         <div class="mt-auto border-t border-white/5 pt-4 flex items-center gap-2 text-gray-300 text-sm">
                            <i class="ph-fill ph-lock-key"></i> 100% Privacidad de Datos
                        </div>
                    </div>

                    <div class="glass-card p-8 rounded-3xl md:col-span-2 relative overflow-hidden flex flex-col justify-center group">
                        <div class="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent"></div>
                        <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div class="flex-1">
                                <h4 class="text-2xl font-bold text-white mb-2">Automatización de Procesos (RPA)</h4>
                                <p class="text-gray-400">Más de 20 flujos activos ininterrumpidamente. Desde la gestión de leads hasta la comunicación interna.</p>
                            </div>
                            <div class="flex flex-wrap gap-2 justify-center md:justify-end max-w-xs">
                                <span class="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-400 bg-black/20">Make</span>
                                <span class="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-400 bg-black/20">Python</span>
                                <span class="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-400 bg-black/20">Zapier</span>
                                <span class="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-400 bg-black/20">n8n</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 relative z-10">
        <div class="max-w-4xl mx-auto px-6">
            <h2 class="text-3xl md:text-5xl font-display font-bold text-center text-white mb-16">Preguntas Frecuentes</h2>
            
            <div class="grid gap-4 reveal">
                <details class="group glass-card rounded-2xl">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white text-lg">
                        <span>¿En cuánto tiempo veré resultados?</span>
                        <span class="transition group-open:rotate-180"><i class="ph-bold ph-caret-down"></i></span>
                    </summary>
                    <div class="text-gray-400 px-6 pb-6 leading-relaxed">
                        ¡Inmediato tras la implementación! Para el ROI completo, la media suele ser de 4 a 6 meses, dependiendo de la complejidad del proyecto.
                    </div>
                </details>

                <details class="group glass-card rounded-2xl">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white text-lg">
                        <span>¿Necesito saber de tecnología?</span>
                        <span class="transition group-open:rotate-180"><i class="ph-bold ph-caret-down"></i></span>
                    </summary>
                    <div class="text-gray-400 px-6 pb-6 leading-relaxed">
                        Para nada. Mi trabajo es hacer que la tecnología trabaje para ti, no que tú trabajes para ella. Te entrego sistemas "llave en mano" y formación simple.
                    </div>
                </details>

                 <details class="group glass-card rounded-2xl">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white text-lg">
                        <span>¿Cómo es el modelo de pago?</span>
                        <span class="transition group-open:rotate-180"><i class="ph-bold ph-caret-down"></i></span>
                    </summary>
                    <div class="text-gray-400 px-6 pb-6 leading-relaxed">
                        Generalmente trabajo por proyecto cerrado con hitos de pago (inicio y entrega), o mediante paquetes de horas para consultoría continua. Nos adaptamos a tu flujo de caja.
                    </div>
                </details>
            </div>
        </div>
    </section>

    <section id="contacto" class="relative py-32 z-10">
        <div class="max-w-5xl mx-auto px-6">
            <div class="glass-card rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden border border-accent-blue/30 shadow-[0_0_100px_rgba(45,127,249,0.1)]">
                
                <div class="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none"></div>

                <div class="relative z-10 space-y-10">
                    <div>
                        <h2 class="text-5xl md:text-7xl font-display font-bold text-white mb-6">Empecemos.</h2>
                        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
                            Tienes el negocio, yo tengo la tecnología. Agendemos una llamada de 15 minutos para ver si podemos trabajar juntos.
                        </p>
                    </div>

                    <div class="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a href="mailto:sergio@sergiogp.com" class="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg w-full md:w-auto">
                            Enviar Email
                        </a>
                        <a href="https://www.linkedin.com/in/sergioguillenpampliega" target="_blank" class="px-10 py-5 bg-[#0077B5] text-white rounded-full font-bold text-xl hover:bg-[#006396] transition-all transform hover:-translate-y-1 shadow-lg w-full md:w-auto flex items-center justify-center gap-3">
                            <i class="ph-bold ph-linkedin-logo text-2xl"></i> LinkedIn
                        </a>
                    </div>
                    
                    <div class="pt-8 border-t border-white/5 mt-10">
                        <a href="tel:+34649368800" class="text-gray-500 hover:text-white transition-colors font-mono">
                            +34 649 36 88 00
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="py-12 border-t border-white/5 bg-black relative z-10 text-center">
        <div class="flex justify-center gap-6 mb-8">
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"><i class="ph-fill ph-linkedin-logo text-xl"></i></a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"><i class="ph-fill ph-instagram-logo text-xl"></i></a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"><i class="ph-fill ph-envelope-simple text-xl"></i></a>
        </div>
        <p class="text-gray-600 text-sm">© 2026 Sergio Guillén Pampliega. Innovación y Estrategia.</p>
    </footer>

    <script>
        // Reveal Animation on Scroll
        function reveal() {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        }
        window.addEventListener('scroll', reveal);
        reveal(); // Trigger once on load

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const icon = menuBtn.querySelector('i');

        function toggleMenu() {
            const isOpen = mobileMenu.style.opacity === '1';
            
            if (isOpen) {
                mobileMenu.style.opacity = '0';
                mobileMenu.style.transform = 'scale(0.95)';
                mobileMenu.style.pointerEvents = 'none';
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            } else {
                mobileMenu.style.opacity = '1';
                mobileMenu.style.transform = 'scale(1)';
                mobileMenu.style.pointerEvents = 'auto';
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>
