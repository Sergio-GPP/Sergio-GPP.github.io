<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sergio Guillén Pampliega | Agente de Transformación Digital</title>
    <meta name="description" content="Experto en Inteligencia Artificial, Automatización y Transformación Digital. Optimiza tu empresa con soluciones tecnológicas avanzadas.">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                    },
                    colors: {
                        dark: {
                            950: '#05080F',
                            900: '#0B0F19', 
                            800: '#111827', 
                            700: '#1F2937', 
                        },
                        brand: {
                            blue: '#3B82F6',
                            cyan: '#06B6D4',
                            purple: '#8B5CF6',
                            pink: '#EC4899'
                        }
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                        'spin-slow': 'spin 12s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-15px)' },
                        },
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(30px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        }
                    },
                    backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                    }
                }
            }
        }
    </script>
    <style>
        /* Base Styles */
        body { 
            background-color: #0B0F19; 
            color: #F3F4F6; 
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0B0F19; 
        }
        ::-webkit-scrollbar-thumb {
            background: #1F2937; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #374151; 
        }

        /* Glassmorphism Utilities */
        .glass-nav {
            background: rgba(11, 15, 25, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }

        .glass-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%);
            opacity: 0;
            transition: opacity 0.5s;
            pointer-events: none;
            z-index: 1;
        }

        .glass-card:hover::before {
            opacity: 1;
        }

        .glass-card:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: var(--hover-color, rgba(6, 182, 212, 0.4));
            transform: translateY(-5px);
            box-shadow: 0 20px 40px -10px var(--hover-shadow, rgba(6, 182, 212, 0.15));
        }

        /* Text Effects */
        .text-gradient {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-image: linear-gradient(to right, #60A5FA, #22D3EE, #A78BFA);
        }
        
        .text-glow {
            text-shadow: 0 0 40px rgba(34, 211, 238, 0.3);
        }

        /* Animations */
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Section Gradients */
        .bg-glow-blue { background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 60%); }
        .bg-glow-purple { background: radial-gradient(circle at left center, rgba(139, 92, 246, 0.15), transparent 60%); }
        .bg-glow-cyan { background: radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.15), transparent 60%); }
        .bg-glow-pink { background: radial-gradient(circle at top left, rgba(236, 72, 153, 0.15), transparent 60%); }

        /* Mobile Menu */
        #mobile-menu {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
        }
        #mobile-menu.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
        }
    </style>
</head>
<body class="antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative">

    <!-- BACKGROUND FIXED -->
    <div class="fixed inset-0 z-0 pointer-events-none">
        <!-- Abstract Tech Background -->
        <div class="absolute inset-0 bg-dark-950"></div>
        <div class="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-900/95 to-dark-950"></div>
        
        <!-- Animated Orbs -->
        <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>
    </div>

    <!-- NAVIGATION -->
    <nav class="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
        <div class="max-w-screen-2xl mx-auto px-6 h-20 flex justify-between items-center">
            
            <!-- Logo / Brand -->
            <a href="#" class="text-xl font-bold tracking-tight text-white flex items-center gap-2 group">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                    <span class="font-bold text-sm">SG</span>
                </div>
                <span class="hidden sm:block group-hover:text-cyan-400 transition-colors">Sergio Guillén</span>
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-10">
                <a href="#inicio" class="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all">Inicio</a>
                <a href="#servicios" class="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all">Servicios</a>
                <a href="#sobre-mi" class="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all">Sobre Mí</a>
                <a href="#faq" class="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all">FAQ</a>
                <a href="#contacto" class="px-6 py-2.5 bg-white text-dark-900 rounded-full text-sm font-bold hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                    Contactar
                </a>
            </div>

            <!-- Mobile Button -->
            <button id="menu-btn" class="md:hidden text-white text-2xl p-2 focus:outline-none z-50 relative">
                <i class="ph-bold ph-list transition-all duration-300"></i>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="fixed inset-0 bg-dark-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
            <a href="#inicio" class="text-2xl font-medium text-white hover:text-cyan-400 transition-colors" onclick="toggleMenu()">Inicio</a>
            <a href="#servicios" class="text-2xl font-medium text-white hover:text-cyan-400 transition-colors" onclick="toggleMenu()">Servicios</a>
            <a href="#sobre-mi" class="text-2xl font-medium text-white hover:text-cyan-400 transition-colors" onclick="toggleMenu()">Sobre Mí</a>
            <a href="#faq" class="text-2xl font-medium text-white hover:text-cyan-400 transition-colors" onclick="toggleMenu()">FAQ</a>
            <a href="#contacto" class="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-bold text-white text-xl shadow-lg shadow-cyan-500/30" onclick="toggleMenu()">
                Contactar Ahora
            </a>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <section id="inicio" class="relative z-10 min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
            
            <!-- Text Content -->
            <div class="w-full md:w-7/12 space-y-8 animate-fade-in-up">
                
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md">
                    <span class="relative flex h-2.5 w-2.5">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                    </span>
                    <span class="text-cyan-400 text-xs md:text-sm font-bold uppercase tracking-wider">Agente de Transformación Digital</span>
                </div>

                <!-- Headline -->
                <div class="space-y-4">
                    <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-white">
                        <span class="text-gradient text-glow">Sergio Guillén</span>
                        <br>
                        <span class="text-gray-100">Pampliega</span>
                        <i class="ph-fill ph-seal-check text-blue-500 text-3xl md:text-5xl align-top ml-2 inline-block" title="Verificado"></i>
                    </h1>
                </div>

                <!-- Subheadline -->
                <div class="space-y-6 border-l-2 border-cyan-500/30 pl-6">
                    <h2 class="text-2xl md:text-3xl text-gray-300 font-light leading-snug">
                        Experto en <strong class="text-white font-semibold border-b-2 border-cyan-500/50">Inteligencia Artificial</strong> y <strong class="text-white font-semibold border-b-2 border-cyan-500/50">Automatización</strong>.
                    </h2>
                    <p class="text-lg text-gray-400 max-w-2xl leading-relaxed">
                        Más de 3 años optimizando procesos y transformando empresas. Convierte la tecnología en tu mayor ventaja competitiva.
                    </p>
                </div>

                <!-- CTA -->
                <div class="pt-4 flex flex-col sm:flex-row gap-4">
                    <a href="#contacto" class="inline-flex justify-center items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1 text-lg group">
                        Consultoría Gratuita
                        <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </a>
                    <a href="#servicios" class="inline-flex justify-center items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all text-lg backdrop-blur-sm">
                        Ver Servicios
                    </a>
                </div>
            </div>

            <!-- Image Content -->
            <div class="w-full md:w-5/12 flex justify-center md:justify-end animate-float relative">
                <!-- Decorative Elements behind image -->
                <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 blur-[60px] rounded-full transform scale-90"></div>
                
                <div class="relative w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group mx-auto md:mx-0 z-10">
                    <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 mix-blend-overlay z-10"></div>
                    
                    <img src="https://res.cloudinary.com/dg3peytgm/image/upload/IMG_7667_snrmuc.jpg" 
                         alt="Sergio Guillén Ponencia" 
                         class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    
                    <!-- Gradient Overlay for text readability -->
                    <div class="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent z-20"></div>
                    
                    <!-- Floating Card -->
                    <div class="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-xl border border-white/10 flex items-center gap-4 shadow-lg z-30 transform transition-transform group-hover:translate-y-[-5px]">
                        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 shrink-0">
                            <i class="ph-fill ph-brain text-2xl"></i>
                        </div>
                        <div>
                            <p class="text-xs text-cyan-300 font-bold uppercase tracking-wider mb-0.5">Impacto Real</p>
                            <p class="text-white text-sm font-bold">+300% ROI en clientes</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- SERVICIOS -->
    <section id="servicios" class="relative z-10 py-32 bg-dark-900/50 border-y border-white/5">
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-12">
            
            <div class="text-center max-w-3xl mx-auto mb-24 space-y-4 reveal">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    Mis <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Servicios</span>
                </h2>
                <p class="text-xl text-gray-400">
                    Soluciones integrales diseñadas para escalar tu negocio en la era digital.
                </p>
            </div>

            <!-- AREA 01: IA -->
            <div class="mb-24 reveal bg-glow-blue rounded-[3rem] p-8 md:p-12 border border-blue-500/10 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 border-b border-blue-500/20 pb-8 relative z-10">
                    <div>
                        <span class="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">Área 01</span>
                        <h3 class="text-3xl md:text-5xl font-bold text-white">Soluciones IA</h3>
                    </div>
                    <p class="text-gray-400 max-w-lg text-base md:text-right">Implementación de inteligencia artificial para maximizar eficiencia y rentabilidad.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                    <!-- Cards -->
                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <div class="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <i class="ph-fill ph-chat-circle-text text-3xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">Chatbots Inteligentes</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Atención al cliente automatizada 24/7 con procesamiento de lenguaje natural para respuestas humanas y precisas.</p>
                    </div>

                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <div class="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <i class="ph-fill ph-robot text-3xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">Asistentes RAG</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Sistemas que "leen" tu documentación interna para responder consultas de empleados o clientes al instante.</p>
                    </div>

                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <div class="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <i class="ph-fill ph-pen-nib text-3xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">Generación de Contenido</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Creación masiva y personalizada de textos, informes y copys de marketing manteniendo tu tono de marca.</p>
                    </div>

                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <div class="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <i class="ph-fill ph-users-three text-3xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">Segmentación Predictiva</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Algoritmos que analizan tus datos para predecir comportamientos de compra y segmentar audiencias.</p>
                    </div>

                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <div class="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <i class="ph-fill ph-chart-bar text-3xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">Data Analytics & BI</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Dashboards interactivos que transforman datos brutos en insights visuales para la toma de decisiones.</p>
                    </div>

                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <div class="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <i class="ph-fill ph-microphone text-3xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">Meeting Intelligence</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Transcripción, resumen y extracción de tareas automáticas de todas tus reuniones virtuales.</p>
                    </div>
                </div>
            </div>

            <!-- AREA 02: AUTOMATIZACIONES -->
            <div class="mb-24 reveal bg-glow-purple rounded-[3rem] p-8 md:p-12 border border-purple-500/10 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 border-b border-purple-500/20 pb-8 relative z-10">
                    <div>
                        <span class="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2 block">Área 02</span>
                        <h3 class="text-3xl md:text-5xl font-bold text-white">Automatizaciones</h3>
                    </div>
                    <p class="text-gray-400 max-w-lg text-base md:text-right">Elimina tareas repetitivas y conecta tus herramientas.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                     <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-megaphone text-3xl text-purple-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Marketing y Ventas</h4>
                        <p class="text-gray-400 text-sm">Flujos automáticos de captación y nutrición de leads (CRM).</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-headset text-3xl text-purple-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Atención al Cliente</h4>
                        <p class="text-gray-400 text-sm">Ticketing automático y enrutamiento de consultas.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-files text-3xl text-purple-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Administración</h4>
                        <p class="text-gray-400 text-sm">Facturación, contratos y gestión documental sin manos.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-users text-3xl text-purple-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Recursos Humanos</h4>
                        <p class="text-gray-400 text-sm">Onboarding de empleados y gestión de vacaciones.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-kanban text-3xl text-purple-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Gestión de Proyectos</h4>
                        <p class="text-gray-400 text-sm">Sincronización de tareas entre Trello, Asana, Slack, etc.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-file-text text-3xl text-purple-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Reporting</h4>
                        <p class="text-gray-400 text-sm">Informes semanales generados y enviados automáticamente.</p>
                    </div>
                </div>
            </div>

            <!-- AREA 03: TRANSFORMACIÓN -->
            <div class="mb-24 reveal bg-glow-cyan rounded-[3rem] p-8 md:p-12 border border-cyan-500/10 relative overflow-hidden">
                <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 border-b border-cyan-500/20 pb-8 relative z-10">
                    <div>
                        <span class="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-2 block">Área 03</span>
                        <h3 class="text-3xl md:text-5xl font-bold text-white">Transformación Digital</h3>
                    </div>
                    <p class="text-gray-400 max-w-lg text-base md:text-right">Infraestructura digital para el crecimiento.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                    <div class="glass-card p-8 rounded-3xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5);">
                        <i class="ph-fill ph-browser text-3xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Landing Pages</h4>
                        <p class="text-gray-400 text-sm">Diseño web de alto rendimiento enfocado en conversión.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5);">
                        <i class="ph-fill ph-funnel text-3xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Embudos de Venta</h4>
                        <p class="text-gray-400 text-sm">Arquitectura de ventas digitales automatizada.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5);">
                        <i class="ph-fill ph-arrows-left-right text-3xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Digitalización</h4>
                        <p class="text-gray-400 text-sm">Migración de procesos analógicos a entornos cloud.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5);">
                        <i class="ph-fill ph-database text-3xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Centralización de Datos</h4>
                        <p class="text-gray-400 text-sm">Single Source of Truth para tu empresa.</p>
                    </div>
                     <div class="glass-card p-8 rounded-3xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5);">
                        <i class="ph-fill ph-git-branch text-3xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Workflows</h4>
                        <p class="text-gray-400 text-sm">Rediseño de flujos de trabajo para máxima productividad.</p>
                    </div>
                     <div class="glass-card p-8 rounded-3xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5);">
                        <i class="ph-fill ph-lightbulb text-3xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Consultoría Estratégica</h4>
                        <p class="text-gray-400 text-sm">Hoja de ruta tecnológica a medida.</p>
                    </div>
                </div>
            </div>

            <!-- AREA 04: MARKETING -->
            <div class="mb-10 reveal bg-glow-pink rounded-[3rem] p-8 md:p-12 border border-pink-500/10 relative overflow-hidden">
                <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 border-b border-pink-500/20 pb-8 relative z-10">
                    <div>
                        <span class="text-pink-400 font-bold tracking-wider uppercase text-sm mb-2 block">Área 04</span>
                        <h3 class="text-3xl md:text-5xl font-bold text-white">Marketing Digital</h3>
                    </div>
                    <p class="text-gray-400 max-w-lg text-base md:text-right">Estrategias data-driven para dominar tu mercado.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(236, 72, 153, 0.5);">
                        <i class="ph-fill ph-globe text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Estrategia 360º</h4>
                        <p class="text-gray-400 text-sm">Planificación omnicanal coherente.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(236, 72, 153, 0.5);">
                        <i class="ph-fill ph-broadcast text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Brand Communication</h4>
                        <p class="text-gray-400 text-sm">Mensajes que conectan y fidelizan.</p>
                    </div>
                    <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(236, 72, 153, 0.5);">
                        <i class="ph-fill ph-magnifying-glass text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">SEO con IA</h4>
                        <p class="text-gray-400 text-sm">Posicionamiento orgánico acelerado.</p>
                    </div>
                     <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(236, 72, 153, 0.5);">
                        <i class="ph-fill ph-target text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Paid Media</h4>
                        <p class="text-gray-400 text-sm">Ads optimizados algorítmicamente.</p>
                    </div>
                     <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(236, 72, 153, 0.5);">
                        <i class="ph-fill ph-rocket text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Growth Hacking</h4>
                        <p class="text-gray-400 text-sm">Experimentos rápidos para crecimiento exponencial.</p>
                    </div>
                     <div class="glass-card p-8 rounded-3xl group" style="--hover-color: rgba(236, 72, 153, 0.5);">
                        <i class="ph-fill ph-envelope text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Email Marketing</h4>
                        <p class="text-gray-400 text-sm">Secuencias automatizadas de alta conversión.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- SOBRE MÍ & PROYECTOS -->
    <section id="sobre-mi" class="relative z-10 py-32 bg-dark-950 border-y border-white/5">
        <div class="max-w-screen-2xl mx-auto px-6 lg:px-12">
            
            <!-- Intro -->
            <div class="grid md:grid-cols-2 gap-16 lg:gap-28 items-center mb-32 reveal">
                <div class="order-2 md:order-1 space-y-8">
                    <span class="text-cyan-400 font-bold tracking-wider uppercase text-sm">Trayectoria</span>
                    <h2 class="text-4xl md:text-5xl font-bold text-white">Sobre Mí</h2>
                    <h3 class="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hola, soy Sergio Guillén</h3>
                    
                    <div class="space-y-4 text-gray-300 text-lg leading-relaxed">
                        <p>
                            Graduado y Formado en <strong class="text-white">Inteligencia Artificial</strong>, <strong class="text-white">Automatización de Procesos</strong>, <strong class="text-white">Marketing y Publicidad</strong>, y <strong class="text-white">Transformación Digital</strong>.
                        </p>
                        <p>
                            Mi objetivo es hacer a las empresas más óptimas, eficientes y competitivas. Esto lo consigo liberando tiempo, desarrollando sistemas para una mejor toma de decisiones y digitalizando procesos clave.
                        </p>
                        <p class="text-gray-400">
                            Todos los servicios y soluciones son personalizados para cada cliente y proyecto, asegurando compromiso y resultados tangibles.
                        </p>
                    </div>

                    <div class="pt-4">
                        <a href="#contacto" class="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 group text-xl">
                            Hablemos sobre tu proyecto <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Foto -->
                <div class="order-1 md:order-2 flex justify-center">
                    <div class="relative w-full max-w-sm aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent z-10"></div>
                        <img src="https://res.cloudinary.com/dg3peytgm/image/upload/v1769542383/yo_terraza_celohz.png" 
                              onerror="this.src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop'"
                              alt="Sergio Guillén" 
                              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    </div>
                </div>
            </div>

            <!-- Proyectos -->
            <div class="space-y-16 reveal">
                <div class="text-center max-w-4xl mx-auto space-y-6">
                    <h3 class="text-3xl md:text-4xl font-bold text-white">Proyectos Destacados <span class="text-cyan-400">2025</span></h3>
                    <p class="text-lg text-gray-400">
                        Casos de éxito recientes donde la tecnología ha transformado negocios.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    
                    <!-- Proyecto 1 -->
                    <div class="glass-card p-8 rounded-3xl group border-t-2 border-t-purple-500">
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
                                <i class="ph-fill ph-share-network text-2xl"></i>
                            </div>
                            <span class="text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">Marketing</span>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">RRSS con IA</h4>
                        <p class="text-gray-300 text-sm mb-6 flex-grow">
                            3 sistemas de creación de contenido y automatización de redes sociales.
                        </p>
                        <ul class="text-sm text-gray-500 space-y-2 border-t border-white/5 pt-4">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check text-green-400"></i> 80% menos tiempo</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check text-green-400"></i> +50% consistencia</li>
                        </ul>
                    </div>

                    <!-- Proyecto 2 -->
                    <div class="glass-card p-8 rounded-3xl group border-t-2 border-t-blue-500">
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                                <i class="ph-fill ph-chat-centered-text text-2xl"></i>
                            </div>
                            <span class="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">Atención Cliente</span>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">Chatbots y Asistentes</h4>
                        <p class="text-gray-300 text-sm mb-6 flex-grow">
                            +15 Chatbots desplegados en Web, Whatsapp y Telegram.
                        </p>
                         <ul class="text-sm text-gray-500 space-y-2 border-t border-white/5 pt-4">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check text-blue-400"></i> Soporte 24/7</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check text-blue-400"></i> Multicanal</li>
                        </ul>
                    </div>

                    <!-- Proyecto 3 -->
                    <div class="glass-card p-8 rounded-3xl group border-t-2 border-t-pink-500">
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400">
                                <i class="ph-fill ph-envelope-simple-open text-2xl"></i>
                            </div>
                            <span class="text-xs font-bold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full">Ventas</span>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">Email Marketing IA</h4>
                        <p class="text-gray-300 text-sm mb-6 flex-grow">
                            Automatización e hiperpersonalización del canal de ventas.
                        </p>
                        <ul class="text-sm text-gray-500 space-y-2 border-t border-white/5 pt-4">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-trend-up text-pink-400"></i> +36% Apertura</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-trend-up text-pink-400"></i> +11% Conversión</li>
                        </ul>
                    </div>

                    <!-- Proyecto 4 -->
                    <div class="glass-card p-8 rounded-3xl group border-t-2 border-t-green-500 lg:col-span-1">
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400">
                                <i class="ph-fill ph-shield-check text-2xl"></i>
                            </div>
                            <span class="text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full">Seguridad</span>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">IA Privada Local</h4>
                        <p class="text-gray-300 text-sm mb-6 flex-grow">
                            Modelos Open Source (Ollama) ejecutados en local para máxima privacidad.
                        </p>
                        <ul class="text-sm text-gray-500 space-y-2 border-t border-white/5 pt-4">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-lock-key text-green-400"></i> Datos 100% Privados</li>
                        </ul>
                    </div>

                    <!-- Proyecto 5 -->
                    <div class="glass-card p-8 rounded-3xl group border-t-2 border-t-orange-500 lg:col-span-2">
                        <div class="flex flex-col md:flex-row gap-8 items-start h-full">
                            <div class="w-12 h-12 bg-orange-500/10 rounded-xl flex-shrink-0 flex items-center justify-center text-orange-400">
                                <i class="ph-fill ph-gear text-2xl"></i>
                            </div>
                            <div class="flex-grow">
                                <h4 class="text-xl font-bold text-white mb-3">Automatizaciones de Procesos</h4>
                                <p class="text-gray-300 text-sm mb-6">
                                    +20 automatizaciones activas optimizando flujos críticos de negocio sin interrupciones.
                                </p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">Leads</span>
                                    <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">Data Entry</span>
                                    <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">Comms</span>
                                    <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">RRHH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="relative z-10 py-32 bg-dark-900 border-y border-white/5">
        <div class="max-w-screen-xl mx-auto px-6 lg:px-12">
            <div class="text-center max-w-4xl mx-auto mb-20 space-y-4 reveal">
                <h2 class="text-4xl md:text-5xl font-bold text-white">Preguntas <span class="text-cyan-400">Frecuentes</span></h2>
                <p class="text-xl text-gray-400">Todo lo que necesitas saber antes de empezar.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-6 lg:gap-8 reveal">
                <!-- FAQ Item -->
                <div class="glass-card p-8 rounded-3xl">
                    <h4 class="text-lg font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1 flex-shrink-0"></i> ¿En cuánto tiempo se ven resultados?</h4>
                    <p class="text-gray-400 text-sm leading-relaxed pl-8">¡Inmediatos tras la implementación! El ROI completo suele consolidarse entre 4-6 meses dependiendo de la escala del proyecto.</p>
                </div>
                <!-- FAQ Item -->
                <div class="glass-card p-8 rounded-3xl">
                    <h4 class="text-lg font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1 flex-shrink-0"></i> ¿Necesito conocimientos técnicos?</h4>
                    <p class="text-gray-400 text-sm leading-relaxed pl-8">Para nada. Entrego soluciones "llave en mano" y formación (know-how) para que tú solo te preocupes de tu negocio.</p>
                </div>
                <!-- FAQ Item -->
                <div class="glass-card p-8 rounded-3xl">
                    <h4 class="text-lg font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1 flex-shrink-0"></i> ¿Cuotas mensuales o pago único?</h4>
                    <p class="text-gray-400 text-sm leading-relaxed pl-8">Generalmente trabajo por proyecto (pago único o fraccionado). Para mantenimientos específicos, podemos acordar un fee mensual.</p>
                </div>
                <!-- FAQ Item -->
                <div class="glass-card p-8 rounded-3xl">
                    <h4 class="text-lg font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1 flex-shrink-0"></i> ¿Con qué sectores trabajas?</h4>
                    <p class="text-gray-400 text-sm leading-relaxed pl-8">Soy agnóstico al sector. Analizo procesos y datos, que son universales. He trabajado en retail, servicios, industria y más.</p>
                </div>
                <!-- FAQ Item -->
                <div class="glass-card p-8 rounded-3xl">
                    <h4 class="text-lg font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1 flex-shrink-0"></i> ¿Puedo empezar con algo pequeño?</h4>
                    <p class="text-gray-400 text-sm leading-relaxed pl-8">Sí. Recomiendo empezar con un "Quick Win" (victoria rápida) para validar resultados y luego escalar a soluciones más complejas.</p>
                </div>
                <!-- FAQ Item -->
                <div class="glass-card p-8 rounded-3xl">
                    <h4 class="text-lg font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1 flex-shrink-0"></i> ¿Se integra con mis herramientas?</h4>
                    <p class="text-gray-400 text-sm leading-relaxed pl-8">Absolutamente. La prioridad es no romper tu ecosistema actual, sino conectarlo y potenciarlo.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="relative z-10 py-32 border-t border-white/5 bg-gradient-to-b from-dark-900 to-dark-950">
        <div class="max-w-4xl mx-auto px-6">
            <div class="glass-nav p-10 md:p-20 rounded-[3rem] border border-cyan-500/20 shadow-2xl relative overflow-hidden text-center transform hover:scale-[1.01] transition-transform duration-500 group">
                
                <!-- Background Glow -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div class="relative z-10 space-y-10">
                    <div>
                        <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">Sergio Guillén Pampliega</h2>
                        <p class="text-xl md:text-2xl text-cyan-400 font-medium tracking-wide">Experto en IA y Automatización</p>
                        <div class="flex items-center justify-center gap-2 mt-4 text-gray-400">
                             <i class="ph-fill ph-map-pin text-cyan-500"></i>
                             <span>Murcia, España (Trabajo Remoto Global)</span>
                        </div>
                    </div>

                    <div class="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"></div>

                    <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                         <a href="tel:+34649368800" class="flex flex-col items-center gap-3 group/link">
                            <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-cyan-500/20 transition-colors">
                                <i class="ph-fill ph-phone text-3xl text-cyan-400"></i>
                            </div>
                            <span class="text-lg text-white font-medium group-hover/link:text-cyan-300 transition-colors">649 36 88 00</span>
                         </a>
                         <a href="mailto:sergio@sergiogp.com" class="flex flex-col items-center gap-3 group/link">
                            <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-cyan-500/20 transition-colors">
                                <i class="ph-fill ph-envelope text-3xl text-cyan-400"></i>
                            </div>
                            <span class="text-lg text-white font-medium group-hover/link:text-cyan-300 transition-colors">sergio@sergiogp.com</span>
                         </a>
                    </div>

                    <div class="pt-8">
                        <a href="https://www.linkedin.com/in/sergioguillenpampliega" target="_blank" class="inline-flex items-center gap-3 px-12 py-5 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-full font-bold text-xl transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-1 hover:shadow-blue-900/50">
                            <i class="ph-bold ph-linkedin-logo text-2xl"></i>
                            Conectar en LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- FOOTER -->
    <footer class="py-12 text-center text-gray-500 text-sm border-t border-white/5 bg-dark-950 relative z-10">
        <div class="flex justify-center gap-6 mb-8">
            <a href="https://www.linkedin.com/in/sergioguillenpampliega" target="_blank" class="text-gray-400 hover:text-white transition-colors text-2xl p-3 hover:bg-white/5 rounded-full"><i class="ph-fill ph-linkedin-logo"></i></a>
            <a href="https://www.instagram.com/sergiogp.ia/" target="_blank" class="text-gray-400 hover:text-white transition-colors text-2xl p-3 hover:bg-white/5 rounded-full"><i class="ph-fill ph-instagram-logo"></i></a>
        </div>
        <p>&copy; 2026 Sergio Guillén Pampliega. Todos los derechos reservados.</p>
    </footer>

    <script>
        // Scroll Reveal Animation
        window.addEventListener('scroll', reveal);
        function reveal(){
            var reveals = document.querySelectorAll('.reveal');
            for(var i = 0; i < reveals.length; i++){
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 100;
                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active');
                }
            }
        }
        reveal(); // Trigger once on load

        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const navbar = document.getElementById('navbar');
        
        function toggleMenu() {
            mobileMenu.classList.toggle('open');
            const icon = menuBtn.querySelector('i');
            
            if (mobileMenu.classList.contains('open')) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
                document.body.style.overflow = 'auto';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Navbar Scroll Effect (Optional polish)
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
                navbar.style.background = 'rgba(11, 15, 25, 0.95)';
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.style.background = 'rgba(11, 15, 25, 0.85)';
            }
        });
        
        // Mouse movement effect for cards (Subtle glow following mouse)
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    </script>
</body>
</html>
