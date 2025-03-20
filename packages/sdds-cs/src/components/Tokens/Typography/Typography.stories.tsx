import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { sdds_cs__light } from '@salutejs/sdds-themes';
import {
    InSpacingDecorator,
    getGroupedTypographyTokens,
    typographyPangrams,
    upperFirstLetter,
    typographyToCssMap,
} from '@salutejs/plasma-sb-utils';
import type {
    TypographyStructure,
    Breakpoint,
    TypographyProperties,
    TypographyWeight,
} from '@salutejs/plasma-sb-utils';

import { Accordion } from '../../Accordion/Accordion';
import { ToastProvider, useToast } from '../../Toast/Toast';
import { SegmentGroup } from '../../Segment/Segment';
import type { ShowToastArgs } from '../../Toast';
import { SegmentProvider, useSegment } from '../../Segment';

import {
    AccordionInfo,
    AccordionTypographyTitle,
    BreakpointSwitcher,
    FontFamily,
    FontPropsSwitcher,
    FontWeightSwitcher,
    StyledAccordionItem,
    StyledSegmentItem,
    TokenInfo,
    TokenInfoWrapper,
    TokenPropName,
    TokenProps,
    TokenPropsWrapper,
    TokenPropValue,
    TokenShortName,
    TokenText,
    TypographyTokensWrapper,
} from './Typography.styles';

const meta: Meta = {
    title: 'Tokens/Typography',
    decorators: [InSpacingDecorator],
};

export default meta;

const themes: Record<string, TypographyStructure> = {
    'sdds-srvc:light': getGroupedTypographyTokens(sdds_cs__light[0]),
};

type FontWeightControllerProps = {
    fontWeights: Array<TypographyWeight>;
    setFontWeight: Dispatch<SetStateAction<TypographyWeight>>;
};

type BreakpointControllerProps = {
    breakpoints: Array<Breakpoint>;
    setBreakPoint: Dispatch<SetStateAction<Breakpoint>>;
};

type FontControllerProps = {
    controlledParams: FontWeightControllerProps['fontWeights'] | BreakpointControllerProps['breakpoints'];
    setCurrentParam: FontWeightControllerProps['setFontWeight'] | BreakpointControllerProps['setBreakPoint'];
};

const FontController: FC<FontControllerProps> = ({ controlledParams, setCurrentParam }) => {
    const { selectedSegmentItems } = useSegment();

    useEffect(() => {
        setCurrentParam(selectedSegmentItems[0] as TypographyWeight & Breakpoint);
    }, [selectedSegmentItems]);

    return (
        <SegmentGroup view="clear" size="xs" hasBackground pilled>
            {controlledParams.map((param) => (
                <StyledSegmentItem
                    key={`label_${param}`}
                    value={param}
                    label={upperFirstLetter(param)}
                    view="default"
                    pilled
                />
            ))}
        </SegmentGroup>
    );
};

const FontParamsSwitcher: FC<FontWeightControllerProps & BreakpointControllerProps> = ({
    fontWeights,
    setFontWeight,
    breakpoints,
    setBreakPoint,
}) => {
    return (
        <FontPropsSwitcher>
            <SegmentProvider defaultSelected={[fontWeights[0]]} singleSelectedRequired>
                <FontWeightSwitcher>
                    <FontController controlledParams={fontWeights} setCurrentParam={setFontWeight} />
                </FontWeightSwitcher>
            </SegmentProvider>
            <SegmentProvider defaultSelected={[breakpoints[0]]} singleSelectedRequired>
                <BreakpointSwitcher>
                    <FontController controlledParams={breakpoints} setCurrentParam={setBreakPoint} />
                </BreakpointSwitcher>
            </SegmentProvider>
        </FontPropsSwitcher>
    );
};

type TokenDataProps = {
    title: string;
    token: string;
    size: string;
    fontFamily: string;
    fontWeight: TypographyWeight;
    data: TypographyProperties;
    copyToClipboard: (value: string) => Promise<void>;
};

const getFontProps = (fontFamily: string, data: TypographyProperties) => {
    return Object.entries(data).reduce((acc, [name, value]) => {
        acc += `${typographyToCssMap[name]}: ${value};\n`;
        return acc;
    }, `font-family: ${fontFamily};\n`);
};

const getFontTokens = (fontFamily: string, title: string, token: string, size: string, isBold) => {
    return Object.values(typographyToCssMap).reduce((acc, value) => {
        const tokenName = title === 'header' ? '' : `${token}-`;
        const boldPart = isBold && value === 'font-weight' ? 'bold-' : '';
        const fullTokenName = `--plasma-typo-${tokenName}${size}-${boldPart}`;

        acc += `${value}: var(${fullTokenName}${value});\n`;
        return acc;
    }, `font-family: ${fontFamily};\n`);
};

const TokenData: FC<TokenDataProps> = ({ title, token, size, fontFamily, fontWeight, data, copyToClipboard }) => {
    const actualTitle = title === 'header' ? size : title + size.toLocaleUpperCase();
    const isBold = fontWeight === 'bold';

    const copyFontTokens = () => {
        const fontTokens = getFontTokens(fontFamily, title, token, size, isBold);
        copyToClipboard(fontTokens);
    };

    const copyFontProps = () => {
        const fontProps = getFontProps(fontFamily, data);
        copyToClipboard(fontProps);
    };

    return (
        <AccordionInfo>
            <TokenShortName onClick={copyFontTokens}>
                {actualTitle} {fontWeight.charAt(0).toLocaleUpperCase()}
            </TokenShortName>

            <TokenInfo>
                <TokenText {...data} isDisplay={token === 'dspl'}>
                    {typographyPangrams[token]}
                </TokenText>
                <TokenPropsWrapper onClick={copyFontProps}>
                    {Object.entries(data).map(([name, value]) => {
                        const cleanValue =
                            name === 'fontSize' || name === 'lineHeight'
                                ? Number(value.replace('rem', '')) * 16
                                : value;
                        return (
                            <TokenProps>
                                <TokenPropValue>{cleanValue}</TokenPropValue>
                                <TokenPropName>{name}</TokenPropName>
                            </TokenProps>
                        );
                    })}
                </TokenPropsWrapper>
            </TokenInfo>
        </AccordionInfo>
    );
};

const StoryDemoTypography = ({ context }) => {
    const groupedTokens = themes[context.globals.theme];

    const actualFontWeights = Object.keys(groupedTokens) as Array<TypographyWeight>;
    const [fontWeight, setFontWeight] = useState<TypographyWeight>(actualFontWeights[0]);

    const actualBreakpoints = Object.keys(groupedTokens[fontWeight]) as Array<Breakpoint>;
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(actualBreakpoints[0]);

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

    const copyToClipboard = async (value: string) => {
        try {
            await navigator.clipboard.writeText(value);

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

    if (!groupedTokens[fontWeight][breakpoint]) {
        return null;
    }

    return (
        <TypographyTokensWrapper>
            <FontParamsSwitcher
                fontWeights={actualFontWeights}
                setFontWeight={setFontWeight}
                breakpoints={actualBreakpoints}
                setBreakPoint={setBreakpoint}
            />
            <Accordion view="clear" size="s" stretching="filled" defaultActiveEventKey={[0]}>
                {Object.entries(groupedTokens[fontWeight][breakpoint]).map(([token, { fontFamily, sizes }], index) => {
                    const title = token === 'dspl' ? 'display' : token;

                    return (
                        <StyledAccordionItem
                            key={title + fontFamily}
                            eventKey={index}
                            type="arrow"
                            title={
                                <AccordionTypographyTitle>
                                    {upperFirstLetter(title)} <FontFamily>{fontFamily}</FontFamily>
                                </AccordionTypographyTitle>
                            }
                        >
                            <TokenInfoWrapper>
                                {Object.entries(sizes).map(([size, data]) => (
                                    <TokenData
                                        key={size + title}
                                        title={title}
                                        fontWeight={fontWeight}
                                        fontFamily={fontFamily}
                                        token={token}
                                        size={size}
                                        data={data}
                                        copyToClipboard={copyToClipboard}
                                    />
                                ))}
                            </TokenInfoWrapper>
                        </StyledAccordionItem>
                    );
                })}
            </Accordion>
        </TypographyTokensWrapper>
    );
};

export const Default: StoryObj = {
    render: (_, context) => (
        <ToastProvider>
            <StoryDemoTypography context={context} />
        </ToastProvider>
    ),
};
