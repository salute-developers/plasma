import { IconDisclosureRight } from '@salutejs/plasma-icons';
import { component, mergeConfig, tooltipConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const Tooltip = component(mergeConfig(tooltipConfig as any, {}));

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

const commonArgs = [
    {
        name: 'maxWidth',
        value: 10,
    },
    {
        name: 'minWidth',
        value: 3,
    },
    {
        name: 'hasArrow',
        value: true,
    },
    {
        name: 'animated',
        value: true,
    },
];

const TooltipDefault = {
    name: 'Default',
    args: commonArgs,
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { maxWidth, minWidth, ...rest } = args;
        const props = {
            ...rest,
            maxWidth: Number(maxWidth) || undefined,
            minWidth: Number(minWidth) || undefined,
            usePortal: false,
        };

        return (
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, max-content)',
                    gap: '1rem 3.5rem',
                    padding: '3.5rem',
                }}
            >
                <Tooltip
                    target={<Tooltip target={<Button text="Btn" />} placement="left" opened text="left" {...props} />}
                    placement="top-start"
                    opened
                    text="top-start"
                    {...props}
                />
                <Tooltip target={<Button text="Btn" />} placement="top" opened text="top" {...props} />
                <Tooltip
                    target={<Tooltip target={<Button text="Btn" />} placement="right" opened text="right" {...props} />}
                    placement="top-end"
                    opened
                    text="top-end"
                    {...props}
                />
                <Tooltip
                    target={<Button text="Btn" />}
                    placement="bottom-start"
                    opened
                    text="bottom-start"
                    {...props}
                />
                <Tooltip target={<Button text="Btn" />} placement="bottom" opened text="bottom" {...props} />
                <Tooltip target={<Button text="Btn" />} placement="bottom-end" opened text="bottom-end" {...props} />
            </div>
        );
    },
};

const TooltipLive = {
    name: 'Live',
    args: [
        {
            name: 'placement',
            value: 'bottom',
            items: toItems(placements),
        },
        ...commonArgs,
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const [isOpen, setIsOpen] = useState(true);
        const { maxWidth, minWidth, ...rest } = args;

        return (
            <div style={{ display: 'flex', padding: '8rem' }}>
                <Tooltip
                    {...rest}
                    maxWidth={Number(maxWidth) || undefined}
                    minWidth={Number(minWidth) || undefined}
                    usePortal={false}
                    target={<Button text="Show tooltip" onClick={() => setIsOpen(!isOpen)} />}
                    contentLeft={<IconDisclosureRight size="xs" />}
                    text="Tooltip text"
                    opened={isOpen}
                />
            </div>
        );
    },
};

export const TooltipStories = [TooltipDefault, TooltipLive];
