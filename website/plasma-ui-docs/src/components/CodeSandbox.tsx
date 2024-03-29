import React, { FC } from 'react';
import { CodeSandbox as CodeSandboxView } from '@salutejs/plasma-docs-ui';
import IconExternalLink from '@theme/Icon/ExternalLink';
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

const indexSource = `import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { DeviceThemeProvider } from '@salutejs/plasma-ui';
import { gradient } from '@salutejs/plasma-tokens';
import { darkSber } from '@salutejs/plasma-tokens/themes';
import { sberBox } from '@salutejs/plasma-tokens/typo';

import { App } from "./App";
import "./style.css";

const StyledPreview = styled.div\`
    \${darkSber[":root"]};
    \${sberBox[":root"]};

    height: 100%;
    background-image: \${gradient};

    padding: 1rem;

    > div { 
        display: flex; 
        gap: 1rem; 
    }
\`
    
ReactDOM.render(
    <DeviceThemeProvider responsiveTypo>
        <StyledPreview>
            <App />
        </StyledPreview>
    </DeviceThemeProvider>,
    document.getElementById("root")
);`;

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
            sandboxName="plasma-ui-example"
            dependencies={sberdevicesDependencies}
            indexSource={indexSource}
        />
    );
};
