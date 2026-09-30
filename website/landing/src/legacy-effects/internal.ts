import { byId, select, selectAll } from '../dom';

import { createEffectScope } from './lifecycle';

export function initInternal() {
    const { addEventListener, requestAnimationFrame, setTimeout, destroy } = createEffectScope();

    /* ---------- внутренние страницы ----------
   Сценарии новостей, контактов, статьи и документации. Плавный скролл и панель
   живут в core.js — он общий для всех страниц.
   Появление блоков — в reveal.js, окно поиска — в search.js. */

    /* ---------- фильтр публикаций ----------
   Фильтрация по data-kind: кнопка «Все» показывает всё, остальные — свой тип.
   Счётчик в заголовке пересчитывается, чтобы было видно объём выборки. */
    (() => {
        const chips = [...selectAll('.filter-chip')];
        const posts = [...selectAll('.post[data-kind]')];
        const counter = byId('postCount');
        if (!chips.length || !posts.length) return;

        const apply = (kind) => {
            let shown = 0;
            posts.forEach((post) => {
                const match = kind === 'all' || post.dataset.kind === kind;
                post.hidden = !match;
                if (match) shown++;
            });
            if (counter) counter.textContent = shown;
            chips.forEach((chip) => chip.classList.toggle('is-active', chip.dataset.kind === kind));
        };

        chips.forEach((chip) => chip.addEventListener('click', () => apply(chip.dataset.kind)));
        apply('all');
    })();

    /* ---------- копирование адреса ----------
   На странице контактов почта копируется по клику: ссылка mailto открывает
   почтовый клиент не у всех, а адрес нужен всем. */
    (() => {
        selectAll('[data-copy]').forEach((button) => {
            button.addEventListener('click', async () => {
                const value = button.dataset.copy;
                try {
                    await navigator.clipboard.writeText(value);
                    const label = button.querySelector('.copy-label');
                    if (!label) return;
                    const before = label.textContent;
                    label.textContent = 'Скопировано';
                    setTimeout(() => {
                        label.textContent = before;
                    }, 1600);
                } catch (e) {
                    /* буфер недоступен — адрес виден на кнопке и так */
                }
            });
        });
    })();

    /* ---------- оглавление статьи ----------
   Отмечаем раздел, который сейчас в верхней части экрана: заголовки идут
   потоком, поэтому берём последний, чья граница уже прошла линию отсчёта.
   Подпункты раскрываем только у текущего раздела: в больших документах
   полный список из двух десятков пунктов не помещается на экран. */
    (() => {
        const list = select('.toc-list');
        if (!list) return;
        const links = [...list.querySelectorAll('a')];
        if (!links.length) return;

        const find = (href) => {
            try {
                return select(href);
            } catch (e) {
                return null;
            }
        };

        // для каждого пункта запоминаем раздел верхнего уровня, к которому он относится
        let top = null;
        const items = links
            .map((link) => {
                const sub = link.classList.contains('is-sub');
                if (!sub) top = link;
                return { link, sub, top, section: find(link.getAttribute('href')) };
            })
            .filter((item) => item.section);
        if (!items.length) return;

        list.classList.add('is-live');

        let frame = 0;
        const update = () => {
            frame = 0;
            const line = 160; // чуть ниже липкой панели
            let current = items[0];
            items.forEach((item) => {
                if (item.section.getBoundingClientRect().top <= line) current = item;
            });
            const branch = current.sub ? current.top : current.link;
            items.forEach((item) => {
                item.link.classList.toggle('is-current', item === current);
                if (item.sub) item.link.classList.toggle('is-open', item.top === branch);
            });
        };

        addEventListener(
            'scroll',
            () => {
                if (!frame) frame = requestAnimationFrame(update);
            },
            { passive: true },
        );
        update();
    })();

    /* ---------- дерево документации на узком экране ----------
   <details> открыт в разметке, чтобы страница без скриптов оставалась
   читаемой. На узком экране закрываем его: там дерево идёт перед текстом
   и в раскрытом виде занимает весь первый экран. */
    (() => {
        const fold = select('.doc-tree-fold');
        if (!fold) return;
        const narrow = matchMedia('(max-width:1100px)');
        const sync = () => {
            fold.open = !narrow.matches;
        };
        narrow.addEventListener('change', sync);
        sync();
    })();

    /* ---------- дерево: показать текущую страницу ----------
   Списки всех категорий показаны целиком, и колонка длиннее экрана — без
   этого открытая страница оказывается ниже видимой части дерева. */
    (() => {
        const tree = select('.doc-tree');
        const current = tree && tree.querySelector('.is-current');
        if (!tree || !current) return;

        const show = () => {
            const box = current.getBoundingClientRect();
            const area = tree.getBoundingClientRect();
            if (box.top >= area.top && box.bottom <= area.bottom) return; // и так виден
            tree.scrollTop += box.top - area.top - area.height / 2 + box.height / 2;
        };

        show();
        // высота дерева меняется, когда подгрузился шрифт
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(show);
    })();

    /* ---------- поиск по каталогу документации ----------
   Ищем по всему тексту карточки: названия разделов английские, а описания
   русские, поэтому поиск только по имени бесполезен. Компоненты — строки
   списка, их прячем поштучно, а категорию убираем, когда в ней ничего не
   осталось. Пустые группы скрываем целиком, чтобы не висели заголовки. */
    (() => {
        const field = byId('docSearch');
        if (!field) return;

        const cards = [...selectAll('.doc-card, .cat-card')];
        const rows = [...selectAll('.comp-card')];
        const cats = [...selectAll('.comp-group, .comp-cards')];
        const blocks = [...selectAll('.doc-block')];
        const counter = byId('docFound');
        const totalEl = counter && counter.parentElement;
        const total = selectAll('.doc-card, .comp-card').length;

        /* Второе число в счётчике было записано в разметке руками и разъезжалось с
     каталогом, стоило добавить страницу: «68 из 67». Считаем оба числа по
     живому DOM. */
        if (totalEl) {
            [...totalEl.childNodes].forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) node.textContent = ` из ${total}`;
            });
        }
        if (counter) counter.textContent = total;

        /* Подписи блоков («12 страниц», «55 спецификаций») тоже были записаны руками.
     Проставляем по факту — иначе после каждой новой страницы каталог врёт. */
        selectAll('.doc-block').forEach((block) => {
            const note = block.querySelector('.doc-block-head span');
            if (!note) return;
            const count = block.querySelectorAll('.doc-card, .comp-card').length;
            if (count) note.textContent = note.textContent.replace(/\d+(?=\s*(страниц|спецификац))/, count);
        });

        /* Ищем по началу слова: запрос «кнопка» должен находить и «кнопок», и
     «кнопки». Длинные слова усекаем до четырёх букв — этого хватает, чтобы
     перескочить окончание, и мало, чтобы ловить лишнее. */
        const parts = (query) =>
            query
                .split(/\s+/)
                .filter(Boolean)
                .map((word) => (word.length > 5 ? word.slice(0, 4) : word));

        const apply = () => {
            const query = field.value.trim().toLowerCase();
            const words = parts(query);
            const has = (el) => {
                if (!query) return true;
                const text = el.textContent.toLowerCase();
                return words.every((word) => text.includes(word));
            };

            cards.forEach((card) => {
                card.hidden = !has(card);
            });
            rows.forEach((row) => {
                row.hidden = !has(row);
            });
            // подпись категории и её сетка прячутся вместе, когда совпадений нет
            selectAll('.comp-cards').forEach((grid, i) => {
                const visible = [...grid.querySelectorAll('.comp-card')].some((card) => !card.hidden);
                grid.hidden = !visible;
                const head = grid.previousElementSibling;
                if (head && head.classList.contains('comp-group')) head.hidden = !visible;
            });
            blocks.forEach((block) => {
                const items = [...block.querySelectorAll('.doc-card, .cat-card, .comp-card')];
                block.hidden = items.length > 0 && items.every((item) => item.hidden);
            });

            if (counter) {
                const shown = selectAll('.doc-card:not([hidden]), .comp-card:not([hidden])').length;
                counter.textContent = query ? shown : total;
            }
        };

        field.addEventListener('input', apply);
        apply();
    })();

    return destroy;
}
