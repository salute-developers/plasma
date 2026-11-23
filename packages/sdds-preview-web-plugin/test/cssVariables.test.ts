// Строки с `${...}` здесь — шаблоны токенов ядра в значениях ДС, а не опечатки в шаблонных строках.
/* eslint-disable no-template-curly-in-string */
import { avatarTokens, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';
import { describe, expect, it } from 'vitest';

import { getCSSVariableName, resolveCoreTemplates, toCSSVariables, toCoreCssVariables } from '../src/cssVariables';

describe('getCSSVariableName', () => {
    it('берёт имя из объекта токенов ядра, если ключ в нём есть', () => {
        expect(getCSSVariableName('Button', 'buttonScaleActive', buttonTokens)).toBe('---plasma-button-scale-active');
        expect(
            getCSSVariableName('TextField', 'backgroundColor', { backgroundColor: ' --plasma-textfield-bg-color ' }),
        ).toBe('--plasma-textfield-bg-color');
    });

    it('строит имя по схеме --plasma-<component>-<key>, если ключа нет', () => {
        expect(getCSSVariableName('Button', 'backgroundColor', buttonTokens)).toBe('--plasma-button-background-color');
        expect(getCSSVariableName('Button', 'buttonHeight')).toBe('--plasma-button-height');
        expect(getCSSVariableName('IconButton', 'height')).toBe('--plasma-icon-button-height');
    });
});

describe('toCoreCssVariables для Button', () => {
    it('отображает web-параметры и состояния Hover/Active в CSS-переменные ядра', () => {
        const variables = toCoreCssVariables('Button', {
            backgroundColor: '#1A1A1AFF',
            backgroundColorHover: '#2A2A2AFF',
            backgroundColorActive: '#0A0A0AFF',
            colorHover: '#FFFFFFFF',
            borderColorActive: '#FF0000FF',
            height: '3rem',
        });

        expect(variables).toEqual({
            '--plasma-button-background-color': '#1A1A1AFF',
            '--plasma-button-background-color-hover': '#2A2A2AFF',
            '--plasma-button-background-color-active': '#0A0A0AFF',
            '--plasma-button-color-hover': '#FFFFFFFF',
            '--plasma-button-border-color-active': '#FF0000FF',
            '--plasma-button-height': '3rem',
        });
        // Имена совпадают с переменными, которые читает ядро.
        expect(Object.keys(variables)).toEqual(
            expect.arrayContaining([
                buttonTokens.buttonBackgroundColor,
                buttonTokens.buttonBackgroundColorHover,
                buttonTokens.buttonBackgroundColorActive,
                buttonTokens.buttonColorHover,
                buttonTokens.buttonBorderColorActive,
                buttonTokens.buttonHeight,
            ]),
        );
    });

    it('для неизвестного компонента строит имена по схеме', () => {
        expect(toCSSVariables('Chip', { backgroundColorHover: 'red' })).toEqual({
            '--plasma-chip-background-color-hover': 'red',
        });
    });
});

describe('resolveCoreTemplates', () => {
    it('заменяет шаблоны токенов ядра на имена CSS-переменных, как генератор', () => {
        const { value, unresolved } = resolveCoreTemplates(
            'calc(var(${avatarTokens.avatarSize}) - var(${avatarTokens.statusIconSize}))',
        );

        expect(value).toBe(`calc(var(${avatarTokens.avatarSize}) - var(${avatarTokens.statusIconSize}))`);
        expect(value).not.toContain('${');
        expect(unresolved).toEqual([]);
    });

    it('оставляет неизвестный шаблон как есть и сообщает о нём', () => {
        expect(resolveCoreTemplates('var(${unknownTokens.size})')).toEqual({
            value: 'var(${unknownTokens.size})',
            unresolved: ['${unknownTokens.size}'],
        });
    });
});
