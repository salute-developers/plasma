import { SelectProps } from '../Select.types';

export const getView = (view: SelectProps['view'], status: SelectProps['status']) => {
    switch (status) {
        case 'success': {
            return 'positive';
        }

        case 'warning': {
            return 'warning';
        }

        case 'error': {
            return 'negative';
        }

        default: {
            return view;
        }
    }
};
