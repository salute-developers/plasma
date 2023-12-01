import { AvatarProps } from '../Avatar.types';
import { tokens } from '../Avatar.tokens';

export const getStatusBackgroundColor = (status: AvatarProps['status']) => {
    switch (status) {
        case 'online':
            return `var(${tokens.statusOnlineColor})`;
        case 'offline':
            return `var(${tokens.statusOfflineColor})`;
        default:
            return 'transparent';
    }
};
