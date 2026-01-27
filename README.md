<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sergio Guillén Pampliega | Agente de Transformación Digital</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                        display: ['Syne', 'sans-serif'], // Fuente nueva más ancha y moderna
                    },
                    colors: {
                        dark: { 
                            950: '#030303', // Negro casi puro
                            900: '#0A0A0A', 
                            800: '#141414' 
                        },
                        brand: {
                            main: '#3B82F6', // Azul eléctrico
                            accent: '#00F0FF', // Cyan Cyberpunk
                        }
                    },
                    backgroundImage: {
                        'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
                    }
                }
            }
        }
    </script>
    <style>
        body { 
            background-color: #030303; 
            color: #ffffff; 
            overflow-x: hidden; 
        }
        
        /* Efecto de fondo de rejilla sutil */
        .bg-grid {
            background-size: 60px 60px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        }

        /* Glassmorphism agresivo */
        .glass-panel {
            background: rgba(10, 10, 10, 0.6);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Tipografía Outline */
        .text-outline {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
            color: transparent;
        }

        /* Animación de entrada */
        .slide-in-left { animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; transform: translateX(-50px); }
        .slide-in-right { animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; transform: translateX(50px); }
        .fade-up { animation: fadeUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }

        @keyframes slideInLeft { to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body class="relative">

    <div class="fixed inset-0 z-0 pointer-events-none bg-grid h-screen w-full"></div>
    <div class="fixed top-0 right-0 w-[50vw] h-[50vh] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

    <nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-dark-950/80 backdrop-blur-md h-20 flex items-center">
        <div class="w-full px-8 md:px-12 flex justify-between items-center">
            <a href="#" class="text-2xl font-display font-bold tracking-tighter">SERGIO<span class="text-brand-main">.GP</span></a>
            
            <div class="hidden md:flex items-center gap-10">
                <a href="#servicios" class="text-sm font-medium hover:text-brand-accent transition-colors">SERVICIOS</a>
                <a href="#proyectos" class="text-sm font-medium hover:text-brand-accent transition-colors">PROYECTOS</a>
                <a href="#contacto" class="px-6 py-2 bg-white text-black font-bold text-sm hover:bg-brand-accent transition-colors">
                    CONTACTAR
                </a>
            </div>
        </div>
    </nav>

    <header id="inicio" class="relative z-10 w-full min-h-screen pt-20 flex flex-col lg:flex-row overflow-hidden">
        
        <div class="w-full lg:w-[60%] px-8 md:px-12 pt-16 md:pt-24 lg:pt-32 pb-20 flex flex-col justify-start z-20">
            
            <div class="fade-up" style="animation-delay: 0.1s;">
                <div class="inline-flex items-center gap-2 border border-brand-main/30 bg-brand-main/10 px-3 py-1 rounded text-brand-main text-xs font-bold tracking-widest mb-6">
                    <span class="w-2 h-2 rounded-full bg-brand-main animate-pulse"></span>
                    DISPONIBLE 2026
                </div>
            </div>

            <h1 class="font-display font-bold text-6xl sm:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter text-white mb-6 slide-in-left" style="animation-delay: 0.2s;">
                TRANSFORMA <br>
                <span class="text-outline">TU NEGOCIO</span> <br>
                CON <span class="text-brand-main">IA.</span>
            </h1>

            <p class="text-lg md:text-xl text-gray-400 max-w-xl font-light leading-relaxed mb-10 fade-up" style="animation-delay: 0.4s;">
                Soy Sergio Guillén. Ayudo a empresas a dejar de perder tiempo automatizando procesos complejos y creando sistemas de Inteligencia Artificial que generan ROI real.
            </p>

            <div class="flex flex-wrap gap-4 fade-up" style="animation-delay: 0.5s;">
                <a href="#contacto" class="px-8 py-4 bg-brand-main hover:bg-blue-600 text-white font-bold text-lg transition-all flex items-center gap-2">
                    Consultoría Gratuita <i class="ph-bold ph-arrow-right"></i>
                </a>
                <a href="#servicios" class="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-medium text-lg transition-all">
                    Ver Soluciones
                </a>
            </div>

            <div class="mt-auto pt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 max-w-2xl fade-up" style="animation-delay: 0.6s;">
                <div>
                    <span class="block text-3xl font-display font-bold text-white">+3 Años</span>
                    <span class="text-xs text-gray-500 uppercase tracking-widest">Experiencia</span>
                </div>
                <div>
                    <span class="block text-3xl font-display font-bold text-white">+300%</span>
                    <span class="text-xs text-gray-500 uppercase tracking-widest">ROI Medio</span>
                </div>
                <div class="hidden md:block">
                    <span class="block text-3xl font-display font-bold text-white">100%</span>
                    <span class="text-xs text-gray-500 uppercase tracking-widest">Personalizado</span>
                </div>
            </div>
        </div>

        <div class="w-full lg:w-[40%] relative lg:fixed lg:right-0 lg:top-0 lg:h-full z-10 lg:border-l border-white/5 slide-in-right h-[500px] lg:h-auto">
            <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-dark-950 via-transparent to-transparent z-10"></div>
            
            <img src="https://res.cloudinary.com/dg3peytgm/image/upload/IMG_7667_snrmuc.jpg" 
                 alt="Sergio Guillén" 
                 class="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700">
            
            <div class="absolute bottom-10 left-10 z-20 glass-panel p-6 max-w-xs slide-in-right" style="animation-delay: 0.8s;">
                <i class="ph-fill ph-seal-check text-4xl text-brand-main mb-3"></i>
                <p class="text-white font-bold text-lg leading-tight">Experto Verificado en IA y Automatización.</p>
            </div>
        </div>
    </header>

    <section id="servicios" class="relative z-20 bg-dark-900 py-32 border-t border-white/10">
        <div class="w-full px-8 md:px-12">
            <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                <h2 class="text-5xl md:text-7xl font-display font-bold text-white">MIS <span class="text-brand-main">SERVICIOS</span></h2>
                <p class="text-gray-400 max-w-md text-right pb-2">Soluciones técnicas diseñadas para escalar.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 border-t border-l border-white/10 bg-white/10">
                
                <div class="bg-dark-950 p-10 lg:p-14 border-r border-b border-white/10 hover:bg-dark-900 transition-colors group h-full">
                    <i class="ph-light ph-robot text-6xl text-brand-main mb-8 group-hover:scale-110 transition-transform block"></i>
                    <h3 class="text-3xl font-display font-bold text-white mb-4">Chatbots IA</h3>
                    <p class="text-gray-400 leading-relaxed mb-8">Atención al cliente automática 24/7 en WhatsApp y Web. Entrenados con tus datos.</p>
                    <ul class="space-y-2 text-sm text-gray-500">
                        <li class="flex items-center gap-2"><span class="w-1 h-1 bg-brand-main"></span> Respuestas Humanas</li>
                        <li class="flex items-center gap-2"><span class="w-1 h-1 bg-brand-main"></span> Integración CRM</li>
                    </ul>
                </div>

                <div class="bg-dark-950 p-10 lg:p-14 border-r border-b border-white/10 hover:bg-dark-900 transition-colors group h-full">
                    <i class="ph-light ph-circuitry text-6xl text-brand-accent mb-8 group-hover:scale-110 transition-transform block"></i>
                    <h3 class="text-3xl font-display font-bold text-white mb-4">Automatizaciones</h3>
                    <p class="text-gray-400 leading-relaxed mb-8">Conecto tus aplicaciones para eliminar tareas repetitivas. Recupera 20h/semana.</p>
                    <ul class="space-y-2 text-sm text-gray-500">
                        <li class="flex items-center gap-2"><span class="w-1 h-1 bg-brand-accent"></span> Make & Zapier</li>
                        <li class="flex items-center gap-2"><span class="w-1 h-1 bg-brand-accent"></span> Procesos sin error</li>
                    </ul>
                </div>

                <div class="bg-dark-950 p-10 lg:p-14 border-r border-b border-white/10 hover:bg-dark-900 transition-colors group h-full">
                    <i class="ph-light ph-trend-up text-6xl text-purple-500 mb-8 group-hover:scale-110 transition-transform block"></i>
                    <h3 class="text-3xl font-display font-bold text-white mb-4">Consultoría Growth</h3>
                    <p class="text-gray-400 leading-relaxed mb-8">Estrategia digital integral. Embudos de venta, email marketing y análisis de datos.</p>
                    <ul class="space-y-2 text-sm text-gray-500">
                        <li class="flex items-center gap-2"><span class="w-1 h-1 bg-purple-500"></span> Auditoría 360º</li>
                        <li class="flex items-center gap-2"><span class="w-1 h-1 bg-purple-500"></span> Plan de Acción</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="contacto" class="relative z-20 py-32 px-8 md:px-12 bg-brand-main text-white overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div>
                <h2 class="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter">EMPECEMOS.</h2>
                <p class="text-xl md:text-2xl font-light opacity-90">¿Listo para escalar tu negocio con tecnología?</p>
            </div>
            <div class="flex flex-col gap-4 w-full md:w-auto">
                <a href="mailto:sergio@sergiogp.com" class="px-12 py-6 bg-black text-white text-xl font-bold hover:scale-105 transition-transform text-center">
                    ENVIAR EMAIL
                </a>
                <a href="https://linkedin.com" class="px-12 py-6 bg-white text-black text-xl font-bold hover:scale-105 transition-transform text-center">
                    LINKEDIN
                </a>
            </div>
        </div>
    </section>

    <footer class="bg-dark-950 py-12 border-t border-white/10 text-center text-gray-600">
        <p class="text-sm font-medium">&copy; 2026 SERGIO GUILLÉN PAMPLIEGA.</p>
    </footer>

</body>
</html>
