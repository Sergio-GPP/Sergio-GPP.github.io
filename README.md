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
                        },
                        accent: {
                            cyan: '#00F0FF',
                            blue: '#2D7FF9',
                            purple: '#9D4EDD',
                        }
                    },
                    backgroundImage: {
                        'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
                    },
                    animation: {
                        'float': 'float 8s ease-in-out infinite',
                        'fade-in': 'fadeIn 0.8s ease-out forwards',
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
        body { 
            background-color: #050505; 
            color: #E5E7EB; 
            overflow-x: hidden; 
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }

        /* Glassmorphism */
        .glass-nav {
            background: rgba(5, 5, 5, 0.8);
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
            transform: translateY(-5px);
            border-color: rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.05);
        }

        /* Gradient Text */
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
            transition: all 0.8s ease;
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="antialiased relative font-sans">

    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        <div class="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[100px] animate-float"></div>
        <div class="absolute bottom-[20%] right-[-100px] w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] animate-float" style="animation-delay: 2s;"></div>
    </div>

    <nav class="fixed top-0 w-full z-50 glass-nav h-20 flex items-center">
        <div class="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 flex justify-between items-center">
            
            <a href="#" class="font-display font-bold text-2xl text-white tracking-tight flex items-center gap-1">
                Sergio<span class="text-accent-cyan">.</span>
            </a>

            <div class="hidden md:flex items-center gap-8">
                <a href="#inicio" class="text-sm font-medium text-gray-300 hover:text-white hover:text-accent-cyan transition-colors">Inicio</a>
                <a href="#servicios" class="text-sm font-medium text-gray-300 hover:text-white hover:text-accent-cyan transition-colors">Servicios</a>
                <a href="#sobre-mi" class="text-sm font-medium text-gray-300 hover:text-white hover:text-accent-cyan transition-colors">Sobre Mí</a>
                <a href="#contacto" class="px-6 py-2.5 bg-white text-dark-950 rounded-full font-bold text-sm hover:bg-accent-cyan transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Contactar
                </a>
            </div>

            <button id="menu-btn" class="md:hidden text-white text-2xl p-2"><i class="ph-bold ph-list"></i></button>
        </div>

        <div id="mobile-menu" class="absolute top-20 left-0 w-full bg-dark-950 border-b border-white/10 p-6 flex flex-col gap-4 hidden shadow-2xl">
            <a href="#inicio" class="text-lg font-medium text-white py-2" onclick="toggleMenu()">Inicio</a>
            <a href="#servicios" class="text-lg font-medium text-white py-2" onclick="toggleMenu()">Servicios</a>
            <a href="#contacto" class="text-lg font-bold text-accent-cyan py-2" onclick="toggleMenu()">Contactar</a>
        </div>
    </nav>

    <section id="inicio" class="relative z-10 pt-32 pb-20 md:pt-44 lg:pt-48">
        <div class="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-start">
            
            <div class="space-y-8 animate-fade-in mt-4">
                
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-bold uppercase tracking-widest">
                    <span class="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
                    Agente de Transformación Digital
                </div>

                <h1 class="text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-display font-bold leading-[0.95] tracking-tight text-white">
                    Sergio <br class="hidden lg:block" />
                    <span class="text-gradient">Guillén.</span>
                </h1>

                <div class="max-w-2xl border-l-2 border-accent-blue/30 pl-6 py-2">
                    <h2 class="text-2xl md:text-3xl text-white font-medium mb-3">
                        Experto en <span class="text-accent-cyan border-b border-accent-cyan/30">IA</span> y <span class="text-accent-purple border-b border-accent-purple/30">Automatización</span>
                    </h2>
                    <p class="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                        Optimizo procesos y transformo empresas para que sean más eficientes, rentables y escalables.
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-5 pt-4">
                    <a href="#contacto" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-accent-cyan transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10">
                        Consultoría Gratuita <i class="ph-bold ph-arrow-right"></i>
                    </a>
                    <a href="#servicios" class="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/10 text-white rounded-full font-medium text-lg hover:bg-white/5 transition-all">
                        Ver Soluciones
                    </a>
                </div>

                <div class="flex items-center gap-8 pt-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <p class="text-sm font-mono flex items-center gap-2"><i class="ph-fill ph-check-circle text-green-500"></i> +300% ROI</p>
                    <p class="text-sm font-mono flex items-center gap-2"><i class="ph-fill ph-check-circle text-green-500"></i> Soluciones a Medida</p>
                </div>
            </div>

            <div class="relative w-full flex justify-center lg:justify-end animate-fade-in" style="animation-delay: 0.2s;">
                <div class="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/20 blur-[80px] rounded-full transform translate-x-10 translate-y-10"></div>
                
                <div class="relative w-full max-w-md lg:max-w-xl aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                    <img src="https://res.cloudinary.com/dg3peytgm/image/upload/IMG_7667_snrmuc.jpg" 
                         alt="Sergio Guillén Ponencia" 
                         class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    
                    <div class="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-xl border border-white/10 flex items-center gap-4 backdrop-blur-md">
                        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center text-black shrink-0 shadow-lg shadow-cyan-500/20">
                            <i class="ph-fill ph-brain text-2xl"></i>
                        </div>
                        <div>
                            <p class="text-xs text-accent-cyan font-bold uppercase tracking-wider mb-0.5">Resultado Real</p>
                            <p class="text-white font-bold text-sm md:text-base leading-tight">Implementación IA Estratégica</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <div class="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>

    <section id="servicios" class="relative z-10 py-24">
        <div class="w-full max-w-screen-2xl mx-auto px-6 lg:px-12">
            
            <div class="mb-20 reveal">
                <span class="text-accent-cyan font-bold tracking-widest uppercase text-xs mb-4 block">Lo que hago</span>
                <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                    Soluciones <span class="text-gray-500">Integrales</span>
                </h2>
                <p class="text-xl text-gray-400 max-w-2xl font-light">
                    Sistemas diseñados para ahorrar tiempo, reducir costes y aumentar beneficios.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div class="glass-card p-8 rounded-3xl group">
                    <div class="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-black transition-colors">
                        <i class="ph-fill ph-chat-centered-text text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-3">Chatbots Inteligentes</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">Atención 24/7 en Web y WhatsApp. Respuestas naturales que cierran ventas mientras duermes.</p>
                </div>

                <div class="glass-card p-8 rounded-3xl group">
                    <div class="w-14 h-14 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-purple mb-6 group-hover:bg-accent-purple group-hover:text-white transition-colors">
                        <i class="ph-fill ph-gear text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-3">Automatización (RPA)</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">Conecta CRM, Email y Excel. Elimina tareas manuales repetitivas y errores humanos.</p>
                </div>

                <div class="glass-card p-8 rounded-3xl group">
                    <div class="w-14 h-14 bg-accent-cyan/10 rounded-xl flex items-center justify-center text-accent-cyan mb-6 group-hover:bg-accent-cyan group-hover:text-black transition-colors">
                        <i class="ph-fill ph-rocket text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-3">Growth & Embudos</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">Landing pages y estrategias de conversión optimizadas para escalar tu facturación.</p>
                </div>

                 <div class="glass-card p-8 rounded-3xl group">
                    <div class="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                        <i class="ph-fill ph-database text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-3">Análisis de Datos</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">Dashboards visuales (PowerBI) para tomar decisiones basadas en datos reales.</p>
                </div>

                 <div class="glass-card p-8 rounded-3xl group">
                    <div class="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <i class="ph-fill ph-envelope-open text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-3">Email Marketing</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">Secuencias automatizadas y personalizadas con IA para fidelizar clientes.</p>
                </div>

                 <div class="glass-card p-8 rounded-3xl group">
                    <div class="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <i class="ph-fill ph-users-three text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-3">Formación In-Company</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">Capacitación de equipos para adoptar herramientas de IA en su flujo diario.</p>
                </div>

            </div>
        </div>
    </section>

    <section id="sobre-mi" class="py-32 bg-dark-900/50 border-y border-white/5">
        <div class="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1 reveal">
                <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">Tu socio tecnológico.</h2>
                <div class="space-y-6 text-lg text-gray-400 font-light">
                    <p>
                        No soy solo un consultor, soy un <strong class="text-white">Ingeniero de Soluciones</strong>. Mi enfoque combina la precisión técnica con una visión clara de negocio.
                    </p>
                    <p>
                        He trabajado con múltiples empresas implementando sistemas que siguen funcionando años después. Mi objetivo no es venderte humo, sino construir la infraestructura digital que tu empresa necesita para crecer.
                    </p>
                </div>
            </div>
            <div class="order-1 lg:order-2 flex justify-center reveal">
                <div class="relative w-full max-w-sm aspect-square rounded-full overflow-hidden border-4 border-white/5 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src="https://res.cloudinary.com/dg3peytgm/image/upload/v1769542383/yo_terraza_celohz.png" 
                         onerror="this.src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop'"
                         alt="Sergio Guillén" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </section>

    <section id="contacto" class="py-32 relative overflow-hidden">
        <div class="w-full max-w-5xl mx-auto px-6 relative z-10">
            <div class="glass-card rounded-[3rem] p-10 md:p-20 text-center border border-accent-blue/20 shadow-[0_0_60px_rgba(45,127,249,0.15)]">
                
                <h2 class="text-5xl md:text-7xl font-display font-bold text-white mb-6">Hablemos.</h2>
                <p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Tienes un negocio que escalar. Yo tengo la estrategia y la tecnología. Agenda una llamada gratuita de 15 minutos.
                </p>

                <div class="flex flex-col md:flex-row justify-center gap-6">
                    <a href="mailto:sergio@sergiogp.com" class="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-gray-200 transition-colors w-full md:w-auto">
                        Enviar Email
                    </a>
                    <a href="https://www.linkedin.com/in/sergioguillenpampliega" target="_blank" class="px-10 py-5 bg-[#0077B5] text-white rounded-full font-bold text-xl hover:bg-[#006396] transition-colors w-full md:w-auto flex items-center justify-center gap-2">
                        <i class="ph-bold ph-linkedin-logo text-2xl"></i> LinkedIn
                    </a>
                </div>
                
                <div class="mt-10 pt-10 border-t border-white/5">
                    <p class="text-gray-500 font-mono">+34 649 36 88 00</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="py-10 bg-dark-950 border-t border-white/5 text-center">
        <div class="flex justify-center gap-6 mb-6">
            <a href="#" class="text-gray-500 hover:text-white transition-colors text-2xl"><i class="ph-fill ph-linkedin-logo"></i></a>
            <a href="#" class="text-gray-500 hover:text-white transition-colors text-2xl"><i class="ph-fill ph-instagram-logo"></i></a>
        </div>
        <p class="text-gray-600 text-sm">&copy; 2026 Sergio Guillén Pampliega. Todos los derechos reservados.</p>
    </footer>

    <script>
        // Reveal on Scroll
        function reveal() {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    reveals[i].classList.add('active');
                }
            }
        }
        window.addEventListener('scroll', reveal);
        reveal();

        // Mobile Menu
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const icon = menuBtn.querySelector('i');

        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            if(mobileMenu.classList.contains('hidden')){
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            } else {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            }
        }
        menuBtn.addEventListener('click', toggleMenu);

        // Smooth Scroll Fix
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
