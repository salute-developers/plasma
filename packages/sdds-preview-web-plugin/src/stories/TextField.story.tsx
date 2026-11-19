import { IconPlasma, IconShazam } from '@salutejs/plasma-icons';
import { component, textFieldConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const TextField = component(mergeConfig(textFieldConfig as any, {}));

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

const TextFieldDefault = {
    name: 'Default',
    args: [
        {
            name: 'label',
            value: 'Label',
        },
        {
            name: 'placeholder',
            value: 'Placeholder',
        },
        {
            name: 'titleCaption',
            value: '',
        },
        {
            name: 'leftHelper',
            value: 'Helper text',
        },
        {
            name: 'rightHelper',
            value: '',
        },
        {
            name: 'textBefore',
            value: '',
        },
        {
            name: 'textAfter',
            value: '',
        },
        {
            name: 'keepPlaceholder',
            value: false,
        },
        {
            name: 'maxLength',
            value: '',
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
            name: 'enableContentLeft',
            value: true,
        },
        {
            name: 'enableContentRight',
            value: false,
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
            value: false,
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
            name: 'hintTargetPlacement',
            value: 'outer',
            items: toItems(['outer', 'inner']),
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
            enableContentLeft,
            enableContentRight,
            hasHint,
            hintText,
            hintTrigger,
            hintTargetPlacement,
            hintPlacement,
            hintWidth,
            hintHasArrow,
            titleCaption,
            leftHelper,
            rightHelper,
            textBefore,
            textAfter,
            optionalText,
            maxLength,
            ...rest
        } = args;

        const hintProps = hasHint
            ? {
                  hintText,
                  hintTrigger,
                  hintTargetPlacement,
                  hintPlacement,
                  hintWidth: hintWidth || undefined,
                  hintHasArrow,
              }
            : {};

        return (
            <TextField
                {...rest}
                {...hintProps}
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                titleCaption={titleCaption || undefined}
                leftHelper={leftHelper || undefined}
                rightHelper={rightHelper || undefined}
                textBefore={textBefore || undefined}
                textAfter={textAfter || undefined}
                optionalText={optionalText || undefined}
                maxLength={maxLength ? Number(maxLength) : undefined}
                contentLeft={enableContentLeft ? <IconPlasma color="inherit" /> : undefined}
                contentRight={enableContentRight ? <IconShazam color="inherit" /> : undefined}
            />
        );
    },
};

export const TextFieldStories = [TextFieldDefault];
