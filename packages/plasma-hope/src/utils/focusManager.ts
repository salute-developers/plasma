import { findTabbableDescendants } from './tabbable';

/**
 *  Менеджер фокуса при открытии и закрытии нод при использовании focus-trap.
 *  Также необходим, чтобы фокус всегда должен находиться внутри необходимой ноды.
 * */
export class FocusManager {
    // массив с элементами, которые нужно зафокусить после анмаунта
    private focusLaterElements: Array<HTMLElement> = [];

    // массив с trap нодами
    private focusNodes: Array<HTMLElement> = [];

    private handleFocus = () => {
        // Фокус всегда должен находиться внутри необходимой ноды
        const focusNode = this.focusNodes[this.focusNodes.length - 1];

        if (!focusNode || focusNode.contains(document.activeElement)) {
            return;
        }

        // Выделяем первый tabbable элемент
        const el = findTabbableDescendants(focusNode)[0] || focusNode;
        el.focus();
    };

    // добавление на фокус после анмаунта
    public markForFocusLater = () => {
        this.focusLaterElements.push(document.activeElement as HTMLElement);
    };

    // фокус на необходимый элемент
    public returnFocus = () => {
        const toFocus = this.focusLaterElements.pop() ?? null;
        if (toFocus) {
            toFocus.focus();
        }
    };

    // при маунте ноды
    public setupScopedFocus = (element: HTMLElement) => {
        this.focusNodes.push(element);
        document.addEventListener('focusin', this.handleFocus, true);
    };

    // при анмаунте
    public teardownScopedFocus = () => {
        this.focusNodes.pop();
        document.removeEventListener('focusin', this.handleFocus);
    };
}
