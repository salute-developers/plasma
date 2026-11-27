import React from 'react';

import { Text } from '../../components/typography/components/Text/Text';
import { Button } from '../../components/Button/Button';
import { Spinner } from '../../components/Spinner/Spinner';

import { Panel } from './layout.styles';

export function SeriesStatus({ error, onRetry }: { error: string; onRetry: () => void }) {
    return (
        <Panel aria-label="Загрузка данных графика">
            {error ? (
                <div className="notice error" role="alert">
                    <Text as="p">{error}</Text>
                    <Button size="s" view="clear" onClick={onRetry}>
                        Повторить загрузку графика
                    </Button>
                </div>
            ) : (
                <div className="loading" role="status">
                    <Spinner size="s" view="accent" />
                    <Text size="s">Загружаем данные графика…</Text>
                </div>
            )}
        </Panel>
    );
}
