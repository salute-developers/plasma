const { expect } = chai;

/** Wait for finite CSS animations and transitions, including those on pseudo-elements. */
export const expectNoRunningAnimations = ($elements: JQuery<HTMLElement>) => {
    $elements.each((_, element) => {
        const running = element.getAnimations({ subtree: true }).filter((animation) => {
            const finite = animation.effect?.getComputedTiming().iterations !== Infinity;
            return finite && (animation.pending || animation.playState === 'running');
        });
        expect(running, 'unfinished animations').to.have.length(0);
    });
};

/** TimePickerGrid scrolls every selected time item to the top of its column. */
export const expectTimeItemsAtTop = ($items: JQuery<HTMLElement>) => {
    $items.each((_, item) => {
        const column = item.parentElement;
        expect(column.clientHeight, 'laid out time column').to.be.greaterThan(0);
        const position = column.scrollTop + item.getBoundingClientRect().top - column.getBoundingClientRect().top;
        const target = Math.max(0, Math.min(position, column.scrollHeight - column.clientHeight));
        expect(column.scrollTop, `scroll position for ${item.dataset.column}`).to.be.closeTo(target, 1);
    });
};
