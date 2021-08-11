import React from 'react';
import { Radiobox } from '@salutejs/plasma-ui/components/Radiobox';

import { RadioboxShowcase, UIStoryDecorator, InSpacingDecorator } from '../helpers';

export default {
    title: 'UI/Controls/Radiobox',
    component: Radiobox,
    decorators: [UIStoryDecorator, InSpacingDecorator],
};

export const Default = ({ withLabels, withDescription = false }: { withLabels: boolean; withDescription: boolean }) => {
    return <RadioboxShowcase withLabels={withLabels} withDescription={withDescription} component={Radiobox} />;
};
