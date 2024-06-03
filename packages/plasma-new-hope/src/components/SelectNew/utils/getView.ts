import { SelectNewProps } from '../SelectNew.types';

export const getView = (view: SelectNewProps['view'], status: SelectNewProps['status']) => {
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
