import {
    findTabbableInFocusScope,
    FocusTrapSelectors,
    GetFocusScopeElements,
    isElementInFocusScope,
} from './focusScope';
import { isFocusable } from './tabbable';

type FocusNode = {
    element: HTMLElement;
    getFocusTrapSelectors?: () => FocusTrapSelectors | undefined;
    getExtraScopeElements?: GetFocusScopeElements;
};

const canReceiveFocus = (element: HTMLElement | null | undefined): element is HTMLElement =>
    Boolean(element) &&
    (element as HTMLElement).isConnected &&
    !(element as HTMLElement).closest('[inert]') &&
    ((element as HTMLElement) === document.body || isFocusable(element as HTMLElement));

/**
 *  Менеджер фокуса при открытии и закрытии нод при использовании focus-trap.
 *  Также необходим, чтобы фокус всегда должен находиться внутри необходимой ноды.
 * */
export class FocusManager {
    // массив с элементами, которые нужно зафокусить после анмаунта
    private focusAfterElements: Array<HTMLElement> = [];

    // массив с trap нодами
    private focusNodes: Array<FocusNode> = [];

    private getScope = (focusNode: FocusNode) =>
        [focusNode.getFocusTrapSelectors?.(), focusNode.getExtraScopeElements?.()] as const;

    private handleFocus = () => {
        // Фокус всегда должен находиться внутри необходимой ноды
        const focusNode = this.focusNodes[this.focusNodes.length - 1];

        if (
            !focusNode ||
            isElementInFocusScope(focusNode.element, document.activeElement, ...this.getScope(focusNode))
        ) {
            return;
        }

        // Выделяем первый tabbable элемент
        const el = findTabbableInFocusScope(focusNode.element, ...this.getScope(focusNode))[0] || focusNode.element;
        el.focus();
    };

    // резервная цель, если элемент для возврата фокуса недоступен
    private getFallbackElement = () => {
        const focusNode = this.focusNodes[this.focusNodes.length - 1];

        if (focusNode && focusNode.element.isConnected) {
            const tabbable = findTabbableInFocusScope(focusNode.element, ...this.getScope(focusNode)).find((el) =>
                canReceiveFocus(el),
            );

            return tabbable || focusNode.element;
        }

        return document.body;
    };

    // добавление на фокус после анмаунта
    public markForFocusAfter = (focusAfterNode?: React.RefObject<HTMLElement>) => {
        const node =
            focusAfterNode && focusAfterNode.current ? focusAfterNode.current : (document.activeElement as HTMLElement);
        this.focusAfterElements.push(node);
    };

    /**
     * Фокус на необходимый элемент.
     * Если передана закрываемая нода, фокус возвращается только когда он был внутри неё:
     * закрытие не отнимает фокус у элемента, уже выбранного пользователем.
     * Если элемент недоступен, используется резервная цель: верхняя оставшаяся trap-нода или body.
     */
    public returnFocus = (closingNode?: HTMLElement | null) => {
        const toFocus = this.focusAfterElements.pop() ?? null;
        const { activeElement } = document;

        if (closingNode && activeElement && activeElement !== document.body && !closingNode.contains(activeElement)) {
            return;
        }

        const target = canReceiveFocus(toFocus) ? toFocus : this.getFallbackElement();

        target?.focus();
    };

    // при маунте ноды
    public setupScopedFocus = (
        element: HTMLElement,
        getFocusTrapSelectors?: () => FocusTrapSelectors | undefined,
        getExtraScopeElements?: GetFocusScopeElements,
    ) => {
        this.focusNodes.push({ element, getFocusTrapSelectors, getExtraScopeElements });

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
