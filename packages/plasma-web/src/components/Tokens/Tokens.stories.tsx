import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { plasma_web__dark, plasma_web__light } from '@salutejs/plasma-themes/es/themes';
import { InSpacingDecorator, getGroupedTokens } from '@salutejs/plasma-sb-utils';
import type { GroupedTokens } from '@salutejs/plasma-sb-utils';

import { Accordion } from '../Accordion/Accordion';
import { ToastProvider, useToast } from '../Toast/Toast';
import { SegmentGroup } from '../Segment/Segment';
import type { ShowToastArgs } from '../Toast';
import { SegmentProvider, useSegment } from '../Segment';

import {
    AccordionInfo,
    ColorCircle,
    ColorTokensWrapper,
    ColumnTitle,
    OpacityPart,
    StyledAccordionItem,
    StyledSegmentItem,
    Subcategory,
    SubtemeTitle,
    SubthemeSwitcher,
    TokenInfo,
    TokenInfoWrapper,
} from './Tokens.styles';

const meta: Meta = {
    title: 'Tokens/Colors',
    decorators: [InSpacingDecorator],
};

export default meta;

const themes: Record<string, GroupedTokens> = {
    light: getGroupedTokens(plasma_web__light[0]),
    dark: getGroupedTokens(plasma_web__dark[0]),
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
                <SubtemeTitle>Подтема</SubtemeTitle>
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
                            {Object.entries(subcategoryTokens).map(([token, { value, opacity, tone, colorName }]) => (
                                <AccordionInfo key={token}>
                                    <TokenInfo className="copy" onClick={() => copyToClipboard(token)}>
                                        {token}
                                    </TokenInfo>
                                    <TokenInfo
                                        className="color copy"
                                        onClick={() => copyToClipboard(value, opacity?.alpha)}
                                    >
                                        <ColorCircle background={value + (opacity?.alpha || '')} />
                                        <div>{value.includes('gradient') ? 'Градиент' : colorName || ''}</div>
                                    </TokenInfo>
                                    <TokenInfo className="no-interaction">{tone !== 'none' && tone}</TokenInfo>
                                    <TokenInfo className="no-interaction">{tone && opacity?.parsedAlpha}</TokenInfo>
                                    <TokenInfo
                                        className="color copy"
                                        onClick={() => copyToClipboard(value, opacity?.alpha)}
                                    >
                                        <div>
                                            {value.includes('gradient') ? '' : value}
                                            {opacity && <OpacityPart>{opacity.alpha}</OpacityPart>}
                                        </div>
                                    </TokenInfo>
                                </AccordionInfo>
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
