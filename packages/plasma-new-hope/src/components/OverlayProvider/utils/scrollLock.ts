type SavedStyles = {
    overflow: string;
    paddingRight: string;
};

const getScrollbarWidth = (target: HTMLElement) => {
    const doc = target.ownerDocument;
    const win = doc.defaultView;

    if (target === doc.body && win) {
        return win.innerWidth - doc.documentElement.clientWidth;
    }

    return target.offsetWidth - target.clientWidth;
};

/**
 * Блокировка прокрутки со счётчиком держателей.
 * Блокировка цели снимается, когда её больше не удерживает ни один слой; положение прокрутки сохраняется.
 */
export class ScrollLocker {
    private holders = new Map<HTMLElement, Set<string>>();

    private saved = new Map<HTMLElement, SavedStyles>();

    private owners = new Map<string, HTMLElement>();

    public lock(ownerId: string, target: HTMLElement) {
        const current = this.owners.get(ownerId);

        if (current === target) {
            return;
        }

        if (current) {
            this.unlock(ownerId);
        }

        this.owners.set(ownerId, target);

        const holders = this.holders.get(target) ?? new Set<string>();
        holders.add(ownerId);
        this.holders.set(target, holders);

        if (holders.size > 1) {
            return;
        }

        const { style } = target;
        const scrollbarWidth = getScrollbarWidth(target);

        this.saved.set(target, { overflow: style.overflow, paddingRight: style.paddingRight });

        if (scrollbarWidth > 0) {
            const win = target.ownerDocument.defaultView;
            const computedPadding = win ? parseFloat(win.getComputedStyle(target).paddingRight) || 0 : 0;
            style.paddingRight = `${computedPadding + scrollbarWidth}px`;
        }

        style.overflow = 'hidden';
    }

    public unlock(ownerId: string) {
        const target = this.owners.get(ownerId);

        if (!target) {
            return;
        }

        this.owners.delete(ownerId);

        const holders = this.holders.get(target);
        holders?.delete(ownerId);

        if (holders && holders.size > 0) {
            return;
        }

        this.holders.delete(target);

        const saved = this.saved.get(target);
        this.saved.delete(target);

        if (saved) {
            target.style.overflow = saved.overflow;
            target.style.paddingRight = saved.paddingRight;
        }
    }

    public isLocked(target: HTMLElement) {
        return Boolean(this.holders.get(target)?.size);
    }
}

/**
 * Прокрутка страницы — общий ресурс для всех менеджеров слоёв.
 */
export const globalScrollLocker = new ScrollLocker();
