import React, { FC, useEffect, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { sdds_os__dark, sdds_os__light } from '@salutejs-ds/sdds_os';
import { InSpacingDecorator, getGroupedTokens, upperFirstLetter } from '@salutejs/plasma-sb-utils';
import type { GroupedTokens, TokenData } from '@salutejs/plasma-sb-utils';
import { addNotification, cx } from '@salutejs/plasma-new-hope';

import { Accordion } from '../../Accordion/Accordion';
import { NotificationsProvider } from '../../Notification/Notification';

import {
    AccordionInfo,
    ColorCircle,
    ColorTokensWrapper,
    ColumnTitle,
    StyledAccordionItem,
    StyledSegmentGroup,
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
    'sdds-os:light': getGroupedTokens(sdds_os__light[0]),
    'sdds-os:dark': getGroupedTokens(sdds_os__dark[0]),
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
    const groupedTokens = themes[context.globals.theme] || themes['sdds-os:light'];
    const categories = Object.keys(groupedTokens);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    useEffect(() => {
        if (!groupedTokens[selectedCategory]) {
            setSelectedCategory(categories[0]);
        }
    }, [categories, groupedTokens, selectedCategory]);

    const copyToClipboard = async (value: string, opacity?: string | null) => {
        try {
            await navigator.clipboard.writeText(value + (opacity || ''));

            addNotification({ title: 'Скопировано', view: 'positive', size: 'xxs', role: 'alert' }, 3000);
        } catch (err) {
            addNotification(
                { title: 'Ошибка при копировании текста', view: 'negative', size: 'xxs', role: 'alert' },
                3000,
            );
        }
    };

    if (!groupedTokens[selectedCategory]) {
        return null;
    }

    const subcategories = groupedTokens[selectedCategory];

    return (
        <ColorTokensWrapper>
            <SubthemeSwitcher>
                <StyledSegmentGroup>
                    {Object.entries(groupedTokens).map(([category]) => (
                        <StyledSegmentItem
                            key={`label_${category}`}
                            type="button"
                            $isSelected={selectedCategory === category}
                            aria-pressed={selectedCategory === category}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </StyledSegmentItem>
                    ))}
                </StyledSegmentGroup>
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
        <NotificationsProvider placement="bottom">
            <StoryDemoColor context={context} />
        </NotificationsProvider>
    ),
};
