import { carouselNewConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Carousel = component(mergeConfig(carouselNewConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    width: '400px',
    height: '370px',
    background: 'var(--surface-transparent-secondary)',
    color: 'var(--text-primary)',
    fontSize: '30px',
};

const CarouselDefault = {
    name: 'Default',
    args: [
        {
            name: 'defaultIndex',
            value: 0,
        },
        {
            name: 'scrollAlign',
            value: 'start',
            items: toItems(['start', 'center', 'end']),
        },
        {
            name: 'slides',
            value: 20,
        },
        {
            name: 'controlArrowsDisabled',
            value: false,
        },
        {
            name: 'loop',
            value: false,
        },
        {
            name: 'autoPlay',
            value: false,
        },
        {
            name: 'autoPlayInterval',
            value: 5000,
        },
        {
            name: 'swipeEnabled',
            value: false,
        },
        {
            name: 'paginationDisabled',
            value: false,
        },
        {
            name: 'paginationCentered',
            value: false,
        },
        {
            name: 'visibleDots',
            value: 7,
        },
        {
            name: 'gap',
            value: '20px',
        },
        {
            name: 'virtual',
            value: false,
        },
        {
            name: 'fullWidth',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const {
            slides,
            defaultIndex,
            autoPlayInterval,
            paginationDisabled,
            paginationCentered,
            visibleDots,
            ...rest
        } = args;
        const count = Math.max(1, Number(slides) || 1);

        return (
            <div style={{ width: '600px', maxWidth: '100%' }}>
                <Carousel
                    {...rest}
                    defaultIndex={Number(defaultIndex) || 0}
                    autoPlayInterval={Number(autoPlayInterval) || 5000}
                    paginationOptions={{
                        disabled: paginationDisabled,
                        visibleDots: Number(visibleDots) || undefined,
                        centered: paginationCentered,
                    }}
                >
                    {Array.from({ length: count }, (_, i) => (
                        <div key={i} style={cardStyle}>
                            {i}
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    },
};

export const CarouselStories = [CarouselDefault];
