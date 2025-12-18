import React, { forwardRef } from 'react';
import cx from 'classnames';

import { RootProps } from '../../engines';

import { InformationWrapperProps, InformationWrapperRootProps } from './InformationWrapper.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_read-only/base';
import { base as hintViewCSS } from './variations/_hint-view/base';
import { base as hintSizeCSS } from './variations/_hint-size/base';
import {
    base,
    ContentChildrenWrapper,
    ContentWrapper,
    Helpers,
    LabelWrapper,
    LeftHelper,
    RightHelper,
    TitleCaption,
} from './InformationWrapper.styles';
import { LabelComponent } from './ui';
import { classes } from './InformationWrapper.tokens';

export const informationWrapperRoot = (Root: RootProps<HTMLDivElement, InformationWrapperRootProps>) => {
    return forwardRef<HTMLDivElement, InformationWrapperProps>(
        (
            {
                size,
                view,
                children,
                label,
                labelHtmlFor,
                labelPlacement = 'top',

                hasRequiredIndicator,
                requiredIndicatorPlacement = 'right',
                optional,
                optionalText,

                hintText,
                hintTrigger = 'hover',
                hintView = 'default',
                hintSize = 'm',
                hintTargetIcon,
                hintPlacement = 'auto',
                hintHasArrow,
                hintOffset,
                hintWidth,
                hintContentLeft,

                titleCaption,
                leftHelper,
                rightHelper,

                readOnly,
                disabled,

                ...rest
            },
            ref,
        ) => {
            const hasHelpers = leftHelper || rightHelper;

            return (
                <Root
                    ref={ref}
                    size={size}
                    view={view}
                    disabled={disabled}
                    readOnly={readOnly}
                    {...(hintText && { hintView, hintSize })}
                    {...rest}
                >
                    <LabelWrapper
                        className={cx({ [classes.withoutLabel]: !label })}
                        hasLabel={Boolean(label)}
                        hasCaption={Boolean(titleCaption)}
                    >
                        {(labelPlacement === 'top' || !label) && (
                            <LabelComponent
                                size={size}
                                hasRequiredIndicator={hasRequiredIndicator}
                                requiredIndicatorPlacement={requiredIndicatorPlacement}
                                optional={optional}
                                optionalText={optionalText}
                                label={label}
                                labelHtmlFor={labelHtmlFor}
                                titleCaption={titleCaption}
                                hintText={hintText}
                                hintTrigger={hintTrigger}
                                hintTargetIcon={hintTargetIcon}
                                hintPlacement={hintPlacement}
                                hintHasArrow={hintHasArrow}
                                hintOffset={hintOffset}
                                hintWidth={hintWidth}
                                hintContentLeft={hintContentLeft}
                                disabled={disabled}
                            />
                        )}
                        {titleCaption && <TitleCaption hasLabel={Boolean(label)}>{titleCaption}</TitleCaption>}
                    </LabelWrapper>
                    <ContentWrapper>
                        {Boolean(label) && labelPlacement === 'left' && (
                            <LabelComponent
                                hasRequiredIndicator={hasRequiredIndicator}
                                requiredIndicatorPlacement={requiredIndicatorPlacement}
                                optional={optional}
                                optionalText={optionalText}
                                label={label}
                                labelHtmlFor={labelHtmlFor}
                                titleCaption={titleCaption}
                                hintText={hintText}
                                hintTrigger={hintTrigger}
                                hintTargetIcon={hintTargetIcon}
                                hintPlacement={hintPlacement}
                                hintHasArrow={hintHasArrow}
                                hintOffset={hintOffset}
                                hintWidth={hintWidth}
                                hintContentLeft={hintContentLeft}
                            />
                        )}
                        <ContentChildrenWrapper>
                            {children}
                            {hasHelpers && (
                                <Helpers>
                                    {leftHelper && <LeftHelper className={classes.leftHelper}>{leftHelper}</LeftHelper>}
                                    {rightHelper && <RightHelper>{rightHelper}</RightHelper>}
                                </Helpers>
                            )}
                        </ContentChildrenWrapper>
                    </ContentWrapper>
                </Root>
            );
        },
    );
};

export const informationWrapperConfig = {
    name: 'InformationWrapper',
    tag: 'div',
    layout: informationWrapperRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
        readOnly: {
            css: readOnlyCSS,
            attrs: true,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        hintView: {
            css: hintViewCSS,
        },
        hintSize: {
            css: hintSizeCSS,
        },
    },
    defaults: {
        size: 's',
        view: 'default',
    },
};
