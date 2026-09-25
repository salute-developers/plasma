export function initIcons() {
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

    /* ---------- каталог иконок ----------
   Набор большой — две с лишним тысячи файлов на три размера, — поэтому данные
   лежат отдельно и грузятся по мере надобности: сначала лёгкий список с
   категориями и тегами, затем разметка выбранного размера. Другие размеры
   подтягиваются только если их выбрали.

   Рисуем порциями: если выложить восемьсот иконок за один проход, страница
   заметно замирает. */

    (() => {
        const grid = document.getElementById('iconsGrid');
        if (!grid) return;

        const search = document.getElementById('iconsSearch');
        const count = document.getElementById('iconsCount');
        const cats = document.getElementById('iconsCats');
        const version = document.getElementById('iconsVersion');
        const panel = document.querySelector('.icons-panel');

        const state = { set: 'sdds', style: 'Outline', size: 24, query: '', category: null };
        const svg = {}; // набор и размер → { имя: разметка }
        const metas = {}; // набор → { имя: { категория, теги } }
        let meta = {}; // метаданные текущего набора
        let drawing = 0; // номер текущей отрисовки: старые обрываем

        const say = (html) => {
            count.innerHTML = html;
        };

        /* Сообщение о скопированном имени: появляется под шапкой и сам уходит.
     Без него клик по иконке ничем не отвечает и непонятно, сработало ли. */
        let toast = null;
        let toastTimer = 0;

        const flash = (text) => {
            if (!toast) {
                toast = document.createElement('div');
                toast.className = 'toast';
                toast.setAttribute('role', 'status');
                document.body.append(toast);
            }
            // круг с галочкой: короткий знак, что действие прошло
            toast.innerHTML =
                '<svg class="toast-mark" viewBox="0 0 20 20" aria-hidden="true">' +
                '<circle cx="10" cy="10" r="8.25"/><path d="M6.4 10.3l2.5 2.5 4.7-5"/></svg>' +
                '<span></span>';
            toast.querySelector('span').textContent = text;
            toast.classList.add('is-on');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => toast.classList.remove('is-on'), 1800);
        };

        const load = async (path) => {
            const answer = await fetch(path);
            if (!answer.ok) throw new Error(path);
            return answer.json();
        };

        const styleOf = (name) =>
            name.endsWith('OutlineBold')
                ? 'OutlineBold'
                : name.endsWith('Outline')
                ? 'Outline'
                : name.endsWith('Fill')
                ? 'Fill'
                : null;

        const label = (name) => name.replace(/(OutlineBold|Outline|Fill)$/, '');

        /* Поиск идёт по имени, категории и тегам — в тегах есть русские слова,
     поэтому «стрелка» и «arrow» находят одно и то же. */
        const matches = (name) => {
            const info = meta[name];
            if (state.category && (!info || info.c !== state.category)) return false;
            if (!state.query) return true;
            const hay = (name + ' ' + (info ? info.c + ' ' + info.a : '')).toLowerCase();
            return state.query.split(/\s+/).every((word) => hay.includes(word));
        };

        const draw = () => {
            const mark = ++drawing;
            const names = Object.keys(svg[key()])
                .filter((name) => styleOf(name) === state.style && matches(name))
                .sort();

            grid.replaceChildren();
            say(names.length ? '<b>' + names.length + '</b> ' + plural(names.length) : 'ничего не нашлось');

            /* Раскладываем по категориям: так видно, к чему относится иконка,
       и похожие оказываются рядом. */
            const groups = new Map();
            names.forEach((name) => {
                const cat = (meta[name] && meta[name].c) || 'Others';
                if (!groups.has(cat)) groups.set(cat, []);
                groups.get(cat).push(name);
            });

            const plan = order.filter((cat) => groups.has(cat));
            [...groups.keys()].forEach((cat) => {
                if (!plan.includes(cat)) plan.push(cat);
            });

            let bucket = 0;
            let index = 0;
            let box = null;

            const portion = () => {
                if (mark !== drawing) return; // пока рисовали, запрос поменялся
                let drawn = 0;

                while (drawn < 120 && bucket < plan.length) {
                    const cat = plan[bucket];
                    const list = groups.get(cat);

                    if (index === 0) {
                        const head = document.createElement('p');
                        head.className = 'icons-group';
                        head.innerHTML = cat + '<i>' + list.length + '</i>';
                        grid.append(head);
                        box = document.createElement('div');
                        box.className = 'icons-row';
                        grid.append(box);
                    }

                    for (; drawn < 120 && index < list.length; index++, drawn++) {
                        const name = list[index];
                        const cell = document.createElement('button');
                        cell.type = 'button';
                        cell.className = 'icon-cell';
                        cell.title = name;
                        cell.dataset.name = name;
                        cell.innerHTML =
                            '<span class="icon-art">' +
                            '<svg viewBox="0 0 ' +
                            state.size +
                            ' ' +
                            state.size +
                            '" width="' +
                            state.size +
                            '" height="' +
                            state.size +
                            '">' +
                            svg[key()][name] +
                            '</svg></span>' +
                            '<span class="icon-name">' +
                            label(name) +
                            '</span>';
                        box.append(cell);
                    }

                    if (index >= list.length) {
                        bucket++;
                        index = 0;
                    }
                }

                if (bucket < plan.length) requestAnimationFrame(portion);
            };
            portion();
        };

        const plural = (n) => {
            const tail = n % 100 > 10 && n % 100 < 20 ? 0 : n % 10;
            return tail === 1 ? 'иконка' : tail > 1 && tail < 5 ? 'иконки' : 'иконок';
        };

        const key = () => state.set + '-' + state.size;

        /* Начертания у наборов разные: в прежнем нет Outline Bold. Показываем только
     те кнопки, для которых в наборе есть иконки, и уводим выбор с пропавшего. */
        const syncStyles = () => {
            const have = new Set(Object.keys(svg[key()]).map(styleOf));
            let fallback = null;

            panel.querySelectorAll('button[data-style]').forEach((button) => {
                const ok = have.has(button.dataset.style);
                button.hidden = !ok;
                if (ok && !fallback) fallback = button;
            });

            if (!have.has(state.style) && fallback) {
                state.style = fallback.dataset.style;
                panel
                    .querySelectorAll('button[data-style]')
                    .forEach((button) => button.classList.toggle('is-on', button === fallback));
            }
        };

        /* Набор и размер подгружаем при первом обращении и запоминаем. */
        const ensure = async () => {
            if (svg[key()]) return;
            say('загружаем…');
            svg[key()] = await load(`/data/icons-${state.set}-${state.size}.json`);
            syncStyles();
        };

        /* Категории и теги есть только у нового набора: у Plasma манифеста нет,
     поэтому там ищем по имени, а фильтр категорий прячем. */
        const ensureMeta = async () => {
            if (metas[state.set] !== undefined) {
                meta = metas[state.set] || {};
                return;
            }
            if (state.set !== 'sdds') {
                metas[state.set] = null;
                meta = {};
                return;
            }
            const info = await load('/data/icons-sdds-meta.json');
            metas.sdds = info.icons;
            meta = info.icons;
            if (version && info.version) version.textContent = 'SDDS Icons ' + info.version;
        };

        let order = []; // категории от крупных к мелким — в этом порядке идут группы

        const buildCats = () => {
            cats.replaceChildren();
            order = [];
            cats.hidden = !Object.keys(meta).length; // у прежнего набора категорий нет
            if (cats.hidden) return;
            const tally = new Map();
            Object.entries(meta).forEach(([name, info]) => {
                if (styleOf(name) !== 'Outline') return; // считаем по одному начертанию
                tally.set(info.c, (tally.get(info.c) || 0) + 1);
            });
            order.push(...[...tally.entries()].sort((a, b) => b[1] - a[1]).map((item) => item[0]));

            const chip = (value, text, n) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.dataset.category = value;
                if (value === '') button.className = 'is-on';
                button.innerHTML = n ? text + '<i>' + n + '</i>' : text;
                cats.append(button);
            };

            chip('', 'Все');
            order.forEach((name) => chip(name, name, tally.get(name)));
        };

        cats.addEventListener('click', (event) => {
            const button = event.target.closest('button');
            if (!button) return;
            [...cats.children].forEach((item) => item.classList.toggle('is-on', item === button));
            state.category = button.dataset.category || null;
            draw();
        });

        /* Клик по иконке копирует имя: это то, что нужно разработчику,
     и то, что дизайнер ищет в библиотеке. */
        grid.addEventListener('click', (event) => {
            const cell = event.target.closest('.icon-cell');
            if (!cell) return;
            // отказ буфера (нет прав или окно не в фокусе) не должен ронять обработчик
            navigator.clipboard?.writeText(cell.dataset.name).catch(() => {});
            cell.classList.add('is-copied');
            setTimeout(() => cell.classList.remove('is-copied'), 900);
            flash(`Скопировано: ${cell.dataset.name}`);
        });

        panel.addEventListener('click', async (event) => {
            const button = event.target.closest('button[data-set], button[data-style], button[data-size]');
            if (!button) return;
            const group = button.parentElement;
            [...group.children].forEach((item) => item.classList.toggle('is-on', item === button));

            if (button.dataset.style) state.style = button.dataset.style;
            if (button.dataset.size) state.size = Number(button.dataset.size);

            if (button.dataset.set) {
                state.set = button.dataset.set;
                state.category = null;
                await ensureMeta();
                await ensure();
                buildCats();
                draw();
                return;
            }

            await ensure();
            draw();
        });

        const clear = document.getElementById('iconsClear');
        const field = search.closest('.doc-search');

        const apply = () => {
            state.query = search.value.trim().toLowerCase();
            field.classList.toggle('has-query', Boolean(search.value));
            draw();
        };

        let typing = 0;
        search.addEventListener('input', () => {
            clearTimeout(typing);
            typing = setTimeout(apply, 120);
        });

        clear?.addEventListener('click', () => {
            search.value = '';
            apply();
            search.focus();
        });

        (async () => {
            try {
                await Promise.all([ensureMeta(), ensure()]);
                buildCats();
                draw();
            } catch (error) {
                say('не удалось загрузить набор');
            }
        })();
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
