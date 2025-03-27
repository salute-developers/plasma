import styled from 'styled-components';
import { BodyXXS } from '@salutejs/plasma-b2c';
import { tertiary } from '@salutejs/plasma-tokens-b2c';
import { useEffect, useRef, useState } from 'react';

import { Menu, Product, ProductList, LinkItem, StickyNav, StickyNavItem } from '../components/main';
import type { ProductProps } from '../components/main';
import { currentYear, products, stickyNavSnapVariant, verticals, verticalsMap } from '../utils';

const CopyrightText = styled(BodyXXS)`
    position: fixed;
    transform-origin: bottom right;
    right: 0.5rem;
    bottom: 0.75rem;
    transform: rotate(-90deg) translateX(100%);
    color: ${tertiary};
`;

const ScrollContainer = styled.div`
    overflow-y: scroll;
    max-height: 100vh;
    background-color: #171717;
`;

const ScrollBlock = styled.div`
    padding: 5.5rem 0 4rem;
    box-sizing: border-box;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Products = styled.div`
    padding: 11.5rem 0 4rem;
    position: relative;
`;

const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    position: relative;
`;

export default function Home() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const scrollSnapBlock = useRef<HTMLDivElement | null>(null);
    const productsRef = useRef<HTMLDivElement | null>(null);
    const groupRefs = useRef<(HTMLDivElement | null)[]>([]);
    const stickyNavRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isScrolling = useRef(false);
    const firstBlockHeight = useRef(0);

    const [menuExpanded, setMenuExpanded] = useState(false);

    const groups = verticalsMap.reduce((acc, vertical) => {
        const { group } = vertical;
        if (!(group in acc)) {
            acc[group] = [];
        }

        acc[group].push(vertical);
        return acc;
    }, {} as { [key: string]: Array<ProductProps> });

    const handleScrollToTop = () => {
        if (!menuExpanded) {
            return;
        }

        scrollContainerRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
        setMenuExpanded(false);
        handleChangeSideNavPos();
    };

    const handleScrollToVerticals = () => {
        if (!scrollContainerRef?.current || !scrollSnapBlock?.current) {
            return;
        }

        const containerBlock = scrollContainerRef.current;
        const snapBlock = scrollSnapBlock.current;

        containerBlock.scrollTo({
            top: snapBlock.offsetHeight,
            behavior: 'smooth',
        });
        setMenuExpanded(true);
    };

    const getNavPosRecalculationId = () => {
        const recalculateStickyNavPosition = () => {
            handleChangeSideNavPos();

            requestAnimationFrame(recalculateStickyNavPosition);
        };

        requestAnimationFrame(recalculateStickyNavPosition);
    };
    const cancelAllAnimationFrames = () => {
        let id = window.requestAnimationFrame(() => {});
        while (id--) {
            window.cancelAnimationFrame(id);
        }
    };

    const handleScrollToProductGroup = (groupIndex: number) => {
        const groupToScroll = groupRefs.current[groupIndex];
        if (!groupToScroll || !scrollContainerRef.current || !productsRef.current) {
            return;
        }
        const productsOffesPosition = productsRef.current.offsetTop;
        const scrollDistance = productsOffesPosition + groupToScroll.offsetTop - groupToScroll.offsetHeight / 6;

        getNavPosRecalculationId();

        setTimeout(() => {
            cancelAllAnimationFrames();
        }, 500);
        scrollContainerRef.current.scrollTo({ top: scrollDistance, behavior: 'smooth' });
    };

    const scrollViewProcess = (
        scrollHeight: number,
        isMenuExpanded: boolean,
        timeout: number,
        containerBlock: HTMLDivElement,
    ) => {
        isScrolling.current = true;
        containerBlock.scrollTo({
            top: scrollHeight,
            behavior: 'smooth',
        });

        getNavPosRecalculationId();

        setMenuExpanded(isMenuExpanded);
        setTimeout(() => {
            isScrolling.current = false;
            cancelAllAnimationFrames();
        }, timeout);
    };

    const handleScrollViews = (event: WheelEvent) => {
        if (isScrolling.current || !scrollSnapBlock?.current || !scrollContainerRef.current) {
            return;
        }
        const containerBlock = scrollContainerRef.current;
        const snapBlock = scrollSnapBlock.current;

        firstBlockHeight.current = snapBlock.offsetHeight;

        const { scrollTop } = containerBlock;

        const scrollDownCondition = event.deltaY > 0 && Math.abs(event.deltaX) < 1;
        const scrollUpCondition = event.deltaY < 0 && Math.abs(event.deltaX) < 1;

        if (scrollTop > 50 && scrollTop < firstBlockHeight.current && scrollDownCondition) {
            scrollViewProcess(firstBlockHeight.current - 20, true, 800, containerBlock);
        } else if (scrollTop <= 50 && scrollDownCondition) {
            scrollViewProcess(0, false, 400, containerBlock);
        } else if (scrollTop < firstBlockHeight.current - 100 && scrollUpCondition) {
            scrollViewProcess(0, false, 800, containerBlock);
        } else if (
            scrollTop >= firstBlockHeight.current - 100 &&
            scrollTop < firstBlockHeight.current &&
            scrollUpCondition
        ) {
            scrollViewProcess(firstBlockHeight.current - 80, true, 400, containerBlock);
        }
    };

    const handleChangeSideNavPos = () => {
        if (!scrollContainerRef?.current || !productsRef?.current || !groupRefs.current) {
            return;
        }

        const productsOffesPosition = productsRef.current.offsetTop;
        const scrollPosition = scrollContainerRef.current.scrollTop;
        const viewportHeight = scrollContainerRef.current.clientHeight;

        stickyNavRefs.current.forEach((navItem, index) => {
            const initialSection = groupRefs.current[index];
            if (!navItem || !initialSection) {
                return;
            }

            const initialSectionTop = initialSection.offsetTop;
            const sectionStart = productsOffesPosition + initialSectionTop;
            const stickyNavElementTop = navItem.offsetTop;
            const offsetIndex = Object.keys(groups).length - (index + 1);
            const stickyNavElementHeight = navItem.clientHeight;
            const extraLineHeightOffset = Array(index)
                .fill(stickyNavElementHeight)
                .reduce((acc, curr) => {
                    acc += curr;
                    return acc;
                }, 0);
            const extraLineHeightBottomOffset = Array(offsetIndex)
                .fill(stickyNavElementHeight)
                .reduce((acc, curr) => {
                    acc += curr;
                    return acc;
                }, 0);
            const extraOffset = Array(offsetIndex)
                .fill(0.75 * 16)
                .reduce((acc, curr) => {
                    acc += curr;
                    return acc;
                }, 0);

            const actualScroll = scrollPosition + extraOffset + extraLineHeightOffset;
            const bottomScroll = scrollPosition + viewportHeight - extraOffset - extraLineHeightBottomOffset - 244;

            // NOTE: above product section
            if (bottomScroll < initialSectionTop + viewportHeight) {
                const needExtraOffset = index !== 0;
                const actualNavItemTop = `calc(100% - 4rem - ${extraLineHeightBottomOffset / 16}rem ${
                    needExtraOffset ? `- ${extraOffset / 16}rem` : ''
                })`;

                if (navItem.style.top !== stickyNavSnapVariant.bottomOfViewport) {
                    navItem.style.position = 'sticky';
                    navItem.style.top = actualNavItemTop;
                    navItem.dataset.snap = stickyNavSnapVariant.bottomOfViewport;
                }
            }

            // NOTE: inside product section
            if (
                stickyNavElementTop >= initialSection.offsetTop - 5 &&
                actualScroll < sectionStart - 5 &&
                bottomScroll > initialSectionTop + viewportHeight
            ) {
                if (navItem.dataset.snap !== stickyNavSnapVariant.topOfSection) {
                    navItem.style.position = 'absolute';
                    navItem.style.top = `${initialSection.offsetTop}px`;
                    navItem.dataset.snap = stickyNavSnapVariant.topOfSection;
                }
            }

            // NOTE: under product section
            if (actualScroll >= sectionStart) {
                const needExtraOffset = index !== 0;
                const actualNavItemTop = `calc(12.5rem + ${extraLineHeightOffset / 16}rem ${
                    needExtraOffset ? `+ ${extraOffset / 16}rem` : ''
                })`;

                if (navItem.dataset.snap !== stickyNavSnapVariant.topOfViewport) {
                    navItem.style.position = 'sticky';
                    navItem.style.top = actualNavItemTop;
                    navItem.dataset.snap = stickyNavSnapVariant.topOfViewport;
                }
            }
        });
    };

    const handleScroll = (event: WheelEvent) => {
        handleChangeSideNavPos();
        handleScrollViews(event);
    };

    useEffect(() => {
        const containerBlock = scrollContainerRef.current;
        if (!containerBlock) {
            return;
        }

        handleChangeSideNavPos();

        containerBlock.addEventListener('wheel', handleScroll, { passive: false });
        return () => containerBlock.removeEventListener('wheel', handleScroll);
    }, []);

    return (
        <ScrollContainer ref={scrollContainerRef}>
            <Menu products={products} expanded={menuExpanded} handleScrollToTop={handleScrollToTop} />
            <ScrollBlock ref={scrollSnapBlock}>
                <ProductList>
                    {products.map(({ title, href, items }) => (
                        <Product
                            key={title + href}
                            href={href}
                            title={title}
                            additionalInfo={items?.map(({ text, href }) => (
                                <LinkItem key={text + href} title={text} href={href} />
                            ))}
                            alwaysShowIcon
                        />
                    ))}
                </ProductList>
                <ProductList>
                    {verticals.map(({ title, items }) => (
                        <Product
                            key={title}
                            title={title}
                            onClickTitle={handleScrollToVerticals}
                            additionalInfo={items?.map(({ text, href, contentRight }) => (
                                <LinkItem key={text + href} title={text} href={href} contentRight={contentRight} />
                            ))}
                            iconRotation="bottom"
                            alwaysShowIcon
                        />
                    ))}
                </ProductList>
            </ScrollBlock>
            <Products ref={productsRef}>
                <ProductsWrapper>
                    {Object.entries(groups).map(([group, currentProducts], i) => (
                        <ProductList
                            ref={(el) => {
                                groupRefs.current[i] = el;
                            }}
                            key={group}
                        >
                            {currentProducts.map(({ title, href, items }) => (
                                <Product
                                    key={group + title}
                                    title={title}
                                    href={href}
                                    iconRotation="topRightCorner"
                                    {...(items?.length && {
                                        additionalInfo: items.map(
                                            ({ text, href: itemHref, contentRight, contentLeft, isMeta }) => {
                                                return (
                                                    <LinkItem
                                                        key={text + itemHref}
                                                        title={text}
                                                        href={itemHref}
                                                        contentRight={contentRight}
                                                        contentLeft={contentLeft}
                                                        isMeta={isMeta}
                                                    />
                                                );
                                            },
                                        ),
                                    })}
                                />
                            ))}
                        </ProductList>
                    ))}
                </ProductsWrapper>

                <StickyNav>
                    {Object.keys(groups).map((group, index) => {
                        const offsetIndex = Object.keys(groups).length - (index + 1);
                        const needExtraOffset = index !== Object.keys(groups).length - 1;

                        return (
                            <StickyNavItem
                                key={`${group}_${offsetIndex + index}`}
                                index={index}
                                offsetIndex={offsetIndex}
                                group={group}
                                needExtraOffset={needExtraOffset}
                                stickyNavRefs={stickyNavRefs}
                                onClick={() => handleScrollToProductGroup(index)}
                            />
                        );
                    })}
                </StickyNav>
            </Products>
            <CopyrightText>{`©${currentYear} Девайсы`}</CopyrightText>
        </ScrollContainer>
    );
}
