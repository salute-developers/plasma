import { findTabbableInFocusScope, FocusTrapSelectors, isElementInFocusScope } from './focusScope';

type FocusNode = {
    element: HTMLElement;
    getFocusTrapSelectors?: () => FocusTrapSelectors | undefined;
};

/**
 *  Менеджер фокуса при открытии и закрытии нод при использовании focus-trap.
 *  Также необходим, чтобы фокус всегда должен находиться внутри необходимой ноды.
 * */
export class FocusManager {
    // массив с элементами, которые нужно зафокусить после анмаунта
    private focusAfterElements: Array<HTMLElement> = [];

    // массив с trap нодами
    private focusNodes: Array<FocusNode> = [];

    private handleFocus = () => {
        // Фокус всегда должен находиться внутри необходимой ноды
        const focusNode = this.focusNodes[this.focusNodes.length - 1];

        if (
            !focusNode ||
            isElementInFocusScope(focusNode.element, document.activeElement, focusNode.getFocusTrapSelectors?.())
        ) {
            return;
        }

        // Выделяем первый tabbable элемент
        const el =
            findTabbableInFocusScope(focusNode.element, focusNode.getFocusTrapSelectors?.())[0] || focusNode.element;
        el.focus();
    };

    // добавление на фокус после анмаунта
    public markForFocusAfter = (focusAfterNode?: React.RefObject<HTMLElement>) => {
        const node =
            focusAfterNode && focusAfterNode.current ? focusAfterNode.current : (document.activeElement as HTMLElement);
        this.focusAfterElements.push(node);
    };

    // фокус на необходимый элемент
    public returnFocus = () => {
        const toFocus = this.focusAfterElements.pop() ?? null;
        if (toFocus) {
            toFocus.focus();
        }
    };

    // при маунте ноды
    public setupScopedFocus = (element: HTMLElement, getFocusTrapSelectors?: () => FocusTrapSelectors | undefined) => {
        this.focusNodes.push({ element, getFocusTrapSelectors });

        if (this.focusNodes.length === 1) {
            document.addEventListener('focusin', this.handleFocus, true);
        }
    };

    // при анмаунте
    public teardownScopedFocus = (element?: HTMLElement) => {
        const focusNodeIndex = element
            ? this.focusNodes.map((focusNode) => focusNode.element).lastIndexOf(element)
            : this.focusNodes.length - 1;

        if (focusNodeIndex >= 0) {
            this.focusNodes.splice(focusNodeIndex, 1);
        }

        if (!this.focusNodes.length) {
            document.removeEventListener('focusin', this.handleFocus, true);
        }
    };

    public isTopFocusNode = (element: HTMLElement) => this.focusNodes[this.focusNodes.length - 1]?.element === element;
}
