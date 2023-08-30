'use client';

// import { lazy, Suspense } from 'react';

import { styled } from '@linaria/react';

// import { buttonConfig } from '@salutejs/plasma-new-hope';
// import { component, mergeConfig } from '@salutejs/plasma-new-hope';
import { BgType, useTheme } from '../../state';

import { Button, buttonConfig } from '../../hope';
import { typoPlain } from '../../tokens';
 
const components = {
    Button: Button,
    Button_Conf: buttonConfig,
} as Record<string, any>;

export interface PreviewProps {
    componentName: string;
    modName: string;
}




const bgTypes = {
    [BgType.NO]: '',
    [BgType.SQUARE]: 'url(/square.png)',
    [BgType.DARK]: 'url(https://cdn-app.sberdevices.ru/misc/0.0.0/assets/sberdevices/boom3/images/intro/bg@2x.jpeg)',
};

const Root = styled.div<{ $type: BgType}>`
    border: 1px dotted #4169e1;
    border-radius: 1rem;
    min-height: 6rem;
    padding: 1rem;

    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;

    align-items: baseline;

    background-size: ${props => props.$type === BgType.DARK ? 'cover' : 'auto'};
    background-attachment: ${props => props.$type === BgType.DARK ? 'fixed' : ''};
    background-image: ${props => bgTypes[props.$type]};
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

    const defaultStyles: Record<string, string> = {};

    for (const defModName of Object.keys(defs)) {
        const defModValue = defs[defModName];
        const tokens = theme.components[componentName].variations[defModName]?.[defModValue] || {};
        if (defModName !== modName) {
            // don't use defaults for preview of same modifier
            Object.assign(defaultStyles, tokens);
        }
    }


    for (const s in defaultStyles) {
        if (defaultStyles[s].startsWith('$')) {
            // TODO: Refactor
            // enum tokens
            // @ts-ignore
            Object.assign(defaultStyles, typoPlain[defaultStyles[s]]);
            // console.log(styles, typoPlain, s, styles[s], typoPlain[styles[s]]);
            delete defaultStyles[s];
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
        <Root $type={theme.previewType} style={{ ...defaultStyles }} key={`${componentName}_${modName}`}>
            {Object.keys(mods).map((modVal) => {
                const props = { ...defProps, [modName.slice(1)]: modVal === 'true' ? true : '' };
                
                const styles = {
                    ...mods[modVal]
                };

                
                for (const s in styles) {
                    // TODO: its hack for empty mapping
                    if (styles[s] === ' ') {
                        delete styles[s];
                    } else if (styles[s].startsWith('$')) {
                        // TODO: Refactor
                        // enum tokens
                        // @ts-ignore
                        Object.assign(styles, typoPlain[styles[s]]);
                        // console.log(styles, typoPlain, s, styles[s], typoPlain[styles[s]]);
                        delete styles[s];

                    }
                }

                return (
                    <span key={modVal} style={styles}>
                        <Component {...props}>
                            hello {modName}_{modVal === '' ? 'false' : modVal}
                        </Component>
                    </span>
                );
            })}
        </Root>
    );
}
