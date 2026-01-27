<!DOCTYPE html>
<html lang="es" class="scroll-smooth scroll-pt-28">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sergio Guillén Pampliega | Agente de Transformación Digital</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&display=swap" rel="stylesheet">
    <!-- Iconos Phosphor -->
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                    },
                    colors: {
                        dark: {
                            900: '#0B0F19', // Fondo casi negro
                            800: '#111827', // Paneles
                            700: '#1F2937', // Bordes
                        },
                        brand: {
                            blue: '#3B82F6',
                            cyan: '#06B6D4',
                            purple: '#8B5CF6'
                        }
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'fade-in': 'fadeIn 0.8s ease-out forwards',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        fadeIn: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body { 
            background-color: #0B0F19; 
            color: white; 
            overflow-x: hidden; /* Evita scroll lateral */
        }
        .glass-panel {
            background: rgba(11, 15, 25, 0.85); /* Mayor opacidad para asegurar legibilidad en nav */
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(5px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        .glass-card:hover {
            background: rgba(255, 255, 255, 0.06);
            border-color: var(--hover-color, rgba(6, 182, 212, 0.3));
            transform: translateY(-5px);
            box-shadow: 0 20px 40px -10px var(--hover-shadow, rgba(6, 182, 212, 0.1));
        }
        .text-glow {
            text-shadow: 0 0 30px rgba(6, 182, 212, 0.4);
        }
        
        /* Animación suave para el scroll */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Gradientes de fondo para secciones */
        .section-gradient-blue { background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.08), transparent 50%); }
        .section-gradient-purple { background: radial-gradient(circle at left center, rgba(139, 92, 246, 0.08), transparent 50%); }
        .section-gradient-cyan { background: radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.08), transparent 50%); }
        .section-gradient-pink { background: radial-gradient(circle at top left, rgba(236, 72, 153, 0.08), transparent 50%); }

        /* Menú móvil */
        #mobile-menu {
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            transform: translateY(-20px);
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
<body class="antialiased selection:bg-cyan-500 selection:text-white relative">

    <!-- IMAGEN DE FONDO GLOBAL -->
    <div class="fixed inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
             alt="Background Tech" 
             class="w-full h-full object-cover opacity-20 filter blur-[2px]">
        <div class="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-900/95 to-dark-900"></div>
    </div>

    <!-- NAVEGACIÓN -->
    <nav class="fixed top-0 w-full z-50 px-6 py-4 glass-panel">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <!-- Logo -->
            <div class="flex items-center gap-2 cursor-pointer z-50" onclick="window.scrollTo(0,0)">
                <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">S</div>
                <span class="text-xl font-bold tracking-tight">SergioGP<span class="text-cyan-400">.AI</span></span>
            </div>
            
            <!-- Botón Hamburguesa (Móvil) -->
            <button id="menu-btn" class="md:hidden text-white text-2xl z-50 focus:outline-none">
                <i class="ph-bold ph-list"></i>
            </button>

            <!-- Enlaces Escritorio -->
            <div class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                <a href="#inicio" class="hover:text-white transition-colors hover:scale-105 transform duration-200">Inicio</a>
                <a href="#servicios" class="hover:text-white transition-colors hover:scale-105 transform duration-200">Servicios</a>
                <a href="#contacto" class="px-6 py-2.5 bg-white text-dark-900 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/5 border border-transparent hover:border-white/50">
                    Contactar
                </a>
            </div>
        </div>

        <!-- Menú Desplegable Móvil -->
        <div id="mobile-menu" class="absolute top-full left-0 w-full bg-dark-900/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 space-y-6 shadow-2xl">
            <a href="#inicio" class="text-lg font-medium text-white hover:text-cyan-400 transition-colors" onclick="toggleMenu()">Inicio</a>
            <a href="#servicios" class="text-lg font-medium text-white hover:text-cyan-400 transition-colors" onclick="toggleMenu()">Servicios</a>
            <a href="#contacto" class="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-bold text-white shadow-lg" onclick="toggleMenu()">
                Contactar
            </a>
        </div>
    </nav>

    <!-- SECCIÓN HERO -->
    <section id="inicio" class="relative z-10 min-h-screen flex items-center pt-24 pb-12">
        <div class="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            <!-- CONTENIDO TEXTO -->
            <div class="w-full md:w-7/12 space-y-8 order-2 md:order-1 animate-fade-in">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider shadow-glow">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    Agente de Transformación Digital
                </div>

                <div class="space-y-2">
                    <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                        Hola, soy <br>
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-glow inline-block pb-3">
                            Sergio Guillén Pampliega
                        </span>
                        <i class="ph-fill ph-seal-check text-blue-500 text-3xl md:text-4xl align-middle inline-block ml-1 -mt-3" title="Experto Verificado"></i>
                    </h1>
                </div>

                <div class="space-y-6 border-l-2 border-cyan-500/30 pl-6">
                    <h2 class="text-xl md:text-2xl text-gray-200 font-light">
                        Experto en <strong class="text-white font-semibold border-b border-cyan-500/50">Inteligencia Artificial</strong> y <strong class="text-white font-semibold border-b border-cyan-500/50">Automatización</strong>.
                    </h2>
                    <p class="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
                        Más de 3 años optimizando procesos y transformando empresas con IA.
                    </p>
                </div>

                <!-- Botón ÚNICO de Consultoría Gratuita -->
                <div class="pt-4">
                    <a href="#contacto" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1 text-lg group">
                        Consultoría Gratuita
                        <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>

            <!-- IMAGEN -->
            <div class="w-full md:w-5/12 flex justify-center md:justify-end order-1 md:order-2 animate-float">
                <div class="relative w-full max-w-xs aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group mx-auto md:mx-0">
                    <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 mix-blend-overlay"></div>
                    <img src="1.jpg" 
                         onerror="this.src='https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop'"
                         alt="Sergio Guillén Ponencia" 
                         class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                    
                    <div class="absolute bottom-4 left-4 right-4 p-3 glass-panel rounded-xl border border-white/10 backdrop-blur-xl flex items-center gap-3 shadow-lg">
                        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25">
                            <i class="ph-fill ph-brain text-xl"></i>
                        </div>
                        <div>
                            <p class="text-[10px] text-cyan-300 font-bold uppercase tracking-wider">Impacto Real</p>
                            <p class="text-white text-xs font-medium">+300% ROI en clientes</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- SECCIÓN SERVICIOS PRINCIPAL -->
    <section id="servicios" class="relative z-10 py-24 bg-dark-800/30 border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal">
                <h2 class="text-4xl md:text-5xl font-bold text-white">
                    Mis <span class="text-cyan-400">Servicios</span>
                </h2>
                <p class="text-xl text-gray-400">
                    Soluciones integrales para la transformación de tu empresa.
                </p>
            </div>

            <!-- BLOQUE 1: SOLUCIONES IA -->
            <div class="mb-24 reveal section-gradient-blue rounded-3xl p-6 md:p-10 border border-blue-500/10 hover:border-blue-500/20 transition-colors">
                <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4 border-b border-blue-500/20 pb-6">
                    <div>
                        <span class="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">Área 01</span>
                        <h3 class="text-3xl md:text-4xl font-bold text-white">Soluciones IA</h3>
                    </div>
                    <p class="text-gray-400 max-w-md text-sm md:text-right">Optimiza tu empresa con Inteligencia Artificial para hacerla más eficiente y rentable.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="glass-card p-8 rounded-2xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <i class="ph-fill ph-chat-circle-text text-3xl text-blue-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Chatbots</h4>
                        <p class="text-gray-400 text-sm">Atiende a tus clientes de forma automatizada con respuestas naturales y soporte disponible las 24 horas.</p>
                    </div>

                    <div class="glass-card p-8 rounded-2xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <i class="ph-fill ph-robot text-3xl text-blue-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Asistentes Internos (RAG)</h4>
                        <p class="text-gray-400 text-sm">Accede al conocimiento corporativo con asistentes que consultan documentación y datos internos de forma precisa.</p>
                    </div>

                    <div class="glass-card p-8 rounded-2xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <i class="ph-fill ph-pen-nib text-3xl text-blue-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Contenido Corporativo</h4>
                        <p class="text-gray-400 text-sm">Crea textos, informes y materiales de comunicación adaptados al tono y estilo de tu empresa en cuestión de segundos.</p>
                    </div>

                    <div class="glass-card p-8 rounded-2xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <i class="ph-fill ph-users-three text-3xl text-blue-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Segmentación IA</h4>
                        <p class="text-gray-400 text-sm">Detecta patrones, comportamientos y oportunidades con modelos que convierten decisiones estratégicas.</p>
                    </div>

                    <div class="glass-card p-8 rounded-2xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <i class="ph-fill ph-chart-bar text-3xl text-blue-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Informes Ejecutivos</h4>
                        <p class="text-gray-400 text-sm">Genera informes claros y visuales directamente a partir de tus métricas y sistemas de gestión.</p>
                    </div>

                    <div class="glass-card p-8 rounded-2xl group" style="--hover-color: rgba(59, 130, 246, 0.5); --hover-shadow: rgba(59, 130, 246, 0.2);">
                        <i class="ph-fill ph-microphone text-3xl text-blue-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Reportes de Reuniones</h4>
                        <p class="text-gray-400 text-sm">Transcribe, resume y extrae conclusiones clave de reuniones y sesiones de trabajo automáticamente.</p>
                    </div>
                </div>
            </div>

            <!-- BLOQUE 2: AUTOMATIZACIONES -->
            <div class="mb-24 reveal section-gradient-purple rounded-3xl p-6 md:p-10 border border-purple-500/10 hover:border-purple-500/20 transition-colors">
                <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4 border-b border-purple-500/20 pb-6">
                    <div>
                        <span class="text-purple-400 font-bold tracking-wider uppercase text-sm mb-2 block">Área 02</span>
                        <h3 class="text-3xl md:text-4xl font-bold text-white">Automatizaciones</h3>
                    </div>
                    <p class="text-gray-400 max-w-md text-sm md:text-right">Optimiza tus operaciones con eficiencia.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-megaphone text-3xl text-purple-400 mb-3 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Marketing y Ventas</h4>
                        <p class="text-gray-400 text-sm">Automatiza la captación, el seguimiento y la conversión de clientes para impulsar tus resultados comerciales.</p>
                    </div>

                    <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-headset text-3xl text-purple-400 mb-3 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Atención al Cliente</h4>
                        <p class="text-gray-400 text-sm">Ofrece asistencia inmediata y personalizada con automatizaciones y bots que mejoran la satisfacción.</p>
                    </div>

                    <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-files text-3xl text-purple-400 mb-3 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Procesos Administrativos</h4>
                        <p class="text-gray-400 text-sm">Optimiza tareas repetitivas como facturación, aprobaciones o control documental con flujos digitales precisos.</p>
                    </div>

                    <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-users text-3xl text-purple-400 mb-3 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Recursos Humanos</h4>
                        <p class="text-gray-400 text-sm">Simplifica la gestión de personal, selección y evaluaciones mediante procesos automatizados y centralizados.</p>
                    </div>

                    <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-kanban text-3xl text-purple-400 mb-3 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Gestión de Proyectos</h4>
                        <p class="text-gray-400 text-sm">Coordina equipos, tareas y entregas con sistemas automatizados que aseguran control y eficiencia operativa.</p>
                    </div>

                    <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(139, 92, 246, 0.5); --hover-shadow: rgba(139, 92, 246, 0.2);">
                        <i class="ph-fill ph-file-text text-3xl text-purple-400 mb-3 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Reportes e Informes</h4>
                        <p class="text-gray-400 text-sm">Automatiza la recopilación y análisis de datos para disponer siempre de indicadores actualizados y fiables.</p>
                    </div>
                </div>
            </div>

            <!-- BLOQUE 3: TRANSFORMACIÓN DIGITAL -->
            <div class="mb-24 reveal section-gradient-cyan rounded-3xl p-6 md:p-10 border border-cyan-500/10 hover:border-cyan-500/20 transition-colors">
                <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4 border-b border-cyan-500/20 pb-6">
                    <div>
                        <span class="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-2 block">Área 03</span>
                        <h3 class="text-3xl md:text-4xl font-bold text-white">Transformación Digital</h3>
                    </div>
                    <p class="text-gray-400 max-w-md text-sm md:text-right">Adapta todo tu negocio a la era digital.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="glass-card p-8 rounded-2xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5); --hover-shadow: rgba(6, 182, 212, 0.2);">
                        <i class="ph-fill ph-browser text-4xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Landing Pages</h4>
                        <p class="text-gray-400 text-sm">Páginas enfocadas en conversión que comunican valor y generan contactos cualificados para tu negocio.</p>
                    </div>
                    <div class="glass-card p-8 rounded-2xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5); --hover-shadow: rgba(6, 182, 212, 0.2);">
                        <i class="ph-fill ph-funnel text-4xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Embudos de Venta</h4>
                        <p class="text-gray-400 text-sm">Diseños estratégicos que guían al cliente a través del proceso de compra con decisiones basadas en datos.</p>
                    </div>
                    <div class="glass-card p-8 rounded-2xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5); --hover-shadow: rgba(6, 182, 212, 0.2);">
                        <i class="ph-fill ph-arrows-left-right text-4xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Digitalización Procesos</h4>
                        <p class="text-gray-400 text-sm">Transforma los flujos internos en procesos digitales más rápidos, trazables y escalables.</p>
                    </div>
                    <div class="glass-card p-8 rounded-2xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5); --hover-shadow: rgba(6, 182, 212, 0.2);">
                        <i class="ph-fill ph-database text-4xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Análisis de Datos</h4>
                        <p class="text-gray-400 text-sm">Centraliza la información de tu empresa para tomar decisiones con una visión global y en tiempo real.</p>
                    </div>
                     <div class="glass-card p-8 rounded-2xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5); --hover-shadow: rgba(6, 182, 212, 0.2);">
                        <i class="ph-fill ph-git-branch text-4xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Optimización Workflows</h4>
                        <p class="text-gray-400 text-sm">Rediseña los flujos de trabajo para eliminar tareas ineficientes y mejorar la productividad general.</p>
                    </div>
                     <div class="glass-card p-8 rounded-2xl group border-t-4 border-t-cyan-500" style="--hover-color: rgba(6, 182, 212, 0.5); --hover-shadow: rgba(6, 182, 212, 0.2);">
                        <i class="ph-fill ph-lightbulb text-4xl text-cyan-400 mb-4 block"></i>
                        <h4 class="text-xl font-bold text-white mb-2">Decisiones Inteligentes</h4>
                        <p class="text-gray-400 text-sm">Aplica inteligencia artificial para anticipar escenarios y respaldar decisiones estratégicas clave.</p>
                    </div>
                </div>
            </div>

            <!-- BLOQUE 4: MARKETING DIGITAL -->
            <div class="mb-10 reveal section-gradient-pink rounded-3xl p-6 md:p-10 border border-pink-500/10 hover:border-pink-500/20 transition-colors">
                <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4 border-b border-pink-500/20 pb-6">
                    <div>
                        <span class="text-pink-400 font-bold tracking-wider uppercase text-sm mb-2 block">Área 04</span>
                        <h3 class="text-3xl md:text-4xl font-bold text-white">Marketing Digital</h3>
                    </div>
                    <p class="text-gray-400 max-w-md text-sm md:text-right">Impulsa tu marca con estrategias inteligentes.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(236, 72, 153, 0.5); --hover-shadow: rgba(236, 72, 153, 0.2);">
                        <i class="ph-fill ph-globe text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Estrategia Digital 360º</h4>
                        <p class="text-gray-400 text-sm">Integra todos los canales digitales de tu empresa en una estrategia coherente y orientada a resultados.</p>
                    </div>
                    <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(236, 72, 153, 0.5); --hover-shadow: rgba(236, 72, 153, 0.2);">
                        <i class="ph-fill ph-broadcast text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Planes de Comunicación</h4>
                        <p class="text-gray-400 text-sm">Diseña mensajes potentes y consistentes que refuercen la identidad corporativa y la relación con el cliente.</p>
                    </div>
                    <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(236, 72, 153, 0.5); --hover-shadow: rgba(236, 72, 153, 0.2);">
                        <i class="ph-fill ph-magnifying-glass text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Redacción SEO con IA</h4>
                        <p class="text-gray-400 text-sm">Genera contenidos optimizados que posicionan tu marca y aumentan la visibilidad en buscadores.</p>
                    </div>
                     <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(236, 72, 153, 0.5); --hover-shadow: rgba(236, 72, 153, 0.2);">
                        <i class="ph-fill ph-target text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Segmentación Audiencias</h4>
                        <p class="text-gray-400 text-sm">Identifica y alcanza con precisión a los públicos más relevantes mediante análisis avanzado de datos.</p>
                    </div>
                     <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(236, 72, 153, 0.5); --hover-shadow: rgba(236, 72, 153, 0.2);">
                        <i class="ph-fill ph-rocket text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Campañas Automatizadas</h4>
                        <p class="text-gray-400 text-sm">Ejecuta campañas inteligentes que se adaptan automáticamente al comportamiento del cliente.</p>
                    </div>
                     <div class="glass-card p-6 rounded-2xl group" style="--hover-color: rgba(236, 72, 153, 0.5); --hover-shadow: rgba(236, 72, 153, 0.2);">
                        <i class="ph-fill ph-envelope text-3xl text-pink-400 mb-4 block"></i>
                        <h4 class="text-lg font-bold text-white mb-2">Email Marketing</h4>
                        <p class="text-gray-400 text-sm">Crea comunicaciones automatizadas, personalizadas y medibles que impulsan la conversión y fidelización.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- SECCIÓN SOBRE MÍ & PROYECTOS 2025 -->
    <section id="sobre-mi" class="relative z-10 py-24 bg-dark-900 border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 reveal">
                <div class="order-2 md:order-1 space-y-6">
                    <span class="text-cyan-400 font-bold tracking-wider uppercase text-sm">Trayectoria</span>
                    <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Sobre Mí</h2>
                    <h3 class="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Hola, soy Sergio Guillén</h3>
                    <p class="text-gray-300 leading-relaxed text-lg mb-4">
                        Graduado y Formado en <strong class="text-white">Inteligencia Artificial</strong>, <strong class="text-white">Automatización de Procesos</strong>, <strong class="text-white">Marketing y Publicidad</strong>, y <strong class="text-white">Transformación Digital</strong>.
                    </p>
                    <p class="text-gray-300 leading-relaxed text-lg mb-4">
                        Mi objetivo es hacer a las empresas más óptimas, eficientes y competitivas.
                    </p>
                    <p class="text-gray-400 leading-relaxed mb-4">
                        Esto lo consigo mejorando distintas áreas de negocio, ya sea liberando tiempo, desarrollando sistemas para una mejor toma de decisiones, mejorando la atención al cliente, automatizando y mejorando áreas de marketing, digitalizando procesos, formando equipos...
                    </p>
                    <p class="text-gray-400 leading-relaxed">
                        Todos los servicios y soluciones son personalizados para cada cliente y proyecto, asegurando compromiso y resultados.
                    </p>
                    <div class="pt-4">
                        <a href="#contacto" class="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 group">
                            Hablemos sobre tu proyecto <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
                <!-- Foto 'Yo.PNG' -->
                <div class="order-1 md:order-2 flex justify-center">
                    <div class="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                         <img src="Yo.PNG" 
                              onerror="this.src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop'"
                              alt="Sergio Guillén" 
                              class="w-full h-full object-cover">
                    </div>
                </div>
            </div>

            <!-- Proyectos 2025 -->
            <div class="space-y-12 reveal">
                <div class="text-center max-w-3xl mx-auto space-y-4">
                    <h3 class="text-3xl font-bold text-white">Proyectos Destacados <span class="text-cyan-400">2025</span></h3>
                    <p class="text-gray-400">
                        Algunos proyectos realizados en el último año. Siempre evolucionando y buscando nuevas metas y mejoras de empresas. Se puede consultar más información poniéndote en contacto conmigo.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <!-- Proyecto 1: RRSS -->
                    <div class="glass-card p-8 rounded-2xl group border-t-2 border-t-purple-500">
                        <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                            <i class="ph-fill ph-share-network text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">RRSS con IA</h4>
                        <p class="text-gray-300 text-sm mb-4">
                            He desarrollado 3 sistemas distintos (para 3 empresas) de creación de contenido y automatización de redes sociales el último año.
                        </p>
                        <ul class="text-xs text-gray-500 space-y-2 border-t border-white/5 pt-4 mt-auto">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check text-green-400"></i> 80% menos tiempo invertido</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check text-green-400"></i> +50% consistencia en calendario</li>
                        </ul>
                    </div>

                    <!-- Proyecto 2: Chatbots -->
                    <div class="glass-card p-8 rounded-2xl group border-t-2 border-t-blue-500">
                        <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                            <i class="ph-fill ph-chat-centered-text text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">Chatbots y Asistentes</h4>
                        <p class="text-gray-300 text-sm mb-4">
                            Más de 15 Chatbots desarrollados para diferentes proyectos. Integración total en múltiples plataformas.
                        </p>
                         <ul class="text-xs text-gray-500 space-y-2 border-t border-white/5 pt-4 mt-auto">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check text-blue-400"></i> Web, Whatsapp, Telegram</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-check text-blue-400"></i> Soporte 24/7 automático</li>
                        </ul>
                    </div>

                    <!-- Proyecto 3: Email Marketing -->
                    <div class="glass-card p-8 rounded-2xl group border-t-2 border-t-pink-500">
                        <div class="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 text-pink-400">
                            <i class="ph-fill ph-envelope-simple-open text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">Email Marketing IA</h4>
                        <p class="text-gray-300 text-sm mb-4">
                            Sistema robusto que automatiza e hiperpersonaliza el canal de ventas y todo el email marketing del cliente.
                        </p>
                        <ul class="text-xs text-gray-500 space-y-2 border-t border-white/5 pt-4 mt-auto">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-trend-up text-pink-400"></i> +36% Tasa de Apertura</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-trend-up text-pink-400"></i> +11% Tasa de Conversión</li>
                        </ul>
                    </div>

                    <!-- Proyecto 4: IA Privada -->
                    <div class="glass-card p-8 rounded-2xl group border-t-2 border-t-green-500 lg:col-span-1">
                        <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 text-green-400">
                            <i class="ph-fill ph-shield-check text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">IA Privada y Local</h4>
                        <p class="text-gray-300 text-sm mb-4">
                            IA empresarial con modelos Open Source (Ollama), Entrenamiento con ML y Asistentes Internos.
                        </p>
                        <ul class="text-xs text-gray-500 space-y-2 border-t border-white/5 pt-4 mt-auto">
                            <li class="flex items-center gap-2"><i class="ph-fill ph-lock-key text-green-400"></i> Privacidad total de datos</li>
                            <li class="flex items-center gap-2"><i class="ph-fill ph-cpu text-green-400"></i> Ejecución en Local</li>
                        </ul>
                    </div>

                    <!-- Proyecto 5: Automatizaciones -->
                    <div class="glass-card p-8 rounded-2xl group border-t-2 border-t-orange-500 lg:col-span-2">
                        <div class="flex flex-col md:flex-row gap-6 items-start">
                            <div class="w-12 h-12 bg-orange-500/10 rounded-lg flex-shrink-0 flex items-center justify-center text-orange-400">
                                <i class="ph-fill ph-gear text-2xl"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white mb-3">Automatizaciones de Procesos</h4>
                                <p class="text-gray-300 text-sm mb-4">
                                    He programado más de 20 automatizaciones, para múltiples proyectos, que siguen funcionando ininterrumpidamente. Optimizando flujos críticos de negocio.
                                </p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/10">Tratamiento de Leads</span>
                                    <span class="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/10">Manejo de Datos</span>
                                    <span class="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/10">Comunicación Interna</span>
                                    <span class="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/10">RRHH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- SECCIÓN FAQ -->
    <section id="faq" class="relative z-10 py-24 bg-dark-900 border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal">
                <h2 class="text-3xl md:text-5xl font-bold text-white">Preguntas <span class="text-cyan-400">Frecuentes</span></h2>
                <p class="text-gray-400">Todo lo que necesitas saber antes de empezar.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-6 reveal">
                <!-- FAQ 1 -->
                <div class="glass-card p-8 rounded-2xl">
                    <h4 class="text-xl font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1"></i> ¿En cuánto tiempo se ven resultados?</h4>
                    <p class="text-gray-400 leading-relaxed text-sm">¡Los resultados son notables desde la implementación de las soluciones! El ROI dependerá de las dimensiones de la solución y de cómo actúe en el negocio, pero la media suelen ser 4-6 meses.</p>
                </div>
                <!-- FAQ 2 -->
                <div class="glass-card p-8 rounded-2xl">
                    <h4 class="text-xl font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1"></i> ¿Necesito conocimientos técnicos?</h4>
                    <p class="text-gray-400 leading-relaxed text-sm">Para nada. Las soluciones están diseñadas para optimizar el negocio por sí mismas. Cualquier aspecto a considerar tras la implementación se ofrecerá en un "know-how" junto con el servicio.</p>
                </div>
                <!-- FAQ 3 -->
                <div class="glass-card p-8 rounded-2xl">
                    <h4 class="text-xl font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1"></i> ¿Cuotas mensuales o pago único?</h4>
                    <p class="text-gray-400 leading-relaxed text-sm">Por lo general suelo trabajar por proyectos, por lo que se suele tratar de o bien pagos únicos o bien 2-4 micropagos repartidos durante el proceso (suele aplicar para proyectos más largos).</p>
                </div>
                <!-- FAQ 4 -->
                <div class="glass-card p-8 rounded-2xl">
                    <h4 class="text-xl font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1"></i> ¿Con qué sectores trabajas?</h4>
                    <p class="text-gray-400 leading-relaxed text-sm">Trabajo con todo tipo de empresas o proyectos. Se hace una auditoría inicial de procesos y de negocio y se adapta el servicio a las necesidades concretas.</p>
                </div>
                <!-- FAQ 5 -->
                <div class="glass-card p-8 rounded-2xl">
                    <h4 class="text-xl font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1"></i> ¿Puedo empezar con algo pequeño?</h4>
                    <p class="text-gray-400 leading-relaxed text-sm">Por supuesto, así como empezar por soluciones más "pequeñas" o concretas, comprobar resultados, y mantener el frente abierto a más colaboraciones para incidir más en el éxito de tu empresa.</p>
                </div>
                <!-- FAQ 6 -->
                <div class="glass-card p-8 rounded-2xl">
                    <h4 class="text-xl font-bold text-white mb-3 flex items-start gap-3"><i class="ph-bold ph-question text-cyan-400 mt-1"></i> ¿Se integra con mis herramientas actuales?</h4>
                    <p class="text-gray-400 leading-relaxed text-sm">Esto es prioridad en todos mis servicios, integrar las soluciones y nuevos procedimientos en el stack de la empresa. Por tanto, sí.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECCIÓN CONTACTO (CTA FINAL) -->
    <section id="contacto" class="relative z-10 py-24 border-t border-white/5 bg-gradient-to-b from-dark-900 to-blue-900/10">
        <div class="max-w-3xl mx-auto px-6">
            <div class="glass-panel p-8 md:p-12 rounded-3xl border border-cyan-500/20 shadow-2xl relative overflow-hidden text-center transform hover:scale-[1.01] transition-transform duration-500">
                
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
                
                <div class="relative z-10 space-y-6">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">Sergio Guillén Pampliega</h2>
                        <p class="text-lg md:text-xl text-cyan-400 font-medium">Experto en IA y Automatización</p>
                        <p class="text-gray-400 text-sm uppercase tracking-wider mt-1">Agente de Transformación Digital</p>
                        <p class="text-gray-500 text-sm mt-1 flex items-center justify-center gap-1"><i class="ph-fill ph-map-pin"></i>Murcia, España</p>
                    </div>

                    <div class="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto my-6"></div>

                    <div class="space-y-4">
                         <a href="tel:+34649368800" class="block text-xl text-white hover:text-cyan-300 transition-colors font-medium">
                            <i class="ph-fill ph-phone text-cyan-500 mr-2"></i> 649 36 88 00
                         </a>
                         <a href="mailto:sergio@sergiogp.com" class="block text-xl text-white hover:text-cyan-300 transition-colors font-medium">
                            <i class="ph-fill ph-envelope text-cyan-500 mr-2"></i> sergio@sergiogp.com
                         </a>
                    </div>

                    <div class="pt-6">
                        <a href="https://www.linkedin.com/in/sergioguillenpampliega" target="_blank" class="inline-flex items-center gap-2 px-8 py-3 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-full font-bold transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-1 hover:shadow-blue-900/40">
                            <i class="ph-bold ph-linkedin-logo text-xl"></i>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- FOOTER -->
    <footer class="py-10 text-center text-gray-500 text-sm border-t border-white/5 bg-dark-900 relative z-10">
        <div class="flex justify-center gap-6 mb-6">
            <a href="https://www.linkedin.com/in/sergioguillenpampliega" class="text-gray-400 hover:text-white transition-colors text-xl p-2 hover:bg-white/5 rounded-full"><i class="ph-fill ph-linkedin-logo"></i></a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl p-2 hover:bg-white/5 rounded-full"><i class="ph-fill ph-twitter-logo"></i></a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-xl p-2 hover:bg-white/5 rounded-full"><i class="ph-fill ph-instagram-logo"></i></a>
        </div>
        <p>&copy; 2024 Sergio Guillén Pampliega. Todos los derechos reservados.</p>
    </footer>

    <script>
        // Animación de aparición al hacer scroll
        window.addEventListener('scroll', reveal);
        function reveal(){
            var reveals = document.querySelectorAll('.reveal');
            for(var i = 0; i < reveals.length; i++){
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;
                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active');
                }
            }
        }
        // Ejecutar una vez al cargar
        reveal();

        // Control del Menú Móvil
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        function toggleMenu() {
            mobileMenu.classList.toggle('open');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
    </script>
</body>
</html>
