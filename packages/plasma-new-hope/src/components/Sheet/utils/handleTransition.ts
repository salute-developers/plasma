import { CommonProps } from '../Sheet.types';

type HandleTransitionProps = Omit<CommonProps, 'isOpen'>;

export const handleTransition = (transition: string) => (props: HandleTransitionProps): string => {
    const { withTransition } = props;

    return !withTransition ? 'unset' : transition;
};
