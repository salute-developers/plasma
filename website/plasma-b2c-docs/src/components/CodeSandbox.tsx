import React, { FC } from 'react';
import { CodeSandbox as CodeSandboxView } from '@salutejs/plasma-docs-ui';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styled from 'styled-components';

import packageJson from '../../package.json';

const StyledText = styled.span`
    margin-left: 6px;
`;

const sberdevicesDependencies = Object.entries(packageJson.dependencies)
    .filter(
        ([key]) => (key.startsWith('@salutejs') && !key.includes('plasma-docs-ui')) || key.includes('react-hook-form'),
    )
    .reduce((acc: Record<string, string>, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});

const indexSource = `import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { light } from "@salutejs/plasma-tokens-b2c/themes";
import { b2c } from '@salutejs/plasma-tokens-b2c/typo';

import { App } from "./App";
import "./style.css";

const StyledPreview = styled.div\`
    \${light[":root"]};
    \${b2c[":root"]};

    padding: 1rem; 

    > div { 
        display: flex; 
        gap: 1rem; 
    }
\`
    
ReactDOM.render(
    <StyledPreview>
        <App />
    </StyledPreview>,
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
            sandboxName="plasma-b2c-example"
            dependencies={sberdevicesDependencies}
            indexSource={indexSource}
        />
    );
};
