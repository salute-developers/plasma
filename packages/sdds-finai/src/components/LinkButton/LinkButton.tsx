import React, { ComponentProps, forwardRef } from 'react';
import styled from 'styled-components';
import {
    component,
    mergeConfig,
    linkButtonConfig,
    linkButtonTokens,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './LinkButton.config';

const mergedConfig = mergeConfig(linkButtonConfig, config);

const LinkButtonComponent = component(mergedConfig);

type LinkButtonComponentProps = ComponentProps<typeof LinkButtonComponent>;

export const GradientLinkButton = styled(LinkButtonComponent)`
    & .sdds-core-text-node {
        background: var(${linkButtonTokens.linkButtonTextColor});
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &:hover .sdds-core-text-node {
        background: var(${linkButtonTokens.linkButtonTextColor});
        background-clip: text;
        -webkit-background-clip: text;
    }

    &:active .sdds-core-text-node {
        background: var(${linkButtonTokens.linkButtonTextColor});
        background-clip: text;
        -webkit-background-clip: text;
    }
`;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonComponentProps>(({ view, ...rest }, ref) => {
    if (view === 'gradient') {
        return <GradientLinkButton ref={ref} view={view} {...rest} />;
    }

    return <LinkButtonComponent ref={ref} view={view} {...rest} />;
});
