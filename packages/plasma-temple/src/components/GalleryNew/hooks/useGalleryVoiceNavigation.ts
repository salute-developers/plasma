import React from 'react';

import { AssistantInstance } from '../../../types';
import { navigateByVoice, UseVoiceNavigationProps } from '../../AssistantProvider/hooks/useVoiceNavigation';

interface UseGalleryVoiceNavigationProps extends UseVoiceNavigationProps {
    assistant?: AssistantInstance;
}

export function useGalleryVoiceNavigation({ assistant, ...props }: UseGalleryVoiceNavigationProps) {
    const propsRef = React.useRef(props);
    propsRef.current = props;

    React.useEffect(() => {
        if (!assistant) {
            return;
        }

        const removeListener = assistant.on('data', (command) => {
            if (command.type === 'navigation') {
                navigateByVoice(propsRef.current, command);
            }
        });

        return removeListener;
    }, [assistant]);
}
