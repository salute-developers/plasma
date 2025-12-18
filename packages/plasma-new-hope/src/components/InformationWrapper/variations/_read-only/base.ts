import { css } from '@linaria/core';

import { Label, LeftHelper, RightHelper, TitleCaption } from '../../InformationWrapper.styles';
import { tokens } from '../../InformationWrapper.tokens';

export const base = css`
    &[readonly] {
        ${Label} {
            color: var(${tokens.labelColorReadOnly}, var(${tokens.labelColor}));
        }

        ${TitleCaption} {
            color: var(${tokens.titleCaptionColorReadOnly}, var(${tokens.titleCaptionColor}));
        }

        ${LeftHelper} {
            color: var(${tokens.leftHelperColorReadOnly}, var(${tokens.leftHelperColor}));
        }

        ${RightHelper} {
            color: var(${tokens.rightHelperColorReadOnly}, var(${tokens.rightHelperColor}));
        }
    }
`;
