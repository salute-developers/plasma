import type { DropdownItemOption, DropdownNewProps } from '@salutejs/plasma-new-hope';

import React, { ComponentProps } from 'react';

declare const DropdownNewHope: React.FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        size: {
            xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> & {
        items: import('@salutejs/plasma-new-hope/types/components/Dropdown/index.js').DropdownItemOption[];
        alwaysOpened?: boolean;
        children?: React.ReactNode;
        itemRole?: string;
        onHover?:
            | ((
                  index: number,
                  item: import('@salutejs/plasma-new-hope/types/components/Dropdown/index.js').DropdownItemOption,
              ) => void)
            | undefined;
        onItemSelect?:
            | ((
                  item: import('@salutejs/plasma-new-hope/types/components/Dropdown/index.js').DropdownItemOption,
                  event: React.SyntheticEvent,
              ) => void)
            | undefined;
        trigger?: import('@salutejs/plasma-new-hope/types/components/Dropdown/Dropdown.types.js').DropdownTrigger;
        openByRightClick?: boolean;
        placement?: import('@salutejs/plasma-new-hope/types/components/Dropdown/Dropdown.types.js').DropdownPlacement;
        offset?: [number, number];
        listMaxHeight?: React.CSSProperties['height'];
        listWidth?: React.CSSProperties['width'];
        hasArrow?: boolean;
        closeOnSelect?: boolean;
        closeOnOverlayClick?: boolean;
        onToggle?: (isOpen: boolean, event?: React.SyntheticEvent | Event) => void;
        size?: string;
        view?: string;
        variant?: 'normal' | 'tight';
        portal?: string | React.RefObject<HTMLElement>;
        renderItem?:
            | ((
                  item: import('@salutejs/plasma-new-hope/types/components/Dropdown/index.js').DropdownItemOption,
              ) => React.ReactNode)
            | undefined;
        zIndex?: React.CSSProperties['zIndex'];
        beforeList?: React.ReactNode;
        afterList?: React.ReactNode;
        onItemClick?:
            | ((
                  item: import('@salutejs/plasma-new-hope/types/components/Dropdown/index.js').DropdownItemOption,
                  event: React.SyntheticEvent,
              ) => void)
            | undefined;
        listHeight?: React.CSSProperties['height'];
        hoverIndex?: number;
        listOverflow?: React.CSSProperties['overflow'];
    } & React.HTMLAttributes<HTMLDivElement> &
        React.RefAttributes<HTMLDivElement>
>;
export type DropdownProps<T extends DropdownItemOption> = Omit<DropdownNewProps<T>, 'size' | 'view'> &
    Pick<ComponentProps<typeof DropdownNewHope>, 'size' | 'view'>;
declare const Dropdown: <T extends DropdownItemOption>(
    props: Omit<DropdownNewProps<T>, 'size' | 'view'> &
        Pick<
            import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
                size: {
                    xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                    l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                    m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                    s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                    xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                };
                view: {
                    default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                };
            }> & {
                items: import('@salutejs/plasma-new-hope/types/components/Dropdown/index.js').DropdownItemOption[];
                alwaysOpened?: boolean;
                children?: React.ReactNode;
                itemRole?: string;
                onHover?:
                    | ((
                          index: number,
                          item: import('@salutejs/plasma-new-hope/types/components/Dropdown/index.js').DropdownItemOption,
                      ) => void)
                    | undefined;
                onItemSelect?:
                    | ((
                          item: import('@salutejs/plasma-new-hope/types/components/Dropdown/index.js').DropdownItemOption,
                          event: React.SyntheticEvent,
                      ) => void)
                    | undefined;
                trigger?: import('@salutejs/plasma-new-hope/types/components/Dropdown/Dropdown.types.js').DropdownTrigger;
                openByRightClick?: boolean;
                placement?: import('@salutejs/plasma-new-hope/types/components/Dropdown/Dropdown.types.js').DropdownPlacement;
                offset?: [number, number];
                listMaxHeight?: React.CSSProperties['height'];
                listWidth?: React.CSSProperties['width'];
                hasArrow?: boolean;
                closeOnSelect?: boolean;
                closeOnOverlayClick?: boolean;
                onToggle?: (isOpen: boolean, event?: React.SyntheticEvent | Event) => void;
                size?: string;
                view?: string;
                variant?: 'normal' | 'tight';
                portal?: string | React.RefObject<HTMLElement>;
                renderItem?:
                    | ((
                          item: import('@salutejs/plasma-new-hope/types/components/Dropdown/index.js').DropdownItemOption,
                      ) => React.ReactNode)
                    | undefined;
                zIndex?: React.CSSProperties['zIndex'];
                beforeList?: React.ReactNode;
                afterList?: React.ReactNode;
                onItemClick?:
                    | ((
                          item: import('@salutejs/plasma-new-hope/types/components/Dropdown/index.js').DropdownItemOption,
                          event: React.SyntheticEvent,
                      ) => void)
                    | undefined;
                listHeight?: React.CSSProperties['height'];
                hoverIndex?: number;
                listOverflow?: React.CSSProperties['overflow'];
            } & React.HTMLAttributes<HTMLDivElement> &
                React.RefAttributes<HTMLDivElement>,
            'size' | 'view'
        > &
        React.RefAttributes<HTMLButtonElement>,
) => React.ReactElement | null;
export { Dropdown };
