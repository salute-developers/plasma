import React, { FC } from 'react';
import { CodeSandbox as CodeSandboxView } from '@salutejs/plasma-docs-ui';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styled from '@emotion/styled';

import packageJson from '../../package.json';

const StyledText = styled.span`
    margin-left: 6px;
`;

const packageDependencies = Object.entries(packageJson.dependencies)
    .filter(([key]) => (key.startsWith('@salutejs') || key.startsWith('@emotion')) && !key.includes('plasma-docs-ui'))
    .reduce((acc: Record<string, string>, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});

const indexSource = `import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { sdds_cs__light } from '@salutejs/sdds-themes';

import { App } from "./App";
import "./style.css";

const themeStyle = css(sdds_cs__light);

const StyledPreview = styled.div\`
    padding: 1rem;

    > div {
        display: flex;
        gap: 1rem;
    }
\`

ReactDOM.render(
    <>
       <Global styles={themeStyle} />
       <StyledPreview>
            <App />
        </StyledPreview>
    </>,
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
            sandboxName="sdds-cs__example"
            dependencies={packageDependencies}
            indexSource={indexSource}
        />
    );
};
