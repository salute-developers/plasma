import React from 'react';

import { _component } from './linaria';
import type {
    ComponentConfig,
    HTMLTagList,
    PropsType,
    Variants,
    HTMLAttributesWithoutOnChange,
    HTMLAttributesWithoutOnChangeAndDefaultValue,
} from './types';

export const mergeConfig = <
    Tag extends HTMLTagList,
    VariantList extends Variants,
    VariantsProps extends PropsType<VariantList>,
    LayoutPropsBase extends
        | React.HTMLAttributes<HTMLElement>
        | HTMLAttributesWithoutOnChange<HTMLElement>
        | HTMLAttributesWithoutOnChangeAndDefaultValue<HTMLElement>,
    LayoutPropsUser extends
        | React.HTMLAttributes<HTMLElement>
        | HTMLAttributesWithoutOnChange<HTMLElement>
        | HTMLAttributesWithoutOnChangeAndDefaultValue<HTMLElement>
        | undefined = undefined
>(
    baseConfig: ComponentConfig<Tag, Variants, PropsType & LayoutPropsBase, LayoutPropsBase>,
    userConfig?: Partial<ComponentConfig<Tag, VariantList, VariantsProps, LayoutPropsUser>>,
) => {
    const res = { ...baseConfig, ...userConfig };

    if (res.variations) {
        // copy variations base css
        // eslint-disable-next-line guard-for-in
        for (const key in res.variations) {
            const variant = baseConfig.variations[key];

            res.variations[key].css = variant?.css;
            /* start of bad decision */
            if (!res.variations[key].true && variant?.true) {
                res.variations[key].true = variant.true;
            }
            /* end of bad decision */
            if (variant?.attrs) {
                res.variations[key].attrs = variant.attrs;
            }
        }
    }

    // eslint-disable-next-line guard-for-in
    for (const key in baseConfig.defaults || {}) {
        if (!(key in res.defaults)) {
            res.defaults[key] = baseConfig.defaults[key];
        }
    }

    return res as ComponentConfig<
        Tag,
        VariantList,
        PropsType<VariantList>,
        LayoutPropsUser extends undefined ? LayoutPropsBase : LayoutPropsUser
    >;
};

// INFO: Метод, который проводит слияние двух объектов
// INFO: если значение явно указанно как undefined/null/пустая строка, то будет взято значение указанное как default
function mergeWithoutUndefined(target: any, componentProps: any) {
    const filteredProps = Object.entries(componentProps).filter(
        ([_, value]) => value !== undefined && value !== null && value !== '',
    );
    return { ...target, ...Object.fromEntries(filteredProps) };
}

export function component<
    Tag extends HTMLTagList,
    VariantList extends Variants,
    VariantsProps extends PropsType<VariantList>,
    LayoutProps extends
        | React.HTMLAttributes<HTMLElement>
        | HTMLAttributesWithoutOnChange<HTMLElement>
        | HTMLAttributesWithoutOnChangeAndDefaultValue<HTMLElement>
>(
    config: ComponentConfig<Tag, VariantList, VariantsProps, LayoutProps>,
): React.FunctionComponent<VariantsProps & LayoutProps> {
    const Comp = config.layout(_component((config as unknown) as ComponentConfig));

    return React.forwardRef<VariantsProps & LayoutProps, any>((props, ref) => {
        const mergedProps = mergeWithoutUndefined(config?.defaults, props);

        return <Comp {...mergedProps} ref={ref} />;
    });
}
