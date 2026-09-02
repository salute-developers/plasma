import { findTabbableInFocusScope, FocusTrapSelectors } from './focusScope';

/**
 * Управлление фокусом лишь внутри ноды через tab
 * @param node
 * @param event
 */
export const scopeTab = (
    node: HTMLElement,
    event: KeyboardEvent,
    activeFocusTrap?: boolean,
    focusTrapSelectors?: FocusTrapSelectors,
) => {
    const tabbable = findTabbableInFocusScope(node, focusTrapSelectors);
    if (!tabbable.length) {
        event.preventDefault();
        return;
    }

    // смотрим, является ли элемент крайним - первый или последним
    const finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
    const leavingFinalTabbable = finalTabbable === document.activeElement || node === document.activeElement;

    // если не является, то передаем обработку таба самому браузеру
    if (!leavingFinalTabbable || !activeFocusTrap) {
        return;
    }

    // иначе зацкливаемся
    event.preventDefault();
    const target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
    if (target) {
        target.focus();
    }
};
