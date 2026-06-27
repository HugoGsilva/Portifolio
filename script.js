// ============================================================
//  Hugo G. Silva — Portfólio · interações
// ============================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- i18n dictionary -------------------------------------------------------
const I18N = {
    pt: {
        'nav.projects': 'Projetos', 'nav.about': 'Sobre', 'nav.stack': 'Stack',
        'nav.timeline': 'Trajetória', 'nav.contact': 'Vamos conversar',

        'hero.eyebrow': 'Disponível para projetos · Paranaguá, PR',
        'hero.title': 'Construo <span class="accent">APIs, automações</span> e aplicações web<br>que resolvem problemas reais.',
        'hero.rolePrefix': 'Hugo Guimarães da Silva — ',
        'hero.roleWords': ['Desenvolvedor Full Stack', 'Analista de Sistemas', 'APIs & Backend', 'Automações'],
        'hero.lead': 'Transformo processos manuais em aplicações claras, testáveis e publicadas: interface, regra de negócio, persistência, integração e deploy.',
        'hero.ctaProjects': 'Ver projetos', 'hero.ctaResume': 'Currículo ↗', 'hero.email': 'E-mail',
        'hero.stat1': 'Projetos full stack entregues',
        'hero.stat2': 'Tecnologias no dia a dia',
        'hero.stat3': 'Cursando no IFPR',

        'projects.eyebrow': 'Trabalhos selecionados',
        'projects.title': 'Projetos que mostram arquitetura, entrega e uso real.',
        'projects.details': 'Ver detalhes →', 'projects.live': 'Live preview ↗',
        'projects.docx.tag': 'Produção',
        'projects.docx.desc': 'Aplicação full stack que preenche modelos DOCX/ODT e gera PDFs comerciais, reduzindo repetição operacional em propostas.',
        'projects.indie.tag': 'Marketplace',
        'projects.indie.desc': 'Marketplace de jogos indie com autenticação JWT, papéis (RBAC), reviews, compras, multi-moeda e frontend React.',
        'projects.chatbot.tag': 'IA simbólica',
        'projects.chatbot.desc': 'Chatbot com NLU no backend, inferência em Prolog, sessões em Redis e frontend Angular para consultas sobre filmes.',

        'about.eyebrow': 'Sobre',
        'about.title': 'Gosto de construir o caminho inteiro entre ideia, sistema e entrega.',
        'about.p1': 'Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> no Instituto Federal do Paraná, com interesse prático em desenvolvimento web, automação e arquitetura de aplicações.',
        'about.p2': 'Minha base mistura programação, análise de sistemas, gerenciamento de projetos e comunicação. Nos projetos, transformo requisitos em fluxos utilizáveis, APIs previsíveis e interfaces objetivas — sempre até o deploy.',
        'about.fact1.t': 'Formação atual', 'about.fact1.d': 'Análise e Desenvolvimento de Sistemas — IFPR',
        'about.fact2.t': 'Formação técnica', 'about.fact2.d': 'Técnico em Comércio Exterior — Alberto Gomes Veiga',
        'about.fact3.t': 'Localização', 'about.fact3.d': 'Paranaguá, Paraná — Brasil',
        'about.fact4.t': 'Interesses', 'about.fact4.d': 'Automação · Backend · Web apps · Criação de jogos',

        'stack.eyebrow': 'Stack', 'stack.title': 'Ferramentas que uso para fazer projetos.',
        'stack.data': 'Dados & Entrega', 'stack.automation': 'Automação',
        'stack.scripts': 'Scripts utilitários', 'stack.docgen': 'Geração de documentos', 'stack.integrations': 'Integrações',

        'timeline.eyebrow': 'Trajetória', 'timeline.title': 'Formação e marcos.',
        'timeline.t1.period': 'Cursando', 'timeline.t1.title': 'Análise e Desenvolvimento de Sistemas', 'timeline.t1.desc': 'Instituto Federal do Paraná — Paranaguá, PR',
        'timeline.t2.period': '2024 — 2026', 'timeline.t2.title': 'Projetos full stack publicados', 'timeline.t2.desc': 'Gerador de Propostas, IndieGameStore API e Chatbot Netflix-Prolog em produção, com deploy próprio.',
        'timeline.t3.period': 'Concluído · Dez 2022', 'timeline.t3.title': 'Técnico em Comércio Exterior', 'timeline.t3.desc': 'Alberto Gomes Veiga — Paranaguá, PR',

        'contact.eyebrow': 'Contato', 'contact.title': 'Quer conversar sobre sistemas, automação ou oportunidades?',
        'contact.lead': 'Respondo rápido — escolha o canal que preferir.',


        'modal.problem': 'O problema', 'modal.architecture': 'Arquitetura',
        'modal.highlights': 'Destaques', 'modal.stack': 'Stack', 'modal.visit': 'Acessar projeto ↗'
    },
    en: {
        'nav.projects': 'Projects', 'nav.about': 'About', 'nav.stack': 'Stack',
        'nav.timeline': 'Journey', 'nav.contact': "Let's talk",

        'hero.eyebrow': 'Available for projects · Paranaguá, Brazil',
        'hero.title': 'I build <span class="accent">APIs, automation</span> and web apps<br>that solve real problems.',
        'hero.rolePrefix': 'Hugo Guimarães da Silva — ',
        'hero.roleWords': ['Full Stack Developer', 'Systems Analyst', 'APIs & Backend', 'Automation'],
        'hero.lead': 'I turn manual processes into clear, testable, shipped applications: interface, business logic, persistence, integration and deploy.',
        'hero.ctaProjects': 'View projects', 'hero.ctaResume': 'Resume ↗', 'hero.email': 'Email',
        'hero.stat1': 'Full stack projects delivered',
        'hero.stat2': 'Technologies used day to day',
        'hero.stat3': 'Studying CS at IFPR',

        'projects.eyebrow': 'Selected work',
        'projects.title': 'Projects that show architecture, delivery and real usage.',
        'projects.details': 'View details →', 'projects.live': 'Live preview ↗',
        'projects.docx.tag': 'Production',
        'projects.docx.desc': 'Full stack app that fills DOCX/ODT templates and generates commercial PDFs, cutting repetitive work on proposals.',
        'projects.indie.tag': 'Marketplace',
        'projects.indie.desc': 'Indie game marketplace with JWT auth, roles (RBAC), reviews, purchases, multi-currency and a React frontend.',
        'projects.chatbot.tag': 'Symbolic AI',
        'projects.chatbot.desc': 'Chatbot with server-side NLU, Prolog inference, Redis sessions and an Angular frontend for movie queries.',

        'about.eyebrow': 'About',
        'about.title': 'I like building the whole path from idea to system to delivery.',
        'about.p1': "I'm a <strong>Systems Analysis & Development</strong> student at the Federal Institute of Paraná (IFPR), with a hands-on interest in web development, automation and application architecture.",
        'about.p2': 'My foundation blends programming, systems analysis, project management and communication. In projects I turn requirements into usable flows, predictable APIs and focused interfaces — always through to deploy.',
        'about.fact1.t': 'Current degree', 'about.fact1.d': 'Systems Analysis & Development — IFPR',
        'about.fact2.t': 'Technical degree', 'about.fact2.d': 'Foreign Trade Technician — Alberto Gomes Veiga',
        'about.fact3.t': 'Location', 'about.fact3.d': 'Paranaguá, Paraná — Brazil',
        'about.fact4.t': 'Interests', 'about.fact4.d': 'Automation · Backend · Web apps · Game creation',

        'stack.eyebrow': 'Stack', 'stack.title': 'Tools I use to ship projects.',
        'stack.data': 'Data & Delivery', 'stack.automation': 'Automation',
        'stack.scripts': 'Utility scripts', 'stack.docgen': 'Document generation', 'stack.integrations': 'Integrations',

        'timeline.eyebrow': 'Journey', 'timeline.title': 'Education & milestones.',
        'timeline.t1.period': 'In progress', 'timeline.t1.title': 'Systems Analysis & Development', 'timeline.t1.desc': 'Federal Institute of Paraná — Paranaguá, Brazil',
        'timeline.t2.period': '2024 — 2026', 'timeline.t2.title': 'Full stack projects shipped', 'timeline.t2.desc': 'Proposal Generator, IndieGameStore API and Netflix-Prolog Chatbot in production, self-deployed.',
        'timeline.t3.period': 'Completed · Dec 2022', 'timeline.t3.title': 'Foreign Trade Technician', 'timeline.t3.desc': 'Alberto Gomes Veiga — Paranaguá, Brazil',

        'contact.eyebrow': 'Contact', 'contact.title': 'Want to talk about systems, automation or opportunities?',
        'contact.lead': 'I reply fast — pick whichever channel you prefer.',


        'modal.problem': 'The problem', 'modal.architecture': 'Architecture',
        'modal.highlights': 'Highlights', 'modal.stack': 'Stack', 'modal.visit': 'Visit project ↗'
    }
};

// ---- Project case studies --------------------------------------------------
const PROJECTS = {
    docx: {
        url: 'https://docx.hugogsilva.dev/',
        stack: ['React 18', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Docxtemplater', 'PizZip', 'LibreOffice', 'Docker'],
        pt: {
            title: 'Gerador de Propostas Comerciais', tag: 'Produção · Automação documental',
            problem: 'Propostas comerciais eram preenchidas à mão, repetindo dados em modelos DOCX/ODT. A aplicação automatiza o fluxo: o usuário escolhe um modelo, preenche um formulário dinâmico com máscaras de valor e data, e recebe o PDF pronto para download.',
            architecture: 'Frontend React (Vite) consome uma API Express. O backend injeta os dados nos templates via Docxtemplater + PizZip e converte para PDF com LibreOffice. Tudo empacotado em Docker para produção.',
            highlights: ['Dois modelos suportados (RPBANK e SD-RESOLV) com campos específicos', 'Máscaras automáticas de moeda (R$) e data', 'Geração e download automático do PDF', 'API REST: /generate, /templates, /health']
        },
        en: {
            title: 'Commercial Proposal Generator', tag: 'Production · Document automation',
            problem: 'Commercial proposals were filled in by hand, repeating data across DOCX/ODT templates. The app automates the flow: the user picks a template, fills a dynamic form with currency and date masks, and gets a ready-to-download PDF.',
            architecture: 'A React (Vite) frontend consumes an Express API. The backend injects data into templates via Docxtemplater + PizZip and converts to PDF with LibreOffice. Packaged in Docker for production.',
            highlights: ['Two supported templates (RPBANK and SD-RESOLV) with specific fields', 'Automatic currency (R$) and date masks', 'Automatic PDF generation and download', 'REST API: /generate, /templates, /health']
        }
    },
    indie: {
        url: 'https://loja.hugogsilva.dev/',
        stack: ['Ruby on Rails 8', 'Ruby 3.3', 'PostgreSQL 16', 'JWT', 'Solid Queue', 'RSpec', 'Swagger', 'React 18', 'Vite', 'Tailwind CSS', 'Docker'],
        pt: {
            title: 'IndieGameStore API', tag: 'Marketplace · API + Frontend',
            problem: 'Marketplace completo de jogos indie: jogadores compram e avaliam jogos, desenvolvedores publicam e acompanham vendas, e administradores gerenciam usuários e gêneros.',
            architecture: 'API RESTful em Ruby on Rails 8 com PostgreSQL, autenticação JWT (HS256) e controle de acesso por papéis (Admin, Developer, Gamer). Jobs em background com Solid Queue, soft delete, multi-moeda e documentação Swagger. Frontend SPA em React + Vite com dark mode.',
            highlights: ['RBAC com 3 papéis e autorização por dono do recurso', 'Multi-moeda (USD, EUR, BRL) via money-rails', 'Reviews vinculadas à compra, biblioteca e perfil', 'Testes RSpec (incl. property-based) e Swagger interativo']
        },
        en: {
            title: 'IndieGameStore API', tag: 'Marketplace · API + Frontend',
            problem: 'A complete indie game marketplace: players buy and review games, developers publish and track sales, and admins manage users and genres.',
            architecture: 'RESTful API in Ruby on Rails 8 with PostgreSQL, JWT auth (HS256) and role-based access control (Admin, Developer, Gamer). Background jobs with Solid Queue, soft delete, multi-currency and Swagger docs. React + Vite SPA frontend with dark mode.',
            highlights: ['RBAC with 3 roles and owner-based authorization', 'Multi-currency (USD, EUR, BRL) via money-rails', 'Reviews tied to purchase, library and profile', 'RSpec tests (incl. property-based) and interactive Swagger']
        }
    },
    chatbot: {
        url: 'https://chat.hugogsilva.dev/',
        stack: ['FastAPI', 'Python', 'SWI-Prolog', 'Redis', 'MySQL 8', 'Angular 17', 'Nginx', 'Docker Compose', 'Cypress'],
        pt: {
            title: 'Chatbot Netflix-Prolog', tag: 'IA simbólica · Thin Client',
            problem: 'Chatbot que responde perguntas em linguagem natural sobre o catálogo de filmes da Netflix — por gênero, ator, diretor e recomendações — tolerando erros de digitação.',
            architecture: 'Arquitetura Thin Client: todo o NLU roda no servidor. O FastAPI faz detecção de intenção, correção ortográfica (SymSpell, 133k termos) e fuzzy matching (thefuzz), consultando regras em SWI-Prolog. Sessões e rate limiting no Redis. Frontend Angular 17 servido via Nginx. Orquestrado com Docker Compose.',
            highlights: ['NLU no servidor: intenção, correção ortográfica e fuzzy matching', 'Inferência simbólica em Prolog (via pyswip)', 'Rate limiting por IP (20/min) e por sessão (10/min) com Redis', '57+ testes Cypress, além de testes Python e Prolog']
        },
        en: {
            title: 'Netflix-Prolog Chatbot', tag: 'Symbolic AI · Thin Client',
            problem: 'A chatbot that answers natural-language questions about the Netflix movie catalog — by genre, actor, director and recommendations — tolerating typos.',
            architecture: 'Thin Client architecture: all NLU runs on the server. FastAPI handles intent detection, spell correction (SymSpell, 133k terms) and fuzzy matching (thefuzz), querying rules in SWI-Prolog. Sessions and rate limiting in Redis. Angular 17 frontend served via Nginx. Orchestrated with Docker Compose.',
            highlights: ['Server-side NLU: intent, spell correction and fuzzy matching', 'Symbolic inference in Prolog (via pyswip)', 'Rate limiting per IP (20/min) and per session (10/min) with Redis', '57+ Cypress tests, plus Python and Prolog tests']
        }
    }
};

let currentLang = 'pt';
let typedToken = 0;

const t = (key) => (I18N[currentLang] && I18N[currentLang][key]) || (I18N.pt[key]) || key;

// ---- Apply translations ----------------------------------------------------
function applyI18n(lang) {
    currentLang = I18N[lang] ? lang : 'pt';
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const val = I18N[currentLang][el.dataset.i18n];
        if (typeof val === 'string') el.innerHTML = val;
    });
    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) langBtn.textContent = currentLang === 'pt' ? 'EN' : 'PT';
    startTyped();
}

// ---- Typewriter rotating role ---------------------------------------------
function startTyped() {
    const typed = document.querySelector('.typed');
    if (!typed) return;
    const words = (I18N[currentLang]['hero.roleWords'] || []).slice();
    const myToken = ++typedToken;
    if (prefersReducedMotion || !words.length) {
        typed.textContent = words[0] || '';
        return;
    }
    let wi = 0, ci = 0, deleting = false;
    const tick = () => {
        if (myToken !== typedToken) return; // a newer run took over
        const word = words[wi];
        ci += deleting ? -1 : 1;
        typed.textContent = word.slice(0, ci);
        let delay = deleting ? 45 : 85;
        if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
        else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 350; }
        setTimeout(tick, delay);
    };
    setTimeout(tick, 400);
}

// ---- Project modal ---------------------------------------------------------
function openModal(key) {
    const data = PROJECTS[key];
    const modal = document.getElementById('project-modal');
    if (!data || !modal) return;
    const c = data[currentLang] || data.pt;
    modal.querySelector('.modal-content').innerHTML = `
        <span class="modal-tag">${c.tag}</span>
        <h2 id="modal-title">${c.title}</h2>
        <div class="modal-block">
            <h4>${t('modal.problem')}</h4>
            <p>${c.problem}</p>
        </div>
        <div class="modal-block">
            <h4>${t('modal.architecture')}</h4>
            <p>${c.architecture}</p>
        </div>
        <div class="modal-block">
            <h4>${t('modal.highlights')}</h4>
            <ul>${c.highlights.map((h) => `<li>${h}</li>`).join('')}</ul>
        </div>
        <div class="modal-block">
            <h4>${t('modal.stack')}</h4>
            <ul class="modal-tech">${data.stack.map((s) => `<li>${s}</li>`).join('')}</ul>
        </div>
        <a class="btn btn-primary modal-cta" href="${data.url}" target="_blank" rel="noopener noreferrer">${t('modal.visit')}</a>`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.modal-close').focus();
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

// ---- Boot ------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Theme: stored > system preference
    const storedTheme = localStorage.getItem('theme');
    const systemLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = storedTheme || (systemLight ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', initialTheme);

    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    // Language: stored > browser
    const storedLang = localStorage.getItem('lang');
    const browserLang = (navigator.language || 'pt').toLowerCase().startsWith('en') ? 'en' : 'pt';
    applyI18n(storedLang || browserLang);

    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const next = currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('lang', next);
            applyI18n(next);
        });
    }

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.add('is-visible');
                // Clear the stagger delay once revealed so later hover/tilt is instant
                el.addEventListener('transitionend', () => { el.style.transitionDelay = '0s'; }, { once: true });
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i % 6, 5) * 0.08}s`;
        observer.observe(el);
    });

    // Header + scroll progress
    const header = document.querySelector('.site-header');
    const progress = document.querySelector('.scroll-progress');
    const onScroll = () => {
        const h = document.documentElement;
        const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
        if (progress) progress.style.width = `${scrolled * 100}%`;
        header.classList.toggle('scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu
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

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    // Scroll-spy
    const navMap = new Map();
    document.querySelectorAll('.nav-links a[href^="#"]').forEach((a) => navMap.set(a.getAttribute('href').slice(1), a));
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navMap.forEach((a) => a.classList.remove('active'));
                const active = navMap.get(entry.target.id);
                if (active) active.classList.add('active');
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

    // Count-up stats
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
                el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-count]').forEach((c) => countObserver.observe(c));

    // Cursor spotlight (desktop)
    const glow = document.querySelector('.cursor-glow');
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (glow && finePointer && !prefersReducedMotion) {
        let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
        const render = () => {
            cx += (tx - cx) * 0.15; cy += (ty - cy) * 0.15;
            glow.style.left = `${cx}px`; glow.style.top = `${cy}px`;
            if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) raf = requestAnimationFrame(render);
            else raf = null;
        };
        window.addEventListener('mousemove', (e) => {
            tx = e.clientX; ty = e.clientY;
            document.body.classList.add('cursor-active');
            if (!raf) raf = requestAnimationFrame(render);
        });
        window.addEventListener('mouseout', (e) => { if (!e.relatedTarget) document.body.classList.remove('cursor-active'); });
    }

    // 3D tilt on project cards (desktop)
    if (finePointer && !prefersReducedMotion) {
        document.querySelectorAll('[data-tilt]').forEach((card) => {
            const MAX = 5;
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.18s ease-out';
            });
            card.addEventListener('mousemove', (e) => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;
                card.style.transition = 'none';
                card.style.transform = `translateY(-6px) rotateX(${-py * MAX}deg) rotateY(${px * MAX}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
                card.style.transform = '';
            });
        });
    }

    // Project modals
    document.querySelectorAll('.work-card[data-project]').forEach((card) => {
        const key = card.dataset.project;
        const btn = card.querySelector('.work-details-btn');
        if (btn) btn.addEventListener('click', (e) => { e.stopPropagation(); openModal(key); });
    });
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
    }
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});
