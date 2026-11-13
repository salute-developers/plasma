import { useRef } from 'react';
import type { FocusEvent, KeyboardEvent, RefObject } from 'react';

import { useIsomorphicLayoutEffect } from '../../../../hooks/useIsomorphicLayoutEffect';
import type { InputProps } from '../Input.types';

type ChipNavigationOptions = Pick<InputProps, 'chips' | 'disabled' | 'readOnly'> & {
    inputRef: RefObject<HTMLInputElement>;
};

export const useChipNavigation = ({ chips, disabled, readOnly, inputRef }: ChipNavigationOptions) => {
    // Сохраняем кнопки чипов и последний фокус для его восстановления после удаления.
    const chipRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const focusedChip = useRef<{ button: HTMLButtonElement; index: number } | null>(null);
    const values = chips?.value ?? [];

    // Возвращаем фокус из списка чипов в поле и ставим каретку в начало.
    const focusInput = () => {
        const input = inputRef.current;

        if (!input || input.disabled || input.readOnly) {
            return;
        }

        input.focus();

        if (input.selectionStart === null) {
            return;
        }

        input.setSelectionRange(0, 0);
    };

    // После обновления DOM синхронизируем refs и восстанавливаем фокус удалённого чипа.
    useIsomorphicLayoutEffect(() => {
        chipRefs.current.length = values.length;

        if (disabled || readOnly) {
            focusedChip.current = null;
            return;
        }

        const focused = focusedChip.current;

        if (!focused) {
            return;
        }

        // Если кнопка осталась в DOM, её индекс мог измениться при перестановке чипов.
        if (focused.button.isConnected) {
            focused.index = chipRefs.current.indexOf(focused.button);
            return;
        }

        focusedChip.current = null;
        const doc = focused.button.ownerDocument;

        // Не перехватываем фокус, если потребитель уже перевёл его на другой элемент.
        if (doc.activeElement !== doc.body) {
            return;
        }

        // Выбираем чип на освободившемся месте; после удаления последнего — предыдущий.
        const next = chipRefs.current[Math.min(focused.index, values.length - 1)];

        if (next && !next.disabled) {
            next.focus();
            return;
        }

        focusInput();
    });

    const handleChipFocus = (index: number, button: HTMLButtonElement) => {
        focusedChip.current = { index, button };
    };

    const handleChipBlur = (event: FocusEvent<HTMLButtonElement>) => {
        // Забываем чип только при обычном уходе фокуса;
        // при удалении DOM-узла данные нужны эффекту восстановления.
        if (event.currentTarget.isConnected) {
            focusedChip.current = null;
        }
    };

    // Изменение массива чипов остаётся у потребителя; здесь только вызываем обработчик.
    const handleRemove = (index: number) => {
        if (disabled || readOnly || values[index] === undefined) {
            return;
        }

        chips?.onRemove?.(values[index]);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        // Не перехватываем отменённые события, комбинации клавиш и ввод через IME.
        // Навигация нужна только для активных чипов с доступным удалением.
        if (
            disabled ||
            readOnly ||
            !chips?.onRemove ||
            !values.length ||
            event.defaultPrevented ||
            event.nativeEvent.isComposing ||
            event.keyCode === 229 ||
            event.altKey ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey
        ) {
            return;
        }

        const input = inputRef.current;
        // ArrowLeft из начала поля или Backspace в пустом поле сначала выделяет последний чип.
        const shouldFocusLastChip =
            input &&
            event.target === input &&
            ((event.key === 'ArrowLeft' && input.selectionStart === 0 && input.selectionEnd === 0) ||
                (event.key === 'Backspace' && input.value === ''));

        if (shouldFocusLastChip) {
            event.preventDefault();
            chipRefs.current[values.length - 1]?.focus();
            return;
        }

        // Остальные клавиши обрабатываем только на чипах; ввод в самом input остаётся нативным.
        const index = chipRefs.current.indexOf(event.target as HTMLButtonElement);

        if (index < 0) {
            return;
        }

        // Переходим к предыдущему чипу или сразу к первому.
        if (event.key === 'ArrowLeft' || event.key === 'Home') {
            event.preventDefault();
            chipRefs.current[event.key === 'Home' ? 0 : Math.max(index - 1, 0)]?.focus();
            return;
        }

        // Внутри списка ArrowRight переводит фокус на следующий чип.
        if (event.key === 'ArrowRight' && index < values.length - 1) {
            event.preventDefault();
            chipRefs.current[index + 1]?.focus();
            return;
        }

        // Из конца списка, по End или Escape возвращаемся в поле ввода.
        if (event.key === 'ArrowRight' || event.key === 'End' || event.key === 'Escape') {
            event.preventDefault();
            focusInput();
            return;
        }

        // Удаляем выбранный чип; фокус после изменения списка восстановит эффект выше.
        if (event.key === 'Backspace' || event.key === 'Delete') {
            event.preventDefault();
            handleRemove(index);
        }
    };

    return { chipRefs, handleChipFocus, handleChipBlur, handleRemove, handleKeyDown };
};
