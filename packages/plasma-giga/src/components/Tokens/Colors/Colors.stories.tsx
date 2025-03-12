import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { plasma_giga__dark, plasma_giga__light } from '@salutejs/plasma-themes/es/themes';
import { InSpacingDecorator, getGroupedTokens, upperFirstLetter } from '@salutejs/plasma-sb-utils';
import type { GroupedTokens } from '@salutejs/plasma-sb-utils';

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
    SubthemeTitle,
    SubthemeSwitcher,
    TokenInfoWrapper,
    ColorTokenDataWrapper,
    StateDataWrapper,
} from './Colors.styles';
import { ColorTokenData } from './Colors';

const meta: Meta = {
    title: 'Tokens/Colors',
    decorators: [InSpacingDecorator],
};

export default meta;

const themes: Record<string, GroupedTokens> = {
    'plasma-giga:light': getGroupedTokens(plasma_giga__light[0]),
    'plasma-giga:dark': getGroupedTokens(plasma_giga__dark[0]),
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
                <SubthemeTitle>Подтема</SubthemeTitle>
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
                                <ColumnTitle>Hex</ColumnTitle>
                            </AccordionInfo>
                        }
                    >
                        <TokenInfoWrapper>
                            {Object.entries(subcategoryTokens).map(([token, { states, ...tokenData }]) => (
                                <ColorTokenDataWrapper>
                                    <ColorTokenData
                                        key={token}
                                        token={token}
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
                                                    initialTokenName={token + upperFirstLetter(state)}
                                                />
                                            ))}
                                        </StateDataWrapper>
                                    )}
                                </ColorTokenDataWrapper>
                            ))}
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
