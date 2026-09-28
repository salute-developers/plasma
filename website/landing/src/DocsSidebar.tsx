import { useLocation } from 'react-router-dom';

import { SiteLink } from './shared';

function DocsTreeLink({ href, className = undefined, children }) {
    const { pathname } = useLocation();
    const classes = [className, pathname === href ? 'is-current' : null].filter(Boolean).join(' ');

    return (
        <SiteLink href={href} className={classes || undefined}>
            {children}
        </SiteLink>
    );
}

export function DocsSidebar() {
    return (
        <aside className="doc-tree">
            <details className="doc-tree-fold" open>
                <summary>Разделы документации</summary>

                <div className="doc-tree-inner">
                    <div className="doc-tree-group">
                        <h3>Основы</h3>

                        <nav className="tree-list">
                            <DocsTreeLink href="/docs/introducing">Introducing SDDS</DocsTreeLink>

                            <DocsTreeLink href="/docs/sizes">Sizes</DocsTreeLink>

                            <DocsTreeLink href="/docs/states">States</DocsTreeLink>

                            <DocsTreeLink href="/docs/theming">Themes tokens</DocsTreeLink>

                            <DocsTreeLink href="/docs/corner-radius">Corner Radius</DocsTreeLink>

                            <DocsTreeLink href="/docs/spacing-layout">Spacing & Layout</DocsTreeLink>

                            <DocsTreeLink href="/docs/props-vocabulary">Properties Vocabulary</DocsTreeLink>

                            <DocsTreeLink href="/docs/interaction-model">Interaction Model</DocsTreeLink>

                            <DocsTreeLink href="/docs/validation-model">Validation Model</DocsTreeLink>

                            <DocsTreeLink href="/docs/accessibility">Accessibility</DocsTreeLink>

                            <DocsTreeLink href="/docs/components">Component Library</DocsTreeLink>

                            <DocsTreeLink href="/docs/glossary">Glossary</DocsTreeLink>

                            <DocsTreeLink href="/docs/icons">Icons</DocsTreeLink>
                        </nav>
                    </div>

                    <div className="doc-tree-group">
                        <h3>Компоненты</h3>

                        <nav className="tree-list">
                            <span className="tree-label">
                                {'Actions '}
                                <span>4</span>
                            </span>

                            <DocsTreeLink className="is-child" href="/docs/actions-button">
                                Button
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/actions-icon-button">
                                IconButton
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/actions-link-button">
                                LinkButton
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/actions-button-group">
                                ButtonGroup
                            </DocsTreeLink>

                            <span className="tree-label">
                                {'Data Entry '}
                                <span>17</span>
                            </span>

                            <DocsTreeLink className="is-child" href="/docs/data-entry-text-field">
                                TextField
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-entry-text-area">
                                TextArea
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-entry-select">
                                Select
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-entry-checkbox">
                                CheckBox
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-entry-radio-box">
                                RadioBox
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-entry-switch">
                                Switch
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-entry-autocomplete">
                                Autocomplete
                            </DocsTreeLink>

                            <span className="is-child is-soon">CodeInput / CodeField</span>

                            <span className="is-child is-soon">ComboBox</span>

                            <DocsTreeLink className="is-child" href="/docs/data-entry-date-picker">
                                DatePicker
                            </DocsTreeLink>

                            <span className="is-child is-soon">Dropzone</span>

                            <span className="is-child is-soon">NumberInput</span>

                            <span className="is-child is-soon">Range</span>

                            <DocsTreeLink className="is-child" href="/docs/data-entry-segment">
                                Segment
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-entry-slider">
                                Slider
                            </DocsTreeLink>

                            <span className="is-child is-soon">TimePicker</span>

                            <span className="is-child is-soon">TreeSelect</span>

                            <span className="tree-label">
                                {'Data Display '}
                                <span>14</span>
                            </span>

                            <DocsTreeLink className="is-child" href="/docs/data-display-card">
                                Card
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-display-accordion">
                                Accordion
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-display-avatar">
                                Avatar
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-display-badge">
                                Badge
                            </DocsTreeLink>

                            <DocsTreeLink className="is-child" href="/docs/data-display-chip">
                                Chip
                            </DocsTreeLink>

                            <span className="is-child is-soon">Cell</span>

                            <span className="is-child is-soon">Counter</span>

                            <DocsTreeLink className="is-child" href="/docs/data-display-divider">
                                Divider
                            </DocsTreeLink>

                            <span className="is-child is-soon">Indicator</span>

                            <span className="is-child is-soon">List</span>

                            <span className="is-child is-soon">Loader</span>

                            <span className="is-child is-soon">Note</span>

                            <span className="is-child is-soon">Rating</span>

                            <DocsTreeLink className="is-child" href="/docs/data-display-spinner">
                                Spinner
                            </DocsTreeLink>

                            <span className="tree-label">
                                {'Navigation '}
                                <span>11</span>
                            </span>

                            <DocsTreeLink className="is-child" href="/docs/navigation-tabs">
                                Tabs
                            </DocsTreeLink>

                            <span className="is-child is-soon">BreadCrumbs</span>

                            <span className="is-child is-soon">Carousel</span>

                            <span className="is-child is-soon">DropdownMenu</span>

                            <span className="is-child is-soon">Pagination</span>

                            <span className="is-child is-soon">PaginationDots</span>

                            <span className="is-child is-soon">ScrollBar</span>

                            <span className="is-child is-soon">Steps</span>

                            <span className="is-child is-soon">TabBar</span>

                            <span className="is-child is-soon">Tour</span>

                            <span className="is-child is-soon">Tree</span>

                            <span className="tree-label">
                                {'Overlay '}
                                <span>9</span>
                            </span>

                            <span className="is-child is-soon">Modal</span>

                            <span className="is-child is-soon">BottomSheet</span>

                            <span className="is-child is-soon">Drawer</span>

                            <span className="is-child is-soon">Notification</span>

                            <span className="is-child is-soon">Popover</span>

                            <span className="is-child is-soon">ProgressBar</span>

                            <DocsTreeLink className="is-child" href="/docs/overlay-toast">
                                Toast
                            </DocsTreeLink>

                            <span className="is-child is-soon">ToolBar</span>

                            <span className="is-child is-soon">Tooltip</span>
                        </nav>
                    </div>
                </div>
            </details>
        </aside>
    );
}
