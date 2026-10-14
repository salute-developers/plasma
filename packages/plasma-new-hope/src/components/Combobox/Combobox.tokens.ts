export const classes = {
    dropdownItemIsFocused: 'dropdown-item-is-focused',
    dropdownItemIsDisabled: 'dropdown-item-is-disabled',
    dropdownItemIsActive: 'dropdown-item-is-active',
    comboboxTargetArrow: 'combobox-target-arrow',
    arrowInverse: 'arrow-inverse',
    textfieldTarget: 'combobox-textfield-target',
    selectChipIsFocused: 'combobox-chip-is-focused',
    selectWithoutBoxShadow: 'combobox-without-box-shadow',
    selectItemCheckbox: 'combobox-item-checkbox',
    selectSpinner: 'combobox-spinner',
    emptyStateWrapper: 'combobox-empty-state-wrapper',
    singleLineMode: 'combobox-singleline-mode',
    inputScrollableWrapper: 'input-scrollable-wrapper',
};

export const tokens = {
    /** @styleType dimension */
    borderRadius: '--plasma-combobox-border-radius',
    /** @styleType dimension */
    padding: '--plasma-combobox-padding',
    /** @styleType dimension */
    margin: '--plasma-combobox-margin',
    /** @styleType dimension */
    focusOffset: '--plasma-combobox-focus-offset',

    /** @styleType typography @styleProp textStyle @stylePart fontFamily */
    fontFamily: '--plasma-combobox-font-family',
    /** @styleType typography @styleProp textStyle @stylePart fontSize */
    fontSize: '--plasma-combobox-font-size',
    /** @styleType typography @styleProp textStyle @stylePart fontStyle */
    fontStyle: '--plasma-combobox-font-style',
    /** @styleType typography @styleProp textStyle @stylePart fontWeight */
    fontWeight: '--plasma-combobox-font-weight',
    /** @styleType typography @styleProp textStyle @stylePart letterSpacing */
    fontLetterSpacing: '--plasma-combobox-font-letter-spacing',
    /** @styleType typography @styleProp textStyle @stylePart lineHeight */
    fontLineHeight: '--plasma-combobox-font-line-height',

    /** @styleType color */
    dropdownBorderColor: '--plasma-select-dropdown-border-color',
    /** @styleType dimension */
    dropdownBorderWidth: '--plasma-select-dropdown-border-width',
    /** @styleType color */
    dropdownBackgroundColor: '--plasma-combobox-dropdown-background-color',

    /** @styleType dimension */
    itemHeight: '--plasma-combobox-item-height',
    /** @styleType dimension */
    itemBorderRadius: '--plasma-combobox-item-border-radius',
    /** @styleType dimension */
    itemPadding: '--plasma-combobox-item-padding',
    /** @styleType dimension */
    itemPaddingTight: '--plasma-combobox-item-padding-tight',
    /** @styleType dimension */
    itemIconSize: '--plasma-combobox-item-icon-size',
    /** @styleType dimension */
    itemIconSizeTight: '--plasma-combobox-item-icon-size-tight',
    /** @styleType dimension */
    itemIconMargin: '--plasma-combobox-item-icon-margin',
    /** @styleType color */
    itemBackgroundHover: '--plasma-combobox-item-background-hover',
    /** @styleType color */
    itemIconColor: '--plasma-combobox-item-icon-color',
    /** @styleType dimension */
    itemGap: '--plasma-select-item-gap',
    /** @styleType dimension */
    itemTreeOffsetWidth: '--plasma-select-item-tree-offset-width',

    /** @styleType dimension */
    cellPadding: '--plasma-combobox-cell-padding',
    /** @styleType dimension */
    cellPaddingLeftContent: '--plasma-combobox-cell-padding-left-content',
    /** @styleType dimension */
    cellPaddingContent: '--plasma-combobox-cell-padding-content',
    /** @styleType dimension */
    cellPaddingRightContent: '--plasma-combobox-cell-padding-right-content',
    /** @styleType dimension */
    cellTextboxGap: '--plasma-combobox-cell-textbox-gap',
    /** @styleType dimension */
    cellGap: '--plasma-combobox-cell-gap',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontFamily */
    cellTitleFontFamily: '--plasma-combobox-cell-title-font-family',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontSize */
    cellTitleFontSize: '--plasma-combobox-cell-title-font-size',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontStyle */
    cellTitleFontStyle: '--plasma-combobox-cell-title-font-style',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontWeight */
    cellTitleFontWeight: '--plasma-combobox-cell-title-font-weight',
    /** @styleType typography @styleProp cellTitleStyle @stylePart letterSpacing */
    cellTitleLetterSpacing: '--plasma-combobox-cell-title-letter-spacing',
    /** @styleType typography @styleProp cellTitleStyle @stylePart lineHeight */
    cellTitleLineHeight: '--plasma-combobox-cell-title-line-height',

    /** @styleType dimension */
    checkboxTriggerSize: '--plasma-combobox-checkbox-trigger-size',
    /** @styleType dimension */
    checkboxTriggerSizeTight: '--plasma-combobox-checkbox-trigger-size-tight',
    /** @styleType shape */
    checkboxTriggerBorderRadius: '--plasma-combobox-checkbox-trigger-border-radius',
    /** @styleType dimension */
    checkboxTriggerBorderRadiusTight: '--plasma-combobox-checkbox-trigger-border-radius-tight',
    /** @styleType color */
    checkboxFillColor: '--plasma-combobox-checkbox-fill-color',
    /** @styleType color */
    checkboxIconColor: '--plasma-combobox-checkbox-icon-color',
    /** @styleType color */
    checkboxTriggerBorderColor: '--plasma-combobox-checkbox-trigger-border-color',
    /** @styleType color */
    checkboxTriggerBorderCheckedColor: '--plasma-combobox-checkbox-trigger-border-checked-color',
    /** @styleType dimension */
    checkboxTriggerBorderWidth: '--plasma-combobox-checkbox-trigger-border-width',

    /** @styleType dimension */
    indicatorSize: '--plasma-combobox-indicator-size',

    // Токены для TextField
    /** @styleType color */
    textFieldColor: '--plasma-combobox-new-textfield-color',
    /** @styleType color */
    textFieldClearColor: '--plasma-combobox-new-textfield-clear-color',

    /** @styleType color */
    textFieldBackgroundColor: '--plasma-combobox-new-textfield-background-color',
    /** @styleType color @styleProp textFieldBackgroundColor @styleState hovered */
    textFieldBackgroundColorHover: '--plasma-combobox-new-textfield-background-color-hover',
    /** @styleType color */
    textFieldBackgroundColorFocus: '--plasma-combobox-new-textfield-background-color-focus',

    /** @styleType color */
    textFieldBorderColor: '--plasma-combobox-new-textfield-border-color',
    /** @styleType color @styleProp textFieldBorderColor @styleState hovered */
    textFieldBorderColorHover: '--plasma-combobox-new-textfield-border-color-hover',
    /** @styleType color @styleProp textFieldBorderColor @styleState focused */
    textFieldBorderColorFocus: '--plasma-combobox-new-textfield-border-color-focus',

    /** @styleType color */
    textFieldDividerColor: '--plasma-combobox-new-textfield-divider-color',
    /** @styleType color @styleProp textFieldDividerColor @styleState hovered */
    textFieldDividerColorHover: '--plasma-combobox-new-textfield-divider-color-hover',
    /** @styleType color @styleProp textFieldDividerColor @styleState focused */
    textFieldDividerColorFocus: '--plasma-combobox-new-textfield-divider-color-focus',

    /** @styleType color */
    textFieldColorReadOnly: '--plasma-combobox-new-textfield-color-readonly',
    /** @styleType color */
    textFieldBackgroundColorReadOnly: '--plasma-combobox-new-textfield-bg-color-readonly',
    /** @styleType color */
    textFieldBorderColorReadOnly: '--plasma-combobox-new-textfield-border-color-readonly',
    /** @styleType color */
    textFieldPlaceholderColorReadOnly: '--plasma-combobox-new-textfield-placeholder-color-readonly',
    /** @styleType color */
    textFieldDividerColorReadOnly: '--plasma-combobox-new-textfield-divider-color-readonly',

    /** @styleType color */
    textFieldCaretColor: '--plasma-combobox-new-textfield-caret-color',
    /** @styleType color */
    textFieldPlaceholderColor: '--plasma-combobox-new-textfield-placeholder-color',
    /** @styleType color */
    textFieldPlaceholderColorFocus: '--plasma-combobox-new-textfield-placeholder-color-focus',
    /** @styleType color */
    textFieldClearPlaceholderColor: '--plasma-combobox-new-textfield-clear-placeholder-color',
    /** @styleType color */
    textFieldClearPlaceholderColorFocus: '--plasma-combobox-new-textfield-clear-placeholder-color-focus',
    /** @styleType color */
    textFieldOptionalColor: '--plasma-combobox-new-textfield-optional-color',

    /** @styleType dimension */
    textFieldHeight: '--plasma-combobox-new-textfield-height',
    /** @styleType dimension */
    textFieldBorderWidth: '--plasma-combobox-new-textfield-border-width',
    /** @styleType dimension */
    textFieldBorderRadius: '--plasma-combobox-new-textfield-border-radius',

    /** @styleType dimension */
    textFieldPadding: '--plasma-combobox-new-textfield-padding',
    /** @styleType dimension */
    textFieldPaddingWithChips: '--plasma-combobox-new-textfield-padding-with-chips',

    /** @styleType dimension */
    textFieldLeftContentMargin: '--plasma-combobox-new-textfield-left-content-margin',
    /** @styleType dimension */
    textFieldRightContentMargin: '--plasma-combobox-new-textfield-right-content-margin',
    /** @styleType dimension */
    textFieldRightContentWithHintMargin: '--plasma-combobox-textfield-right-content-with-hint-margin',

    /** @styleType dimension */
    textFieldContentRightWrapperGap: '--plasma-combobox-textfield-content-right-wrapper-gap',
    /** @styleType dimension */
    textFieldContentRightWrapperMargin: '--plasma-combobox-textfield-content-right-wrapper-margin',

    /** @styleType typography @styleProp textFieldStyle @stylePart fontFamily */
    textFieldFontFamily: '--plasma-combobox-new-textfield-font-family',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontStyle */
    textFieldFontStyle: '--plasma-combobox-new-textfield-font-style',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontSize */
    textFieldFontSize: '--plasma-combobox-new-textfield-font-size',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontWeight */
    textFieldFontWeight: '--plasma-combobox-new-textfield-font-weight',
    /** @styleType typography @styleProp textFieldStyle @stylePart letterSpacing */
    textFieldLetterSpacing: '--plasma-combobox-new-textfield-letter-spacing',
    /** @styleType typography @styleProp textFieldStyle @stylePart lineHeight */
    textFieldLineHeight: '--plasma-combobox-new-textfield-line-height',

    /** @styleType color */
    textFieldContentSlotColor: '--plasma-combobox-new-textfield-content-slot-color',
    /** @styleType color */
    textFieldContentSlotColorHover: '--plasma-combobox-new-textfield-content-slot-color-hover',
    /** @styleType color */
    textFieldContentSlotColorActive: '--plasma-combobox-new-textfield-content-slot-color-active',

    /** @styleType color */
    textFieldContentSlotRightColor: '--plasma-combobox-new-textfield-content-right-slot-color',
    /** @styleType color @styleProp textFieldContentSlotRightColor @styleState hovered */
    textFieldContentSlotRightColorHover: '--plasma-combobox-new-textfield-content-right-slot-color-hover',
    /** @styleType color @styleProp textFieldContentSlotRightColor @styleState pressed */
    textFieldContentSlotRightColorActive: '--plasma-combobox-new-textfield-content-right-slot-color-active',
    /** @styleType float */
    textFieldContentSlotRightOpacityReadOnly: '--plasma-combobox-new-textfield-content-right-slot-opacity-readonly',

    /** @styleType color */
    textFieldLabelColor: '--plasma-combobox-new-textfield-label-color',
    /** @styleType color */
    textFieldLabelColorReadOnly: '--plasma-combobox-new-textfield-label-color-readonly',
    /** @styleType dimension */
    textFieldLabelOffset: '--plasma-combobox-new-textfield-label-offset',
    /** @styleType dimension */
    textFieldClearLabelOffset: '--plasma-combobox-new-textfield-clear-label-offset',

    /** @styleType typography @styleProp textFieldLabelStyle @stylePart fontFamily */
    textFieldLabelFontFamily: '--plasma-combobox-new-textfield-label-font-family',
    /** @styleType typography @styleProp textFieldLabelStyle @stylePart fontStyle */
    textFieldLabelFontStyle: '--plasma-combobox-new-textfield-label-font-style',
    /** @styleType typography @styleProp textFieldLabelStyle @stylePart fontSize */
    textFieldLabelFontSize: '--plasma-combobox-new-textfield-label-font-size',
    /** @styleType typography @styleProp textFieldLabelStyle @stylePart fontWeight */
    textFieldLabelFontWeight: '--plasma-combobox-new-textfield-label-font-weight',
    /** @styleType typography @styleProp textFieldLabelStyle @stylePart letterSpacing */
    textFieldLabelLetterSpacing: '--plasma-combobox-new-textfield-label-letter-spacing',
    /** @styleType typography @styleProp textFieldLabelStyle @stylePart lineHeight */
    textFieldLabelLineHeight: '--plasma-combobox-new-textfield-label-line-height',

    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart fontFamily */
    textFieldLabelInnerFontFamily: '--plasma-combobox-new-textfield-placement_inner-label-font-family',
    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart fontStyle */
    textFieldLabelInnerFontStyle: '--plasma-combobox-new-textfield-placement_inner-label-font-style',
    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart fontSize */
    textFieldLabelInnerFontSize: '--plasma-combobox-new-textfield-placement_inner-label-font-size',
    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart fontWeight */
    textFieldLabelInnerFontWeight: '--plasma-combobox-new-textfield-placement_inner-label-font-weight',
    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart letterSpacing */
    textFieldLabelInnerLetterSpacing: '--plasma-combobox-new-textfield-placement_inner-label-letter-spacing',
    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart lineHeight */
    textFieldLabelInnerLineHeight: '--plasma-combobox-new-textfield-placement_inner-label-line-height',

    /** @styleType dimension */
    textFieldLabelInnerPadding: '--plasma-combobox-new-textfield-placement_inner-label-padding',
    /** @styleType dimension */
    textFieldContentLabelInnerPadding: '--plasma-combobox-new-textfield-placement_inner-content-padding',

    /** @styleType color */
    textFieldTitleCaptionColor: '--plasma-combobox-new-textfield-title-caption-color',
    /** @styleType color */
    textFieldTitleCaptionColorReadOnly: '--plasma-combobox-new-textfield-title-caption-color-readonly',
    /** @styleType dimension */
    textFieldTitleCaptionInnerLabelOffset: '--plasma-combobox-new-textfield-title-caption-label-inner-offset',

    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart fontFamily */
    textFieldTitleCaptionFontFamily: '--plasma-combobox-new-textfield-title-caption-font-family',
    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart fontStyle */
    textFieldTitleCaptionFontStyle: '--plasma-combobox-new-textfield-title-caption-font-style',
    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart fontSize */
    textFieldTitleCaptionFontSize: '--plasma-combobox-new-textfield-title-caption-font-size',
    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart fontWeight */
    textFieldTitleCaptionFontWeight: '--plasma-combobox-new-textfield-title-caption-font-weight',
    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart letterSpacing */
    textFieldTitleCaptionLetterSpacing: '--plasma-combobox-new-textfield-title-caption-letter-spacing',
    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart lineHeight */
    textFieldTitleCaptionLineHeight: '--plasma-combobox-new-textfield-title-caption-line-height',

    /** @styleType color */
    textFieldLeftHelperColor: '--plasma-combobox-new-textfield-left-helper-color',
    /** @styleType color @styleProp textFieldLeftHelperColor @styleState focused */
    textFieldLeftHelperColorFocus: '--plasma-combobox-new-textfield-left-helper-color-focus',
    /** @styleType color */
    textFieldLeftHelperColorReadOnly: '--plasma-combobox-new-textfield-left-helper-color-readonly',
    /** @styleType dimension */
    textFieldLeftHelperOffset: '--plasma-combobox-new-textfield-left-helper-offset',

    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart fontFamily */
    textFieldLeftHelperFontFamily: '--plasma-combobox-new-textfield-left-helper-font-family',
    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart fontStyle */
    textFieldLeftHelperFontStyle: '--plasma-combobox-new-textfield-left-helper-font-style',
    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart fontSize */
    textFieldLeftHelperFontSize: '--plasma-combobox-new-textfield-left-helper-font-size',
    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart fontWeight */
    textFieldLeftHelperFontWeight: '--plasma-combobox-new-textfield-left-helper-font-weight',
    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart letterSpacing */
    textFieldLeftHelperLetterSpacing: '--plasma-combobox-new-textfield-left-helper-letter-spacing',
    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart lineHeight */
    textFieldLeftHelperLineHeight: '--plasma-combobox-new-textfield-left-helper-line-height',

    /** @styleType color */
    textFieldTextBeforeColor: '--plasma-combobox-new-textfield-before-text-color',
    /** @styleType color */
    textFieldTextAfterColor: '--plasma-combobox-new-textfield-after-text-color',
    /** @styleType dimension */
    textFieldTextBeforeMargin: '--plasma-combobox-new-textfield-before-text-margin',
    /** @styleType dimension */
    textFieldTextAfterMargin: '--plasma-combobox-new-textfield-after-text-margin',

    /** @styleType float */
    textFieldDisabledOpacity: '--plasma-combobox-new-textfield-disabled-opacity',
    /** @styleType float */
    textFieldDisabledBackgroundOpacity: '--plasma-combobox-new-textfield-disabled-background-opacity',
    /** @styleType float */
    textFieldDisabledInnerContentOpacity: '--plasma-combobox-new-textfield-disabled-inner-content-opacity',
    /** @styleType float */
    textFieldReadOnlyOpacity: '--plasma-combobox-new-textfield-readonly-opacity',

    /** Токены для tooltip */
    /** @styleType dimension */
    textFieldHintCustomIconTargetSize: '--plasma-combobox-textfield__hint-custom-icon-target-size',
    /** @styleType value */
    textFieldHintMargin: '--plasma-combobox-textfield__hint-margin',
    /** @styleType dimension */
    textFieldHintTargetSize: '--plasma-combobox-textfield__hint-target-size',
    /** @styleType color */
    textFieldHintIconColor: '--plasma-combobox-textfield__hint-icon-color',
    /** @styleType dimension */
    textFieldHintInnerLabelPlacementOffset: '--plasma-combobox-textfield__hint-inner-label-placement-offset',
    /** @styleType dimension */
    textFieldClearHintInnerLabelPlacementOffset: '--plasma-combobox-textfield__clear-hint-inner-label-placement-offset',

    /** @styleType color */
    textFieldTooltipBackgroundColor: '--plasma-combobox-textfield__tooltip-background-color',
    /** @styleType shadow */
    textFieldTooltipBoxShadow: '--plasma-combobox-textfield__tooltip-box-shadow',
    /** @styleType color */
    textFieldTooltipColor: '--plasma-combobox-textfield__tooltip-color',

    /** @styleType dimension */
    textFieldTooltipPaddingTop: '--plasma-combobox-textfield__tooltip-padding-top',
    /** @styleType dimension */
    textFieldTooltipPaddingRight: '--plasma-combobox-textfield__tooltip-padding-right',
    /** @styleType dimension */
    textFieldTooltipPaddingBottom: '--plasma-combobox-textfield__tooltip-padding-bottom',
    /** @styleType dimension */
    textFieldTooltipPaddingLeft: '--plasma-combobox-textfield__tooltip-padding-left',
    /** @styleType dimension */
    textFieldTooltipMinHeight: '--plasma-combobox-textfield__tooltip-min-height',
    /** @styleType dimension */
    textFieldTooltipBorderRadius: '--plasma-combobox-textfield__tooltip-border-radius',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart fontFamily */
    textFieldTooltipTextFontFamily: '--plasma-combobox-textfield__tooltip-text-font-family',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart fontSize */
    textFieldTooltipTextFontSize: '--plasma-combobox-textfield__tooltip-text-font-size',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart fontStyle */
    textFieldTooltipTextFontStyle: '--plasma-combobox-textfield__tooltip-text-font-style',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart fontWeight */
    textFieldTooltipTextFontWeight: '--plasma-combobox-textfield__tooltip-text-font-weight',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart letterSpacing */
    textFieldTooltipTextFontLetterSpacing: '--plasma-combobox-textfield__tooltip-text-font-letter-spacing',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart lineHeight */
    textFieldTooltipTextFontLineHeight: '--plasma-combobox-textfield__tooltip-text-font-line-height',
    /** @styleType dimension */
    textFieldTooltipContentLeftMargin: '--plasma-combobox-textfield__tooltip-content-left-margin',
    /** @styleType dimension */
    textFieldTooltipArrowMaskWidth: '--plasma-combobox-textfield__tooltip-arrow-mask-width',
    /** @styleType dimension */
    textFieldTooltipArrowMaskHeight: '--plasma-combobox-textfield__tooltip-arrow-mask-height',
    /** @styleType value */
    textFieldTooltipArrowMaskImage: '--plasma-combobox-textfield__tooltip-arrow-mask-image',
    /** @styleType dimension */
    textFieldTooltipArrowHeight: '--plasma-combobox-textfield__tooltip-arrow-height',
    /** @styleType dimension */
    textFieldTooltipArrowEdgeMargin: '--plasma-combobox-textfield__tooltip-arrow-edge-margin',
    /** @styleType color */
    textFieldTooltipArrowBackground: '--plasma-combobox-textfield__tooltip-arrow-background',

    /** @styleType dimension */
    textFieldChipHeight: '--plasma-combobox-new-textfield-chip-height',
    /** @styleType dimension */
    textFieldChipBorderRadius: '--plasma-combobox-new-textfield-chip-border-radius',
    /** @styleType dimension */
    textFieldChipGap: '--plasma-combobox-new-textfield-chip-gap',
    /** @styleType color */
    textFieldChipBackground: '--plasma-combobox-new-textfield--chip-background',
    /** @styleType color */
    textFieldChipColor: '--plasma-combobox-new-textfield-chip-color',
    /** @styleType color */
    textFieldChipBackgroundHover: '--plasma-combobox-new-textfield-chip-background-hover',
    /** @styleType color */
    textFieldChipColorHover: '--plasma-combobox-new-textfield-chip-color-hover',
    /** @styleType color */
    textFieldChipBackgroundReadOnly: '--plasma-combobox-new-textfield-chip-background-read-only',
    /** @styleType color */
    textFieldChipColorReadOnly: '--plasma-combobox-new-textfield-chip-color-read-only',
    /** @styleType color */
    textFieldChipBackgroundReadOnlyHover: '--plasma-combobox-new-textfield-chip-background-read-only-hover',
    /** @styleType color */
    textFieldChipColorReadOnlyHover: '--plasma-combobox-new-textfield-chip-color-read-only-hover',
    /** @styleType color */
    textFieldChipBackgroundActive: '--plasma-combobox-new-textfield-chip-background-active',
    /** @styleType color */
    textFieldChipColorActive: '--plasma-combobox-new-textfield-chip-color-active',
    /** @styleType color */
    textFieldChipCloseIconColor: '--plasma-combobox-new-textfield-chip-close-icons-color',
    /** @styleType color */
    textFieldChipCloseIconColorHover: '--plasma-combobox-new-textfield-chip-close-icons-color-hover',
    /** @styleType color */
    textFieldChipCloseIconColorReadonly: '--plasma-combobox-new-textfield-chip-close-icons-color-readonly',
    /** @styleType dimension */
    textFieldChipOutlineSize: '--plasma-combobox-new-textfield-chip-outline-size',
    /** @styleType value */
    textFieldChipWidth: '--plasma-combobox-new-textfield-chip-width',
    /** @styleType dimension */
    textFieldChipPadding: '--plasma-combobox-new-textfield-chip-padding',
    /** @styleType dimension */
    textFieldChipCloseIconSize: '--plasma-combobox-new-textfield-chip-close-icon-size',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart fontFamily */
    textFieldChipFontFamily: '--plasma-combobox-new-textfield-chip-font-family',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart fontSize */
    textFieldChipFontSize: '--plasma-combobox-new-textfield-chip-font-size',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart fontStyle */
    textFieldChipFontStyle: '--plasma-combobox-new-textfield-chip-font-style',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart fontWeight */
    textFieldChipFontWeight: '--plasma-combobox-new-textfield-chip-font-weight',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart letterSpacing */
    textFieldChipLetterSpacing: '--plasma-combobox-new-textfield-chip-letter-spacing',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart lineHeight */
    textFieldChipLineHeight: '--plasma-combobox-new-textfield-chip-line-height',
    /** @styleType dimension */
    textFieldChipClearContentMarginLeft: '--plasma-combobox-new-textfield-chip-clear-content-margin-left',
    /** @styleType dimension */
    textFieldChipClearContentMarginRight: '--plasma-combobox-new-textfield-chip-clear-content-margin-right',
    /** @styleType float */
    textFieldChipOpacityReadonly: '--plasma-combobox-new-textfield-chip-opacity-readonly',
    /** @styleType value */
    textFieldChipsFlexWrap: '--plasma-combobox-new-textfield-chips-flex-wrap',

    /** @styleType value */
    textFieldScrollableWrapperOverflow: '--plasma-combobox-new-textfield-scrollable-wrapper-overflow',
    /** @styleType dimension */
    textFieldScrollableWrapperHeight: '--plasma-combobox-new-textfield-scrollable-wrapper-height',
    /** @styleType value */
    textFieldInputContainerDisplay: '--plasma-combobox-new-textfield-input-container-display',

    /** @styleType color */
    textFieldFocusColor: '--plasma-combobox-new-textfield-focus-color',

    /** @styleType shadow */
    textFieldBoxShadow: '--plasma-select-textfield-box-shadow',
    /** @styleType shadow */
    textFieldBoxShadowSecondary: '--plasma-combobox-textfield-box-shadow-secondary',

    /** @styleType color */
    textFieldIndicatorColor: '--plasma-combobox-new-textfield-indicator-color',
    /** @styleType dimension */
    textFieldIndicatorSizeInner: '--plasma-combobox-new-textfield-indicator-size-inner',
    /** @styleType dimension */
    textFieldIndicatorSizeOuter: '--plasma-combobox-new-textfield-indicator-size-outer',
    /** @styleType dimension */
    textFieldIndicatorLabelPlacementInner: '--plasma-combobox-new-textfield-indicator-placement-inner',
    /** @styleType dimension */
    textFieldIndicatorLabelPlacementOuter: '--plasma-combobox-new-textfield-indicator-placement-outer',
    /** @styleType dimension */
    textFieldIndicatorLabelPlacementInnerRight: '--plasma-combobox-new-textfield-indicator-placement-inner-right',
    /** @styleType dimension */
    textFieldIndicatorLabelPlacementOuterRight: '--plasma-combobox-new-textfield-indicator-placement-outer-right',
    /** @styleType dimension */
    textFieldClearIndicatorLabelPlacementInner: '--plasma-combobox-new-textfield-clear-indicator-placement-inner',
    /** @styleType dimension */
    textFieldClearIndicatorLabelPlacementInnerRight:
        '--plasma-combobox-new-textfield-clear-indicator-placement-inner-right',
    /** @styleType dimension */
    textFieldClearIndicatorHintInnerRight: '--plasma-combobox-new-textfield-clear-indicator-hint-placement-inner-right',

    // Токены для EmptyState
    /** @styleType value */
    emptyStatePadding: '--plasma-combobox-new-empty-state-padding',

    /** @styleType dimension */
    labelOffset: '--plasma-combobox-label-offset',

    /** @styleType dimension */
    innerLabelGap: '--plasma-combobox-inner-label-gap',

    /** @styleType color */
    helperTextColor: '--plasma-combobox-helper-text-color',
    /** @styleType dimension */
    helperTextOffset: '--plasma-combobox-helper-text-offset',

    /** @styleType dimension */
    spinnerSize: '--plasma-combobox-spinner-size',
    /** @styleType dimension */
    spinnerSizeTight: '--plasma-combobox-spinner-size-tight',

    /** @styleType color */
    disclosureIconColor: '--plasma-combobox-disclosure-icon-color',
    /** @styleType color */
    disclosureIconColorHover: '--plasma-combobox-disclosure-icon-color-hover',
    /** @styleType dimension */
    disclosureIconSize: '--plasma-select-disclosure-icon-size',
    /** @styleType dimension */
    disclosureIconMargin: '--plasma-select-disclosure-icon-margin',

    /** @styleType dimension */
    dividerMarginTop: '--plasma-combobox-divider-margin-top',
    /** @styleType dimension */
    dividerMarginTopTight: '--plasma-combobox-divider-margin-top-tight',
    /** @styleType dimension */
    dividerMarginRight: '--plasma-combobox-divider-margin-right',
    /** @styleType dimension */
    dividerMarginBottom: '--plasma-combobox-divider-margin-bottom',
    /** @styleType dimension */
    dividerMarginBottomTight: '--plasma-combobox-divider-margin-bottom-tight',
    /** @styleType dimension */
    dividerMarginLeft: '--plasma-combobox-divider-margin-left',
    /** @styleType color */
    dividerColor: '--plasma-combobox-divider-color',
};

export const constants = {
    focusColor: '--surface-accent',
    focusSize: '0.0625rem',
    background: '--surface-solid-card',
    boxShadow: '0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04)',
    itemBackground: '--surface-clear',
    textfieldTargetColor: '--text-primary',
    textfieldOuterLabelColor: '--text-primary',
    textfieldInnerLabelColor: '--text-secondary',
    textfieldPlaceholderColor: '--text-secondary',
    textfieldBorderSize: '0.0625rem',
    opacity: '0.4',
    fontFamily: '--plasma-typo-body-xs-font-family',
    fontSize: '--plasma-typo-body-xs-font-size',
    fontStyle: '--plasma-typo-body-xs-font-style',
    fontWeight: '--plasma-typo-body-xs-font-weight',
    fontLetterSpacing: '--plasma-typo-body-xs-letter-spacing',
    fontLineHeight: '--plasma-typo-body-xs-line-height',
    cellTitleColor: '--text-primary',
    cellBackgroundColor: '--surface-clear',
};
