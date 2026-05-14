import React, { useEffect, useRef, FC, useContext } from 'react';
import cls from 'classnames';

import { Context } from '../../../../Dropdown.context';
import { getItemId } from '../../../../utils';
import { classes } from '../../../../Dropdown.tokens';

import {
    Wrapper,
    DisclosureIconWrapper,
    Divider,
    CellWrapper,
    StyledCell,
    RenderItemWrapper,
    StyledIconDisclosureRight,
} from './Item.styles';
import type { DropdownItemProps } from './Item.type';

export const Item: FC<DropdownItemProps> = ({
    item,
    path,
    currentLevel,
    index,
    ariaControls,
    ariaExpanded,
    ariaLevel,
    ariaLabel,
}) => {
    const { value, label, disabled, contentLeft, contentRight, dividerBefore, dividerAfter, className, ...rest } = item;

    const ref = useRef<HTMLLIElement | null>(null);

    const {
        focusedPath,
        size,
        variant,
        itemRole,
        handleGlobalToggle,
        closeOnSelect,
        onHover,
        onItemSelect,
        treeId,
        renderItem,
    } = useContext(Context);

    const hasDescendants = Boolean(item.items);
    const disclosureIconSize = size === 'xs' ? 'xs' : 's';
    const isDisabledClassName = disabled ? classes.dropdownItemIsDisabled : undefined;
    const focusedClass =
        currentLevel === focusedPath.length - 1 && index === focusedPath?.[currentLevel]
            ? classes.dropdownItemIsFocused
            : undefined;
    const activeClass = value === path?.[currentLevel + 1] ? classes.dropdownItemIsActive : undefined;

    useEffect(() => {
        if (focusedClass && ref?.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    }, [focusedClass]);

    const handleClick = (event: React.MouseEvent<HTMLLIElement>): void => {
        if (disabled) {
            event.stopPropagation();
            return;
        }

        if (onItemSelect) {
            onItemSelect(item, event);
        }

        // Закрываем весь дропдаун целиком при клике на айтем без потомков. Только при closeOnSelect === true.
        if (closeOnSelect && !hasDescendants) {
            handleGlobalToggle(false, event);
        }
    };

    const handleHover = () => {
        if (onHover) {
            onHover(index, item);
        }
    };

    return (
        <>
            {dividerBefore && <Divider variant={variant} />}

            <Wrapper
                {...rest}
                ref={ref}
                className={cls(isDisabledClassName, focusedClass, activeClass, className)}
                id={getItemId(treeId, value.toString())}
                role={itemRole}
                onClick={handleClick}
                onMouseEnter={handleHover}
                variant={variant}
                aria-disabled={disabled}
                aria-controls={ariaControls}
                aria-expanded={ariaExpanded}
                aria-level={ariaLevel}
                aria-label={ariaLabel}
            >
                {renderItem ? (
                    <RenderItemWrapper>{renderItem(item)}</RenderItemWrapper>
                ) : (
                    <CellWrapper>
                        <StyledCell
                            contentLeft={contentLeft}
                            contentRight={contentRight}
                            alignContentLeft="center"
                            alignContentRight="center"
                            title={label}
                        />
                    </CellWrapper>
                )}

                {item.items && (
                    <DisclosureIconWrapper>
                        <StyledIconDisclosureRight size={disclosureIconSize} color="inherit" />
                    </DisclosureIconWrapper>
                )}
            </Wrapper>

            {dividerAfter && <Divider variant={variant} />}
        </>
    );
};
