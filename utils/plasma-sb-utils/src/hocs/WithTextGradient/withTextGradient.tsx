import { getConfigVariations } from '../../helpers';
import { appearances as chipAppearancesDefault } from '../../components/Chip/fixtures';

import { createMeta } from './meta';
import {
    createButtonWithTextGradientStory,
    createBadgeWithTextGradientStory,
    createChipWithTextGradientStory,
} from './stories';

type GetWithTextGradientStoriesProps = {
    withTextGradient: any;
    Button: any;
    buttonConfig?: any;
    Badge: any;
    badgeConfig?: any;
    Chip: any;
    chipConfig?: any;
    chipAppearances?: string[];
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

export const getWithTextGradientStories = ({
    withTextGradient,
    Button,
    buttonConfig,
    Badge,
    badgeConfig,
    Chip,
    chipConfig,
    chipAppearances = chipAppearancesDefault,
    title,
    defaultArgs,
    additionalArgTypes,
    disablePropsList,
}: GetWithTextGradientStoriesProps) => {
    const buttonViews = buttonConfig ? getConfigVariations(buttonConfig).views : undefined;
    const badgeViews = badgeConfig ? getConfigVariations(badgeConfig).views : undefined;
    const chipViews = chipConfig ? getConfigVariations(chipConfig).views : undefined;

    const meta = createMeta({ component: Button, title, defaultArgs, additionalArgTypes, disablePropsList });

    const WithButton = createButtonWithTextGradientStory(withTextGradient, Button, buttonViews);
    const WithBadge = createBadgeWithTextGradientStory(withTextGradient, Badge, badgeViews);
    const WithChip = createChipWithTextGradientStory(withTextGradient, Chip, chipViews, chipAppearances);

    return {
        meta,
        WithButton,
        WithBadge,
        WithChip,
    };
};
