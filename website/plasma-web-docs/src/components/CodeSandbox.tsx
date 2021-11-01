import React, { FC } from 'react';
import { CodeSandbox as CodeSandboxView } from '@salutejs/plasma-docs-ui';
import IconExternalLink from '@theme/IconExternalLink';
import styled from 'styled-components';

import packageJson from '../../package.json';

const StyledText = styled.span`
    margin-left: 6px;
`;

const sberdevicesDependencies = Object.entries(packageJson.dependencies)
    .filter(([key]) => key.startsWith('@salutejs') && !key.includes('plasma-docs-ui'))
    .reduce((acc: Record<string, string>, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});

const styledPreview = `
import { light } from "@salutejs/plasma-tokens-web/themes";
import { web } from '@salutejs/plasma-tokens-web/typo';

const StyledPreview = styled.div\`
    \${light[":root"]};
    \${web[":root"]};

    padding: 1rem; 
    > div { 
        display: flex; 
        gap: 1rem; 
    }
\``;

export const CodeSandbox: FC<{ source: string }> = ({ source }) => {
    return (
        <CodeSandboxView
            source={source}
            content={
                <>
                    <IconExternalLink />
                    <StyledText>Open in CodeSandbox</StyledText>
                </>
            }
            sandboxName="plasma-web-example"
            dependencies={sberdevicesDependencies}
            styledPreview={styledPreview}
        />
    );
};
