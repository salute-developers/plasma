import { component, mergeConfig, popoverConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const Popover = component(mergeConfig(popoverConfig as any, {}));

const placements = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
    'auto',
];

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const PopoverDefault = {
    name: 'Default',
    args: [
        {
            name: 'placement',
            value: 'bottom',
            items: toItems(placements),
        },
        {
            name: 'trigger',
            value: 'click',
            items: toItems(['click', 'hover']),
        },
        {
            name: 'hasArrow',
            value: true,
        },
        {
            name: 'animated',
            value: true,
        },
        {
            name: 'closeOnOverlayClick',
            value: true,
        },
        {
            name: 'closeOnEsc',
            value: true,
        },
        {
            name: 'skidding',
            value: 0,
        },
        {
            name: 'distance',
            value: 6,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const [isOpen, setIsOpen] = useState(true);
        const { skidding, distance, ...rest } = args;

        return (
            <div style={{ padding: '8rem 4rem' }}>
                <Popover
                    {...rest}
                    opened={isOpen}
                    onToggle={(is: boolean) => setIsOpen(is)}
                    usePortal={false}
                    target={<Button text="Target" />}
                    offset={[Number(skidding) || 0, Number(distance) || 0]}
                    style={{ borderRadius: '20px' }}
                >
                    <div
                        style={{
                            background: 'var(--surface-solid-tertiary)',
                            padding: '1rem',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                        }}
                    >
                        <p style={{ margin: 0 }}>Content</p>
                        <Button text="Close" onClick={() => setIsOpen(false)} />
                    </div>
                </Popover>
            </div>
        );
    },
};

const PopoverResizable = {
    name: 'Resizable',
    args: [
        ...PopoverDefault.args,
        {
            name: 'resizableDisabled',
            value: false,
        },
        {
            name: 'resizableDefaultWidth',
            value: 200,
        },
        {
            name: 'resizableDefaultHeight',
            value: 150,
        },
        {
            name: 'resizableMinWidth',
            value: 120,
        },
        {
            name: 'resizableMinHeight',
            value: 80,
        },
        {
            name: 'resizableMaxWidth',
            value: 480,
        },
        {
            name: 'resizableMaxHeight',
            value: 320,
        },
        {
            name: 'resizableIconSize',
            value: 'xs',
            items: toItems(['xs', 's', 'm']),
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const [isOpen, setIsOpen] = useState(true);
        const {
            skidding,
            distance,
            resizableDisabled,
            resizableDefaultWidth,
            resizableDefaultHeight,
            resizableMinWidth,
            resizableMinHeight,
            resizableMaxWidth,
            resizableMaxHeight,
            resizableIconSize,
            ...rest
        } = args;

        return (
            <div style={{ padding: '8rem 4rem' }}>
                <Popover
                    {...rest}
                    opened={isOpen}
                    onToggle={(is: boolean) => setIsOpen(is)}
                    frame="theme-root"
                    usePortal={false}
                    target={<Button text="Target" />}
                    offset={[Number(skidding) || 0, Number(distance) || 0]}
                    resizable={{
                        disabled: resizableDisabled,
                        directions: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
                        defaultSize: {
                            width: Number(resizableDefaultWidth) || 200,
                            height: Number(resizableDefaultHeight) || 150,
                        },
                        minWidth: Number(resizableMinWidth) || undefined,
                        minHeight: Number(resizableMinHeight) || undefined,
                        maxWidth: Number(resizableMaxWidth) || undefined,
                        maxHeight: Number(resizableMaxHeight) || undefined,
                        iconSize: resizableIconSize,
                    }}
                    style={{ borderRadius: '20px' }}
                >
                    <div
                        style={{
                            background: 'var(--surface-solid-tertiary)',
                            padding: '1rem',
                            borderRadius: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            height: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        <p style={{ margin: 0 }}>Content</p>
                        <Button text="Close" onClick={() => setIsOpen(false)} />
                    </div>
                </Popover>
            </div>
        );
    },
};

export const PopoverStories = [PopoverDefault, PopoverResizable];
