import { byId, select, selectAll } from '../dom';
import { publicPath } from '../paths';

import { createEffectScope } from './lifecycle';

export function initIcons() {
    const { addEventListener, requestAnimationFrame, setTimeout, clearTimeout, destroy } = createEffectScope();

    /* ---------- каталог иконок ----------
   Набор большой — две с лишним тысячи файлов на три размера, — поэтому данные
   лежат отдельно и грузятся по мере надобности: сначала лёгкий список с
   категориями и тегами, затем разметка выбранного размера. Другие размеры
   подтягиваются только если их выбрали.

   Рисуем порциями: если выложить восемьсот иконок за один проход, страница
   заметно замирает. */

    (() => {
        const grid = byId('iconsGrid');
        if (!grid) return;

        const search = byId('iconsSearch');
        const count = byId('iconsCount');
        const cats = byId('iconsCats');
        const version = byId('iconsVersion');
        const panel = select('.icons-panel');

        const state: { set: string; style: string; size: number; query: string; category: string | null } = {
            set: 'sdds',
            style: 'Outline',
            size: 24,
            query: '',
            category: null,
        };
        const svg: Record<string, any> = {}; // набор и размер → { имя: разметка }
        const metas: Record<string, any> = {}; // набор → { имя: { категория, теги } }
        let meta: Record<string, any> = {}; // метаданные текущего набора
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

        const load = async (path): Promise<any> => {
            const answer = await fetch(path);
            if (!answer.ok) throw new Error(path);
            return answer.json();
        };

        const styleOf = (name): string | null => {
            if (name.endsWith('OutlineBold')) return 'OutlineBold';
            if (name.endsWith('Outline')) return 'Outline';
            if (name.endsWith('Fill')) return 'Fill';
            return null;
        };

        const label = (name) => name.replace(/(OutlineBold|Outline|Fill)$/, '');

        /* Поиск идёт по имени, категории и тегам — в тегах есть русские слова,
     поэтому «стрелка» и «arrow» находят одно и то же. */
        const matches = (name) => {
            const info = meta[name];
            if (state.category && (!info || info.c !== state.category)) return false;
            if (!state.query) return true;
            const hay = `${name} ${info ? `${info.c} ${info.a}` : ''}`.toLowerCase();
            return state.query.split(/\s+/).every((word) => hay.includes(word));
        };

        const draw = () => {
            const mark = ++drawing;
            const names = Object.keys(svg[key()])
                .filter((name) => styleOf(name) === state.style && matches(name))
                .sort();

            grid.replaceChildren();
            say(names.length ? `<b>${names.length}</b> ${plural(names.length)}` : 'ничего не нашлось');

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
                        head.innerHTML = `${cat}<i>${list.length}</i>`;
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
                            `<svg viewBox="0 0 ${state.size} ${state.size}" width="${state.size}" height="${
                                state.size
                            }">${svg[key()][name]}</svg></span>` +
                            `<span class="icon-name">${label(name)}</span>`;
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
            if (tail === 1) return 'иконка';
            if (tail > 1 && tail < 5) return 'иконки';
            return 'иконок';
        };

        const key = () => `${state.set}-${state.size}`;

        /* Начертания у наборов разные: в прежнем нет Outline Bold. Показываем только
     те кнопки, для которых в наборе есть иконки, и уводим выбор с пропавшего. */
        const syncStyles = () => {
            const have = new Set<string>(
                Object.keys(svg[key()])
                    .map(styleOf)
                    .filter((style): style is string => Boolean(style)),
            );
            let fallback = null;

            panel.querySelectorAll('button[data-style]').forEach((button) => {
                const ok = have.has(button.dataset.style);
                button.hidden = !ok;
                if (ok && !fallback) fallback = button;
            });

            if (!have.has(state.style) && fallback) {
                state.style = fallback.dataset.style;
                selectAll('button[data-style]').forEach((button) =>
                    button.classList.toggle('is-on', button === fallback),
                );
            }
        };

        /* Набор и размер подгружаем при первом обращении и запоминаем. */
        const ensure = async () => {
            if (svg[key()]) return;
            say('загружаем…');
            svg[key()] = await load(publicPath(`/data/icons-${state.set}-${state.size}.json`));
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
            const info: any = await load(publicPath('/data/icons-sdds-meta.json'));
            metas.sdds = info.icons;
            meta = info.icons;
            if (version && info.version) version.textContent = `SDDS Icons ${info.version}`;
        };

        let order = []; // категории от крупных к мелким — в этом порядке идут группы

        const buildCats = () => {
            cats.replaceChildren();
            order = [];
            cats.hidden = !Object.keys(meta).length; // у прежнего набора категорий нет
            if (cats.hidden) return;
            const tally = new Map();
            Object.entries(meta).forEach(([name, info]: [string, any]) => {
                if (styleOf(name) !== 'Outline') return; // считаем по одному начертанию
                tally.set(info.c, (tally.get(info.c) || 0) + 1);
            });
            order.push(...[...tally.entries()].sort((a, b) => b[1] - a[1]).map((item) => item[0]));

            const chip = (value, text, n = 0) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.dataset.category = value;
                if (value === '') button.className = 'is-on';
                button.innerHTML = n ? `${text}<i>${n}</i>` : text;
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

        const clear = byId('iconsClear');
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

    return destroy;
}
