import React, { forwardRef } from 'react';

import { PickOptional } from '../../types';

import { HeaderRoot, HeaderRootProps } from './HeaderRoot';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSubtitle } from './HeaderSubtitle';
import { HeaderTitle } from './HeaderTitle';
import { HeaderTitleWrapper } from './HeaderTitleWrapper';
import { HeaderContent } from './HeaderContent';
import { HeaderArrow } from './HeaderArrow';

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
export const Header = forwardRef<HTMLHeadElement, HeaderProps>(({ children, ...props }, ref) => {
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
                    {subtitle && <HeaderSubtitle hideOnMobile={hideSubtitleOnMobile}>{subtitle}</HeaderSubtitle>}
                </HeaderTitleWrapper>
            )}
            {children && <HeaderContent>{children}</HeaderContent>}
        </HeaderRoot>
    );
});
