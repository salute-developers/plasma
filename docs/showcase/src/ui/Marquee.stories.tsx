import React from 'react';
import styled from 'styled-components';
import { Cell } from '@salutejs/ui/components/Cell';
import { Footnote1 } from '@salutejs/ui/components/Typography';
import { Marquee } from '@salutejs/ui/components/Marquee';

import { UIStoryDecorator, InSpacingDecorator } from '../helpers';

export default {
    title: 'UI/Content/Marquee',
    decorators: [UIStoryDecorator, InSpacingDecorator],
};

const MarqueeWrapper = styled(Cell)`
    width: 18rem;
    overflow: hidden;
`;

export const Default = () => {
    return (
        <MarqueeWrapper
            content={
                <Marquee>
                    <Footnote1>Очень очень длинный текст</Footnote1>
                </Marquee>
            }
        />
    );
};
