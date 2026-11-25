import { component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { getCoreConfig, getCoreTokens } from './cssVariables';
import { createThemeConfig } from './themeConfig';
import type { ResolvedRelatedComponent } from './protocol';
import { AccordionStories } from './stories/Accordion.story';
import { AttachStories } from './stories/Attach.story';
import { AutocompleteStories } from './stories/Autocomplete.story';
import { AvatarStories } from './stories/Avatar.story';
import { AvatarGroupStories } from './stories/AvatarGroup.story';
import { BadgeStories } from './stories/Badge.story';
import { BreadcrumbsStories } from './stories/Breadcrumbs.story';
import { ButtonStories } from './stories/Button.story';
import { ButtonBaseStories } from './stories/ButtonBase.story';
import { ButtonGroupStories } from './stories/ButtonGroup.story';
import { CalendarDoubleStories, CalendarStories } from './stories/Calendar.story';
import { CardStories } from './stories/Card.story';
import { CarouselStories } from './stories/Carousel.story';
import { CellStories } from './stories/Cell.story';
import { CheckboxStories } from './stories/Checkbox.story';
import { ChipStories } from './stories/Chip.story';
import { ChipGroupStories } from './stories/ChipGroup.story';
import { CodeAreaStories } from './stories/CodeArea.story';
import { CodeFieldStories } from './stories/CodeField.story';
import { CodeInputStories } from './stories/CodeInput.story';
import { ComboboxStories } from './stories/Combobox.story';
import { CounterStories } from './stories/Counter.story';
import { DatePickerStories } from './stories/DatePicker.story';
import { DateTimePickerStories } from './stories/DateTimePicker.story';
import { DividerStories } from './stories/Divider.story';
import { DrawerStories } from './stories/Drawer.story';
import { DropdownStories } from './stories/Dropdown.story';
import { DropzoneStories } from './stories/Dropzone.story';
import { EmbedIconButtonDefaultStories } from './stories/EmbedIconButton.story';
import { EmptyStateStories } from './stories/EmptyState.story';
import { FileStories } from './stories/File.story';
import { FlowStories } from './stories/Flow.story';
import { GridStories } from './stories/Grid.story';
import { GroupStories } from './stories/Group.story';
import { IconButtonStories } from './stories/IconButton.story';
import { ImageStories } from './stories/Image.story';
import { IndicatorStories } from './stories/Indicator.story';
import { InformationWrapperStories } from './stories/InformationWrapper.story';
import { LinkStories } from './stories/Link.story';
import { LinkButtonStories } from './stories/LinkButton.story';
import { ListStories } from './stories/List.story';
import { LoaderStories } from './stories/Loader.story';
import { MaskStories } from './stories/Mask.story';
import { ModalStories } from './stories/Modal.story';
import { NoteStories } from './stories/Note.story';
import { NotificationStories } from './stories/Notification.story';
import { NumberFormatStories } from './stories/NumberFormat.story';
import { NumberInputStories } from './stories/NumberInput.story';
import { OverlayStories } from './stories/Overlay.story';
import { PaginationStories } from './stories/Pagination.story';
import { PopoverStories } from './stories/Popover.story';
import { PopupStories } from './stories/Popup.story';
import { PortalStories } from './stories/Portal.story';
import { PriceStories } from './stories/Price.story';
import { ProgressStories } from './stories/Progress.story';
import { ProgressBarCircularStories } from './stories/ProgressBarCircular.story';
import { RadioboxStories } from './stories/Radiobox.story';
import { RangeStories } from './stories/Range.story';
import { RatingStories } from './stories/Rating.story';
import { RatingInputStories } from './stories/RatingInput.story';
import { SegmentGroupStories, SegmentItemStories } from './stories/Segment.story';
import { SelectStories } from './stories/Select.story';
import { SheetStories } from './stories/Sheet.story';
import { SkeletonStories } from './stories/Skeleton.story';
import { SliderStories } from './stories/Slider.story';
import { SpinnerStories } from './stories/Spinner.story';
import { StepItemStories, StepsStories } from './stories/Steps.story';
import { SwitchStories } from './stories/Switch.story';
import { IconTabItemStories, TabItemStories } from './stories/TabItem.story';
import { TableStories } from './stories/Table.story';
import { TabsStories } from './stories/Tabs.story';
import { TextAreaStories } from './stories/TextArea.story';
import { TextFieldStories } from './stories/TextField.story';
import { TextFieldGroupStories } from './stories/TextFieldGroup.story';
import { TextFieldSliderStories } from './stories/TextFieldSlider.story';
import { TimePickerStories } from './stories/TimePicker.story';
import { ToastStories } from './stories/Toast.story';
import { ToolbarStories } from './stories/Toolbar.story';
import { TooltipStories } from './stories/Tooltip.story';
import { TourStories } from './stories/Tour.story';
import { TreeStories } from './stories/Tree.story';
import { ViewContainerStories } from './stories/ViewContainer.story';
import type { WebStory } from './stories/types';
import { BodyStories, DsplStories, HeadingStories, TextStories } from './stories/Typography.story';

export interface PreviewComponentEntry {
    /** Story компонента в порядке `componentMapper` клиента; первая — по умолчанию. */
    stories: WebStory[];
    /**
     * Объект токенов ядра: ключ → CSS-переменная (по манифесту генератора или `<component>Tokens`). Ключ web-параметра,
     * которого в объекте нет, отображается по схеме `--plasma-<component>-<key>` (см. `cssVariables.ts`).
     */
    tokens?: Record<string, string>;
    /** Конфиг ядра (по манифесту генератора или `<component>Config`). */
    coreConfig?: unknown;
}

const entry = (name: string, stories: WebStory[]): PreviewComponentEntry => {
    const tokens = getCoreTokens(name);
    const coreConfig = getCoreConfig(name);
    return { stories, ...(tokens ? { tokens } : {}), ...(coreConfig ? { coreConfig } : {}) };
};

/**
 * Компоненты плагина — web-компоненты с story в порядке бывшего `componentMapper` клиента DS Builder
 * и с тем же порядком story. Список должен совпадать с `components` в `public/preview-plugin.json`.
 */
export const registry: Record<string, PreviewComponentEntry> = {
    IconButton: entry('IconButton', IconButtonStories),
    Link: entry('Link', LinkStories),
    Button: entry('Button', ButtonStories),
    Checkbox: entry('Checkbox', CheckboxStories),
    Radiobox: entry('Radiobox', RadioboxStories),
    Counter: entry('Counter', CounterStories),
    Indicator: entry('Indicator', IndicatorStories),
    Badge: entry('Badge', BadgeStories),
    Spinner: entry('Spinner', SpinnerStories),
    Chip: entry('Chip', ChipStories),
    Switch: entry('Switch', SwitchStories),
    Skeleton: entry('Skeleton', SkeletonStories),
    List: entry('List', ListStories),
    LinkButton: entry('LinkButton', LinkButtonStories),
    EmbedIconButton: entry('EmbedIconButton', EmbedIconButtonDefaultStories),
    Cell: entry('Cell', CellStories),
    Divider: entry('Divider', DividerStories),
    EmptyState: entry('EmptyState', EmptyStateStories),
    Accordion: entry('Accordion', AccordionStories),
    Slider: entry('Slider', SliderStories),
    Note: entry('Note', NoteStories),
    TextField: entry('TextField', TextFieldStories),
    Range: entry('Range', RangeStories),
    TextArea: entry('TextArea', TextAreaStories),
    Tabs: entry('Tabs', TabsStories),
    TabItem: entry('TabItem', TabItemStories),
    IconTabItem: entry('IconTabItem', IconTabItemStories),
    ButtonGroup: entry('ButtonGroup', ButtonGroupStories),
    Breadcrumbs: entry('Breadcrumbs', BreadcrumbsStories),
    ChipGroup: entry('ChipGroup', ChipGroupStories),
    Card: entry('Card', CardStories),
    Popover: entry('Popover', PopoverStories),
    TextFieldGroup: entry('TextFieldGroup', TextFieldGroupStories),
    Avatar: entry('Avatar', AvatarStories),
    Pagination: entry('Pagination', PaginationStories),
    Progress: entry('Progress', ProgressStories),
    Sheet: entry('Sheet', SheetStories),
    Loader: entry('Loader', LoaderStories),
    ProgressBarCircular: entry('ProgressBarCircular', ProgressBarCircularStories),
    NumberInput: entry('NumberInput', NumberInputStories),
    Rating: entry('Rating', RatingStories),
    Image: entry('Image', ImageStories),
    AvatarGroup: entry('AvatarGroup', AvatarGroupStories),
    Price: entry('Price', PriceStories),
    Tooltip: entry('Tooltip', TooltipStories),
    Modal: entry('Modal', ModalStories),
    Popup: entry('Popup', PopupStories),
    Dropzone: entry('Dropzone', DropzoneStories),
    Select: entry('Select', SelectStories),
    Combobox: entry('Combobox', ComboboxStories),
    Dropdown: entry('Dropdown', DropdownStories),
    Toolbar: entry('Toolbar', ToolbarStories),
    Drawer: entry('Drawer', DrawerStories),
    Toast: entry('Toast', ToastStories),
    Notification: entry('Notification', NotificationStories),
    Steps: entry('Steps', StepsStories),
    StepItem: entry('StepItem', StepItemStories),
    Body: entry('Body', BodyStories),
    Dspl: entry('Dspl', DsplStories),
    Heading: entry('Heading', HeadingStories),
    Text: entry('Text', TextStories),
    SegmentGroup: entry('SegmentGroup', SegmentGroupStories),
    SegmentItem: entry('SegmentItem', SegmentItemStories),
    RatingInput: entry('RatingInput', RatingInputStories),
    Group: entry('Group', GroupStories),
    Attach: entry('Attach', AttachStories),
    Autocomplete: entry('Autocomplete', AutocompleteStories),
    Calendar: entry('Calendar', CalendarStories),
    CalendarDouble: entry('CalendarDouble', CalendarDoubleStories),
    CodeArea: entry('CodeArea', CodeAreaStories),
    CodeField: entry('CodeField', CodeFieldStories),
    CodeInput: entry('CodeInput', CodeInputStories),
    DatePicker: entry('DatePicker', DatePickerStories),
    DateTimePicker: entry('DateTimePicker', DateTimePickerStories),
    File: entry('File', FileStories),
    Grid: entry('Grid', GridStories),
    InformationWrapper: entry('InformationWrapper', InformationWrapperStories),
    Table: entry('Table', TableStories),
    TextFieldSlider: entry('TextFieldSlider', TextFieldSliderStories),
    TimePicker: entry('TimePicker', TimePickerStories),
    Tour: entry('Tour', TourStories),
    Tree: entry('Tree', TreeStories),
    Carousel: entry('Carousel', CarouselStories),
    Flow: entry('Flow', FlowStories),
    Mask: entry('Mask', MaskStories),
    NumberFormat: entry('NumberFormat', NumberFormatStories),
    ButtonBase: entry('ButtonBase', ButtonBaseStories),
    Overlay: entry('Overlay', OverlayStories),
    Portal: entry('Portal', PortalStories),
    ViewContainer: entry('ViewContainer', ViewContainerStories),
};

/** Story компонента по id (`id` равен имени story); без id — story по умолчанию, первая. */
export const findStory = (entry: PreviewComponentEntry, storyId?: string): WebStory | undefined =>
    storyId === undefined ? entry.stories[0] : entry.stories.find((story) => story.name === storyId);

/**
 * `relatedComponents` для story из связанных компонентов payload (`styles` → `resolvePayload`), как
 * `createRelatedComponents` прежнего клиента:
 * для каждого компонента конфиг темы (`createThemeConfig`), и если у него есть конфиг ядра —
 * `<Имя>`: `component(mergeConfig(<конфиг ядра>, <конфиг темы>))` и `<Имя>Config`: объединённый конфиг,
 * иначе только `<Имя>Config` с конфигом темы.
 */
export const buildRelatedComponents = (related: Record<string, ResolvedRelatedComponent>): Record<string, unknown> =>
    Object.entries(related).reduce<Record<string, unknown>>((acc, [name, values]) => {
        const themeConfig = createThemeConfig(values);
        const coreConfig = getCoreConfig(name);

        if (!coreConfig || typeof coreConfig === 'function') {
            return { ...acc, [`${name}Config`]: themeConfig };
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- конфиги ядра типизированы по компоненту
        const merged = mergeConfig(coreConfig as any, themeConfig as any);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return { ...acc, [name]: component(merged as any), [`${name}Config`]: merged };
    }, {});
