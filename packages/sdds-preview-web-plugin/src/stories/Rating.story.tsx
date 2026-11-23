import { IconKeyFill, IconKeyOutline, IconLockFill } from '@salutejs/plasma-icons';
import { component, mergeConfig, ratingClasses, ratingConfig } from '@salutejs/plasma-new-hope/styled-components';

const Rating = component(mergeConfig(ratingConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const RatingDefault = {
    name: 'Default',
    args: [
        {
            name: 'value',
            value: 3.8,
        },
        {
            name: 'hasValue',
            value: true,
        },
        {
            name: 'precision',
            value: 1,
        },
        {
            name: 'valuePlacement',
            value: 'before',
            items: toItems(['before', 'after']),
        },
        {
            name: 'hasIcons',
            value: true,
        },
        {
            name: 'iconQuantity',
            value: 5,
            items: [1, 5].map((value) => ({ value, label: String(value) })),
        },
        {
            name: 'helperText',
            value: 'Helper text',
        },
        {
            name: 'helperTextStretching',
            value: 'filled',
            items: toItems(['fixed', 'filled']),
        },
    ],
    render: function Story(args: any) {
        const { value, precision, iconQuantity, ...rest } = args;

        return (
            <Rating
                {...rest}
                value={Number(value) || 0}
                precision={Number(precision) || 0}
                iconQuantity={Number(iconQuantity) === 1 ? 1 : 5}
            />
        );
    },
};

const RatingCustomIcons = {
    name: 'CustomIcons',
    args: RatingDefault.args,
    render: function Story(args: any) {
        const { value, precision, iconQuantity, ...rest } = args;

        return (
            <Rating
                {...rest}
                value={Number(value) || 0}
                precision={Number(precision) || 0}
                iconQuantity={Number(iconQuantity) === 1 ? 1 : 5}
                iconSlot={<IconKeyFill size="s" className={ratingClasses.customIconSizing} />}
                iconSlotOutline={<IconLockFill size="s" className={ratingClasses.customIconSizing} />}
                iconSlotHalf={<IconKeyOutline size="s" className={ratingClasses.customIconSizing} />}
            />
        );
    },
};

export const RatingStories = [RatingDefault, RatingCustomIcons];
