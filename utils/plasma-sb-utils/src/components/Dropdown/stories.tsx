import React from 'react';
import { action } from 'storybook/actions';

import { items } from './fixtures';

export const createDefaultStory = (
    Dropdown: React.ComponentType<any>,
    components: Record<string, React.ComponentType<any>>,
) => {
    const { Button } = components;

    return ({ ...rest }: any) => {
        return (
            <Dropdown
                {...rest}
                items={items}
                onToggle={action('onToggle')}
                onHover={action('onHover')}
                onItemSelect={action('onItemSelect')}
            >
                <Button text="Список стран" size={rest.size} />
            </Dropdown>
        );
    };
};
