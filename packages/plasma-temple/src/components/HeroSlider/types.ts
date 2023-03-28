import { PickOptional } from '../../types';
import { HeroSlideProps } from '../HeroSlide/HeroSlide';

export interface HeroItemSliderProps extends Pick<HeroSlideProps, 'title' | 'src' | 'withMask' | 'suggestText'> {
    id: string | number;
}

export interface HeroSliderProps {
    time?: number;
    withTimeline?: boolean;
    initialIndex?: number;
    disableAutofocus?: boolean;
    buttonText: string | ((item: HeroItemSliderProps, index: number) => string);
    items: HeroItemSliderProps[];
    onItemClick?: (item: HeroItemSliderProps, index: number) => void;
    onActiveItemChange?: (item: HeroItemSliderProps, index: number) => void;
    getImageProps?: (
        index: number,
        item: HeroItemSliderProps,
    ) => PickOptional<HeroSlideProps, 'imageFit' | 'imageWidth' | 'imagePosition'>;
}
