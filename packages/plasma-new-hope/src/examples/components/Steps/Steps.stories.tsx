import React, { useState, useEffect } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { IconMic } from '../../../components/_Icon';
import { argTypesFromConfig, WithTheme } from '../../_helpers';
import { StepItemProps } from '../../../components/Steps/ui';

import { config } from './Steps.config';
import { Steps, mergedConfig } from './Steps';

const { views, sizes } = getConfigVariations(config);

const meta: Meta<typeof Steps> = {
    title: 'Navigation/Steps',
    decorators: [WithTheme],
    component: Steps,
    argTypes: {
        ...argTypesFromConfig(mergedConfig),
    },
};

export default meta;

type Story = StoryObj<ComponentProps<typeof Steps>>;

const renderIndicator = ({ status, size }) => {
    let iconSize;
    if (size === 'xs' || size === 's') {
        iconSize = 'xs';
    } else if (status === 'active') {
        iconSize = 's';
    } else {
        iconSize = 'xs';
    }

    return <IconMic color="inherit" size={iconSize} />;
};

const DefaultStory = (args) => {
    const {
        maxWidth,
        title,
        content,
        size,
        indicatorType,
        quantity,
        hasContent,
        loading,
        disabled,
        simple,
        ...rest
    } = args;

    const innerTitle = title || 'Title';

    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = new Array(quantity).fill(null).map((_, index) => {
            const indicator = index + 1;
            const status = index === 0 ? 'active' : 'inactive';

            if (simple) {
                return {
                    indicator,
                    status,
                };
            }

            return {
                title: innerTitle,
                content,
                indicator,
                status,
            };
        });

        setItems(newItems);
    }, [loading, quantity, simple]);

    useEffect(() => {
        setItems((curItems) =>
            curItems.map((item, index) => {
                if (indicatorType === 'numbered') {
                    return simple
                        ? { ...item, indicator: index + 1 }
                        : { ...item, title: innerTitle, content, indicator: index + 1 };
                }

                if (indicatorType === 'bullet') {
                    return simple
                        ? { ...item, indicator: undefined }
                        : { ...item, title: innerTitle, content, indicator: undefined };
                }

                if (indicatorType === 'icon') {
                    return simple
                        ? { ...item, indicator: renderIndicator }
                        : { ...item, title: innerTitle, content, indicator: renderIndicator };
                }

                return item;
            }),
        );
    }, [indicatorType, innerTitle, content, simple]);

    useEffect(() => {
        setItems((curItems) => curItems.map((item) => ({ ...item, disabled })));
    }, [disabled]);

    const onChange = (item: StepItemProps, index: number, prevIndex: number) => {
        if (prevIndex !== undefined) {
            items[prevIndex].status = 'completed';
        }

        items[index].status = 'active';

        setItems([...items]);
    };

    return (
        <div style={{ maxWidth, height: '600px' }}>
            <Steps
                size={size}
                items={items}
                onChange={onChange}
                hasLoader={loading}
                hasContent={hasContent}
                {...rest}
            />
        </div>
    );
};

export const Default: Story = {
    args: {
        view: 'default',
        itemView: 'default',
        size: 'm',
        maxWidth: '100%',
        quantity: 6,
        title: 'Title',
        content: 'Content',
        contentAlign: 'left',
        indicatorType: 'numbered',
        orientation: 'horizontal',
        hasLine: true,
        hasContent: 'all',
        disabled: false,
        loading: false,
        simple: false,
    },
    argTypes: {
        maxWidth: {
            control: {
                type: 'text',
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        itemView: {
            options: ['default', 'negative', 'warning', 'positive'],
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: {
                type: 'inline-radio',
            },
        },
        contentAlign: {
            options: ['left', 'center'],
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'orientation', eq: 'horizontal' },
        },
        indicatorType: {
            options: ['numbered', 'bullet', 'icon'],
            control: {
                type: 'inline-radio',
            },
        },
        hasContent: {
            options: ['all', 'active', 'none'],
            control: {
                type: 'inline-radio',
            },
        },
        simple: {
            control: {
                type: 'boolean',
            },
        },
    },
    render: (args) => <DefaultStory {...args} />,
};
