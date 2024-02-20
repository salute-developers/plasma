import React, { forwardRef, useMemo, ReactElement } from 'react';
import { styled } from '@linaria/react';

import { RootProps, component, mergeConfig } from '../../engines';
import { cx } from '../../utils';
import { indicatorConfig, indicatorTokens } from '../Indicator';

import { classes, tokens } from './Avatar.tokens';
import { base, Wrapper, Image, StatusIcon, Text } from './Avatar.styles';
import { AvatarProps } from './Avatar.types';
import { base as viewCSS } from './variations/_size/base';
import { base as focusedCSS } from './variations/_focused/base';
import { getInitialsForName } from './utils';

const getAvatarContent = ({
    customText,
    url,
    initials,
    name,
}: Omit<AvatarProps, 'size'> & { initials?: string }): ReactElement => {
    if (customText) {
        return <Text>{customText}</Text>;
    }

    if (url) {
        return <Image src={url} alt={name} />;
    }

    return <Text>{initials}</Text>;
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
            ...rest
        } = props;

        const initials = useMemo(() => getInitialsForName(name), [name]);

        return (
            <Root ref={ref} size={avatarSize} className={cx(classes.avatarItem, className)} focused={focused} {...rest}>
                <Wrapper isScalable={isScalable}>{getAvatarContent({ customText, url, initials, name })}</Wrapper>

                {status && (
                    <StatusIcon>
                        <StyledIndicator status={status} />
                    </StatusIcon>
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
            css: viewCSS,
        },
        focused: {
            css: focusedCSS,
        },
    },
    defaults: {
        size: 'm',
    },
};
