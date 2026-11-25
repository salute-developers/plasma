import { IconFolder } from '@salutejs/plasma-icons';
import { component, informationWrapperConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const InformationWrapper = component(mergeConfig(informationWrapperConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const labelPlacements = ['top', 'left'];
const requiredPlacements = ['left', 'right'];
const hintTriggers = ['hover', 'click'];
const placements = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
    'auto',
];

const SvgPlaceholder = () => (
    <div
        style={{
            height: '3rem',
            background:
                'linear-gradient(to right, #9747FF 0.063rem, transparent 0.063rem) 0 0, linear-gradient(to right, #9747FF 0.063rem, transparent 0.063rem) 0 100%, linear-gradient(to left, #9747FF 0.063rem, transparent 0.063rem) 100% 0, linear-gradient(to left, #9747FF 0.063rem, transparent 0.063rem) 100% 100%, linear-gradient(to bottom, #9747FF 0.063rem, transparent 0.063rem) 0 0, linear-gradient(to bottom, #9747FF 0.063rem, transparent 0.063rem) 100% 0, linear-gradient(to top, #9747FF 0.063rem, transparent 0.063rem) 0 100%, linear-gradient(to top, #9747FF 0.063rem, transparent 0.063rem) 100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '3rem 1rem',
        }}
    />
);

const InformationWrapperDefault = {
    name: 'Default',
    args: [
        {
            name: 'label',
            value: 'Лейбл',
        },
        {
            name: 'labelPlacement',
            value: 'top',
            items: toItems(labelPlacements),
        },
        {
            name: 'titleCaption',
            value: 'Подпись к полю',
        },
        {
            name: 'leftHelper',
            value: 'Подсказка слева',
        },
        {
            name: 'enableLeftHelperIcon',
            value: true,
        },
        {
            name: 'rightHelper',
            value: 'Подсказка справа',
        },
        {
            name: 'required',
            value: false,
        },
        {
            name: 'hasRequiredIndicator',
            value: false,
        },
        {
            name: 'requiredIndicatorPlacement',
            value: 'right',
            items: toItems(requiredPlacements),
        },
        {
            name: 'optional',
            value: false,
        },
        {
            name: 'optionalText',
            value: 'optional',
        },
        {
            name: 'hasHint',
            value: true,
        },
        {
            name: 'hintText',
            value: 'Текст подсказки',
        },
        {
            name: 'hintTrigger',
            value: 'hover',
            items: toItems(hintTriggers),
        },
        {
            name: 'hintPlacement',
            value: 'auto',
            items: toItems(placements),
        },
        {
            name: 'hintWidth',
            value: '10rem',
        },
        {
            name: 'hintHasArrow',
            value: true,
        },
        {
            name: 'disabled',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const { enableLeftHelperIcon, leftHelper, ...rest } = args;

        return (
            <div style={{ width: '70%', margin: '0 auto' }}>
                <InformationWrapper
                    {...rest}
                    leftHelper={
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            {enableLeftHelperIcon && <IconFolder size="xs" />}
                            <span>{leftHelper}</span>
                        </div>
                    }
                >
                    <SvgPlaceholder />
                </InformationWrapper>
            </div>
        );
    },
};

export const InformationWrapperStories = [InformationWrapperDefault];
