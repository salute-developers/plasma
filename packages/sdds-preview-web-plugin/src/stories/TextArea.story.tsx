import { IconShazam } from '@salutejs/plasma-icons';
import { component, textAreaConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const TextArea = component(mergeConfig(textAreaConfig as any, {}));

const hintPlacements = [
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

const TextAreaDefault = {
    name: 'Default',
    args: [
        {
            name: 'label',
            value: 'Лейбл',
        },
        {
            name: 'labelPlacement',
            value: 'outer',
            items: toItems(['inner', 'outer']),
        },
        {
            name: 'placeholder',
            value: 'Заполните многострочное поле',
        },
        {
            name: 'titleCaption',
            value: 'Подпись к полю',
        },
        {
            name: 'leftHelper',
            value: 'Подсказка к полю слева',
        },
        {
            name: 'rightHelper',
            value: 'Подсказка к полю справа',
        },
        {
            name: 'hasDivider',
            value: false,
        },
        {
            name: 'enableContentRight',
            value: true,
        },
        {
            name: 'enableHeader',
            value: false,
        },
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'readOnly',
            value: false,
        },
        {
            name: 'autoResize',
            value: false,
        },
        {
            name: 'minAuto',
            value: 0,
        },
        {
            name: 'maxAuto',
            value: 0,
        },
        {
            name: 'required',
            value: false,
        },
        {
            name: 'requiredPlacement',
            value: 'right',
            items: toItems(['left', 'right']),
        },
        {
            name: 'hasRequiredIndicator',
            value: false,
        },
        {
            name: 'optional',
            value: false,
        },
        {
            name: 'optionalText',
            value: 'опционально',
        },
        {
            name: 'hasHint',
            value: true,
        },
        {
            name: 'hintText',
            value: 'Текст подсказки',
        },
        {
            name: 'hintTrigger',
            value: 'hover',
            items: toItems(['hover', 'click']),
        },
        {
            name: 'hintPlacement',
            value: 'auto',
            items: toItems(hintPlacements),
        },
        {
            name: 'hintWidth',
            value: '10rem',
        },
        {
            name: 'hintHasArrow',
            value: true,
        },
    ],
    render: function Story(args: any) {
        const [value, setValue] = useState('');
        const {
            enableContentRight,
            enableHeader,
            hasHint,
            hintText,
            hintTrigger,
            hintPlacement,
            hintWidth,
            hintHasArrow,
            titleCaption,
            leftHelper,
            rightHelper,
            optionalText,
            minAuto,
            maxAuto,
            ...rest
        } = args;

        const hintProps = hasHint
            ? { hintText, hintTrigger, hintPlacement, hintWidth: hintWidth || undefined, hintHasArrow }
            : {};

        return (
            <TextArea
                {...rest}
                {...hintProps}
                value={value}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value)}
                titleCaption={titleCaption || undefined}
                leftHelper={leftHelper || undefined}
                rightHelper={rightHelper || undefined}
                optionalText={optionalText || undefined}
                minAuto={minAuto ? Number(minAuto) : undefined}
                maxAuto={maxAuto ? Number(maxAuto) : undefined}
                contentRight={enableContentRight ? <IconShazam color="inherit" /> : undefined}
                headerSlot={enableHeader ? <span>Header</span> : undefined}
            />
        );
    },
};

export const TextAreaStories = [TextAreaDefault];
