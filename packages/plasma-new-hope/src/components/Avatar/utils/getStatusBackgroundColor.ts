import { AvatarProps } from '../Avatar.types';
import { tokens } from '../Avatar.tokens';

export const getStatusBackgroundColor = (status: AvatarProps['status']) => {
    switch (status) {
        case 'active':
            return `var(${tokens.statusOnlineColor})`;
        case 'inactive':
            return `var(${tokens.statusOfflineColor})`;
        default:
            return 'transparent';
    }
};
