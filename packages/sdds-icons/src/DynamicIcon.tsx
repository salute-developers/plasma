'use client';

import React, { forwardRef, useEffect, useState } from 'react';
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';

import dynamicIconImports from './dynamicIconImports.js';

export type IconName = keyof typeof dynamicIconImports;
type IconProps = ComponentPropsWithoutRef<'svg'> & {
    gradient?: string;
};

export interface DynamicIconProps extends ComponentPropsWithoutRef<'svg'> {
    name: IconName;
    fallback?: ReactNode;
    gradient?: string;
}

type IconComponent = ComponentType<IconProps & React.RefAttributes<SVGSVGElement>>;
type LoadedIcon = {
    name: IconName;
    component: IconComponent;
};
type IconLoader = () => Promise<{ default: IconComponent }>;

const iconLoaders = dynamicIconImports as Record<IconName, IconLoader>;

export const iconNames = Object.keys(dynamicIconImports) as IconName[];

export const isIconName = (name: string): name is IconName =>
    Object.prototype.hasOwnProperty.call(dynamicIconImports, name);

const loadIcon = async (name: IconName): Promise<IconComponent> => {
    if (!isIconName(name)) {
        throw new Error(`[sdds-icons]: Icon "${name}" was not found`);
    }

    const iconModule = await iconLoaders[name]();

    return iconModule.default;
};

export const DynamicIcon = /* @__PURE__ */ forwardRef<SVGSVGElement, DynamicIconProps>(
    ({ name, fallback = null, ...props }, ref) => {
        const [loadedIcon, setLoadedIcon] = useState<LoadedIcon>();

        useEffect(() => {
            let active = true;

            loadIcon(name)
                .then((component) => {
                    if (active) {
                        setLoadedIcon({ name, component });
                    }
                })
                .catch((error: unknown) => {
                    if (active) {
                        console.error(error);
                    }
                });

            return () => {
                active = false;
            };
        }, [name]);

        if (loadedIcon?.name !== name) {
            return <>{fallback}</>;
        }

        const Icon = loadedIcon.component;

        return <Icon ref={ref} {...props} />;
    },
);

export default DynamicIcon;
