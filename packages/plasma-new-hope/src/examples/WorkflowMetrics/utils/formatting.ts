import type { summarizeSeriesSpecFiles } from '../archive/series';

export const format = (value: number | null | undefined) =>
    value == null ? '—' : value.toLocaleString('ru-RU', { maximumFractionDigits: 1 });

export const formatSpecFiles = (value: ReturnType<typeof summarizeSeriesSpecFiles>) =>
    value
        ? `${value.estimated ? '≈' : ''}${
              value.minimum === value.maximum
                  ? format(value.minimum)
                  : `${format(value.minimum)}–${format(value.maximum)}`
          }${value.known < value.total ? '*' : ''}`
        : '—';
