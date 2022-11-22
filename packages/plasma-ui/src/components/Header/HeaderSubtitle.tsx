import styled, { css } from 'styled-components';

import { mediaQuery } from '../../utils';
import { TextBoxSubTitle } from '../TextBox';

// TODO: https://github.com/salute-developers/plasma/issues/232

/**
 * Компонент для размещения подзаголовка.
 */
export const HeaderSubtitle = styled(TextBoxSubTitle)`
    margin: 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${({ theme }) => css`
        ${mediaQuery(
            'S',
            theme.deviceScale,
        )(css`
            display: none;
        `)}
    `}
`;
