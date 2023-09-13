import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { linkConfig } from '../../../../components/Link';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Link.config';
import { Link } from './Link';

export default {
    title: 'plasma_web/Link',
    decorators: [WithTheme],
    component: Link,
    argTypes: argTypesFromConfig(mergeConfig(linkConfig, config)),
} as ComponentMeta<typeof Link>;

export const Default: ComponentStory<typeof Link> = (props) => {
    return (
        <Link target="_blank" href="https://google.com" {...props}>
            Hello
        </Link>
    );
};
