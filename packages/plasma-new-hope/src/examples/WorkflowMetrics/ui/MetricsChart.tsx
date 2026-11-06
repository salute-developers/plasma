import React from 'react';

import type { aggregateDailySeries, summarizeSeriesSpecFiles } from '../archive/series';
import type { Statistic } from '../model/types';
import { shortDate } from '../utils/dates';
import { format, formatSpecFiles } from '../utils/formatting';

import { statistics } from './constants';

export function MetricsChart({
    points,
    buckets,
    statistic,
    packageColors,
    specCounts,
}: {
    points: ReturnType<typeof aggregateDailySeries>;
    buckets: string[];
    statistic: Statistic;
    packageColors: Map<string, string>;
    specCounts?: Map<string, ReturnType<typeof summarizeSeriesSpecFiles>>;
}) {
    const maximum = Math.max(5, Math.ceil(points.reduce((max, point) => Math.max(max, point[statistic]), 0) / 5) * 5);
    const x = (index: number) => 64 + (buckets.length === 1 ? 470 : (index * 940) / (buckets.length - 1));
    const y = (value: number) => 290 - (value / maximum) * 250;
    const series = [...new Set(points.map((point) => point.series))].sort();
    const lookup = new Map(points.map((point) => [`${point.series}/${point.date}`, point]));
    return (
        <div className="scroll">
            <svg
                className="chart"
                viewBox={`0 0 1040 ${specCounts ? 390 : 340}`}
                role="img"
                aria-label={`Длительность прогонов: ${statistics[statistic]}, минуты. Таблица значений расположена под графиком.`}
            >
                <text x="64" y="18">
                    {statistics[statistic]} · минуты
                </text>
                {[0, 1, 2, 3, 4, 5].map((tick) => (
                    <g key={tick}>
                        <line
                            className="grid"
                            x1="64"
                            x2="1004"
                            y1={y((maximum * tick) / 5)}
                            y2={y((maximum * tick) / 5)}
                        />
                        <text x="50" y={y((maximum * tick) / 5) + 4} textAnchor="end">
                            {format((maximum * tick) / 5)}
                        </text>
                    </g>
                ))}
                {buckets.map(
                    (date, index) =>
                        index % Math.ceil(buckets.length / 8) === 0 && (
                            <g key={date}>
                                <text x={x(index)} y="318" textAnchor="middle">
                                    {shortDate(date)}
                                </text>
                                {specCounts && (
                                    <text className="spec-count" x={x(index)} y="342" textAnchor="middle">
                                        <title>Spec-файлов b2c в git за период</title>
                                        {formatSpecFiles(specCounts.get(date) || null)}
                                    </text>
                                )}
                            </g>
                        ),
                )}
                {series.map((name) => {
                    let continuous = false;
                    const path = buckets
                        .map((date, index) => {
                            const point = lookup.get(`${name}/${date}`);
                            if (!point) {
                                continuous = false;
                                return '';
                            }
                            const command = `${continuous ? 'L' : 'M'} ${x(index)} ${y(point[statistic])}`;
                            continuous = true;
                            return command;
                        })
                        .join(' ');
                    const color = packageColors.get(name.split(' · ')[0]);
                    return (
                        <g key={name}>
                            <path
                                d={path}
                                fill="none"
                                stroke={color}
                                strokeWidth="2"
                                strokeDasharray={name.endsWith('webkit') ? '6 4' : undefined}
                            />
                            {buckets.map((date, index) => {
                                const point = lookup.get(`${name}/${date}`);
                                return point ? (
                                    <circle key={date} cx={x(index)} cy={y(point[statistic])} r="3.5" fill={color}>
                                        <title>{`${name}\n${date} · ${statistics[statistic]}: ${format(
                                            point[statistic],
                                        )} мин\nИзмерений: ${point.count}${
                                            point.specFiles
                                                ? `\nSpec-файлов в git: ${formatSpecFiles(point.specFiles)}`
                                                : ''
                                        }`}</title>
                                    </circle>
                                ) : null;
                            })}
                        </g>
                    );
                })}
                {specCounts && (
                    <text x="64" y="372">
                        b2c · spec-файлов в git
                    </text>
                )}
            </svg>
        </div>
    );
}
