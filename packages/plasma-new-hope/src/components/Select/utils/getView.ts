import { MergedSelectProps } from '../Select.types';

export const getView = (status: MergedSelectProps['status'], view: MergedSelectProps['view']) => {
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
            return view;
        }
    }
};
