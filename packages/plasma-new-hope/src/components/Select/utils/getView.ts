import { MergedSelectProps } from '../Select.types';

export const getView = (status: MergedSelectProps['status']) => {
    switch (status) {
        case 'success': {
            return 'positive';
        }

        case 'error': {
            return 'negative';
        }

        case 'warning': {
            return 'warning';
        }

        default: {
            return 'default';
        }
    }
};
