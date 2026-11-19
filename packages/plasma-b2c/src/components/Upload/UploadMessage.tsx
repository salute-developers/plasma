import styled from 'styled-components';
import { plasmaCore } from '@salutejs/plasma-new-hope/styled-components';

import { StatusType } from './types';

const { Caption } = plasmaCore;

const statuses = {
    error: {
        color: 'var(--text-negative)',
    },
    success: {
        color: 'var(--text-positive)',
    },
};

// NOTE: don't know how to fix ts error TS2742
type uploadMessage = React.FC<{ status?: StatusType; children?: React.ReactNode }>;

export const UploadMessage: uploadMessage = styled(Caption)<{ status?: StatusType }>`
    margin-top: 0.25rem;
    text-align: center;

    ${({ status }) => status && statuses[status]}
`;
