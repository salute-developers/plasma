import type { Meta } from '@storybook/react-vite';
import { getWithTextGradientStories } from '@salutejs/plasma-sb-utils';

import { withTextGradient } from '../../hocs';
import { Button } from '../Button';
import { config as buttonConfig } from '../Button/Button.config';
import { Badge } from '../Badge';
import { config as badgeConfig } from '../Badge/Badge.config';
import { Chip } from '../Chip';
import { config as chipConfig } from '../Chip/Chip.config';

const { meta: META, WithButton, WithBadge, WithChip } = getWithTextGradientStories({
    withTextGradient,
    Button,
    buttonConfig,
    Badge,
    badgeConfig,
    Chip,
    chipConfig,
});

const meta: Meta = {
    ...META,
    title: 'HOCs/WithTextGradient',
};

export default meta;

export { WithButton, WithBadge, WithChip };
