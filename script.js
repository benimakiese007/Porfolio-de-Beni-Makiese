// 1. Initialize Lenis (Smooth Scroll)
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

    // Scroll Progress Update
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const scrollBar = document.querySelector('.scroll-progress-bar');
    if (scrollBar) scrollBar.style.width = scrollPercent + '%';
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
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 3. Custom Cursor & Interactions
const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.custom-cursor-dot');
const interactiveElements = document.querySelectorAll('a, button, .skill-card, .experience-item, .project-card, .logo');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
    });
    gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: "power2.out"
    });
});

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
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
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        delay: 1.2
    });

    // Hero Image Animation
    gsap.from('.image-wrapper', {
        opacity: 0,
        scale: 0.8,
        rotate: 10,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 1.5
    });

    // Section Reveals with Staggered Children
    sections.forEach(section => {
        if (section.id === 'home') return;

        const heading = section.querySelector('h2');
        const cards = section.querySelectorAll('.skill-card, .experience-item, .project-card, .about-text > *');

        if (heading) {
            gsap.from(heading, {
                scrollTrigger: {
                    trigger: heading,
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
                    trigger: cards[0],
                    start: "top 90%",
                },
                opacity: 0,
                y: 50,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out"
            });
        }

        // Parallax background effect for sections
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            backgroundPositionY: "20%",
            ease: "none"
        });
    });

    // 3D Hero Animation (Three.js)
    const initThreeJS = () => {
        const container = document.getElementById('three-canvas-container');
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x0056b3, 2);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Object: A complex geometric shape (Icosahedron)
        const geometry = new THREE.IcosahedronGeometry(2, 0);
        const material = new THREE.MeshPhongMaterial({
            color: 0x0056b3,
            wireframe: true,
            transparent: true,
            opacity: 0.4
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Second layer: interior solid
        const innerGeometry = new THREE.IcosahedronGeometry(1.8, 0);
        const innerMaterial = new THREE.MeshPhongMaterial({
            color: 0x0056b3,
            transparent: true,
            opacity: 0.1,
            flatShading: true
        });
        const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
        scene.add(innerMesh);

        camera.position.z = 5;

        // Interaction
        let mouseX = 0;
        let mouseY = 0;
        window.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
        });

        const animate = () => {
            requestAnimationFrame(animate);

            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.005;
            innerMesh.rotation.x -= 0.003;
            innerMesh.rotation.y -= 0.003;

            mesh.rotation.y += mouseX * 0.05;
            mesh.rotation.x += mouseY * 0.05;
            innerMesh.rotation.y += mouseX * 0.03;
            innerMesh.rotation.x += mouseY * 0.03;

            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
    };

    initThreeJS();

    if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });

    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".skill-card, .experience-item, .project-card"), {
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

    // Circular Progress Animation for Languages
    const circularProgresses = document.querySelectorAll('.circular-progress');
    if (circularProgresses.length > 0) {
        circularProgresses.forEach(progress => {
            const percentage = parseInt(progress.getAttribute('data-percentage'), 10);
            let obj = { val: 0 };
            
            gsap.to(obj, {
                scrollTrigger: {
                    trigger: progress,
                    start: "top 90%",
                },
                val: percentage,
                duration: 2.5,
                ease: "power3.out",
                delay: 0.1,
                onUpdate: function() {
                    progress.style.background = `conic-gradient(var(--primary-color) ${obj.val * 3.6}deg, rgba(0, 86, 179, 0.1) 0deg)`;
                    const num = progress.querySelector('.progress-num');
                    if (num) num.innerText = Math.round(obj.val) + '%';
                }
            });
        });
    }

    // Hover effect pulse on lang cards
    const langCards = document.querySelectorAll('.lang-card');
    langCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.circular-progress'), {
                scale: 1.08,
                duration: 0.4,
                ease: "back.out(2)"
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.circular-progress'), {
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById("theme-toggle");
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
});
