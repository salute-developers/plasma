import { disableProps, exampleOnly } from '../../helpers';
import { InSpacing as InSpacingDecorator } from '../StoryDecorators';

import { alignments, separators, visibleItemsCounts } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['columns', 'value', 'onChange'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/Wheel',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    component,
    decorators: [InSpacingDecorator],
    args: {
        size: 'displayL',
        view: 'default',
        hasControls: true,
        visibleItemsCount: 5,
        animated: true,
        align: 'center',
        width: undefined,
        columnWidths: {},
        columnsCount: 3,
        hoursLoop: true,
        minutesLoop: false,
        secondsLoop: false,
        disabled: false,
        separator: 'dots',
        ...defaultArgs,
    },
    argTypes: {
        size: { options: componentConfig.sizes, control: { type: 'select' } },
        view: { options: componentConfig.views, control: { type: 'select' } },
        hasControls: { control: { type: 'boolean' } },
        visibleItemsCount: { options: visibleItemsCounts, control: { type: 'select' } },
        animated: { control: { type: 'boolean' } },
        align: { options: alignments, control: { type: 'select' } },
        width: { control: { type: 'text' } },
        disabled: { control: { type: 'boolean' } },
        separator: { options: separators, control: { type: 'select' } },
        ...exampleOnly({
            columnWidths: {
                control: { type: 'object' },
                description: 'Ширины колонок по имени, например { hours: 160, minutes: "12rem" }.',
            },
            columnsCount: { control: { type: 'number', min: 0, max: 3, step: 1 } },
            hoursLoop: { control: { type: 'boolean' } },
            minutesLoop: { control: { type: 'boolean' } },
            secondsLoop: { control: { type: 'boolean' } },
        }),
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
