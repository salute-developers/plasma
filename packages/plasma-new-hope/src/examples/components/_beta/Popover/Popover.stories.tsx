import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { Cell, CellTextbox, CellTextboxTitle, CellTextboxSubtitle } from '../../Cell/Cell';
import { Button } from '../../Button/Button';
import { ButtonGroup } from '../../ButtonGroup/ButtonGroup';
import { ViewContainer } from '../../ViewContainer/ViewContainer';

import { Popover } from './Popover';

type StoryProps = ComponentProps<typeof Popover>;

const appearance = ['closeNone', 'closeInner'];
const placements = [
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
];
const trigger = ['click', 'hover', 'focus'];
const view = ['default', 'accent'];
const size = ['l', 'm', 's'];

const meta: Meta<StoryProps> = {
    title: '_Beta/Overlay/Popover',
    component: Popover,
    argTypes: {
        appearance: {
            options: appearance,
            control: {
                type: 'select',
            },
        },
        placement: {
            options: placements,
            control: {
                type: 'select',
            },
        },
        trigger: {
            options: trigger,
            control: {
                type: 'select',
            },
        },
        defaultOpened: {
            control: {
                type: 'boolean',
            },
        },
        hasTail: {
            control: {
                type: 'boolean',
            },
        },
        flip: {
            control: {
                type: 'boolean',
            },
        },
        shift: {
            control: {
                type: 'boolean',
            },
        },
        offset: {
            control: {
                type: 'number',
            },
        },
        outsideClick: {
            control: {
                type: 'boolean',
            },
        },
        delayOpen: {
            control: {
                type: 'number',
            },
        },
        delayClose: {
            control: {
                type: 'number',
            },
        },
        view: {
            options: view,
            control: {
                type: 'select',
            },
        },
        size: {
            options: size,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        appearance: 'closeNone',
        placement: 'bottom',
        trigger: 'click',
        defaultOpened: false,
        hasTail: true,
        flip: false,
        shift: false,
        offset: 0,
        outsideClick: true,
        delayOpen: 0,
        delayClose: 0,
        view: 'default',
        size: 'm',
    },
};

export default meta;

const StoryDefault = (args: StoryProps) => {
    React.useEffect(() => {
        window.scrollTo(
            (document.documentElement.scrollWidth - window.innerWidth) / 2,
            (document.documentElement.scrollHeight - window.innerHeight) / 2,
        );
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '400vw',
                height: '400vh',
            }}
        >
            <Popover target={<Button>Target</Button>} {...args}>
                <ViewContainer view={args.view === 'default' ? undefined : 'onDark'}>
                    <Cell size="m">
                        <CellTextbox>
                            <CellTextboxTitle>Title</CellTextboxTitle>
                            <CellTextboxSubtitle>Description</CellTextboxSubtitle>
                            <ButtonGroup style={{ marginTop: '10px' }} isCommonButtonStyles={false}>
                                <Button>Label</Button>
                                <Button view="secondary">Label</Button>
                            </ButtonGroup>
                        </CellTextbox>
                    </Cell>
                </ViewContainer>
            </Popover>
        </div>
    );
};

export const Default: StoryObj<StoryProps> = {
    render: (args) => <StoryDefault {...args} />,
};

const StoryResizable = (args: StoryProps) => {
    const {
        resizableDirections,
        resizableHiddenIcons,
        resizableDefaultSize,
        resizableMinWidth,
        resizableMinHeight,
        resizableMaxWidth,
        resizableMaxHeight,
        resizableIconSize,
    } = args;

    React.useEffect(() => {
        window.scrollTo(
            (document.documentElement.scrollWidth - window.innerWidth) / 2,
            (document.documentElement.scrollHeight - window.innerHeight) / 2,
        );
    }, []);

    const cells = [
        { num: 1, color: '#e74c3c' },
        { num: 2, color: '#3498db' },
        { num: 3, color: '#f1c40f' },
        { num: 4, color: '#27ae60' },
    ];

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '400vw',
                height: '400vh',
            }}
        >
            <Popover
                target={<Button>Target</Button>}
                resizable={{
                    directions: resizableDirections,
                    hiddenIcons: resizableHiddenIcons,
                    defaultSize: resizableDefaultSize,
                    minWidth: resizableMinWidth,
                    minHeight: resizableMinHeight,
                    maxWidth: resizableMaxWidth,
                    maxHeight: resizableMaxHeight,
                    iconSize: resizableIconSize,
                }}
                {...args}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '1fr 1fr',
                    }}
                >
                    {cells.map(({ num, color }) => (
                        <div
                            key={num}
                            style={{
                                background: color,
                                color: 'white',
                                fontSize: '4vw',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {num}
                        </div>
                    ))}
                </div>
            </Popover>
        </div>
    );
};

export const Resizable: StoryObj<StoryProps> = {
    argTypes: {
        resizableDirections: {
            control: 'check',
            options: ['top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'],
        },
        resizableDefaultSize: {
            control: 'object',
        },
        resizableHiddenIcons: {
            control: 'check',
            options: ['top-right', 'bottom-right', 'bottom-left', 'top-left'],
        },
        resizableMinWidth: {
            control: 'number',
        },
        resizableMinHeight: {
            control: 'number',
        },
        resizableMaxWidth: {
            control: 'number',
        },
        resizableMaxHeight: {
            control: 'number',
        },
        resizableIconSize: {
            control: {
                type: 'select',
            },
            options: ['xs', 's', 'm'],
        },
    },
    args: {
        resizableDirections: ['bottom-right'],
        resizableHiddenIcons: [],
        resizableIconSize: 's',
        resizableDefaultSize: { width: 300, height: 300 },
        resizableMinWidth: 300,
        resizableMinHeight: 300,
    },
    render: (args) => <StoryResizable {...args} />,
};
