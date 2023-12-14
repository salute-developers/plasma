import { styled } from '@linaria/react';

import { tokens } from '../../Header.tokens';
import { applyEllipsis, applyHyphens, bodyM, bodyS, h1, h3 } from '../../../../mixins';

export const Title = styled.div`
    ${bodyM};

    margin: var(${tokens.headerTitleMargin});
    color: var(${tokens.headerTitleColor});

    ${applyHyphens};
    ${applyEllipsis()};
`;

export const BigTitle = styled.div`
    ${h3};
    font-weight: 600;

    margin: var(${tokens.headerBigTitleMargin});
    color: var(${tokens.headerBiggerTitleColor});

    ${applyHyphens};
    ${applyEllipsis()};
`;

export const BiggerTitle = styled.div`
    ${h1};
    font-weight: 600;

    margin: var(${tokens.headerBiggerTitleMargin});
    color: var(${tokens.headerBiggerTitleColor});

    ${applyHyphens};
    ${applyEllipsis()};
`;

export const Label = styled.div`
    margin: var(${tokens.headerLabelMargin});
    color: var(${tokens.headerLabelColor});
    ${applyEllipsis()};
`;

export const SubTitle = styled.div`
    ${bodyS};

    margin: var(${tokens.headerSubTitleMargin});
    color: var(${tokens.headerSubTitleColor});

    ${applyHyphens};
    ${applyEllipsis()};
`;

export const Caption = styled.div`
    margin: var(${tokens.headerCaptionMargin});
    color: var(${tokens.headerCaptionColor});
    ${applyEllipsis()};
`;

export const TextBoxRoot = styled.div`
    & > :first-child {
        margin-top: 0;
    }

    & > :last-child {
        margin-bottom: 0;
    }
`;
