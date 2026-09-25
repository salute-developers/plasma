export function initReveal() {
    let active = true;
    const listeners = [];
    const observers = [];
    const frames = new Set();
    const timers = new Set();
    const intervals = new Set();
    const addEventListener = (type, callback, options) => {
        globalThis.addEventListener(type, callback, options);
        listeners.push([globalThis, type, callback, options]);
    };
    const removeEventListener = (type, callback, options) => globalThis.removeEventListener(type, callback, options);
    const trackDocumentListener = (type, callback, options) => {
        document.addEventListener(type, callback, options);
        listeners.push([document, type, callback, options]);
    };
    const untrackDocumentListener = (type, callback, options) => document.removeEventListener(type, callback, options);
    const requestAnimationFrame = (callback) => {
        if (!active) return 0;
        const id = globalThis.requestAnimationFrame((time) => {
            frames.delete(id);
            if (active) callback(time);
        });
        frames.add(id);
        return id;
    };
    const cancelAnimationFrame = (id) => {
        globalThis.cancelAnimationFrame(id);
        frames.delete(id);
    };
    const setTimeout = (callback, delay, ...args) => {
        const id = globalThis.setTimeout(() => {
            timers.delete(id);
            if (active) callback(...args);
        }, delay);
        timers.add(id);
        return id;
    };
    const clearTimeout = (id) => {
        globalThis.clearTimeout(id);
        timers.delete(id);
    };
    const setInterval = (callback, delay, ...args) => {
        const id = globalThis.setInterval(() => {
            if (active) callback(...args);
        }, delay);
        intervals.add(id);
        return id;
    };
    const clearInterval = (id) => {
        globalThis.clearInterval(id);
        intervals.delete(id);
    };
    const NativeIntersectionObserver = globalThis.IntersectionObserver;
    const IntersectionObserver =
        NativeIntersectionObserver &&
        class extends NativeIntersectionObserver {
            constructor(callback, options) {
                super((...args) => {
                    if (active) callback(...args);
                }, options);
                observers.push(this);
            }
        };
    const NativeResizeObserver = globalThis.ResizeObserver;
    const ResizeObserver =
        NativeResizeObserver &&
        class extends NativeResizeObserver {
            constructor(callback) {
                super((...args) => {
                    if (active) callback(...args);
                });
                observers.push(this);
            }
        };

    /* ---------- появление блоков ----------
   Один сценарий на все страницы: содержимое проявляется из размытия и легкого
   сдвига, внутри группы — по очереди. Блоки первого экрана показываются сразу
   при загрузке, остальные — когда попадают в кадр.

   Что сюда не попадает: липкие колонки, окно конфигуратора и сцена связей на
   главной, витрина продуктов. У них свои анимации и абсолютные слои, а внешний
   filter на родителе сбивает и стекло, и позиционирование. */

    (() => {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        /* Типовые блоки страниц портала. Список ведём здесь, а не разметкой, чтобы
     не проставлять класс руками на двадцати с лишним страницах. */
        const GROUPS = [
            '.screen-head > *',
            '.split-row > *',
            '.page-title, .page-lead, .doc-search',
            '.doc-block-head > *',
            '.metrics > div',
            '.doc-cards > *',
            '.cat-cards > *',
            '.res-cards > *',
            '.route-cards > *',
            '.flow-chain > li',
            '.filters, .filter-count',
            '.posts > *',
            '.channels > *',
            '.scenarios > *',
            '.owners > *',
            '.comp-cards > *',
            '.comp-group-head',
            '.steps > *',
            '.bento > *',
            '.teams-head > *',
            '.teams-grid > *',
            '.release-steps > *',
            '.contact-grid > *',
            '.article > .crumbs, .article > .article-meta, .article > h1, .article > .article-lead',
            '.article > h2, .article > h3, .article > p, .article > ul, .article > ol',
            '.article-figure, .callout, .doc-table-wrap, .article-foot',
            '.sandbox',
            '.res-card, .route-list',
            '.side-card',
            '.demo',
            '.shot',
            '.feature-row > *',
            '.page-head .shell > *',
            '.hero-inner > *',
            '.app-window, .kn-stage',
            '.doc-tree, .article-side',
        ];

        /* Блоки, которые появляются целиком, без размытия: внутри у них абсолютные
     слои и собственные переходы, и внешний filter сбил бы и то, и другое. */
        const SOLID = ['.app-window', '.kn-stage', '.sandbox'];

        const SKIP = [
            '.panel',
            '.hero-media',
            '.hero-scrim',
            '.showcase',
            '.showcase-stage',
            '.app-window',
            '.kn-stage',
            '.doc-tree',
            '.hero-shot',
            /* карточки метрик — сплошное стекло: любое движение или
                   прозрачность на них или вокруг них срывает размытие */
            '.hero-cards',
        ];

        /* Гасим группы до первой отрисовки: иначе блоки успевают мигнуть видимыми.
     Правило снимаем сразу после разметки элементов — дальше состоянием
     управляют классы. Без скриптов стиль не появляется вовсе, и контент виден. */
        const initStyle = document.createElement('style');
        initStyle.textContent = GROUPS.join(',') + '{visibility:hidden}';
        document.head.append(initStyle);

        const start = () => {
            const seen = new Set();
            const groups = [];

            GROUPS.forEach((selector) => {
                document.querySelectorAll(selector).forEach((el) => {
                    if (seen.has(el)) return;
                    // SKIP закрывает внутренности блока, но не сам блок: окно конфигуратора
                    // мы анимируем целиком, а его содержимое — нет
                    if (
                        SKIP.some((skip) => {
                            const box = el.closest(skip);
                            return box && box !== el;
                        })
                    )
                        return;
                    seen.add(el);
                    const parent = el.parentElement;
                    const group = groups.find((g) => g.parent === parent);
                    if (group) group.items.push(el);
                    else groups.push({ parent, items: [el] });
                });
            });

            if (!groups.length) {
                initStyle.remove();
                return;
            }

            /* Снимаем filter, когда переход закончился: blur(0) продолжает держать
     композитный слой, а из-за лишних слоёв на скруглениях появлялись краевые
     артефакты. */
            const settle = (el, delay) =>
                setTimeout(() => {
                    el.style.filter = '';
                    el.classList.add('is-settled'); // снимает filter и с внутренних частей
                }, delay + 1500);

            /* Все блоки подъезжают одинаково. Раньше внутри группы был шаг задержки,
     и соседние карточки всегда оказывались в разной фазе — страница читалась рвано. */
            const show = (el) => {
                el.classList.add('is-rise');
                settle(el, 0);
            };

            /* filter на элементе создаёт свой слой, и backdrop-filter внутри начинает
     размывать этот слой, а не страницу — стекло пропадает. Поэтому у блоков со
     стеклом размывается содержимое, а не сам блок: см. .rise-soft в стилях. */
            const blurs = (style) => (style.backdropFilter || style.webkitBackdropFilter || 'none') !== 'none';

            /* Стекло бывает и на псевдоэлементе — так сделаны буквы заголовка первого
     экрана: размытие живёт на ::before, обрезанном по глифам. */
            const glass = (el) =>
                blurs(getComputedStyle(el)) ||
                blurs(getComputedStyle(el, '::before')) ||
                blurs(getComputedStyle(el, '::after'));

            /* Материалом считаем только крупное стекло. Из-за иконки в углу или кнопки
     «скопировать» целая карточка уходила в щадящий режим: рамка оставалась
     резкой, а размывалось только содержимое — выглядело сломанным. Мелкое
     стекло на секунду теряет размытие, и этого не видно. */
            const BIG_GLASS = 0.25;

            const holdsGlass = (el) => {
                const box = el.getBoundingClientRect();
                const area = box.width * box.height;
                if (!area) return false;
                let glassy = 0;
                for (const child of el.querySelectorAll('*')) {
                    if (!glass(child)) continue;
                    const cb = child.getBoundingClientRect();
                    glassy += cb.width * cb.height;
                    // считаем сумму: ряд из четырёх стеклянных карточек — это материал блока,
                    // хотя каждая по отдельности занимает лишь пятую часть его площади
                    if (glassy > area * BIG_GLASS) return true;
                }
                return false;
            };

            /* Стекло и композитные свойства не уживаются: пока у блока или его предка
     идёт переход opacity, transform или filter, он становится отдельным слоем,
     и backdrop-filter внутри перестаёт видеть страницу — блок стоит без
     размытия, пока анимация не кончится.

     Чтобы стиль появления был один на весь сайт, блок со стеклом поднимается
     тем же движением, но layout-свойством top: оно слоя не создаёт. Размытие и
     проявление берут на себя его внутренние части, где стекла нет. */
            const inner = (el, out = []) => {
                [...el.children].forEach((child) => {
                    if (glass(child)) return; // сам материал не трогаем
                    if (SKIP.some((sel) => child.matches(sel))) return; // и то, что вынесено из появления
                    if (holdsGlass(child)) inner(child, out);
                    // внутри ещё есть стекло — спускаемся
                    else out.push(child);
                });
                return out;
            };

            const io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;
                        const { target } = entry;
                        io.unobserve(target);
                        show(target);
                    });
                    /* Порог глубже края экрана: иначе блок успевал проявиться, пока его ещё
       не видно, и при прокрутке казалось, что анимации нет. */
                },
                { threshold: 0.06, rootMargin: '0px 0px -18% 0px' },
            );

            /* Всё, что хоть краем попало в окно при загрузке, показываем сразу.
     С запасом в 0.9 экрана между этой границей и порогом наблюдателя (-18%)
     оставалась мёртвая зона: нижние карточки первого экрана видны, но пусты,
     потому что сразу их не показали, а в кадр по правилам они ещё не вошли. */
            const fold = innerHeight;
            groups.forEach((group) => {
                group.items.forEach((el) => {
                    el.classList.add('rise');

                    // блок с собственной сценой внутри едет целиком, без размытия
                    if (SOLID.some((sel) => el.matches(sel))) {
                        el.classList.add('rise-solid');
                        return;
                    }

                    if (glass(el) || holdsGlass(el)) {
                        el.classList.add('rise-lift');
                        inner(el).forEach((part) => part.classList.add('rise-in'));
                        return;
                    }

                    // обычный блок: подъём, проявление и размытие на нём самом
                    el.classList.add('rise-plain');
                });
            });

            // начальное состояние теперь на классах — общее правило больше не нужно
            initStyle.remove();

            groups.forEach((group) => {
                group.items.forEach((el) => {
                    /* Блок уже на первом экране — показываем сразу, ждать скролла нечего.
         Даём кадр, чтобы начальное состояние успело встать, иначе перехода не
         будет вовсе. В фоновой вкладке кадров нет, поэтому рядом идёт таймер:
         он доведёт показ до конца, даже если кадр так и не наступит. */
                    if (el.getBoundingClientRect().top < fold) {
                        let shown = false;
                        const once = () => {
                            if (!shown) {
                                shown = true;
                                show(el);
                            }
                        };
                        requestAnimationFrame(once);
                        setTimeout(once, 400);
                    } else io.observe(el);
                });
            });
        };

        if (document.readyState === 'loading') trackDocumentListener('DOMContentLoaded', start);
        else start();
    })();

    return () => {
        active = false;
        listeners.forEach(([target, type, callback, options]) => target.removeEventListener(type, callback, options));
        observers.forEach((observer) => observer.disconnect());
        frames.forEach((id) => globalThis.cancelAnimationFrame(id));
        timers.forEach((id) => globalThis.clearTimeout(id));
        intervals.forEach((id) => globalThis.clearInterval(id));
    };
}
