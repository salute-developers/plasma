import React from 'react';

import { Text } from '../../components/typography/components/Text/Text';
import { Badge } from '../../components/Badge/Badge';
import { Link } from '../../components/Link/Link';
import { Heading } from '../../components/typography/components/Heading/Heading';
import { repository } from '../model/constants';

export function MetricsHeader() {
    return (
        <header className="header">
            <div>
                <Text size="s" className="muted">
                    PLASMA / ENGINEERING
                </Text>
                <Heading as="h1" size="h3">
                    История прогонов Cypress
                </Heading>
                <Text as="p" size="m" className="muted">
                    Длительность jobs Cypress по пакетам и браузерам ·{' '}
                    <Link href={`https://github.com/${repository}/actions`}>{repository}</Link>
                </Text>
            </div>
            <Badge appearance="transparent" view="accent" text="JSON-архивы" />
        </header>
    );
}
export function MetricsFooter() {
    return (
        <footer>
            <Text as="p" size="s" className="muted">
                Прогоны по расписанию включают ежедневный и исторический еженедельный workflows. В PR состав тестов
                зависит от изменений. Длительность включает подготовку окружения; результат берётся из статуса job.
            </Text>
        </footer>
    );
}
