import { css } from '@linaria/core';

import { Label, LeftHelper, RightHelper, TitleCaption } from '../../InformationWrapper.styles';
import { tokens } from '../../InformationWrapper.tokens';

export const base = css`
    ${Label} {
        display: inline-block;
        color: var(${tokens.labelColor});
    }

    ${TitleCaption} {
        color: var(${tokens.titleCaptionColor});
    }

    ${LeftHelper} {
        color: var(${tokens.leftHelperColor});
    }

    ${RightHelper} {
        color: var(${tokens.rightHelperColor});
    }
`;
