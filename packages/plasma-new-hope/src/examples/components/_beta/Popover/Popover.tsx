import React, { forwardRef } from 'react';
import cls from 'classnames';

import { _beta_popoverRoot } from '../../../../components/_beta/Popover';
import type { _beta_PopoverProps } from '../../../../components/_beta/Popover';

import { appearanceConfig, DEFAULT_APPEARANCE } from './Popover.config';
import type { Appearance, AppearanceSize, AppearanceView } from './Popover.config';

type CorePopoverProps = Omit<_beta_PopoverProps, 'appearance' | 'view' | 'size'>;
type DefaultAppearance = typeof DEFAULT_APPEARANCE;

type AppearanceProps<A extends Appearance> = {
    appearance: A;
    view?: AppearanceView<A>;
    size?: AppearanceSize<A>;
};

type DefaultAppearanceProps = Omit<AppearanceProps<DefaultAppearance>, 'appearance'> & {
    appearance?: DefaultAppearance;
};

type ExplicitAppearanceProps = {
    [A in Exclude<Appearance, DefaultAppearance>]: AppearanceProps<A>;
}[Exclude<Appearance, DefaultAppearance>];

export type PopoverProps = CorePopoverProps & (DefaultAppearanceProps | ExplicitAppearanceProps);

type RuntimeAppearanceConfig = {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: Record<string, string>;
        size: Record<string, string>;
    };
    componentProps: {
        appearance: NonNullable<_beta_PopoverProps['appearance']>;
    };
};

const Root = forwardRef<HTMLDivElement, Omit<_beta_PopoverProps, 'target'>>(({ view, size, ...rest }, ref) => (
    <div ref={ref} {...rest} />
));

const CorePopover = _beta_popoverRoot(Root);

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
    ({ appearance = DEFAULT_APPEARANCE, view, size, className, ...rest }, ref) => {
        const config = appearanceConfig[appearance] as RuntimeAppearanceConfig;
        const resolvedView = view ?? config.defaults.view;
        const resolvedSize = size ?? config.defaults.size;
        const rootClassName = cls(
            config.variations.view[resolvedView],
            config.variations.size[resolvedSize],
            className,
        );

        return (
            <CorePopover
                ref={ref}
                appearance={config.componentProps.appearance}
                view={resolvedView}
                size={resolvedSize}
                className={rootClassName}
                {...rest}
            />
        );
    },
);
