import { IconClose } from '@salutejs/plasma-icons';
import {
    buttonConfig,
    chipConfig,
    component,
    groupConfig,
    iconButtonConfig,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

const Group = component(mergeConfig(groupConfig as any, {}));
const FallbackButton = component(mergeConfig(buttonConfig as any, {}));
const FallbackIconButton = component(mergeConfig(iconButtonConfig as any, {}));
const FallbackChip = component(mergeConfig(chipConfig as any, {}));

const childKinds = ['button', 'iconButton', 'chip', 'mixed'];
const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const GroupDefault = {
    name: 'Default',
    args: [
        {
            name: 'itemsCount',
            value: 3,
        },
        {
            name: 'childKind',
            value: 'button',
            items: toItems(childKinds),
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const Button = relatedComponents?.Button ?? FallbackButton;
        const IconButton = relatedComponents?.IconButton ?? FallbackIconButton;
        const Chip = relatedComponents?.Chip ?? FallbackChip;
        const { itemsCount, childKind, ...rest } = args;
        const count = Math.max(1, Number(itemsCount) || 1);

        const renderItem = (index: number) => {
            const kind = childKind === 'mixed' ? childKinds[index % 3] : childKind;

            if (kind === 'iconButton') {
                return (
                    <IconButton key={`icon-button-${index}`}>
                        <IconClose color="inherit" size="s" />
                    </IconButton>
                );
            }

            if (kind === 'chip') {
                return <Chip key={`chip-${index}`} text={`Chip ${index}`} />;
            }

            return <Button key={`button-${index}`} text={`Button ${index}`} />;
        };

        return <Group {...rest}>{Array.from({ length: count }, (_, index) => renderItem(index))}</Group>;
    },
};

export const GroupStories = [GroupDefault];
