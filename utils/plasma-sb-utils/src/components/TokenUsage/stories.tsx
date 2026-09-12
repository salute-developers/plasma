import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { IconSearch } from '@salutejs/plasma-icons';

import {
    collapseTypographyProperty,
    getTokenInfo,
    getTypographyStyle,
    getUsageCount,
    groupUsagesByComponent,
    groupUsagesByVariation,
    plural,
    searchTokens,
} from '../../helpers';
import type { TokenUsageIndex } from '../../helpers';

import {
    ColorCircle,
    ComponentCount,
    ComponentTitle,
    Details,
    DetailsHeader,
    DetailsTitle,
    EmptyDetails,
    Hint,
    Layout,
    MetaInfo,
    PropertyList,
    PropertyName,
    PropertyRow,
    ShadowBox,
    Sidebar,
    SidebarHead,
    TokenGlyph,
    TokenList,
    TokenListCount,
    TokenListItem,
    TokenListName,
    TokenName,
    TokenValue,
    TypographyPreview,
    UsageGroup,
    VariationName,
    Via,
    createStyledAccordion,
} from './styles';
import type { NotifyHook, TokenUsageComponents } from './types';

type ThemeTokens = Record<string, string>;

const createTokenPreview = (
    usageIndex: TokenUsageIndex,
    themeTokens: ThemeTokens,
): FC<{
    token: string;
    size?: string;
}> => ({ token, size }) => {
    const { cssVars, kind, value } = getTokenInfo(usageIndex, themeTokens, token);

    if (kind === 'color') {
        return <ColorCircle $size={size} $background={value} />;
    }

    if (kind === 'shadow') {
        return <ShadowBox $size={size} $boxShadow={value} />;
    }

    if (kind === 'typography') {
        return (
            <TokenGlyph $size={size} style={{ fontFamily: getTypographyStyle(cssVars).fontFamily }}>
                Aa
            </TokenGlyph>
        );
    }

    return <TokenGlyph>#</TokenGlyph>;
};

const Highlighted: FC<{ value: string; query: string }> = ({ value, query }) => {
    const search = query.replace(/^--/, '').toLowerCase();
    const position = search ? value.toLowerCase().indexOf(search) : -1;

    if (position === -1) {
        return <>{value}</>;
    }

    return (
        <>
            {value.slice(0, position)}
            <mark>{value.slice(position, position + search.length)}</mark>
            {value.slice(position + search.length)}
        </>
    );
};

export const createTokenUsageStory = ({
    themeTokens,
    usageIndex,
    components,
    useNotify,
}: {
    themeTokens: ThemeTokens;
    usageIndex: TokenUsageIndex;
    components: TokenUsageComponents;
    useNotify: NotifyHook;
}) => {
    const { accordionItem: AccordionItem, textField: TextField, accordion } = components;

    const StyledAccordion = createStyledAccordion(accordion);
    const TokenPreview = createTokenPreview(usageIndex, themeTokens);

    const UsageDetails: FC<{ token: string; copyToClipboard: (value: string) => void }> = ({
        token,
        copyToClipboard,
    }) => {
        const usages = usageIndex.byToken[token] || [];
        const byComponent = groupUsagesByComponent(usages);
        const { cssVars, kind } = getTokenInfo(usageIndex, themeTokens, token);

        const cssVarLabel = kind === 'typography' ? collapseTypographyProperty(cssVars[0]) : cssVars[0];

        return (
            <Details>
                <DetailsHeader>
                    <DetailsTitle>
                        <TokenPreview token={token} size="1.25rem" />
                        <TokenName onClick={() => copyToClipboard(token)}>{token}</TokenName>
                        <TokenValue onClick={() => copyToClipboard(cssVarLabel)}>· {cssVarLabel}</TokenValue>
                    </DetailsTitle>
                    {kind === 'typography' && (
                        <TypographyPreview style={getTypographyStyle(cssVars)}>
                            Съешь ещё этих мягких французских булок, да выпей чаю
                        </TypographyPreview>
                    )}
                    <MetaInfo>
                        {usages.length
                            ? `${usages.length} ${plural(usages.length, [
                                  'использование',
                                  'использования',
                                  'использований',
                              ])} · ${byComponent.length} ${plural(byComponent.length, [
                                  'компонент',
                                  'компонента',
                                  'компонентов',
                              ])}`
                            : 'Не используется в компонентах'}
                    </MetaInfo>
                </DetailsHeader>

                {usages.length > 0 && (
                    <StyledAccordion
                        key={token}
                        view="clear"
                        size="s"
                        stretching="filled"
                        defaultActiveEventKey={byComponent.map((_, position) => position).slice(0, 3)}
                    >
                        {byComponent.map(([component, componentUsages], position) => (
                            <AccordionItem
                                key={component}
                                eventKey={position}
                                type="arrow"
                                title={
                                    <ComponentTitle>
                                        {component}
                                        <ComponentCount>{componentUsages.length}</ComponentCount>
                                    </ComponentTitle>
                                }
                            >
                                {groupUsagesByVariation(componentUsages).map(([variation, variationUsages]) => (
                                    <UsageGroup key={variation}>
                                        <VariationName>{variation}</VariationName>
                                        <PropertyList>
                                            {variationUsages.map((usage, usagePosition) => (
                                                <PropertyRow
                                                    key={`${usage.property}_${usagePosition}`}
                                                    title="Скопировать css-переменную"
                                                    onClick={() => copyToClipboard(usage.property)}
                                                >
                                                    <PropertyName>{usage.property}</PropertyName>
                                                    {usage.via.length > 0 && <Via>через {usage.via.join(' → ')}</Via>}
                                                </PropertyRow>
                                            ))}
                                        </PropertyList>
                                    </UsageGroup>
                                ))}
                            </AccordionItem>
                        ))}
                    </StyledAccordion>
                )}
            </Details>
        );
    };

    return () => {
        const [query, setQuery] = useState('');
        const [selected, setSelected] = useState<string | null>(null);
        const listRef = useRef<HTMLDivElement>(null);

        const notify = useNotify();

        const matched = useMemo(() => searchTokens(usageIndex, query), [query]);
        const activeToken = selected && matched.includes(selected) ? selected : matched[0];

        useEffect(() => {
            listRef.current?.querySelector('[data-selected="true"]')?.scrollIntoView({ block: 'nearest' });
        }, [activeToken]);

        const copyToClipboard = async (value: string) => {
            try {
                await navigator.clipboard.writeText(value);
                notify('Скопировано');
            } catch (error) {
                notify('Ошибка при копировании текста', true);
            }
        };

        const onKeyDown = (event: React.KeyboardEvent) => {
            if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
                return;
            }

            event.preventDefault();

            const position = matched.indexOf(activeToken);
            const next = event.key === 'ArrowDown' ? position + 1 : position - 1;

            if (matched[next]) {
                setSelected(matched[next]);
            }
        };

        return (
            <Layout>
                <Sidebar>
                    <SidebarHead>
                        <TextField
                            autoFocus
                            placeholder="Поиск токена"
                            value={query}
                            contentLeft={<IconSearch size="xs" color="inherit" />}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setQuery(event.target.value);
                                setSelected(null);
                            }}
                            onKeyDown={onKeyDown}
                        />
                        <Hint>
                            {query
                                ? `${matched.length} ${plural(matched.length, ['токен', 'токена', 'токенов'])}`
                                : `${usageIndex.stats.tokens} ${plural(usageIndex.stats.tokens, [
                                      'токен',
                                      'токена',
                                      'токенов',
                                  ])}`}
                        </Hint>
                    </SidebarHead>

                    <TokenList ref={listRef}>
                        {matched.map((token) => {
                            const count = getUsageCount(usageIndex, token);

                            return (
                                <TokenListItem
                                    key={token}
                                    type="button"
                                    data-selected={token === activeToken}
                                    $isSelected={token === activeToken}
                                    $isUnused={count === 0}
                                    title={count === 0 ? 'Не используется ни одним компонентом' : undefined}
                                    onClick={() => setSelected(token)}
                                >
                                    <TokenPreview token={token} />
                                    <TokenListName>
                                        <Highlighted value={token} query={query} />
                                    </TokenListName>
                                    <TokenListCount $isSelected={token === activeToken}>{count || '—'}</TokenListCount>
                                </TokenListItem>
                            );
                        })}
                    </TokenList>
                </Sidebar>

                {activeToken ? (
                    <UsageDetails token={activeToken} copyToClipboard={copyToClipboard} />
                ) : (
                    <EmptyDetails>
                        <div>В теме нет такого токена</div>
                    </EmptyDetails>
                )}
            </Layout>
        );
    };
};
