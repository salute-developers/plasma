import React, { FC } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import {
    sdds_bizcom__dark,
    sdds_bizcom__light,
    sdds_procom__light,
    sdds_procom__dark,
    sdds_bcp__light,
    sdds_bcp__dark,
} from '@salutejs/sdds-themes/es/themes';
import { InSpacingDecorator, getGroupedTokens, upperFirstLetter } from '@salutejs/plasma-sb-utils';
import type { GroupedTokens, TokenData } from '@salutejs/plasma-sb-utils';
import { cx } from '@salutejs/plasma-new-hope';

import { Accordion } from '../../Accordion/Accordion';
import { ToastProvider, useToast } from '../../Toast/Toast';
import { SegmentGroup } from '../../Segment/Segment';
import type { ShowToastArgs } from '../../Toast';
import { SegmentProvider, useSegment } from '../../Segment';

import {
    AccordionInfo,
    ColorCircle,
    ColorTokensWrapper,
    ColumnTitle,
    StyledAccordionItem,
    StyledSegmentItem,
    Subcategory,
    SubthemeSwitcher,
    TokenInfoWrapper,
    ColorTokenDataWrapper,
    StateDataWrapper,
    TokenInfo,
    OpacityPart,
} from './Colors.styles';

type ColorTokenDataProps = {
    token: string;
    tokenData: Omit<TokenData, 'states'>;
    copyToClipboard: (value: string, opacity?: string | null) => Promise<void>;
    className?: string;
    initialTokenName?: string;
};

const meta: Meta = {
    title: 'Tokens/Colors',
    decorators: [InSpacingDecorator],
};

export default meta;

const themes: Record<string, GroupedTokens> = {
    'sdds-bizcom:light': getGroupedTokens(sdds_bizcom__light[0]),
    'sdds-bizcom:dark': getGroupedTokens(sdds_bizcom__dark[0]),
    'sdds-procom:light': getGroupedTokens(sdds_procom__light[0]),
    'sdds-procom:dark': getGroupedTokens(sdds_procom__dark[0]),
    'sdds-bcp:light': getGroupedTokens(sdds_bcp__light[0]),
    'sdds-bcp:dark': getGroupedTokens(sdds_bcp__dark[0]),
};

const ColorTokenData: FC<ColorTokenDataProps> = ({
    token,
    tokenData,
    copyToClipboard,
    className,
    initialTokenName,
}) => {
    const { value, opacity, tone, colorName } = tokenData;

    return (
        <AccordionInfo>
            <TokenInfo className={cx('copy', className)} onClick={() => copyToClipboard(initialTokenName || token)}>
                {token}
            </TokenInfo>
            <TokenInfo
                className={cx('color', colorName && 'copy')}
                onClick={() => Boolean(colorName) && copyToClipboard(value, opacity?.alpha)}
            >
                <ColorCircle background={value + (opacity?.alpha || '')} />
                <div>{value.includes('gradient') ? 'Градиент' : colorName || ''}</div>
            </TokenInfo>
            <TokenInfo className="no-interaction">{tone !== 'none' && tone}</TokenInfo>
            <TokenInfo className="no-interaction">{opacity?.parsedAlpha}</TokenInfo>
            <TokenInfo className="color copy hex" onClick={() => copyToClipboard(value, opacity?.alpha)}>
                <div>
                    {value.includes('gradient') ? '' : value}
                    {opacity && <OpacityPart>{opacity.alpha}</OpacityPart>}
                </div>
            </TokenInfo>
        </AccordionInfo>
    );
};

const StoryDemoColor = ({ context }) => {
    const groupedTokens = themes[context.globals.theme];
    const { showToast } = useToast();
    const { selectedSegmentItems } = useSegment();
    const toastData = {
        view: 'default',
        size: 'm',
        hasClose: true,
        fade: false,
        position: 'bottom',
        offset: 0,
        timeout: 3000,
        role: 'alert',
    } as ShowToastArgs;

    const copyToClipboard = async (value: string, opacity?: string | null) => {
        try {
            await navigator.clipboard.writeText(value + (opacity || ''));

            showToast({
                ...toastData,
                text: 'Скопировано',
            });
        } catch (err) {
            showToast({
                ...toastData,
                text: 'Ошибка при копировании текста',
            });
        }
    };

    if (!groupedTokens || !groupedTokens[selectedSegmentItems[0]]) {
        return null;
    }

    const subcategories = groupedTokens[selectedSegmentItems[0]];

    return (
        <ColorTokensWrapper>
            <SubthemeSwitcher>
                <SegmentGroup view="clear" size="xs" hasBackground pilled>
                    {Object.entries(groupedTokens).map(([category]) => (
                        <StyledSegmentItem key={`label_${category}`} value={category} view="default" pilled>
                            {category}
                        </StyledSegmentItem>
                    ))}
                </SegmentGroup>
            </SubthemeSwitcher>
            <Accordion view="clear" size="s" stretching="filled" defaultActiveEventKey={[0]}>
                {Object.entries(subcategories).map(([subcategory, subcategoryTokens], index) => (
                    <StyledAccordionItem
                        key={subcategory}
                        eventKey={index}
                        type="arrow"
                        title={
                            <AccordionInfo>
                                <Subcategory>{subcategory}/</Subcategory>
                                <ColumnTitle className="color">
                                    <ColorCircle disableShadow />
                                    Color
                                </ColumnTitle>
                                <ColumnTitle>Tone</ColumnTitle>
                                <ColumnTitle>Opacity</ColumnTitle>
                                <ColumnTitle className="hex">Hex</ColumnTitle>
                            </AccordionInfo>
                        }
                    >
                        <TokenInfoWrapper>
                            {Object.entries(subcategoryTokens).map(([_, { states, ...tokenData }]) => {
                                return (
                                    tokenData.value !== 'undefined' && (
                                        <ColorTokenDataWrapper>
                                            <ColorTokenData
                                                key={tokenData.fullTokenName}
                                                token={tokenData.fullTokenName}
                                                tokenData={tokenData}
                                                copyToClipboard={copyToClipboard}
                                            />
                                            {states && Object.keys(states).length > 0 && (
                                                <StateDataWrapper>
                                                    {Object.entries(states).map(([state, stateTokenData]) => (
                                                        <ColorTokenData
                                                            key={state}
                                                            token={state}
                                                            tokenData={stateTokenData}
                                                            copyToClipboard={copyToClipboard}
                                                            className="state"
                                                            initialTokenName={
                                                                tokenData.fullTokenName + upperFirstLetter(state)
                                                            }
                                                        />
                                                    ))}
                                                </StateDataWrapper>
                                            )}
                                        </ColorTokenDataWrapper>
                                    )
                                );
                            })}
                        </TokenInfoWrapper>
                    </StyledAccordionItem>
                ))}
            </Accordion>
        </ColorTokensWrapper>
    );
};

export const Default: StoryObj = {
    render: (_, context) => (
        <ToastProvider>
            <SegmentProvider defaultSelected={['Default']} singleSelectedRequired>
                <StoryDemoColor context={context} />
            </SegmentProvider>
        </ToastProvider>
    ),
};
