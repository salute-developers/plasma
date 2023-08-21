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

    const defsFromComponent = components[`${componentName}_Conf`]?.defaults;

    const _defs = Object.keys(defsFromComponent).reduce<Record<string, string>>((acc, el) => {
        acc[`_${el}`] = defsFromComponent[el];
        return acc;
    }, {});

    const defs = {..._defs, ...theme.components[componentName].defaults};

    const defaultStyles = {};

    for (const defModName of Object.keys(defs)) {
        const defModValue = defs[defModName];
        const tokens = theme.components[componentName].variations[defModName]?.[defModValue] || {};
        if (defModName !== modName) {
            // don't use defaults for preview of same modifier
            Object.assign(defaultStyles, tokens);
        }
    }

    const mods = {...theme.components[componentName].variations[modName]} || {};

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

    if (Object.keys(mods).length === 1) {
        // these is boolean mod
        // _disabled: { true: {}}
        // I don't like how these code done here =((
        Object.assign(mods, {
            // _modifier_false
            '': {}
        });
    }

    const defProps = Object.keys(defs).reduce<Record<string,string>>((acc, modName) => {
        acc[modName.slice(1)] = defs[modName];
        return acc;
    }, {});

    return (
        <Root>
            <div style={{ ...defaultStyles }} key={`${componentName}_${modName}`}>
                {Object.keys(mods).map((modVal) => {
                    const props = { ...defProps, [modName.slice(1)]: modVal === 'true' ? true : '' };

                    return (
                        <span key={modVal} style={{ marginRight: '1rem', ...mods[modVal] }}>
                            <Component {...props}>
                                hello {modName}_{modVal === '' ? 'false' : modVal}
                            </Component>
                        </span>
                    );
                })}
            </div>
        </Root>
    );
}
