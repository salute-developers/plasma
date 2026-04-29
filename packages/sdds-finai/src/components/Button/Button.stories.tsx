import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { getButtonStories } from '@salutejs/plasma-sb-utils';
import { IconMic } from '@salutejs/plasma-icons';

import { Counter } from '../Counter/Counter';

import { Button } from './Button';
import { config } from './Button.config';

type ButtonProps = ComponentProps<typeof Button>;

const { meta: META, Default: DefaultStory, WithValue } = getButtonStories({
    component: Button,
    componentConfig: config,
    additionalComponents: {
        Counter,
    },
});

const meta: Meta<ButtonProps> = {
    ...META,
    title: 'Data Entry/Button',
};

export default meta;

const getCounterView = (buttonView: string) => {
    const darkViews = ['secondary', 'white', 'clear'];
    return darkViews.includes(buttonView) ? 'default' : 'light';
};
const getCounterSize = (size: string) => (size === 'xxs' ? 'xxs' : 'xs');
const getIconSize = (size: string) => (size === 'xs' || size === 'xxs' ? 'xs' : 's');
const shouldShowIcon = (enabled: boolean, size: string) => enabled && size !== 'xxs';

const Default: StoryObj<ButtonProps> = {
    ...DefaultStory,
    render: (args: any) => {
        const { size, view, enableCounter, enableContentLeft, enableContentRight, ...rest } = args;

        const icon = <IconMic size={getIconSize(size)} color="inherit" />;

        return (
            <Button
                {...rest}
                view={view}
                size={size}
                contentLeft={shouldShowIcon(enableContentLeft, size) ? icon : undefined}
                contentRight={shouldShowIcon(enableContentRight, size) ? icon : undefined}
                additionalContent={
                    enableCounter ? (
                        <Counter view={getCounterView(view)} size={getCounterSize(size)} count={0} />
                    ) : undefined
                }
            />
        );
    },
};

export { Default, WithValue };
