import { useEffect } from 'react';

import { useDidMountEffect, usePreviousValue } from '../../../hooks';
import type { UseFocusControllerProps } from '../Combobox.types';

export const useFocusController = ({
    controlledRefs: { contentRef, inputHelperRef, inputRef },
    opened,
    hasValue,
    textContent,
    search,
    values,
    readOnly,
    valueType,
    closedWithoutChanges,
    updateSearch,
    updateFocused,
    onChipClick,
}: UseFocusControllerProps) => {
    const prevSearch = usePreviousValue(search);
    const prevValues = usePreviousValue(values);
    const prevOpened = usePreviousValue(opened);

    useDidMountEffect(() => {
        if (!opened) {
            updateFocused(false);
            contentRef.current?.scrollTo({ left: 0 });
        }

        const hasFocusAfterClose = prevOpened !== undefined && !opened && !closedWithoutChanges?.current;

        if (opened || hasFocusAfterClose) {
            inputRef.current?.focus();
        }

        // INFO: Помогает определить, произошло ли закрытие выпадающего меню при выборе значения.
        // Нужно для того, чтобы не фокусироваться на инпуте
        // ОЧЕНЬ не нравится это решение, но оно работает
        if (closedWithoutChanges?.current === false) {
            closedWithoutChanges.current = true;
        }
    }, [opened]);

    useDidMountEffect(() => {
        const prevValuesCount = prevValues?.length || 0;
        const valuesCount = values?.length || 0;

        if ((opened || prevOpened) && prevValuesCount < valuesCount) {
            inputRef.current?.focus();
        }
    }, [values, readOnly]);

    useDidMountEffect(() => {
        if (!inputRef.current) {
            return;
        }

        // INFO: Для multiple
        if (search === '') {
            inputRef.current.style.flex = '1';
        }

        // INFO: Для single
        if (!opened && prevSearch !== search) {
            inputRef.current.style.flex = '1';
        }

        // INFO: Для кейсов, когда значение вырезано
        if (!inputRef.current.value.length) {
            inputRef.current.style.flex = '1';
            return;
        }

        if (valueType === 'multiple' && inputHelperRef.current) {
            const { clientWidth } = inputHelperRef.current;
            inputRef.current.style.flex = `1 0 ${clientWidth}px`;
        }
    }, [readOnly, search, valueType]);

    useEffect(() => {
        const newSearch = hasValue ? textContent : '';

        // INFO: Заполнить поле input при первой инициализации
        if (prevOpened !== undefined && opened) {
            return;
        }

        if (valueType === 'single') {
            updateSearch?.(newSearch, false);
        }

        if (valueType === 'multiple') {
            updateSearch?.('', false);
        }
    }, [updateSearch, values, opened, hasValue, textContent, valueType]);

    const onClickText = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChipClick?.(event);
        inputRef.current?.focus();
    };

    const onFocusInput = () => {
        if (readOnly) {
            return;
        }

        // INFO: Жёсткий хак, нужный для корректного выделения всей строки после выбора значения.
        // Проблема возникает из-за очередности срабатывания useEffect, который сначала вызывает фокус
        // на элемент, а потом обновляет состояние inputRef
        if (valueType === 'single') {
            setTimeout(() => {
                inputRef.current?.select();
            });
        }

        contentRef.current?.scrollTo({ left: contentRef.current?.scrollWidth });

        updateFocused(true);
    };

    const onBlurInput = () => {
        if (!opened) {
            updateFocused(false);
        }
    };

    return { onClickText, onFocusInput, onBlurInput } as const;
};
