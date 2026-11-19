import { IconEdit } from '@salutejs/plasma-icons';
import {
    component,
    mergeConfig,
    toolbarConfig,
    toolbarDividerConfig,
} from '@salutejs/plasma-new-hope/styled-components';

const Toolbar = component(mergeConfig(toolbarConfig as any, {}));
const ToolbarDivider = component(mergeConfig(toolbarDividerConfig as any));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const ToolbarDefault = {
    name: 'Default',
    args: [
        {
            name: 'orientation',
            value: 'vertical',
            items: toItems(['vertical', 'horizontal']),
        },
        {
            name: 'hasShadow',
            value: true,
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button } = relatedComponents;
        const { ...rest } = args;
        const button = (key: string) => (
            <Button key={key} square size={rest.size} view="clear" contentLeft={<IconEdit />} />
        );

        return (
            <Toolbar {...rest}>
                {button('a')}
                {button('b')}
                <ToolbarDivider />
                {button('c')}
                {button('d')}
            </Toolbar>
        );
    },
};

export const ToolbarStories = [ToolbarDefault];
