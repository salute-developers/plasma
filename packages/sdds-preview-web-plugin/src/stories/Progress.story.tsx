import { IconPlasma } from '@salutejs/plasma-icons';
import { component, mergeConfig, progressConfig } from '@salutejs/plasma-new-hope/styled-components';

const Progress = component(mergeConfig(progressConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const ProgressDefault = {
    name: 'Default',
    args: [
        {
            name: 'width',
            value: '20rem',
        },
        {
            name: 'value',
            value: 25,
        },
        {
            name: 'label',
            value: 'Лейбл',
        },
        {
            name: 'caption',
            value: 'Подпись',
        },
        {
            name: 'hasValue',
            value: true,
        },
        {
            name: 'hasLabelIcon',
            value: true,
        },
        {
            name: 'labelPlacement',
            value: 'top',
            items: toItems(['top', 'left']),
        },
        {
            name: 'valuePlacement',
            value: 'right',
            items: toItems(['right', 'left', 'top', 'none']),
        },
        {
            name: 'labelTextPlacement',
            value: 'right',
            items: toItems(['right', 'left']),
        },
        {
            name: 'valueAlign',
            value: 'start',
            items: toItems(['start', 'end']),
        },
    ],
    render: function Story(args: any) {
        const { value, width, hasLabelIcon, ...rest } = args;

        return (
            <div style={{ width }}>
                <Progress
                    {...rest}
                    value={Number(value) || 0}
                    labelIcon={hasLabelIcon ? <IconPlasma size={rest.size === 's' ? 'xs' : 's'} /> : undefined}
                />
            </div>
        );
    },
};

export const ProgressStories = [ProgressDefault];
