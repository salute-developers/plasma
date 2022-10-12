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
    items: HeroItemSliderProps[];
    onItemClick?: (item: HeroItemSliderProps, index: number) => void;
    onActiveItemChange?: (item: HeroItemSliderProps, index: number) => void;
    buttonText: string | ((item: HeroItemSliderProps, index: number) => string);
    getImageProps?: (index: number) => PickOptional<HeroSlideProps, 'imageFit' | 'imageWidth' | 'imagePosition'>;
}
