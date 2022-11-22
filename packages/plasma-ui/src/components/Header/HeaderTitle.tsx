import styled, { css } from 'styled-components';
import { body2 } from '@salutejs/plasma-tokens';

import { mediaQuery } from '../../utils';
import { Headline4 } from '../Typography';

// TODO: https://github.com/salute-developers/plasma/issues/232
/**
 * Компонент для размещения заголовка.
 */
export const HeaderTitle = styled(Headline4)`
    margin: 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${(props) =>
        mediaQuery(
            'S',
            props.theme.deviceScale,
        )(css`
            ${body2};
        `)}
`;
