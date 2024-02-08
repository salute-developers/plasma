import React, { forwardRef, useMemo, ReactElement } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import { classes } from './Avatar.tokens';
import { base, Wrapper, Image, StatusIcon, Text } from './Avatar.styles';
import { AvatarProps } from './Avatar.types';
import { base as viewCSS } from './variations/_size/base';
import { base as focusedCSS } from './variations/_focused/base';
import { getInitialsForName, getStatusBackgroundColor } from './utils';

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

                {status && <StatusIcon backgroundColor={getStatusBackgroundColor(status)} />}
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
