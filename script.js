// ============================================================
//  Hugo G. Silva — Portfólio · interações
// ============================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
    // ---- Scroll reveal animations ----
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i % 6, 5) * 0.08}s`;
        observer.observe(el);
    });

    // ---- Header shadow on scroll ----
    const header = document.querySelector('.site-header');

    // ---- Scroll progress bar ----
    const progress = document.querySelector('.scroll-progress');
    const onScroll = () => {
        const h = document.documentElement;
        const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
        if (progress) progress.style.width = `${scrolled * 100}%`;
        header.classList.toggle('scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // ---- Mobile menu ----
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ---- Scroll-spy: highlight active nav link ----
    const sections = document.querySelectorAll('main section[id]');
    const navMap = new Map();
    document.querySelectorAll('.nav-links a[href^="#"]').forEach((a) => {
        navMap.set(a.getAttribute('href').slice(1), a);
    });
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navMap.forEach((a) => a.classList.remove('active'));
                const active = navMap.get(entry.target.id);
                if (active) active.classList.add('active');
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));

    // ---- Animated count-up stats ----
    const counters = document.querySelectorAll('[data-count]');
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            countObserver.unobserve(el);
            const target = parseInt(el.dataset.count, 10);
            const suffix = el.dataset.suffix || '';
            if (prefersReducedMotion) { el.textContent = target + suffix; return; }
            const duration = 1200;
            let start = null;
            const step = (ts) => {
                if (start === null) start = ts;
                const p = Math.min((ts - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(target * eased) + suffix;
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        });
    }, { threshold: 0.6 });
    counters.forEach((c) => countObserver.observe(c));

    // ---- Typed rotating role ----
    const typed = document.querySelector('.typed');
    if (typed) {
        const words = (typed.dataset.words || '').split(',').map((w) => w.trim()).filter(Boolean);
        if (prefersReducedMotion) {
            typed.textContent = words[0] || '';
        } else if (words.length) {
            let wi = 0, ci = 0, deleting = false;
            const tick = () => {
                const word = words[wi];
                ci += deleting ? -1 : 1;
                typed.textContent = word.slice(0, ci);
                let delay = deleting ? 45 : 85;
                if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
                else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 350; }
                setTimeout(tick, delay);
            };
            setTimeout(tick, 600);
        }
    }

    // ---- Cursor spotlight (desktop, pointer devices only) ----
    const glow = document.querySelector('.cursor-glow');
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (glow && finePointer && !prefersReducedMotion) {
        let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
        const render = () => {
            cx += (tx - cx) * 0.15;
            cy += (ty - cy) * 0.15;
            glow.style.left = `${cx}px`;
            glow.style.top = `${cy}px`;
            if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
                raf = requestAnimationFrame(render);
            } else { raf = null; }
        };
        window.addEventListener('mousemove', (e) => {
            tx = e.clientX; ty = e.clientY;
            document.body.classList.add('cursor-active');
            if (!raf) raf = requestAnimationFrame(render);
        });
        window.addEventListener('mouseout', (e) => {
            if (!e.relatedTarget) document.body.classList.remove('cursor-active');
        });
    }

    // ---- 3D tilt on project cards (desktop) ----
    if (finePointer && !prefersReducedMotion) {
        document.querySelectorAll('[data-tilt]').forEach((card) => {
            const MAX = 7;
            card.addEventListener('mousemove', (e) => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;
                card.style.transition = 'transform 0.08s linear';
                card.style.transform =
                    `translateY(-6px) rotateX(${-py * MAX}deg) rotateY(${px * MAX}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transition = '';
                card.style.transform = '';
            });
        });
    }
});
