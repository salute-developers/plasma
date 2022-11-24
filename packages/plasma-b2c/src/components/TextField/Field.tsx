import styled, { SimpleInterpolation } from 'styled-components';
import { FieldRoot } from '@salutejs/plasma-core';

import { Placeholder } from './Placeholder';
import { Input } from './Input';
import { Content } from './Content';
import { TextFieldProps } from './TextField';

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
