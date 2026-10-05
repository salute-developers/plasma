import styled, { css } from 'styled-components';
import { plasmaCore } from '@salutejs/plasma-new-hope/styled-components';

const BaseBadge = plasmaCore.Badge;
const { surfaceLiquid02 } = plasmaCore;
const { text } = plasmaCore;
type BaseProps = plasmaCore.BadgeProps;

const badgeViews = {
    primary: css`
        color: #226af1;
        background-color: rgba(34, 106, 241, 0.09);
    `,
    secondary: css`
        color: ${text};
        background-color: ${surfaceLiquid02};
    `,
    success: css`
        color: #09a552;
        background-color: rgba(9, 165, 82, 0.08);
    `,
    warning: css`
        color: #ee6820;
        background-color: rgba(238, 104, 32, 0.08);
    `,
    critical: css`
        color: #df2638;
        background-color: rgba(223, 38, 56, 0.09);
    `,
};

const Badge = styled(BaseBadge)<BaseProps & { view?: keyof typeof badgeViews }>`
    border-radius: 0.25rem;

    ${({ view = 'primary' }) => badgeViews[view]}
`;

export const CardBadge = styled(Badge)`
    position: absolute;
`;
