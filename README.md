<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sergio Guillén Pampliega | Agente de Transformación Digital</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        dark: { 900: '#0A0A0A', 800: '#121212' },
                        accent: {
                            cyan: '#00F0FF',
                            blue: '#2D7FF9',
                            purple: '#9D4EDD'
                        }
                    },
                    backgroundImage: {
                        'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
                    },
                    animation: {
                        'float': 'float 8s ease-in-out infinite',
                        'fade-in': 'fadeIn 1s ease-out forwards',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
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
        body { background-color: #050505; color: #E5E7EB; overflow-x: hidden; }
        
        /* Glassmorphism para menú y tarjetas */
        .glass-nav {
            background: rgba(10, 10, 10, 0.85);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glass-card {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }
        .glass-card:hover {
            border-color: rgba(255, 255, 255, 0.15);
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.05);
        }
        
        /* Texto gradiente */
        .text-gradient {
            background: linear-gradient(to right, #60A5FA, #00F0FF, #9D4EDD);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Scroll Reveal */
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease; }
        .reveal.active { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body class="antialiased relative font-sans">

    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        <div class="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent-blue/20 rounded-full blur-[120px] animate-float"></div>
        <div class="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] bg-accent-purple/10 rounded-full blur-[100px] animate-float" style="animation-delay: 2s;"></div>
    </div>

    <nav class="fixed top-0 w-full z-50 glass-nav h-20 flex items-center">
        <div class="w-full max-w-[95%] xl:max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
            
            <a href="#" class="font-display font-bold text-2xl text-white tracking-tight">
                Sergio<span class="text-accent-cyan">.</span>
            </a>

            <div class="hidden md:flex items-center gap-8">
                <a href="#inicio" class="text-sm font-medium text-gray-300 hover:text-white hover:text-accent-cyan transition-colors">Inicio</a>
                <a href="#servicios" class="text-sm font-medium text-gray-300 hover:text-white hover:text-accent-cyan transition-colors">Servicios</a>
                <a href="#sobre-mi" class="text-sm font-medium text-gray-300 hover:text-white hover:text-accent-cyan transition-colors">Sobre Mí</a>
                <a href="#contacto" class="px-6 py-2.5 bg-white text-dark-900 rounded-full font-bold text-sm hover:bg-accent-cyan transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    Contactar
                </a>
            </div>

            <button id="menu-btn" class="md:hidden text-white text-2xl"><i class="ph-bold ph-list"></i></button>
        </div>

        <div id="mobile-menu" class="absolute top-20 left-0 w-full bg-dark-900 border-b border-white/10 p-6 flex-col gap-4 hidden md:hidden shadow-2xl">
            <a href="#inicio" class="block py-2 text-lg text-white" onclick="toggleMenu()">Inicio</a>
            <a href="#servicios" class="block py-2 text-lg text-white" onclick="toggleMenu()">Servicios</a>
            <a href="#contacto" class="block py-2 mt-2 text-accent-cyan font-bold" onclick="toggleMenu()">Contactar Ahora</a>
        </div>
    </nav>

    <section id="inicio" class="relative z-10 pt-32 pb-20 md:pt-40 lg:pt-44">
        <div class="w-full max-w-[95%] 2xl:max-w-[1800px] mx-auto px-4 md:px-6">
            
            <div class="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">
                
                <div class="space-y-8 animate-fade-in mt-4 lg:mt-0">
                    
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-bold uppercase tracking-widest">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                        </span>
                        Agente de Transformación Digital
                    </div>

                    <h1 class="text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-display font-bold leading-[0.9] tracking-tight text-white">
                        Sergio <br class="hidden lg:block">
                        <span class="text-gradient">Guillén.</span>
                    </h1>

                    <div class="max-w-3xl border-l-2 border-accent-blue/30 pl-6 py-2">
                        <h2 class="text-2xl md:text-3xl text-white font-medium mb-3">
                            Experto en <span class="text-accent-cyan">IA</span> y <span class="text-accent-purple">Automatización</span>
                        </h2>
                        <p class="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                            Ayudo a empresas a dejar de perder tiempo y dinero optimizando procesos, integrando inteligencia artificial y escalando resultados sin aumentar personal.
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-5 pt-4">
                        <a href="#contacto" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan text-white rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(45,127,249,0.4)] transition-all transform hover:-translate-y-1">
                            Consultoría Gratuita <i class="ph-bold ph-arrow-right"></i>
                        </a>
                        <a href="#servicios" class="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/10 text-white rounded-xl font-medium text-lg hover:bg-white/5 transition-all">
                            Ver Soluciones
                        </a>
                    </div>

                    <div class="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 max-w-lg">
                        <div>
                            <p class="text-3xl font-bold text-white font-display">+300%</p>
                            <p class="text-xs text-gray-500 uppercase tracking-wide">ROI Clientes</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold text-white font-display">3 Años</p>
                            <p class="text-xs text-gray-500 uppercase tracking-wide">Experiencia</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold text-white font-display">100%</p>
                            <p class="text-xs text-gray-500 uppercase tracking-wide">A medida</p>
                        </div>
                    </div>
                </div>

                <div class="relative lg:h-[80vh] w-full flex justify-center lg:justify-end animate-fade-in" style="animation-delay: 0.2s;">
                    <div class="absolute inset-0 bg-gradient-to-tr from-accent-cyan/10 to-accent-purple/10 blur-[60px] rounded-full transform translate-x-20"></div>
                    
                    <div class="relative w-full max-w-xl aspect-[3/4] lg:h-full lg:w-auto lg:aspect-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                        <img src="https://res.cloudinary.com/dg3peytgm/image/upload/IMG_7667_snrmuc.jpg" 
                             alt="Sergio Guillén Ponencia" 
                             class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                        
                        <div class="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-xl border border-white/10 flex items-center gap-4 backdrop-blur-md">
                            <div class="w-12 h-12 rounded-lg bg-accent-blue flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
                                <i class="ph-fill ph-brain text-2xl"></i>
                            </div>
                            <div>
                                <p class="text-xs text-accent-cyan font-bold uppercase mb-0.5">Impacto Real</p>
                                <p class="text-white font-bold leading-tight">Transformación de Negocios con IA</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <div class="w-full border-y border-white/5 bg-white/[0.02] py-8">
        <div class="w-full max-w-[95%] mx-auto flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <i class="ph-fill ph-microsoft-logo text-3xl md:text-4xl text-white"></i>
            <i class="ph-fill ph-google-logo text-3xl md:text-4xl text-white"></i>
            <i class="ph-fill ph-openai-logo text-3xl md:text-4xl text-white"></i> <i class="ph-fill ph-robot text-3xl md:text-4xl text-white"></i>
            <i class="ph-fill ph-code text-3xl md:text-4xl text-white"></i>
        </div>
    </div>

    <section id="servicios" class="relative z-10 py-32">
        <div class="w-full max-w-[95%] 2xl:max-w-[1800px] mx-auto px-6">
            <div class="mb-20 reveal">
                <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                    Soluciones <span class="text-accent-cyan">Integrales</span>
                </h2>
                <div class="h-1 w-20 bg-accent-purple rounded-full"></div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="glass-card p-8 rounded-3xl group">
                    <i class="ph-fill ph-chat-circle-text text-4xl text-accent-blue mb-6"></i>
                    <h3 class="text-2xl font-bold text-white mb-3">Chatbots IA</h3>
                    <p class="text-gray-400">Atención 24/7 y cualificación de leads automática en WhatsApp y Web.</p>
                </div>
                <div class="glass-card p-8 rounded-3xl group">
                    <i class="ph-fill ph-gear text-4xl text-accent-purple mb-6"></i>
                    <h3 class="text-2xl font-bold text-white mb-3">Automatización (RPA)</h3>
                    <p class="text-gray-400">Conecta tus herramientas (CRM, Email, Excel) para que trabajen solas.</p>
                </div>
                <div class="glass-card p-8 rounded-3xl group">
                    <i class="ph-fill ph-rocket text-4xl text-accent-cyan mb-6"></i>
                    <h3 class="text-2xl font-bold text-white mb-3">Growth & Embudos</h3>
                    <p class="text-gray-400">Estrategias digitales diseñadas para convertir visitas en clientes.</p>
                </div>
                <div class="glass-card p-8 rounded-3xl group">
                    <i class="ph-fill ph-database text-4xl text-pink-500 mb-6"></i>
                    <h3 class="text-2xl font-bold text-white mb-3">Gestión de Datos</h3>
                    <p class="text-gray-400">Dashboards y Business Intelligence para tomar decisiones reales.</p>
                </div>
                 <div class="glass-card p-8 rounded-3xl group">
                    <i class="ph-fill ph-envelope-simple-open text-4xl text-yellow-500 mb-6"></i>
                    <h3 class="text-2xl font-bold text-white mb-3">Email Marketing</h3>
                    <p class="text-gray-400">Secuencias automatizadas y personalizadas con IA.</p>
                </div>
                 <div class="glass-card p-8 rounded-3xl group">
                    <i class="ph-fill ph-users-three text-4xl text-green-500 mb-6"></i>
                    <h3 class="text-2xl font-bold text-white mb-3">Consultoría 1 a 1</h3>
                    <p class="text-gray-400">Formación y acompañamiento para equipos y directivos.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contacto" class="py-32 relative overflow-hidden">
        <div class="absolute inset-0 bg-accent-blue/5"></div>
        <div class="w-full max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 class="text-5xl md:text-7xl font-display font-bold text-white mb-8">Hablemos de tu Proyecto</h2>
            <p class="text-xl text-gray-400 mb-12">¿Listo para escalar tu negocio con tecnología?</p>
            <div class="flex flex-col md:flex-row justify-center gap-6">
                <a href="mailto:sergio@sergiogp.com" class="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-gray-200 transition-colors">Enviar Email</a>
                <a href="https://www.linkedin.com/in/sergioguillenpampliega" target="_blank" class="px-10 py-5 border border-white/20 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-colors">LinkedIn</a>
            </div>
        </div>
    </section>

    <footer class="py-8 bg-dark-900 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; 2026 Sergio Guillén Pampliega.</p>
    </footer>

    <script>
        // Scroll Reveal
        window.addEventListener('scroll', function(){
            var reveals = document.querySelectorAll('.reveal');
            for(var i=0; i<reveals.length; i++){
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                if(elementTop < windowHeight - 100) reveals[i].classList.add('active');
            }
        });

        // Menú Móvil
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        }
        menuBtn.addEventListener('click', toggleMenu);
    </script>
</body>
</html>
