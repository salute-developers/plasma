import React, { forwardRef, useMemo, ReactElement } from 'react';
import { styled } from '@linaria/react';

import { RootProps, component, mergeConfig } from '../../engines';
import { cx } from '../../utils';
import { indicatorConfig, indicatorTokens } from '../Indicator';

import { classes, tokens } from './Avatar.tokens';
import { base, Wrapper, Image, StatusIcon, Text, ExtraContent, ExtraCounter, ExtraBadge } from './Avatar.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as focusedCSS } from './variations/_focused/base';
import { base as shapeCSS } from './variations/_shape/base';
import { extraPlacementMap, getInitialsForName } from './utils';
import type { AvatarProps, StatusLabels } from './Avatar.types';

const StatusLabelsDefault: StatusLabels = {
    active: 'Активен',
    inactive: 'Неактивен',
};

const getAvatarContent = ({
    customText,
    customBorderRadius,
    url,
    initials,
    name,
}: Omit<AvatarProps, 'size'> & { initials?: string }): ReactElement => {
    if (customText) {
        return <Text>{customText}</Text>;
    }

    if (url) {
        return <Image src={url} alt={name} borderRadius={customBorderRadius} />;
    }

    return <Text>{initials}</Text>;
};

const getAriaLabel = ({
    url,
    name,
    status,
    'aria-label': ariaLabelProp,
    statusLabels,
}: Pick<AvatarProps, 'url' | 'status' | 'name' | 'aria-label'> & {
    statusLabels: StatusLabels;
}) => {
    if (!url) {
        return;
    }

    // INFO: включаем aria-label чтобы озвучить что на изображении
    const ariaLabel = !ariaLabelProp || ariaLabelProp.trim() === '' ? name : ariaLabelProp;

    return status ? `${ariaLabel}. ${statusLabels[status]}` : ariaLabel;
};

const mergedConfig = mergeConfig(indicatorConfig);

const Indicator: React.FunctionComponent<
    React.HTMLAttributes<HTMLDivElement> & { status: AvatarProps['status'] }
> = component(mergedConfig) as never;

const StyledIndicator = styled(Indicator)`
    ${indicatorTokens.size}: var(${tokens.statusIconSize});
    ${indicatorTokens.color}: ${({ status }) =>
    status === 'active' ? `var(${tokens.statusOnlineColor})` : `var(${tokens.statusOfflineColor})`}
`;

export const avatarRoot = (Root: RootProps<HTMLDivElement, AvatarProps>) => {
    return forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
        const {
            size: avatarSize,
            name,
            url,
            customText,
            status,
            className,
            focused = true,
            isScalable,
            shape,
            statusLabels = StatusLabelsDefault,
            hasExtra,
            extraPlacement,

            type,

            counterView,
            count,
            maxCount,

            badgeView,
            text,
            customColor,
            customBackgroundColor,
            customBorderRadius,
            contentLeft,
            contentRight,
            pilled,

            ...rest
        } = props;

        const counterValue = count || 1;
        const initials = useMemo(() => getInitialsForName(name), [name]);
        const ariaLabel = getAriaLabel({
            ...props,
            statusLabels,
        });

        const extraViewProp = type === 'badge' ? { badgeView } : { counterView };
        const borderRadius = avatarSize === 'fit' ? customBorderRadius : undefined;

        return (
            <Root
                ref={ref}
                size={avatarSize}
                shape={shape}
                className={cx(classes.avatarItem, className)}
                aria-label={ariaLabel}
                focused={focused}
                {...extraViewProp}
                {...rest}
            >
                <Wrapper isScalable={isScalable} borderRadius={borderRadius}>
                    {getAvatarContent({ customText, url, initials, name, customBorderRadius: borderRadius })}
                </Wrapper>

                {status && (
                    <StatusIcon>
                        <StyledIndicator aria-label={statusLabels[status]} status={status} />
                    </StatusIcon>
                )}

                {hasExtra && avatarSize !== 'fit' && (
                    <ExtraContent className={extraPlacementMap(extraPlacement)}>
                        {type === 'counter' ? (
                            <ExtraCounter view={counterView} count={counterValue} maxCount={maxCount} />
                        ) : (
                            avatarSize !== 's' && (
                                <ExtraBadge
                                    view={badgeView}
                                    text={text}
                                    customColor={customColor}
                                    customBackgroundColor={customBackgroundColor}
                                    pilled={pilled}
                                    maxWidth="100%"
                                    {...(contentLeft ? { contentLeft } : { contentRight })}
                                />
                            )
                        )}
                    </ExtraContent>
                )}
            </Root>
        );
    });
};

export const avatarConfig = {
    name: 'Avatar',
    tag: 'div',
    layout: avatarRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        focused: {
            css: focusedCSS,
        },
        shape: {
            css: shapeCSS,
        },
    },
    defaults: {
        size: 'm',
        shape: 'circled',
    },
};
