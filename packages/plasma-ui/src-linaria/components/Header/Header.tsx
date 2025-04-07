import { mergeConfig, component } from '@salutejs/plasma-new-hope/styled-components';
import React, { forwardRef } from 'react';

import { PickOptional } from '../../../src/types';
import { HeaderRootProps } from '../../../src/components/Header/HeaderRoot';

import { headerArrowConfig, headerLogoConfig, headerTitleWrapperConfig, HeaderTitle } from './ui';
import { headerRootConfig } from './HeaderRoot/HeaderRoot';
import { config } from './Header.config';
import { HeaderContent } from './HeaderContent/HeaderContent';

export { HeaderContent, HeaderTitle };

const mergedConfig = mergeConfig(headerRootConfig, config);
const mergedLogoConfig = mergeConfig(headerLogoConfig);
const mergedArrowConfig = mergeConfig(headerArrowConfig);
const mergedTitleWrapperConfig = mergeConfig(headerTitleWrapperConfig);

export const HeaderRoot = component(mergedConfig);
export const HeaderLogo = component(mergedLogoConfig);
export const HeaderArrow = component(mergedArrowConfig);
export const HeaderTitleWrapper = component(mergedTitleWrapperConfig);

interface MinimizeProps {
    minimize?: true;
    onMinimizeClick?: React.MouseEventHandler<HTMLButtonElement>;
    back?: false;
    onBackClick?: never;
}
interface BackProps {
    /**
     * Показывать кнопку "назад"
     */
    back?: true;
    /**
     * Обработчик клика по кнопке "назад"
     */
    onBackClick?: React.MouseEventHandler<HTMLButtonElement>;
    minimize?: false;
    onMinimizeClick?: false;
}
interface LogoProps {
    /**
     * Путь до картинки с логотипом (src)
     */
    logo: string;
    /**
     * Alt логотипа
     */
    logoAlt?: string;
}
interface NoLogoProps {
    logo?: undefined;
    logoAlt?: never;
}
interface TitleProps {
    /**
     * Заголовок страницы
     */
    title: string;
    /**
     * Подзаголовок страницы
     */
    subtitle?: string;
}
interface NoTitleProps {
    title?: undefined;
    subtitle?: never;
}
type AllProps = {
    hideSubtitleOnMobile?: boolean;
} & PickOptional<MinimizeProps, 'minimize' | 'onMinimizeClick'> &
    PickOptional<BackProps, 'back' | 'onBackClick'> &
    LogoProps &
    TitleProps &
    Pick<HeaderRootProps, 'gradientColor'>;

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> &
    (MinimizeProps | BackProps) &
    (LogoProps | NoLogoProps) &
    (TitleProps | NoTitleProps) & {
        /**
         * Скрывать ли подзаголовок на размерах меньше 'S'
         * @default
         * true
         */
        hideSubtitleOnMobile?: boolean;
    };

/**
 * Сборный компонент для отрисовки шапки страницы.
 * Уже включает в себя все составные части шапки.
 */
export const Header = forwardRef<HTMLHeadElement, HeaderProps>(({ children, ...props }, ref: any) => {
    const {
        minimize,
        back,
        logo,
        logoAlt,
        title,
        subtitle,
        hideSubtitleOnMobile = true,
        onMinimizeClick,
        onBackClick,
        ...rest
    } = props as AllProps;

    return (
        <HeaderRoot ref={ref} {...rest}>
            {(minimize || back) && (
                <HeaderArrow onClick={back ? onBackClick : onMinimizeClick} arrow={back ? 'back' : 'minimize'} />
            )}
            {logo && <HeaderLogo src={logo} alt={logoAlt} />}
            {title && (
                <HeaderTitleWrapper>
                    <HeaderTitle>{title}</HeaderTitle>
                </HeaderTitleWrapper>
            )}
            {children && <HeaderContent>{children}</HeaderContent>}
        </HeaderRoot>
    );
});
