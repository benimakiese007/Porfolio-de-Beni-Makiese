const isLocalFile = window.location.protocol === 'file:';

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
    document.body.classList.toggle('no-scroll');
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
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
});


