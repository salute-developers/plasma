import styled from 'styled-components';
import { BodyXS } from '@salutejs/plasma-b2c';
import { whitePrimary } from '@salutejs/plasma-tokens-b2c';

export const SideNavigation = styled.div`
    text-decoration: none;
    position: absolute;
    top: 11.5rem;
    right: 4rem;
    height: calc(100% - 11.5rem - 4rem);
`;

export const Icon = styled.div`
    width: var(--plasma-typo-body-xs-line-height);
    height: var(--plasma-typo-body-xs-line-height);
    display: flex;

    transition: opacity 0.2s rotate 0s;
`;

export const StickyNavElement = styled.div<{ offsetIndex: number; needExtraOffset?: boolean }>`
    position: sticky;
    top: ${({ offsetIndex, needExtraOffset }) =>
        `calc(100% - 4rem ${Array(offsetIndex).fill('- var(--plasma-typo-body-xs-line-height)').join(' ')} ${
            needExtraOffset ? `${Array(offsetIndex).fill('- 0.75rem').join(' ')}` : ''
        })`};

    cursor: pointer;
    color: ${whitePrimary};

    width: 100%;
    display: flex;
    justify-content: end;
    gap: 0.25rem;

    &[data-snap='top-of-section'] {
        cursor: default;

        ${Icon} {
            opacity: 0;
        }
    }

    &[data-snap='top-of-viewport'] {
        ${Icon} {
            opacity: 1;
            rotate: -90deg;
        }
    }

    &[data-snap='bottom-of-viewport'] {
        ${Icon} {
            opacity: 1;
            rotate: 90deg;
        }
    }
`;

export const SideNavigationTitle = styled(BodyXS)`
    color: ${whitePrimary};
`;
