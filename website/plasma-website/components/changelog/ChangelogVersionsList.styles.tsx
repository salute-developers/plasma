import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TextXS } from '@salutejs/plasma-b2c';

const StyledTextXS = styled(TextXS)`
    color: rgba(255, 255, 255, 0.56);
    line-height: 14px;
`;

const StyledList = styled.ul`
    position: sticky;
    top: 36px;

    display: flex;
    flex-direction: column;

    padding: 0;
    margin: 0;

    width: 168px;
    max-height: 100%;

    list-style: none;

    &::-webkit-scrollbar {
        width: 2px;
        height: 16px;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 1px;
    }
`;

const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;

    &:not(:last-child) {
        margin-bottom: 24px;
    }

    cursor: pointer;

    &.divider:not(:last-child) {
        margin-bottom: 40px;
    }

    &:hover,
    &.active {
        ${StyledTextXS} {
            color: rgba(255, 255, 255, 1);
        }
    }
`;

export const VersionsList = ({
    list,
    onClick,
    currentVersion,
}: {
    list: any[];
    currentVersion: string;
    onClick?: (version: string) => void;
}) => {
    const [activeVersion, setActiveVersion] = useState('');
    const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

    const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
    const listRef = useRef<HTMLUListElement>(null);

    const handleClick = (version: string) => {
        setActiveVersion(version);

        onClick?.(version);
    };

    const scrollToItem = (version: string) => {
        const element = itemRefs.current[version];
        const container = listRef.current;

        if (element && container) {
            setActiveVersion(version);

            const elementTop = element.offsetTop;
            const containerHeight = container.clientHeight;
            const elementHeight = element.clientHeight;

            container.scrollTo({
                top: elementTop - containerHeight / 2 + elementHeight / 2,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        if (!currentVersion || hasOpenedOnce) {
            return;
        }

        scrollToItem(currentVersion);
        setHasOpenedOnce(true);
    }, [currentVersion, listRef]);

    return (
        <StyledList className="list-versions" ref={listRef}>
            {list.map(({ version, label }: { version: string; label: string }) => (
                <StyledListItem
                    ref={(el) => {
                        itemRefs.current[version] = el;
                    }}
                    className={`${label ? 'divider' : ''} ${activeVersion === version ? 'active' : ''}`}
                    key={version}
                    onClick={() => handleClick(version)}
                >
                    <StyledTextXS>{version}</StyledTextXS>
                    {label && <StyledTextXS>{label}</StyledTextXS>}
                </StyledListItem>
            ))}
        </StyledList>
    );
};
