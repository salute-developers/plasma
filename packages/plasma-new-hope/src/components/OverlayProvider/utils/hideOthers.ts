const IGNORED_TAGS = new Set(['SCRIPT', 'STYLE', 'TEMPLATE', 'LINK', 'META', 'NOSCRIPT']);

/**
 * Контейнеры порталов компонентов, ещё не подключённых к менеджеру слоёв.
 * Их содержимое может принадлежать модальному слою, поэтому они не скрываются.
 */
const PRESERVED_SELECTOR = '[data-floating-ui-portal], [id^="plasma-popover-root"], [data-plasma-overlay-keep]';

const HIDDEN_MARK = 'data-plasma-overlay-hidden';

const shouldSkip = (element: Element) => IGNORED_TAGS.has(element.tagName) || element.matches(PRESERVED_SELECTOR);

/**
 * Скрывает от вспомогательных технологий всё, кроме переданных элементов и их предков.
 * Элементы из `inertElements` дополнительно становятся недоступными для взаимодействия.
 * Возвращает функцию, которая восстанавливает исходные значения атрибутов.
 */
export const hideOthers = (
    keep: Element[],
    inertElements: Element[] = [],
    root: HTMLElement | null = typeof document !== 'undefined' ? document.body : null,
) => {
    if (!root) {
        return () => {};
    }

    const keepSet = new Set(keep.filter((element) => element.isConnected));
    const keepPath = new Set<Element>();

    keepSet.forEach((element) => {
        let current: Element | null = element.parentElement;

        while (current && current !== root.parentElement) {
            keepPath.add(current);
            current = current.parentElement;
        }
    });

    const restore: Array<() => void> = [];

    const setAttribute = (element: Element, name: string, value: string) => {
        const previous = element.getAttribute(name);

        if (previous === value) {
            return;
        }

        element.setAttribute(name, value);
        restore.push(() => {
            if (previous === null) {
                element.removeAttribute(name);
            } else {
                element.setAttribute(name, previous);
            }
        });
    };

    const walk = (parent: Element) => {
        Array.from(parent.children).forEach((child) => {
            if (keepSet.has(child) || shouldSkip(child)) {
                return;
            }

            if (keepPath.has(child)) {
                walk(child);
                return;
            }

            setAttribute(child, 'aria-hidden', 'true');
            setAttribute(child, HIDDEN_MARK, '');
        });
    };

    if (keepSet.size > 0) {
        walk(root);
    }

    inertElements.forEach((element) => {
        if (!element.isConnected || keepSet.has(element)) {
            return;
        }

        setAttribute(element, 'inert', '');
        setAttribute(element, 'aria-hidden', 'true');
    });

    return () => {
        restore.reverse().forEach((undo) => undo());
    };
};
