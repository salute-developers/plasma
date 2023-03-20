import styled, { css, SimpleInterpolation } from 'styled-components';
import { FieldRoot, fieldBackgroundStatuses, applyEllipsis } from '@salutejs/plasma-core';
import type { FieldProps } from '@salutejs/plasma-core';
import { textXS } from '@salutejs/plasma-typo';

import { TextFieldProps } from '../../types';

import { Placeholder } from './Placeholder';
import { Input } from './Input';
import { Content } from './Content';

export const Field = styled(FieldRoot)<
    TextFieldProps & {
        properties: ReadonlyArray<SimpleInterpolation>;
        withDefaultPadding: boolean;
    }
>`
    ${({ properties }) => properties}

    --padding-left: ${({ $isContentLeft }) => ($isContentLeft ? 'var(--padding-content-left)' : null)};
    --padding-right: ${({ $isContentRight }) => ($isContentRight ? 'var(--padding-content-right)' : null)};

    ${Content} {
        height: inherit;

        & > div {
            width: var(--field-content-size, 1.5rem);
            height: var(--field-content-size, 1.5rem);
            flex-basis: var(--field-content-size, 1.5rem);
        }
    }

    ${Placeholder} {
        left: 0;
        right: 0;
    }

    ${Input} {
        padding: var(--padding-default);

        &:not(:placeholder-shown) {
            padding: ${({ withDefaultPadding }) => {
                return withDefaultPadding ? 'var(--padding-default)' : 'var(--padding-input-not-placeholder-shown)';
            }};
        }
    }
`;

export const FieldWrapper = styled.div<Pick<FieldProps, 'status'>>`
    position: relative;

    ${({ status }) =>
        status &&
        css`
            &::before {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                content: '';
                background: ${fieldBackgroundStatuses[status]};
                opacity: 0.3;

                border-radius: 0.75rem;

                pointer-events: none;
            }
        `}
`;

export const FieldHelpers = styled.div`
    position: absolute;
    height: fit-content;
    width: 100%;

    bottom: 1.25rem;
    padding: 0 1.5rem;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
`;

/**
 * Вспомогательный текст снизу для поля ввода
 */
export const FieldHelper = styled.span`
    ${textXS}

    margin: 0;
    padding: 0;

    ${applyEllipsis};
`;
