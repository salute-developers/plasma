import { color, defineStyleTokenApi, typography } from '@sdds/components-style-dsl';

import { tokens } from './Button.tokens';

export const buttonStyleTokenApi = defineStyleTokenApi({
    commonInfo: {
        componentName: 'Button',
        source: {
            packageName: '@salutejs/plasma-new-hope/styled-components',
        },
    },
    tokens: [tokens],
    mapping: {
        backgroundColor: color('buttonBackgroundColor')
            .state('hovered', 'buttonBackgroundColorHover')
            .state('pressed', 'buttonBackgroundColorActive'),
        labelStyle: typography({
            fontFamily: 'buttonFontFamily',
            fontSize: 'buttonFontSize',
            fontStyle: 'buttonFontStyle',
            fontWeight: 'buttonFontWeight',
            letterSpacing: 'buttonLetterSpacing',
            lineHeight: 'buttonLineHeight',
        }),
    },
});
