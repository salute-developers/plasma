/* ---------- плавный скролл ----------
   Lenis: инерция колеса, нативный тач, работающие fixed/sticky.
   Библиотека лежит локально, чтобы проходить CSP прототипа. */
let lenis = null;
(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || typeof Lenis === 'undefined') return;

    lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // экспоненциальный выкат
        smoothWheel: true,
        syncTouch: false, // на тач-экранах остаётся системная прокрутка
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
    });

    function frame(time) {
        lenis.raf(time);
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    /* якоря в меню ведут с той же инерцией, с поправкой на плавающую панель */
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
            const id = link.getAttribute('href');
            if (id === '#' || id.length < 2) return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            lenis.scrollTo(target, { offset: -96, duration: 1.2 });
        });
    });
})();

/* панель при скролле */
addEventListener('scroll', () => document.getElementById('panel').classList.toggle('is-stuck', scrollY > 30));

/* состояние возврата */
const RESUME_KEY = 'sdds-portal-returning';
const resume = document.getElementById('resume');
function readFlag() {
    try {
        return localStorage.getItem(RESUME_KEY) === '1';
    } catch (e) {
        return false;
    }
}
function writeFlag(v) {
    try {
        v ? localStorage.setItem(RESUME_KEY, '1') : localStorage.removeItem(RESUME_KEY);
    } catch (e) {}
}
if (readFlag()) resume.classList.add('is-on');
document.getElementById('builderCta').addEventListener('click', () => {
    writeFlag(true);
    resume.classList.add('is-on');
});
document.getElementById('resumeReset').addEventListener('click', () => {
    writeFlag(false);
    resume.classList.remove('is-on');
});

/* фоновое видео */
/* видео первого экрана.
   Маятник (прямой ход + обратный) уже записан в сам файл: hero-loop.mp4 собран
   из hero-stack.mp4 и его развёрнутой копии. Покадровая перемотка через
   currentTime не годилась — браузер тянет всего ~3.5 перемотки в секунду,
   картинка замирала и дёргалась. Здесь остаётся обычный loop. */
const heroVideo = document.getElementById('heroVideo');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const playHero = () => {
    if (!reducedMotion) heroVideo.play().catch(() => {});
};

playHero();
heroVideo.addEventListener('canplay', playHero, { once: true });
['pointerdown', 'pointermove', 'keydown', 'scroll', 'touchstart'].forEach((evt) =>
    addEventListener(evt, playHero, { once: true, passive: true }),
);
new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) playHero();
        else heroVideo.pause();
    },
    { threshold: 0.05 },
).observe(document.querySelector('.hero'));

/* ---------- витрина продуктов ----------
   Сцена пинится и вырастает почти во весь экран, слайды меняются кроссфейдом.
   Повторяет механику лендинга прототипа. */
(() => {
    const wrap = document.querySelector('.showcase-pin-wrap');
    const stage = wrap && wrap.querySelector('.showcase-stage');
    if (!wrap || !stage) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduce) {
        wrap.classList.add('pin-active');
        const progress = () => {
            const rect = wrap.getBoundingClientRect();
            const vh = innerHeight;
            const total = Math.max(1, rect.height - vh);
            const from = vh * 0.45,
                to = -0.92 * total;
            return Math.max(0, Math.min(1, (from - rect.top) / (from - to)));
        };
        const apply = (g) => {
            const vw = document.documentElement.clientWidth,
                vh = innerHeight;
            /* стартовая ширина — ровно контентная колонка, чтобы левый край сцены
         совпадал с заголовком секции, а не отступал от него */
            const shell = document.querySelector('#products .shell');
            const startW = shell ? shell.getBoundingClientRect().width : Math.min(1200, vw) - 64;
            const startH = startW / 1.6;
            const w = startW + (vw * 0.9 - startW) * g;
            const h = startH + (vh * 0.9 - startH) * g;
            stage.style.width = w.toFixed(1) + 'px';
            stage.style.height = h.toFixed(1) + 'px';
            const pinRect = stage.parentElement.getBoundingClientRect();
            const layoutTop = pinRect.top + (vh - h) / 2;
            const centeredTop = 48 + (vh - h) / 2;
            const desiredTop = Math.min(Math.max(pinRect.top, centeredTop), pinRect.bottom - h);
            stage.style.transform = 'translateY(' + (desiredTop - layoutTop).toFixed(1) + 'px)';
            stage.style.borderRadius = (24 * (w / startW)).toFixed(1) + 'px';
            stage.style.opacity = (0.82 + 0.18 * g).toFixed(3);
        };
        let shown = null,
            raf = 0;
        const tick = () => {
            const target = progress();
            if (shown === null) shown = target;
            shown += (target - shown) * 0.3;
            if (Math.abs(target - shown) < 0.0008) shown = target;
            apply(shown);
            raf = requestAnimationFrame(tick);
        };
        new IntersectionObserver(
            (entries) => {
                const on = entries[0] ? entries[0].isIntersecting : true;
                if (on && !raf) raf = requestAnimationFrame(tick);
                if (!on && raf) {
                    cancelAnimationFrame(raf);
                    raf = 0;
                }
            },
            { rootMargin: '40% 0px 40% 0px' },
        ).observe(wrap);
        apply(progress());
    }

    /* слайды: автосмена, пауза вне экрана, ручное переключение точками */
    const slides = [...stage.querySelectorAll('.showcase-slide')];
    const dots = [...stage.querySelectorAll('.showcase-dots button')];
    if (slides.length < 2) return;
    let current = 0,
        inView = true,
        timer = 0;
    const setSlide = (index) => {
        current = ((index % slides.length) + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            const active = i === current;
            slide.classList.toggle('is-active', active);
            const video = slide.querySelector('video');
            if (video) {
                if (active) video.play().catch(() => {});
                else video.pause();
            }
        });
        dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
    };
    const restart = () => {
        clearInterval(timer);
        if (!reduce)
            timer = setInterval(() => {
                if (inView && !document.hidden) setSlide(current + 1);
            }, 2400);
    };
    dots.forEach((dot) =>
        dot.addEventListener('click', () => {
            setSlide(Number(dot.dataset.index));
            restart();
        }),
    );
    new IntersectionObserver(
        (entries) => {
            inView = entries[0] ? entries[0].isIntersecting : true;
        },
        { threshold: 0.25 },
    ).observe(stage);
    setSlide(0);
    restart();
})();

/* ---------- превью темы команды ----------
   FLIP-подход: превью ставится ровно в габариты ячейки, затем в следующем кадре
   разъезжается до полного размера — выглядит как рост самой карточки.
   Слой fixed, потому что сетка обрезает содержимое ячеек по overflow. */
(() => {
    const peek = document.getElementById('teamPeek');
    const cells = [...document.querySelectorAll('.team-cell[data-brand]')];
    if (!peek || !cells.length) return;
    if (matchMedia('(hover: none)').matches) return; // на тач-устройствах наведения нет

    const FULL_W = 264,
        FULL_H = 310,
        MARGIN = 16;
    const name = peek.querySelector('.peek-name');
    const meta = peek.querySelector('.peek-meta');
    let current = null;
    let openFrame = 0;

    /* финальное положение: растём из центра ячейки, но не вылезая за экран */
    const fullRect = (cell) => {
        const r = cell.getBoundingClientRect();
        const cx = r.left + r.width / 2,
            cy = r.top + r.height / 2;
        const left = Math.min(Math.max(cx - FULL_W / 2, MARGIN), innerWidth - MARGIN - FULL_W);
        const top = Math.min(Math.max(cy - FULL_H / 2, MARGIN), innerHeight - MARGIN - FULL_H);
        return { left, top };
    };

    const setBox = (left, top, width, height) => {
        peek.style.left = left + 'px';
        peek.style.top = top + 'px';
        peek.style.width = width + 'px';
        peek.style.height = height + 'px';
    };

    const show = (cell) => {
        if (current === cell) return;
        if (current) current.classList.remove('is-morphed'); // вернуть предыдущую на место
        current = cell;
        cancelAnimationFrame(openFrame);

        const brand = cell.dataset.brand;
        peek.style.setProperty('--peek-brand', brand);
        peek.style.setProperty('--peek-weight', cell.dataset.weight);
        name.textContent = cell.querySelector('b').textContent;
        meta.textContent = cell.querySelector('span').textContent + ' \u00b7 ' + brand;

        /* стартовый кадр — точные габариты ячейки, без анимации */
        const r = cell.getBoundingClientRect();
        peek.classList.remove('is-on', 'is-open');
        peek.style.transition = 'none';
        setBox(r.left, r.top, r.width, r.height);
        peek.getBoundingClientRect(); // фиксируем стартовое состояние
        peek.style.transition = '';

        openFrame = requestAnimationFrame(() => {
            const { left, top } = fullRect(cell);
            peek.classList.add('is-on');
            setBox(left, top, FULL_W, FULL_H);
            cell.classList.add('is-morphed');
            peek.setAttribute('aria-hidden', 'false');
            openFrame = requestAnimationFrame(() => peek.classList.add('is-open'));
        });
    };

    /* обратный ход: съезжаемся назад в ячейку */
    const hide = () => {
        if (!current) return;
        const cell = current;
        current = null;
        cancelAnimationFrame(openFrame);
        const r = cell.getBoundingClientRect();
        peek.classList.remove('is-open');
        setBox(r.left, r.top, r.width, r.height);
        peek.classList.remove('is-on');
        cell.classList.remove('is-morphed');
        peek.setAttribute('aria-hidden', 'true');
    };

    cells.forEach((cell) => {
        cell.style.setProperty('--cell-brand', cell.dataset.brand);
        cell.addEventListener('focus', () => show(cell));
        cell.addEventListener('blur', hide);
    });

    /* Слушаем сетку целиком, а не каждую ячейку: при переходе между соседями
     Chrome иногда шлёт pointerenter новой раньше, чем pointerleave старой,
     и превью закрывалось сразу после открытия — ховер «через раз». */
    const grid = document.querySelector('.teams-grid');
    grid.addEventListener('pointerover', (e) => {
        const cell = e.target.closest('.team-cell[data-brand]');
        if (cell) show(cell);
    });
    grid.addEventListener('pointerleave', hide);

    /* На скролле превью не закрываем: Lenis шлёт события непрерывно, включая
     инерцию после остановки, и карточка захлопывалась сама. Вместо этого
     ведём её за ячейкой, а закрываем, только когда ячейка ушла с экрана. */
    let followFrame = 0;
    addEventListener(
        'scroll',
        () => {
            if (!current || followFrame) return;
            followFrame = requestAnimationFrame(() => {
                followFrame = 0;
                if (!current) return;
                const r = current.getBoundingClientRect();
                if (r.bottom < 0 || r.top > innerHeight) {
                    hide();
                    return;
                }
                const { left, top } = fullRect(current);
                peek.style.transition = 'none'; // за скроллом следуем без догоняющей анимации
                peek.style.left = left + 'px';
                peek.style.top = top + 'px';
                peek.getBoundingClientRect();
                peek.style.transition = '';
            });
        },
        { passive: true },
    );
})();

/* ---------- превью в блоке AI ----------
   Сюжеты запускаются, когда карточка попадает в кадр: код «печатается»,
   подключение MCP устанавливается, эскиз Builder собирается. */
(() => {
    const section = document.querySelector('#ai');
    if (!section) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const code = section.querySelector('.ai-code');
    const sketch = section.querySelector('.builder-sketch'); // могут отсутствовать — проверки ниже
    const mcp = section.querySelector('.mcp-link');
    const status = mcp && mcp.querySelector('.mcp-status');

    /* реплики статуса: рукопожатие → контекст → доступные методы */
    const steps = [
        [700, 'Рукопожатие…'],
        [1500, 'Контекст получен'],
        [2600, 'components · tokens · rules'],
    ];
    let timers = [];

    const play = (el) => {
        if (el && !reduce) el.classList.add('is-live');
    };
    const stop = (el) => {
        if (el) el.classList.remove('is-live');
    };

    const start = () => {
        play(code);
        play(sketch);
        if (reduce || !mcp) return;
        mcp.classList.add('is-live');
        timers = steps.map(([delay, text]) =>
            setTimeout(() => {
                if (status) status.textContent = text;
            }, delay),
        );
    };

    const reset = () => {
        stop(code);
        stop(sketch);
        timers.forEach(clearTimeout);
        timers = [];
        if (mcp) {
            mcp.classList.remove('is-live');
            if (status) status.textContent = 'Ожидание агента';
        }
    };

    /* повторяем при каждом возвращении в кадр — сюжет не «сгорает» после первого раза */
    new IntersectionObserver(
        (entries) => {
            entries[0].isIntersecting ? start() : reset();
        },
        { threshold: 0.35 },
    ).observe(section.querySelector('.bento'));
})();

/* ---------- выпуск версии ----------
   Полностью постановочный сценарий: ничего не собирается и не публикуется,
   показываем, как выглядит выпуск темы — шаги, прогресс и поздравление. */
(() => {
    const btn = document.getElementById('releaseBtn');
    const win = document.getElementById('builderWindow');
    const steps = [...document.querySelectorAll('#releaseSteps .release-step')];
    const canvas = document.getElementById('confetti');
    if (!btn || !win || !canvas) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const label = btn.textContent;
    let timers = [];
    let raf = 0;

    /* конфетти: короткий залп из центра карточки, частицы падают и гаснут */
    const burst = () => {
        const ctx = canvas.getContext('2d');
        const dpr = Math.min(devicePixelRatio || 1, 2);
        const w = innerWidth,
            h = innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        /* точка вылета — центр карточки с поздравлением, но в координатах экрана */
        const card = document.querySelector('.release-card').getBoundingClientRect();
        const originX = card.left + card.width / 2;
        const originY = card.top + card.height / 2;

        const colors = ['#ffffff', '#3ddc2a', '#4d8bff', '#ff8a33', '#9b7cff', '#ffd23d', '#ff5c8a'];
        const bits = Array.from({ length: 420 }, () => {
            const angle = -Math.PI / 2 + (Math.random() - 0.5) * 2.4;
            const speed = 6 + Math.random() * 10;
            return {
                x: originX,
                y: originY,
                vx: Math.cos(angle) * speed * (0.8 + Math.random() * 0.8),
                vy: Math.sin(angle) * speed,
                size: 8 + Math.random() * 10,
                rot: Math.random() * Math.PI,
                spin: (Math.random() - 0.5) * 0.18,
                color: colors[(Math.random() * colors.length) | 0],
                life: 1.5,
            };
        });

        const tick = () => {
            ctx.clearRect(0, 0, w, h);
            let alive = false;
            bits.forEach((b) => {
                b.vy += 0.1; // гравитация помягче — частицы дольше в кадре
                b.vx *= 0.992;
                b.x += b.vx;
                b.y += b.vy;
                b.rot += b.spin;
                b.life -= 0.0032;
                if (b.life <= 0 || b.y > h + 40) return;
                alive = true;
                ctx.save();
                ctx.translate(b.x, b.y);
                ctx.rotate(b.rot);
                ctx.globalAlpha = Math.max(0, Math.min(1, b.life));
                ctx.fillStyle = b.color;
                ctx.shadowColor = b.color; // свечение, чтобы частицы читались на тёмном
                ctx.shadowBlur = 12;
                ctx.fillRect(-b.size / 2, -b.size / 2, b.size, b.size * 0.62);
                ctx.restore();
            });
            raf = alive ? requestAnimationFrame(tick) : 0;
        };
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(tick);
    };

    const reset = () => {
        timers.forEach(clearTimeout);
        timers = [];
        cancelAnimationFrame(raf);
        raf = 0;
        const ctx = canvas.getContext('2d');
        ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
        win.classList.remove('is-releasing', 'is-released');
        steps.forEach((st) => st.classList.remove('is-active', 'is-done'));
        btn.disabled = false;
        btn.textContent = label;
    };

    /* клик по результату закрывает его, не дожидаясь таймера */
    document.querySelector('.release-done').addEventListener('click', () => {
        if (win.classList.contains('is-released')) reset();
    });

    btn.addEventListener('click', () => {
        if (win.classList.contains('is-releasing') || win.classList.contains('is-released')) {
            reset();
            return;
        }
        btn.disabled = true;
        btn.textContent = 'Выпускаем…';
        win.classList.add('is-releasing');

        if (reduce) {
            // без анимации — сразу результат
            win.classList.remove('is-releasing');
            win.classList.add('is-released');
            btn.textContent = 'Готово';
            timers.push(setTimeout(reset, 4000));
            return;
        }

        const each = 950;
        steps.forEach((step, i) => {
            timers.push(
                setTimeout(() => {
                    steps.forEach((s2, j) => {
                        if (j < i) {
                            s2.classList.remove('is-active');
                            s2.classList.add('is-done');
                        }
                    });
                    step.classList.remove('is-done');
                    step.classList.add('is-active');
                }, i * each),
            );
        });

        timers.push(
            setTimeout(() => {
                steps.forEach((st) => {
                    st.classList.remove('is-active');
                    st.classList.add('is-done');
                });
                win.classList.remove('is-releasing');
                win.classList.add('is-released');
                btn.textContent = 'Готово';
                burst();
            }, steps.length * each + 250),
        );

        timers.push(setTimeout(reset, steps.length * each + 8200));
    });
})();

/* ---------- сцена подключений Builder ----------
   Раскладываем узлы по колонкам, затем соединяем порты кривыми: координаты
   берём из реальных прямоугольников, поэтому связи не разъезжаются при ресайзе. */
(() => {
    const stage = document.getElementById('knStage');
    const svg = document.getElementById('knWires');
    if (!stage || !svg) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const core = stage.querySelector('.kn-core-card');
    const edit = stage.querySelector('.kn-edit');
    const ins = [...stage.querySelectorAll('.kn-in')];
    const outs = [...stage.querySelectorAll('.kn-out')];
    const NS = 'http://www.w3.org/2000/svg';
    const DUR = 2800; // общий цикл луча: по нему же идут волны

    /* раскладка: три ряда слева, ядро по центру, три ряда справа */
    const layout = () => {
        const w = stage.clientWidth,
            h = stage.clientHeight;
        const pad = 26,
            bottom = 44; // снизу оставляем место под подписи
        /* колонку раскладываем по фактическим высотам карточек: они разные,
       поэтому фиксированный шаг приводил к наложениям */
        const column = (list, side) => {
            const total = list.reduce((sum, el) => sum + el.offsetHeight, 0);
            const gap = Math.max(12, (h - pad - bottom - total) / (list.length - 1));
            let y = pad;
            list.forEach((el) => {
                el.style[side] = '28px';
                el.style.top = Math.round(y) + 'px';
                y += el.offsetHeight + gap;
            });
        };
        column(ins, 'left');
        column(outs, 'right');
        /* ядро выше центра: снизу к нему подключается команда системы */
        const stackH = core.offsetHeight + 74 + edit.offsetHeight;
        const startY = Math.max(pad, (h - bottom - stackH) / 2);
        core.style.left = Math.round((w - core.offsetWidth) / 2) + 'px';
        core.style.top = Math.round(startY) + 'px';
        edit.style.left = Math.round((w - edit.offsetWidth) / 2) + 'px';
        edit.style.top = Math.round(startY + core.offsetHeight + 74) + 'px';
    };

    const portCenter = (port) => {
        const r = port.getBoundingClientRect();
        const s = stage.getBoundingClientRect();
        return { x: r.left - s.left + r.width / 2, y: r.top - s.top + r.height / 2 };
    };

    const wires = [];
    const draw = () => {
        svg.innerHTML = '';
        wires.length = 0;
        const corePorts = core.querySelectorAll('.kn-port');
        const coreIn = portCenter(corePorts[0]);
        const coreOut = portCenter(corePorts[1]);

        /* импульс рисуем отдельной линией поверх пунктира */
        /* сегменты идут встык друг за другом: у головы полная плотность,
       дальше по длине луча яркость падает — получается градиент, а не наложение */
        const SEGS = [
            { len: 9, width: 2.4, opacity: 1, head: true },
            { len: 11, width: 2.1, opacity: 0.5 },
            { len: 14, width: 1.8, opacity: 0.24 },
            { len: 18, width: 1.4, opacity: 0.1 },
        ];
        const spark = (d, delay) => {
            let shift = 0; // отступ сегмента от головы, в единицах длины пути
            SEGS.forEach((seg) => {
                const el = document.createElementNS(NS, 'path');
                el.setAttribute('class', 'kn-spark' + (seg.head ? ' head' : ''));
                el.setAttribute('d', d);
                el.style.strokeWidth = seg.width;
                el.style.opacity = seg.opacity;
                svg.appendChild(el);
                const len = el.getTotalLength();
                el.style.strokeDasharray = seg.len + ' ' + len;
                el.animate([{ strokeDashoffset: len + seg.len }, { strokeDashoffset: 0 }], {
                    duration: DUR,
                    delay: delay * 1000 + (shift / len) * DUR,
                    iterations: Infinity,
                    easing: 'linear',
                });
                shift += seg.len; // следующий сегмент начинается там, где кончился этот
            });
        };

        const add = (from, to, card, delay) => {
            const dx = Math.max(60, (to.x - from.x) * 0.55);
            const d = `M${from.x} ${from.y} C${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`;
            const path = document.createElementNS(NS, 'path');
            path.setAttribute('class', 'kn-wire');
            path.setAttribute('d', d);
            path.setAttribute('id', 'wire-' + card.dataset.node);
            svg.appendChild(path);
            wires.push({ path, card });

            if (reduce) return;
            spark(d, delay);
        };

        ins.forEach((el, i) => add(portCenter(el.querySelector('.kn-port')), coreIn, el, i * 0.5));
        outs.forEach((el, i) => add(coreOut, portCenter(el.querySelector('.kn-port')), el, 1.4 + i * 0.5));

        /* нижняя ветка: команда системы правит ядро напрямую */
        const from = portCenter(edit.querySelector('.kn-port.up'));
        const to = portCenter(core.querySelector('.kn-port.down'));
        const dy = Math.max(30, (from.y - to.y) * 0.5);
        const d = `M${from.x} ${from.y} C${from.x} ${from.y - dy}, ${to.x} ${to.y + dy}, ${to.x} ${to.y}`;
        const path = document.createElementNS(NS, 'path');
        path.setAttribute('class', 'kn-wire');
        path.setAttribute('d', d);
        svg.appendChild(path);
        wires.push({ path, card: edit });
        if (!reduce) spark(d, 0.9);
    };

    /* Ядро отзывается на попадание: луч живёт DUR мс, значит долетает через
     delay + DUR, дальше — каждые DUR. На каждый прилёт сфера коротко подрастает. */
    let hitTimers = [];
    const clearHits = () => {
        hitTimers.forEach((id) => {
            clearTimeout(id);
            clearInterval(id);
        });
        hitTimers = [];
    };
    const hit = () => {
        /* растёт вся система целиком — сфера вместе с орбитами; масштаб на контейнере,
       иначе он затёр бы вращение колец, которое тоже живёт в transform */
        const orb = core.querySelector('.kn-orb');
        const dot = core.querySelector('.kn-orb-dot');
        const grow = (el, to) =>
            el &&
            el.animate([{ transform: 'scale(1)' }, { transform: 'scale(' + to + ')' }, { transform: 'scale(1)' }], {
                duration: 700,
                easing: 'cubic-bezier(.22,.61,.36,1)',
            });
        grow(orb, 1.12);
        grow(dot, 1.1);
    };
    const scheduleHits = () => {
        clearHits();
        if (reduce) return;
        ins.forEach((el, i) => {
            hitTimers.push(
                setTimeout(() => {
                    hit();
                    hitTimers.push(setInterval(hit, DUR));
                }, i * 500 + DUR),
            );
        });
    };

    const build = () => {
        layout();
        draw();
        scheduleHits();
    };
    build();
    addEventListener('resize', build);
    /* шрифты подгружаются позже и меняют высоту карточек — пересчитываем */
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(build);

    /* наведение подсвечивает узел, его порт и связь с ядром */
    [...ins, ...outs, edit].forEach((card) => {
        const hot = (state) => {
            card.classList.toggle('is-hot', state);
            core.classList.toggle('is-hot', state);
            const wire = wires.find((w) => w.card === card);
            wire && wire.path.classList.toggle('is-hot', state);
        };
        card.addEventListener('pointerenter', () => hot(true));
        card.addEventListener('pointerleave', () => hot(false));
    });
})();

/* появление блоков */
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, i) => {
            if (!entry.isIntersecting) return;
            entry.target.style.transitionDelay = i * 60 + 'ms';
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
        });
    },
    { threshold: 0.15 },
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* окно приложения: превью темы и панель свойств */
const stage = document.getElementById('stage');
const tones = [
    {
        name: 'Базовая',
        c: '#29ad18',
        dark: '#1f8412',
        soft: '#e4f1e1',
        ink: '#1d2a1b',
        ramp: ['#13300f', '#1f6b16', '#29ad18', '#8ed684', '#e4f1e1'],
    },
    {
        name: 'Сдержанная',
        c: '#2b8ced',
        dark: '#1f6cbb',
        soft: '#e0eaf9',
        ink: '#1c2940',
        ramp: ['#0f2745', '#1d5d9d', '#2b8ced', '#8fc2f7', '#e0edfc'],
    },
    {
        name: 'Тёплая',
        c: '#f0762b',
        dark: '#c65a18',
        soft: '#fbe8db',
        ink: '#3a2313',
        ramp: ['#3a1d08', '#a9521a', '#f0762b', '#f7b183', '#fbe8db'],
    },
    {
        name: 'Контрастная',
        c: '#7c5cff',
        dark: '#5b3fd6',
        soft: '#eae4ff',
        ink: '#241a45',
        ramp: ['#1d1340', '#4b31b0', '#7c5cff', '#b7a5ff', '#eae4ff'],
    },
];
const sizes = { s: { h: 38, label: '38 px' }, m: { h: 48, label: '48 px' }, l: { h: 56, label: '56 px' } };

function applyTone(i) {
    const t = tones[i];
    stage.style.setProperty('--sample', t.c);
    stage.style.setProperty('--sample-dark', t.dark);
    stage.style.setProperty('--sample-soft', t.soft);
    stage.style.setProperty('--sample-ink', t.ink);
    stage.querySelectorAll('.sample-ramp i').forEach((el, n) => el.style.setProperty('--ramp', t.ramp[n]));
    document.querySelectorAll('#toneList .swatch').forEach((b, n) => b.setAttribute('aria-pressed', String(n === i)));
    document.getElementById('pHex').textContent = t.c.toUpperCase();
    document.getElementById('toneIndex').textContent = '0' + (i + 1) + ' / 0' + tones.length;
}
function applyRadius(v) {
    stage.style.setProperty('--sample-radius', v + 'px');
    document.getElementById('pRadiusVal').textContent = v + ' px';
}
function applySize(key) {
    const sz = sizes[key];
    stage.style.setProperty('--sample-h', sz.h + 'px');
    document.getElementById('pHeight').textContent = sz.label;
    document
        .querySelectorAll('#pSize button')
        .forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.size === key)));
}
function applyWeight(w) {
    stage.style.setProperty('--sample-weight', w);
    document
        .querySelectorAll('#pWeight button')
        .forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.weight === w)));
}

document.getElementById('toneList').addEventListener('click', (e) => {
    const btn = e.target.closest('.swatch');
    if (!btn) return;
    applyTone(+btn.dataset.tone);
});
document.getElementById('pRadius').addEventListener('input', (e) => applyRadius(+e.target.value));
document.getElementById('pSize').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn) applySize(btn.dataset.size);
});
document.getElementById('pWeight').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn) applyWeight(btn.dataset.weight);
});

const layerToggle = document.getElementById('layerToggle');
const layerItems = [...stage.querySelectorAll('.sample-type, .sample-ramp, .sample-card')];
const layerMotion = matchMedia('(prefers-reduced-motion: reduce)');
let layerAnimations = [];
const composition = stage.querySelector('.composition');
let centeringFrame = 0;

// Центрируем общие видимые границы трёх слоёв, а не пустой absolute-контейнер.
// Наклоны, размеры и взаимное расположение карточек остаются прежними.
function centerComposition() {
    composition.style.translate = 'none';
    if (stage.classList.contains('is-exploded')) return;
    const canvas = stage.getBoundingClientRect();
    const bounds = layerItems.map((el) => el.getBoundingClientRect());
    const left = Math.min(...bounds.map((b) => b.left));
    const right = Math.max(...bounds.map((b) => b.right));
    const top = Math.min(...bounds.map((b) => b.top));
    const bottom = Math.max(...bounds.map((b) => b.bottom));
    const x = canvas.left + canvas.width / 2 - (left + right) / 2;
    const y = canvas.top + canvas.height / 2 - (top + bottom) / 2;
    composition.style.translate = x.toFixed(3) + 'px ' + y.toFixed(3) + 'px';
}
function queueCompositionCenter() {
    if (centeringFrame) return;
    centeringFrame = requestAnimationFrame(() => {
        centeringFrame = 0;
        // Animated layer bounds are temporary; wait for their final positions.
        if (layerAnimations.some((a) => a.playState === 'running')) return;
        centerComposition();
    });
}
if (typeof ResizeObserver !== 'undefined') {
    const compositionObserver = new ResizeObserver(queueCompositionCenter);
    [stage, ...layerItems].forEach((el) => compositionObserver.observe(el));
}
addEventListener('resize', queueCompositionCenter, { passive: true });
if (document.fonts) document.fonts.ready.then(queueCompositionCenter);

layerToggle.addEventListener('click', () => {
    // Capture before cancelling: a rapid second click continues from the visible positions.
    const before = layerItems.map((el) => el.getBoundingClientRect());
    layerAnimations.forEach((animation) => animation.cancel());
    layerAnimations = [];
    stage.classList.add('is-relayout');
    const on = stage.classList.toggle('is-exploded');
    layerToggle.setAttribute('aria-pressed', String(on));
    layerToggle.textContent = on ? 'Собрать слои' : 'Показать слои';
    centerComposition();
    const after = layerItems.map((el) => el.getBoundingClientRect());
    if (!layerMotion.matches) {
        layerItems.forEach((el, i) => {
            if (typeof el.animate !== 'function') return;
            const from = before[i],
                to = after[i];
            const dx = from.left + from.width / 2 - to.left - to.width / 2;
            const dy = from.top + from.height / 2 - to.top - to.height / 2;
            layerAnimations.push(
                el.animate(
                    [
                        {
                            translate: dx + 'px ' + dy + 'px',
                            scale: from.width / to.width + ' ' + from.height / to.height,
                        },
                        { translate: '0px 0px', scale: '1 1' },
                    ],
                    { duration: 480, easing: 'cubic-bezier(.16,1,.3,1)' },
                ),
            );
        });
    }
    // Computed layout above commits the target state before restoring normal transitions.
    stage.classList.remove('is-relayout');
    Promise.allSettled(layerAnimations.map((a) => a.finished)).then(queueCompositionCenter);
});

applyTone(0);
applyRadius(12);
applySize('m');
applyWeight('500');
centerComposition();

/* превью продукта за курсором */
const preview = document.getElementById('floatPreview');
const previewImg = document.getElementById('floatImg');
let px = 0,
    py = 0,
    ptx = 0,
    pty = 0,
    previewOn = false;
document.querySelectorAll('.row-item').forEach((row) => {
    row.addEventListener('pointerenter', () => {
        previewImg.src = row.dataset.shot;
        preview.classList.add('is-on');
        previewOn = true;
    });
    row.addEventListener('pointerleave', () => {
        preview.classList.remove('is-on');
        previewOn = false;
    });
});
addEventListener('pointermove', (e) => {
    ptx = e.clientX + 190;
    pty = e.clientY;
});
(function follow() {
    px += (ptx - px) * 0.13;
    py += (pty - py) * 0.13;
    if (previewOn) (preview.style.left = px + 'px'), (preview.style.top = py + 'px');
    requestAnimationFrame(follow);
})();
