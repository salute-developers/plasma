import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { sdds_cs__light } from '@salutejs/sdds-themes/es/themes';
import type { GroupedTokens } from '@salutejs/plasma-sb-utils';

import { InSpacingDecorator, getGroupedTokens } from '../../helpers';
import { Accordion } from '../Accordion';
import { ShowToastArgs, ToastProvider, useToast } from '../Toast';

import {
    AccordionInfo,
    Category,
    CategoryContainer,
    ColorCircle,
    ColumnTitle,
    OpacityPart,
    StyledAccordionItem,
    Subcategory,
    TokenInfo,
    TokenInfoWrapper,
} from './Tokens.styles';

const meta: Meta = {
    title: 'Colors',
    decorators: [InSpacingDecorator],
};

export default meta;

const themes: Record<string, GroupedTokens> = {
    'sdds-srvc:light': getGroupedTokens(sdds_cs__light[0]),
};

const StoryDemo = ({ context }) => {
    const groupedTokens = themes[context.globals.theme];
    const { showToast } = useToast();
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

    if (!groupedTokens) {
        return null;
    }

    return (
        <>
            {Object.entries(groupedTokens).map(([category, subcategories]) => (
                <CategoryContainer key={category}>
                    <Category>{category}</Category>
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
                                    </AccordionInfo>
                                }
                            >
                                <TokenInfoWrapper>
                                    {Object.entries(subcategoryTokens).map(
                                        ([token, { value, opacity, tone, colorName }]) => (
                                            <AccordionInfo key={token}>
                                                <TokenInfo className="copy" onClick={() => copyToClipboard(token)}>
                                                    {token}
                                                </TokenInfo>
                                                <TokenInfo
                                                    className="color copy"
                                                    onClick={() => copyToClipboard(value, opacity?.alpha)}
                                                >
                                                    <ColorCircle background={value} />
                                                    <div>
                                                        {value.includes('gradient') ? 'Градиент' : colorName || value}
                                                        {!colorName && opacity && (
                                                            <OpacityPart>{opacity.alpha}</OpacityPart>
                                                        )}
                                                    </div>
                                                </TokenInfo>
                                                <TokenInfo className="no-interaction">
                                                    {tone !== 'none' && tone}
                                                </TokenInfo>
                                                <TokenInfo className="no-interaction">{opacity?.parsedAlpha}</TokenInfo>
                                            </AccordionInfo>
                                        ),
                                    )}
                                </TokenInfoWrapper>
                            </StyledAccordionItem>
                        ))}
                    </Accordion>
                </CategoryContainer>
            ))}
        </>
    );
};

export const Default: StoryObj = {
    render: (_, context) => (
        <ToastProvider>
            <StoryDemo context={context} />
        </ToastProvider>
    ),
};
