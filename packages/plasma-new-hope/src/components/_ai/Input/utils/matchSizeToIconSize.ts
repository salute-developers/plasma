export const matchSizeToIconSize = (size: string | undefined): 's' | 'xs' | 'm' => {
    switch (size) {
        case 'xl':
        case 'l':
        case 'm': {
            return 's';
        }
        case 's':
        case 'xs': {
            return 'xs';
        }
        default: {
            return 's';
        }
    }
};
