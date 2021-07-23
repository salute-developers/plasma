import React from 'react';
import styled, { css } from 'styled-components';
import { Headline1, Headline2 } from '@salutejs/plasma-ui';
import { DeviceFamily } from '@salutejs/plasma-temple';
import { detectDevice, mediaQuery } from '@salutejs/plasma-ui/utils';

const mapDeviceToHeadline: Record<DeviceFamily, React.FC> = {
    sberBox: Headline1,
    sberPortal: Headline2,
    mobile: Headline2,
};

export const Headline = styled(mapDeviceToHeadline[detectDevice()])`
    margin-bottom: 1rem;

    ${mediaQuery(
        'M',
        2,
    )(
        css`
            margin-bottom: 0.75rem;
        `,
    )}
`;
