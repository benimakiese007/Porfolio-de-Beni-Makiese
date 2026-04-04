const isLocalFile = window.location.protocol === 'file:';

// --- Internationalization (i18n) ---
const translations = {
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À Propos",
        "nav-projects": "Projets",
        "nav-blog": "Réflexions",
        "nav-experiences": "Expériences",
        "nav-skills": "Compétences",
        "nav-contact": "Contact",
        "hero-subtitle": "Analyse économique guidée par l’IA. Rigueur académique, vision technologique.",
        "hero-intro": "Je suis Beni. Bienvenue sur mon portfolio.",
        "hero-btn": "Voir mon parcours",
        "about-title": "À propos de moi",
        "about-q1": "Qui suis-je ?",
        "about-p1": "Je suis un étudiant en économie curieux et déterminé. Au-delà des chiffres, je cherche à comprendre les mécanismes qui régissent nos échanges et notre société.",
        "about-q2": "Mon objectif",
        "about-p2": "Devenir un acteur clé dans l'analyse économique et la gestion de projets, en apportant une vision claire et structurée.",
        "about-q3": "Ma philosophie",
        "about-p3": "Authentique, calme et confiant. Je crois en la valeur du travail bien fait et de la rigueur.",
        "exp-title": "Expériences",
        "exp-1-title": "Stage | D.G.I",
        "exp-1-desc": "Immersion professionnelle au sein de la Direction Générale des Impôts. Observation des procédures fiscales et administratives.",
        "exp-2-title": "Job Étudiant | L.A.C",
        "exp-2-desc": "Expérience en gestion de caisse et relation client. Développement de la rigueur et de la responsabilité.",
        "skills-title": "Compétences",
        "skill-1-title": "Statistiques & Excel",
        "skill-1-desc": "Traitement de données complexes, tableaux croisés dynamiques, modélisation et analyse prédictive.",
        "skill-2-title": "Outils Numériques",
        "skill-2-desc": "Maîtrise des environnements de travail digitaux et des outils de productivité modernes.",
        "skill-3-title": "Model Context Protocol (MCP)",
        "skill-3-desc": "Expertise dans l'interopérabilité des données et la connexion de l'IA aux outils externes via serveurs MCP.",
        "skill-4-title": "AI Agents & Claude Code",
        "skill-4-desc": "Développement de workflows autonomes et intégration de Claude Code pour l'optimisation des tâches complexes.",
        "skill-5-title": "Claude 101",
        "skill-5-desc": "Learn how to use Claude for everyday work tasks, understand core features, and explore resources for more advanced learning on other topics.",
        "skill-6-title": "AI Fluency & Collaboration",
        "skill-6-desc": "Collaboration responsable homme-machine et expertise en Prompt Engineering pour des résultats de haute précision.",
        "edu-title": "Formation",
        "edu-1-title": "Licence 2 (L2) en Économie et Développement",
        "edu-1-date": "En cours",
        "edu-1-inst": "Université Catholique du Congo (UCC) – Kinshasa",
        "edu-1-desc": "Faculté d’Économie et Développement. Approfondissement des théories économiques, analyse statistique et mécanismes de développement durable.",
        "edu-2-title": "Baccalauréat – Option Commerciale",
        "edu-2-inst": "École Révérend Kim – Kinshasa",
        "edu-2-desc": "Mention : Bien. Spécialisation en gestion commerciale, comptabilité et économie d'entreprise.",
        "lang-title": "Langues",
        "lang-1": "Français",
        "lang-2": "Anglais",
        "lang-3": "Lingala",
        "lang-fluent": "COURANT",
        "cv-title": "CURRICULUM VITAE",
        "cv-desc": "Découvrez mon parcours détaillé, mes certifications et mes réalisations académiques en un coup d'œil.",
        "cv-download": "Télécharger mon CV (PDF)",
        "cv-preview": "Aperçu rapide",
        "int-title": "Centres d'Intérêt",
        "int-1-title": "Cinéma",
        "int-1-desc": "Passionné par le septième art, l'analyse cinématographique et la narration visuelle.",
        "int-2-title": "Intelligence Artificielle",
        "int-2-desc": "Veille active sur les innovations technologiques et l'impact de l'IA dans l'économie.",
        "int-3-title": "Football",
        "int-3-desc": "Passion pour le ballon rond. Esprit d'équipe, stratégie et résilience sur le terrain.",
        "int-4-title": "Musique",
        "int-4-desc": "Exploration de divers genres musicaux et intérêt pour la composition et le rythme.",
        "int-5-title": "Lecture",
        "int-5-desc": "Lectures centrées sur le développement personnel et les actualités économiques mondiales.",
        "int-6-title": "Musculation",
        "int-6-desc": "Discipline et dépassement de soi. Travail sur la force physique et la persévérance au quotidien.",
        "contact-title": "Me Contacter",
        "contact-desc": "Disponible pour des projets innovants, des collaborations créatives ou toute opportunité passionnante.",
        "footer-text": "© 2026 Beni Makiese. Tous droits réservés.",
        "projects-title": "Projets Académiques",
        "blog-title": "Réflexions & Analyses",
        "project-newket-desc": "Plateforme d'achat de billets en ligne, simplifiant l'accès aux événements locaux.",
        "project-songstory-desc": "Une application interactive pour découvrir l'histoire derrière vos chansons préférées.",
        "project-allkampus-desc": "Solution centralisée pour la gestion de la vie estudiantine et académique.",
        "blog-post1-date": "Avril 2026",
        "blog-post1-title": "L'IA : Menace ou opportunité pour l'économie ?",
        "blog-post1-desc": "Une analyse sur la transformation des métiers financiers face à l'automatisation.",
        "blog-post2-date": "Février 2026",
        "blog-post2-title": "La finance décentralisée (DeFi) : Révolution ou simple bulle ?",
        "blog-post2-desc": "Une plongée critique dans les mécanismes de la DeFi et ses implications bancaires.",
        "blog-post3-date": "Décembre 2025",
        "blog-post3-title": "Analyse de données : La rigueur avant tout",
        "blog-post3-desc": "Pourquoi la propreté des données est plus cruciale que l'algorithme choisi.",
        "blog-post4-date": "Septembre 2025",
        "blog-post4-title": "L'économie de l'attention à l'ère des algorithmes",
        "blog-post4-desc": "Comment les plateformes technologiques redéfinissent la création de valeur.",
        "blog-post5-date": "Juin 2025",
        "blog-post5-title": "L'impact des biais cognitifs dans la modélisation",
        "blog-post5-desc": "Pourquoi les prédictions échouent face à l'irrationalité du comportement humain.",
        "blog-post6-date": "Mars 2025",
        "blog-post6-title": "Mon parcours d'autodidacte en tech",
        "blog-post6-desc": "Comment j'ai combiné mes études d'économie avec l'apprentissage du code.",
        "blog-post7-date": "Novembre 2024",
        "blog-post7-title": "Pourquoi coder m'a rendu meilleur en économie",
        "blog-post7-desc": "L'approche systémique du génie logiciel appliquée à la macroéconomie.",
        "modal-problem-title": "Problématique",
        "modal-solution-title": "Solution",
        "modal-result-title": "Résultat",
        "modal-see-project": "Voir le projet",
        "blog-see-more": "Voir plus d'articles",
        "blog-see-less": "Voir moins d'articles"
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-blog": "Reflections",
        "nav-experiences": "Experience",
        "nav-skills": "Skills",
        "nav-contact": "Contact",
        "hero-subtitle": "AI-guided economic analysis. Academic rigor, technological vision.",
        "hero-intro": "I am Beni. Welcome to my portfolio.",
        "hero-btn": "See my journey",
        "about-title": "About me",
        "about-q1": "Who am I?",
        "about-p1": "I am a curious and determined economics student. Beyond numbers, I seek to understand the mechanisms governing our exchanges and our society.",
        "about-q2": "My objective",
        "about-p2": "To become a key player in economic analysis and project management, bringing a clear and structured vision.",
        "about-q3": "My philosophy",
        "about-p3": "Authentic, calm, and confident. I believe in the value of work well done and rigor.",
        "exp-title": "Experience",
        "exp-1-title": "Internship | D.G.I",
        "exp-1-desc": "Professional immersion within the General Directorate of Taxes. Observation of tax and administrative procedures.",
        "exp-2-title": "Student Job | L.A.C",
        "exp-2-desc": "Experience in cash management and customer relations. Developing rigor and responsibility.",
        "skills-title": "Skills",
        "skill-1-title": "Statistics & Excel",
        "skill-1-desc": "Complex data processing, pivot tables, predictive modeling and analysis.",
        "skill-2-title": "Digital Tools",
        "skill-2-desc": "Mastery of digital workspaces and modern productivity tools.",
        "skill-3-title": "Model Context Protocol (MCP)",
        "skill-3-desc": "Expertise in data interoperability and connecting AI to external tools via MCP servers.",
        "skill-4-title": "AI Agents & Claude Code",
        "skill-4-desc": "Development of autonomous workflows and integration of Claude Code for complex tasks optimization.",
        "skill-5-title": "Claude 101",
        "skill-5-desc": "Learn how to use Claude for everyday work tasks, understand core features, and explore resources for more advanced learning.",
        "skill-6-title": "AI Fluency & Collaboration",
        "skill-6-desc": "Responsible human-machine collaboration and expertise in Prompt Engineering for high-precision results.",
        "edu-title": "Education",
        "edu-1-title": "Bachelor (L2) in Economics and Development",
        "edu-1-date": "In progress",
        "edu-1-inst": "Catholic University of Congo (UCC) – Kinshasa",
        "edu-1-desc": "Faculty of Economics and Development. Deepening of economic theories, statistical analysis and sustainable development mechanisms.",
        "edu-2-title": "High School Diploma – Commercial Option",
        "edu-2-inst": "Reverend Kim School – Kinshasa",
        "edu-2-desc": "Honors: Good. Specialization in commercial management, accounting and business economics.",
        "lang-title": "Languages",
        "lang-1": "French",
        "lang-2": "English",
        "lang-3": "Lingala",
        "lang-fluent": "FLUENT",
        "cv-title": "CURRICULUM VITAE",
        "cv-desc": "Discover my detailed journey, my certifications and academic achievements at a glance.",
        "cv-download": "Download my CV (PDF)",
        "cv-preview": "Quick Preview",
        "int-title": "Interests",
        "int-1-title": "Cinema",
        "int-1-desc": "Passionate about the seventh art, film analysis and visual storytelling.",
        "int-2-title": "Artificial Intelligence",
        "int-2-desc": "Active monitoring of technological innovations and the impact of AI in the economy.",
        "int-3-title": "Football",
        "int-3-desc": "Passion for the round ball. Team spirit, strategy and resilience on the field.",
        "int-4-title": "Music",
        "int-4-desc": "Exploration of various musical genres and interest in composition and rhythm.",
        "int-5-title": "Reading",
        "int-5-desc": "Readings centered on personal development and global economic news.",
        "int-6-title": "Bodybuilding",
        "int-6-desc": "Discipline and pushing limits. Daily work on physical strength and perseverance.",
        "contact-title": "Contact Me",
        "contact-desc": "Available for innovative projects, creative collaborations, or any exciting opportunity.",
        "footer-text": "© 2026 Beni Makiese. All rights reserved.",
        "projects-title": "Academic Projects",
        "blog-title": "Reflections & Insights",
        "project-newket-desc": "Online ticketing platform simplifying access to local events.",
        "project-songstory-desc": "Interactive app to discover the stories behind your favorite songs.",
        "project-allkampus-desc": "Centralized solution for student and academic life management.",
        "blog-post1-date": "April 2026",
        "blog-post1-title": "AI: Threat or Opportunity for the Economy?",
        "blog-post1-desc": "An analysis of the transformation of financial professions facing automation.",
        "blog-post2-date": "February 2026",
        "blog-post2-title": "DeFi: Revolution or Simple Bubble?",
        "blog-post2-desc": "A critical dive into DeFi mechanisms and their banking implications.",
        "blog-post3-date": "December 2025",
        "blog-post3-title": "Data Analysis: Rigor Above All",
        "blog-post3-desc": "Why data cleanliness is more crucial than the chosen algorithm.",
        "blog-post4-date": "September 2025",
        "blog-post4-title": "The Attention Economy in the Age of Algorithms",
        "blog-post4-desc": "How tech platforms are redefining value creation.",
        "blog-post5-date": "June 2025",
        "blog-post5-title": "The Impact of Cognitive Biases in Modeling",
        "blog-post5-desc": "Why predictions fail against the irrationality of human behavior.",
        "blog-post6-date": "March 2025",
        "blog-post6-title": "My Self-Taught Journey in Tech",
        "blog-post6-desc": "How I combined my economics studies with learning to code.",
        "blog-post7-date": "November 2024",
        "blog-post7-title": "Why Coding Made Me Better at Economics",
        "blog-post7-desc": "The systemic approach of software engineering applied to macroeconomics.",
        "modal-problem-title": "Problem",
        "modal-solution-title": "Solution",
        "modal-result-title": "Result",
        "modal-see-project": "View Project",
        "blog-see-more": "See more articles",
        "blog-see-less": "See fewer articles"
    }
};

const projectData = {
    newket: {
        title: "NewKet",
        tags: ["Next.js", "Stripe", "Firebase"],
        problem: { fr: "Difficulté à centraliser et organiser efficacement des idées inspirantes et des contenus motivants.", en: "Difficulty in centralizing and efficiently organizing inspiring ideas and motivating content." },
        solution: { fr: "Création d'une plateforme web structurée permettant de classer, publier et partager des citations par thèmes avec interaction utilisateur.", en: "Creation of a structured web platform allowing to classify, publish, and share quotes by themes with user interaction." },
        result: { fr: "Une expérience fluide qui favorise l'engagement et transforme l'inspiration en habitude quotidienne.", en: "A smooth experience that fosters engagement and turns inspiration into a daily habit." },
        link: "https://newket.vercel.app/"
    },
    songstory: {
        title: "SongStory",
        tags: ["Next.js", "Spotify API", "GSAP"],
        problem: { fr: "Les auditeurs ne comprennent pas toujours les significations profondes et les références cachées dans les paroles des chansons.", en: "Listeners don't always understand the deep meanings and hidden references in song lyrics." },
        solution: { fr: "Développement d'un concept de contenu qui analyse chaque ligne de chanson pour en révéler le sens, les métaphores et le contexte culturel.", en: "Development of a content concept that analyzes every song line to reveal its meaning, metaphors, and cultural context." },
        result: { fr: "Une meilleure compréhension des œuvres musicales et une audience plus engagée et fidèle.", en: "A better understanding of musical works and a more engaged and loyal audience." },
        link: "https://songstoryv3.vercel.app/"
    },
    allkampus: {
        title: "AllKampus",
        tags: ["React", "Supabase", "Google API"],
        problem: { fr: "Manque d'accès simple et centralisé aux informations, services et opportunités pour les étudiants.", en: "Lack of simple and centralized access to information, services, and opportunities for students." },
        solution: { fr: "Mise en place d'une plateforme numérique regroupant ressources académiques, actualités, et services utiles pour la vie estudiantine.", en: "Implementation of a digital platform gathering academic resources, news, and useful services for student life." },
        result: { fr: "Une gestion plus efficace de la vie universitaire et une amélioration de l'accès à l'information pour les étudiants.", en: "More efficient management of university life and improved access to information for students." },
        link: "https://allkampus-phx.vercel.app/"
    }
};

let currentLang = localStorage.getItem('lang') || 'fr';

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.getElementById('language-toggle').querySelector('.lang-text').textContent = lang === 'fr' ? 'EN' : 'FR';
    localStorage.setItem('lang', lang);
    currentLang = lang;
}


const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
    // Disable history manipulation on local files to avoid Chrome security errors
    syncTouch: !isLocalFile, 
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. GSAP & ScrollTrigger Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar and Menu Logic
const header = document.querySelector('header');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

});

// Update active nav link based on section
const observerOptions = {
    threshold: 0.2, // Trigger when 20% of the section is visible
    rootMargin: "-25% 0px -25% 0px" // Only trigger when section is roughly in the middle
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinksItems.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    const isNoScroll = document.body.classList.toggle('no-scroll');
    
    if (isNoScroll) {
        lenis.stop();
    } else {
        lenis.start();
    }
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
        lenis.start();
    });
});

// Close menu on click outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active')) {
        if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
            lenis.start();
        }
    }
});

// Slider Buttons Logic
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const experiencesList = document.querySelector('.experiences-list');

if (prevBtn && nextBtn && experiencesList) {
    prevBtn.addEventListener('click', () => {
        const itemWidth = experiencesList.querySelector('.experience-item').offsetWidth;
        experiencesList.scrollBy({ left: -(itemWidth + 24), behavior: 'smooth' }); // 24 = gap (1.5rem)
    });

    nextBtn.addEventListener('click', () => {
        const itemWidth = experiencesList.querySelector('.experience-item').offsetWidth;
        experiencesList.scrollBy({ left: itemWidth + 24, behavior: 'smooth' });
    });
}



// Project Cards Spotlight Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
});

// 4. Magnetic Effect (Improved)
const magneticElements = document.querySelectorAll('.btn, .contact-btn, .logo');

magneticElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        gsap.to(el, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    el.addEventListener('mouseleave', () => {
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// 5. Initialization & Advanced Scroll Animations
document.addEventListener('DOMContentLoaded', () => {

    // Hero Name Animation
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.innerText;
        heroName.innerHTML = text.split('').map(char => {
            if (char === ' ') return ' ';
            if (char === '\n') return '<br>';
            return `<span class="char" style="display:inline-block">${char}</span>`;
        }).join('');

        gsap.from('.hero-name .char', {
            opacity: 0,
            y: 50,
            rotateX: -90,
            stagger: 0.03,
            duration: 1,
            ease: "back.out(1.7)",
            delay: 0.5
        });
    }

    // Hero Content Stagger
    const heroElements = document.querySelectorAll('.hero-subtitle, .hero-text p, .hero-btns');
    gsap.from(heroElements, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
        clearProps: "all"
    });

    // Hero Image Animation
    gsap.from('.image-wrapper', {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
        clearProps: "all"
    });

    // Section Reveals with Staggered Children
    sections.forEach(section => {
        if (section.id === 'home') return;

        const heading = section.querySelector('h2');
        const cards = section.querySelectorAll('.skill-card, .experience-item, .project-card, .interest-card, .about-text > *');

        if (heading) {
            gsap.from(heading, {
                scrollTrigger: {
                    trigger: section, // Using the section itself as trigger is safer
                    start: "top 85%",
                },
                opacity: 0,
                x: -30,
                duration: 1,
                ease: "power3.out"
            });
        }

        if (cards.length > 0) {
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: section, // Using the section itself as trigger is safer
                    start: "top 80%",
                },
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                clearProps: "all" // Important: clear GSAP styles after animation
            });
        }
    });

    // 3D Hero Animation (Three.js)
    // 3D Hero Animation (Three.js Advanced Morphing Background)
    const initThreeJS = () => {
        const container = document.getElementById('three-canvas-container');
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x0056b3, 2);
        pointLight1.position.set(5, 5, 5);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 1);
        pointLight2.position.set(-5, -5, 5);
        scene.add(pointLight2);

        // Predefined Geometries
        const geometries = {
            home: new THREE.IcosahedronGeometry(2.2, 0),
            about: new THREE.SphereGeometry(1.8, 32, 32),
            projects: new THREE.TorusGeometry(1.4, 0.6, 16, 100),
            experiences: new THREE.OctahedronGeometry(2, 0),
            skills: new THREE.DodecahedronGeometry(1.8, 0),
            contact: new THREE.TorusKnotGeometry(1.2, 0.4, 100, 16)
        };

        // Section Configurations
        const sectionConfigs = {
            home: { geo: 'home', color: 0x0056b3, posX: 0, opacity: 0.35, scale: 1 },
            about: { geo: 'about', color: 0x8833ff, posX: -3, opacity: 0.25, scale: 1.2 },
            projects: { geo: 'projects', color: 0x00d4ff, posX: 3, opacity: 0.2, scale: 1 },
            experiences: { geo: 'experiences', color: 0xff2a6d, posX: -3, opacity: 0.25, scale: 1.1 },
            skills: { geo: 'skills', color: 0x05ffa1, posX: 3, opacity: 0.2, scale: 1 },
            formation: { geo: 'about', color: 0x0056b3, posX: -3, opacity: 0.2, scale: 0.9 },
            languages: { geo: 'home', color: 0xffcc00, posX: 3, opacity: 0.15, scale: 0.8 },
            cv: { geo: 'experiences', color: 0xffffff, posX: -3, opacity: 0.2, scale: 1.1 },
            interests: { geo: 'projects', color: 0x8833ff, posX: 3, opacity: 0.15, scale: 1 },
            contact: { geo: 'contact', color: 0x00d4ff, posX: 0, opacity: 0.3, scale: 1.3 }
        };

        // Material
        const material = new THREE.MeshPhongMaterial({
            color: sectionConfigs.home.color,
            wireframe: true,
            transparent: true,
            opacity: sectionConfigs.home.opacity,
            shininess: 100
        });

        // Main Mesh
        let currentMesh = new THREE.Mesh(geometries.home, material);
        scene.add(currentMesh);

        // Inner Mesh (Solid)
        const innerMaterial = new THREE.MeshPhongMaterial({
            color: sectionConfigs.home.color,
            transparent: true,
            opacity: 0.05,
            flatShading: true
        });
        let innerMesh = new THREE.Mesh(geometries.home, innerMaterial);
        innerMesh.scale.set(0.9, 0.9, 0.9);
        scene.add(innerMesh);

        camera.position.z = 5;

        // Interaction
        let mouseX = 0;
        let mouseY = 0;
        window.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
        });

        // Morphing Logic
        const updateObject = (config) => {
            if (!config) return;

            // Animate properties
            gsap.to(currentMesh.position, { x: config.posX, duration: 1.5, ease: "power2.inOut" });
            gsap.to(innerMesh.position, { x: config.posX, duration: 1.5, ease: "power2.inOut" });
            
            gsap.to(material.color, {
                r: new THREE.Color(config.color).r,
                g: new THREE.Color(config.color).g,
                b: new THREE.Color(config.color).b,
                duration: 1.2
            });

            gsap.to(innerMaterial.color, {
                r: new THREE.Color(config.color).r,
                g: new THREE.Color(config.color).g,
                b: new THREE.Color(config.color).b,
                duration: 1.2
            });

            gsap.to(material, { opacity: config.opacity, duration: 1 });
            gsap.to(currentMesh.scale, { x: config.scale, y: config.scale, z: config.scale, duration: 1.5, ease: "back.out(1.7)" });
            gsap.to(innerMesh.scale, { x: config.scale * 0.9, y: config.scale * 0.9, z: config.scale * 0.9, duration: 1.5, ease: "back.out(1.7)" });

            // Swap Geometry with a small pulse effect
            if (currentMesh.geometry !== geometries[config.geo]) {
                gsap.to([currentMesh.scale, innerMesh.scale], {
                    x: 0, y: 0, z: 0, duration: 0.4, ease: "power2.in", onComplete: () => {
                        currentMesh.geometry = geometries[config.geo];
                        innerMesh.geometry = geometries[config.geo];
                        gsap.to([currentMesh.scale, innerMesh.scale], {
                            x: config.scale, y: config.scale, z: config.scale, 
                            duration: 0.6, ease: "back.out(2)" 
                        });
                    }
                });
            }
        };

        // Scroll Observers
        Object.keys(sectionConfigs).forEach(id => {
            ScrollTrigger.create({
                trigger: `#${id}`,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: () => updateObject(sectionConfigs[id]),
                onEnterBack: () => updateObject(sectionConfigs[id])
            });
        });

        const animate = () => {
            requestAnimationFrame(animate);

            currentMesh.rotation.x += 0.003;
            currentMesh.rotation.y += 0.003;
            innerMesh.rotation.x -= 0.002;
            innerMesh.rotation.y -= 0.002;

            currentMesh.rotation.y += mouseX * 0.05;
            currentMesh.rotation.x += mouseY * 0.05;
            innerMesh.rotation.y += mouseX * 0.03;
            innerMesh.rotation.x += mouseY * 0.03;

            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    };

    initThreeJS();

    if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });

    if (typeof VanillaTilt !== 'undefined' && window.innerWidth > 768) {
        VanillaTilt.init(document.querySelectorAll(".skill-card, .experience-item, .project-card, .interest-card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.4,
            scale: 1.05,
            perspective: 1000
        });
    }

    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 30, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#0056b3" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.2, "random": false },
                "size": { "value": 2, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#0056b3", "opacity": 0.1, "width": 1 },
                "move": { "enable": true, "speed": 1, "out_mode": "out" }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "grab" } }
            }
        });
    }

    // Languages Skills - Circular Progress
    const progressCircles = document.querySelectorAll('.progress-ring__circle');
    progressCircles.forEach(circle => {
        const percent = parseInt(circle.getAttribute('data-percent'), 10);
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        
        // Initial state
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        gsap.to(circle, {
            strokeDashoffset: circumference - (percent / 100) * circumference,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: circle,
                start: "top 90%",
            }
        });
    });

    // Hover effect pulse on lang cards
    const langCards = document.querySelectorAll('.lang-card');
    langCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.progress-container'), {
                scale: 1.08,
                duration: 0.4,
                ease: "back.out(2)"
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.progress-container'), {
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector("i");
        const body = document.body;

        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            body.classList.add("dark-mode");
            updateThemeIcon(true);
        }

        themeToggle.addEventListener("click", () => {
            const isDark = body.classList.toggle("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            updateThemeIcon(isDark);
        });

        function updateThemeIcon(isDark) {
            if (isDark) {
                themeIcon.classList.replace("fa-moon", "fa-sun");
            } else {
                themeIcon.classList.replace("fa-sun", "fa-moon");
            }
        }
    }

    // --- Advanced Animation System (Clean Integration) ---
    
    // 1. Sync ScrollTrigger with AOS & Lenis
    if (typeof AOS !== 'undefined') {
        // Refresh ScrollTrigger after AOS initialization
        window.addEventListener('load', () => ScrollTrigger.refresh());
    }

    // 2. Hero Image Parallax
    if (document.querySelector(".image-wrapper")) {
        gsap.to(".image-wrapper", {
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            yPercent: 30,
            scale: 1.05,
            ease: "none"
        });
    }

    // 3. Optimized Floating Engine (One listener for all icons)
    const floatingIcons = document.querySelectorAll('.floating-icon');
    if (floatingIcons.length > 0) {
        floatingIcons.forEach((icon, index) => {
            gsap.set(icon, {
                x: gsap.utils.random(-20, 20),
                y: gsap.utils.random(-20, 20),
                rotation: gsap.utils.random(-15, 15)
            });

            gsap.to(icon, {
                y: "+=40",
                x: "+=20",
                rotation: "+=15",
                duration: gsap.utils.random(4, 7),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.1
            });
        });

        window.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX / window.innerWidth - 0.5) * 30;
            const moveY = (e.clientY / window.innerHeight - 0.5) * 30;
            gsap.to('.floating-icon', {
                x: (i) => `+=${moveX}`,
                y: (i) => `+=${moveY}`,
                duration: 2,
                ease: "power1.out",
                overwrite: 'auto'
            });
        });
    }

    // 4. Card Mouse Follow Glow Effect
    const cards = document.querySelectorAll('.project-card, .skill-card, .interest-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- Modal Logic ---
    const modal = document.getElementById('project-modal');
    const modalClose = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');

    const openModal = (projectId) => {
        const data = projectData[projectId];
        if (!data) return;

        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-tags').innerHTML = data.tags.map(t => `<span class="tag">${t}</span>`).join('');
        document.getElementById('modal-problem').textContent = data.problem[currentLang];
        document.getElementById('modal-solution').textContent = data.solution[currentLang];
        document.getElementById('modal-result').textContent = data.result[currentLang];
        const modalLink = document.getElementById('modal-link');
        modalLink.href = data.link;
        modalLink.innerHTML = `${translations[currentLang]['modal-see-project']} <i class="fa-solid fa-arrow-up-right-from-square"></i>`;

        modal.classList.add('active');
        document.body.classList.add('no-scroll');
        lenis.stop();
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
        lenis.start();
    };

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => openModal(card.getAttribute('data-project')));
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // --- Language Toggle Logic ---
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            updateLanguage(newLang);
        });
        updateLanguage(currentLang); // Initialize
    }

    // --- Scroll To Top Logic ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            // If using Lenis, scroll using Lenis
            if (typeof lenis !== 'undefined') {
                lenis.scrollTo(0, { duration: 1.2 });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    // --- Blog Toggle Logic ---
    const blogMoreBtn = document.getElementById('blog-more-btn');
    if (blogMoreBtn) {
        const hiddenBlogs = document.querySelectorAll('.blog-card.hidden-blog');
        let isExpanded = false;

        blogMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            isExpanded = !isExpanded;
            
            hiddenBlogs.forEach(blog => {
                if (isExpanded) {
                    blog.style.display = 'flex';
                    // Re-trigger AOS slightly
                    blog.classList.add('aos-animate');
                } else {
                    blog.style.display = 'none';
                }
            });

            blogMoreBtn.setAttribute('data-i18n', isExpanded ? 'blog-see-less' : 'blog-see-more');
            blogMoreBtn.textContent = translations[currentLang][isExpanded ? 'blog-see-less' : 'blog-see-more'];
            // Refresh ScrollTrigger to update layouts
            if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        });
    }
});


