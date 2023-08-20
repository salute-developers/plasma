'use client';

// import { lazy, Suspense } from 'react';

import { styled } from '@linaria/react';

// import { buttonConfig } from '@salutejs/plasma-new-hope';
// import { component, mergeConfig } from '@salutejs/plasma-new-hope';
import { useTheme } from '../../state';

import { Button, buttonConfig } from '../../hope';

const components = {
    Button: Button,
    Button_Conf: buttonConfig,
} as Record<string, any>;

export interface PreviewProps {
    componentName: string;
    modName: string;
}

const Root = styled.div`
    border: 1px dotted #4169e1;
    height: 6rem;
    padding: 1rem;
`;

export function Preview(props: PreviewProps) {
    const theme = useTheme();

    const { componentName, modName } = props;

    const defs = components[`${componentName}_Conf`]?.defaults;

    const defaultStyles = {};

    for (const defModName of Object.keys(defs)) {
        const defModValueFromComponents = defs[defModName];

        const defModValueFromBuilder = theme.components[componentName].defaults[`_${defModName}`]
        if (defModValueFromBuilder) {
            const tokens = theme.components[componentName].variations[`_${defModName}`]?.[defModValueFromBuilder] || {};
            Object.assign(defaultStyles, tokens);
        } else {
            const tokens = theme.components[componentName].variations[`_${defModName}`]?.[defModValueFromComponents] || {};
            Object.assign(defaultStyles, tokens);
        }
    }

    const mods = theme.components[componentName].variations[modName] || {};

    // for (const modValue of Object.keys(mods)) {
    //     const tokens = mods[modValue];
    //     Object.assign(styles, tokens);
    // }

    // // TODO: moved to separate folder with all components
    // const cong = mergeConfig(buttonConfig, {});
    // const Button = component(cong);
    // but now I have probles with hydration =/
    // const Component = lazy(() => import(`../../hope/${componentName}`));

    const Component = components[componentName];

    return (
        <Root>
            <div style={{ ...defaultStyles }} key={`${componentName}_${modName}`}>
                {Object.keys(mods).map((modVal) => {
                    const props = { [modName.slice(1)]: modVal };
                    return (
                        <span key={modVal} style={{ marginRight: '1rem', ...mods[modVal] }}>
                            <Component {...props}>
                                hello {modName}_{modVal}
                            </Component>
                        </span>
                    );
                })}
            </div>
        </Root>
    );
}
