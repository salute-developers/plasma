export interface DotsProps {
    /**
     * Выбранная страница
     */
    index: number;
    /**
     * Обработчик изменения индекса
     */
    onChange: (index: number) => void;
    /**
     * Количество страниц
     */
    count: number;
    /**
     * Максимальное количество видимых точек, для условий count > visibleCount
     */
    visibleCount: number;
    /**
     * Отображение активного элемента
     * @default 'dot'
     */
    activeElementView?: 'dot' | 'line';
    /**
     * Центрирует элемент по горизонтали на всю ширину контейнера
     * @default false
     */
    centered?: boolean;
}
