export const classes = {
    dropdownItemIsFocused: 'dropdown-item-is-focused',
    dropdownItemIsDisabled: 'dropdown-item-is-disabled',
    dropdownItemIsActive: 'dropdown-item-is-active',
    selectTargetArrow: 'select-target-arrow',
    arrowInverse: 'arrow-inverse',
    textfieldTarget: 'select-textfield-target',
    selectChipIsFocused: 'select-chip-is-focused',
    selectWithoutBoxShadow: 'select-without-box-shadow',
    selectSpinner: 'select-spinner',
    readOnly: 'readonly',
    singleLineMode: 'select-singleline-mode',
    emptyStateWrapper: 'select-empty-state-wrapper',
};

export const tokens = {
    /** @styleType dimension */
    borderRadius: '--plasma-select-border-radius',
    /** @styleType dimension */
    padding: '--plasma-select-padding',
    /** @styleType dimension */
    margin: '--plasma-select-margin',

    /** @styleType typography @styleProp textStyle @stylePart fontFamily */
    fontFamily: '--plasma-select-font-family',
    /** @styleType typography @styleProp textStyle @stylePart fontSize */
    fontSize: '--plasma-select-font-size',
    /** @styleType typography @styleProp textStyle @stylePart fontStyle */
    fontStyle: '--plasma-select-font-style',
    /** @styleType typography @styleProp textStyle @stylePart fontWeight */
    fontWeight: '--plasma-select-font-weight',
    /** @styleType typography @styleProp textStyle @stylePart letterSpacing */
    fontLetterSpacing: '--plasma-select-font-letter-spacing',
    /** @styleType typography @styleProp textStyle @stylePart lineHeight */
    fontLineHeight: '--plasma-select-font-line-height',

    /** @styleType color */
    dropdownBorderColor: '--plasma-select-dropdown-border-color',
    /** @styleType dimension */
    dropdownBorderWidth: '--plasma-select-dropdown-border-width',
    /** @styleType color */
    dropdownBackgroundColor: '--plasma-select-dropdown-background-color',

    /** @styleType dimension */
    itemHeight: '--plasma-select-item-height',
    /** @styleType dimension */
    itemBorderRadius: '--plasma-select-item-border-radius',
    /** @styleType dimension */
    itemPadding: '--plasma-select-item-padding',
    /** @styleType dimension */
    itemPaddingTight: '--plasma-select-item-padding-tight',
    /** @styleType dimension */
    itemIconSize: '--plasma-select-item-icon-size',
    /** @styleType dimension */
    itemIconSizeTight: '--plasma-select-item-icon-size-tight',
    /** @styleType dimension */
    itemIconMargin: '--plasma-select-item-icon-margin',
    /** @styleType color */
    itemBackgroundHover: '--plasma-select-item-background-hover',
    /** @styleType float */
    itemDisabledOpacity: '--plasma-select-item-disabled-opacity',
    /** @styleType color */
    itemDisabledColor: '--plasma-select-item-disabled-color',
    /** @styleType color */
    itemIconColor: '--plasma-select-item-icon-color',
    /** @styleType dimension */
    itemGap: '--plasma-select-item-gap',
    /** @styleType dimension */
    itemTreeOffsetWidth: '--plasma-select-item-tree-offset-width',

    /** @styleType dimension */
    cellPadding: '--plasma-select-cell-padding',
    /** @styleType dimension */
    cellPaddingLeftContent: '--plasma-select-cell-padding-left-content',
    /** @styleType dimension */
    cellPaddingContent: '--plasma-select-cell-padding-content',
    /** @styleType dimension */
    cellPaddingRightContent: '--plasma-select-cell-padding-right-content',
    /** @styleType dimension */
    cellTextboxGap: '--plasma-select-cell-textbox-gap',
    /** @styleType dimension */
    cellGap: '--plasma-select-cell-gap',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontFamily */
    cellTitleFontFamily: '--plasma-select-cell-title-font-family',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontSize */
    cellTitleFontSize: '--plasma-select-cell-title-font-size',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontStyle */
    cellTitleFontStyle: '--plasma-select-cell-title-font-style',
    /** @styleType typography @styleProp cellTitleStyle @stylePart fontWeight */
    cellTitleFontWeight: '--plasma-select-cell-title-font-weight',
    /** @styleType typography @styleProp cellTitleStyle @stylePart letterSpacing */
    cellTitleLetterSpacing: '--plasma-select-cell-title-letter-spacing',
    /** @styleType typography @styleProp cellTitleStyle @stylePart lineHeight */
    cellTitleLineHeight: '--plasma-select-cell-title-line-height',

    /** @styleType dimension */
    checkboxTriggerSize: '--plasma-select-checkbox-trigger-size',
    /** @styleType dimension */
    checkboxTriggerSizeTight: '--plasma-select-checkbox-trigger-size-tight',
    /** @styleType shape */
    checkboxTriggerBorderRadius: '--plasma-select-checkbox-trigger-border-radius',
    /** @styleType dimension */
    checkboxTriggerBorderRadiusTight: '--plasma-select-checkbox-trigger-border-radius-tight',
    /** @styleType color */
    checkboxFillColor: '--plasma-select-checkbox-fill-color',
    /** @styleType color */
    checkboxIconColor: '--plasma-select-checkbox-icon-color',
    /** @styleType color */
    checkboxTriggerBorderColor: '--plasma-select-checkbox-trigger-border-color',
    /** @styleType color */
    checkboxTriggerBorderCheckedColor: '--plasma-select-checkbox-trigger-border-checked-color',
    /** @styleType dimension */
    checkboxTriggerBorderWidth: '--plasma-select-checkbox-trigger-border-width',

    /** @styleType dimension */
    indicatorSize: '--plasma-select-indicator-size',

    /** @styleType dimension */
    targetHeight: '--plasma-select-target-height',

    // Токены для Button
    /** @styleType color */
    buttonColor: '--plasma-select-button-color',
    /** @styleType color */
    buttonColorHover: '--plasma-select-button-color-hover',
    /** @styleType color */
    buttonColorActive: '--plasma-select-button-color-active',
    /** @styleType color */
    buttonArrowColor: '--plasma-select-button-arrow-color',
    /** @styleType color */
    buttonArrowColorHover: '--plasma-select-button-arrow-color-hover',
    /** @styleType color */
    buttonArrowColorActive: '--plasma-select-button-arrow-color-active',
    /** @styleType dimension */
    buttonArrowMargin: '--plasma-select-button-arrow-margin',
    /** @styleType color */
    buttonBackgroundColor: '--plasma-select-button-background-color',
    /** @styleType color */
    buttonBackgroundColorHover: '--plasma-select-button-background-color-hover',
    /** @styleType color */
    buttonBackgroundColorActive: '--plasma-select-button-background-color-active',
    /** @styleType dimension */
    buttonPadding: '--plasma-select-button-padding',

    // Токены для TextField
    /** @styleType color */
    textFieldColor: '--plasma-select-textfield-color',

    /** @styleType color */
    textFieldBackgroundColor: '--plasma-select-textfield-background-color',
    /** @styleType color @styleProp textFieldBackgroundColor @styleState hovered */
    textFieldBackgroundColorHover: '--plasma-select-textfield-background-color-hover',
    /** @styleType color */
    textFieldBackgroundColorFocus: '--plasma-select-textfield-background-color-focus',

    /** @styleType color */
    textFieldBorderColor: '--plasma-select-textfield-border-color',
    /** @styleType color @styleProp textFieldBorderColor @styleState hovered */
    textFieldBorderColorHover: '--plasma-select-textfield-border-color-hover',
    /** @styleType color @styleProp textFieldBorderColor @styleState focused */
    textFieldBorderColorFocus: '--plasma-select-textfield-border-color-focus',

    /** @styleType color */
    textFieldPlaceholderColor: '--plasma-select-textfield-placeholder-color',
    /** @styleType color */
    textFieldPlaceholderColorFocus: '--plasma-select-textfield-placeholder-color-focus',

    /** Цвета для read-only состояния */
    /** @styleType color */
    textFieldColorReadOnly: '--plasma-select-textfield-color-readonly',
    /** @styleType color */
    textFieldBackgroundColorReadOnly: '--plasma-select-textfield-bg-color-readonly',
    /** @styleType color */
    textFieldBorderColorReadOnly: '--plasma-select-textfield-border-color-readonly',
    /** @styleType color */
    textFieldPlaceholderColorReadOnly: '--plasma-select-textfield__placeholder-color-readonly',

    /** @styleType dimension */
    textFieldHeight: '--plasma-select-textfield-height',
    /** @styleType dimension */
    textFieldBorderWidth: '--plasma-select-textfield-border-width',
    /** @styleType dimension */
    textFieldBorderRadius: '--plasma-select-textfield-border-radius',

    /** @styleType dimension */
    textFieldPadding: '--plasma-select-textfield-padding',
    /** @styleType dimension */
    textFieldPaddingWithChips: '--plasma-select-textfield-padding-with-chips',

    /** @styleType dimension */
    textFieldLeftContentMargin: '--plasma-select-textfield-left-content-margin',
    /** @styleType dimension */
    textFieldRightContentMargin: '--plasma-select-textfield-right-content-margin',
    /** @styleType dimension */
    textFieldRightContentWithHintMargin: '--plasma-select-textfield-right-content-with-hint-margin',

    /** @styleType dimension */
    textFieldContentRightWrapperGap: '--plasma-select-textfield-content-right-wrapper-gap',
    /** @styleType dimension */
    textFieldContentRightWrapperMargin: '--plasma-select-textfield-content-right-wrapper-margin',

    /** @styleType typography @styleProp textFieldStyle @stylePart fontFamily */
    textFieldFontFamily: '--plasma-select-textfield-font-family',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontStyle */
    textFieldFontStyle: '--plasma-select-textfield-font-style',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontSize */
    textFieldFontSize: '--plasma-select-textfield-font-size',
    /** @styleType typography @styleProp textFieldStyle @stylePart fontWeight */
    textFieldFontWeight: '--plasma-select-textfield-font-weight',
    /** @styleType typography @styleProp textFieldStyle @stylePart letterSpacing */
    textFieldLetterSpacing: '--plasma-select-textfield-letter-spacing',
    /** @styleType typography @styleProp textFieldStyle @stylePart lineHeight */
    textFieldLineHeight: '--plasma-select-textfield-line-height',

    /** @styleType color */
    textFieldContentSlotColor: '--plasma-select-textfield-content-slot-color',
    /** @styleType color */
    textFieldContentSlotColorHover: '--plasma-select-textfield-content-slot-color-hover',
    /** @styleType color */
    textFieldContentSlotColorActive: '--plasma-select-textfield-content-slot-color-active',

    /** @styleType color */
    textFieldContentSlotRightColor: '--plasma-select-textfield-content-right-slot-color',
    /** @styleType color @styleProp textFieldContentSlotRightColor @styleState hovered */
    textFieldContentSlotRightColorHover: '--plasma-select-textfield-content-right-slot-color-hover',
    /** @styleType color @styleProp textFieldContentSlotRightColor @styleState pressed */
    textFieldContentSlotRightColorActive: '--plasma-select-textfield-content-right-slot-color-active',

    /** @styleType color */
    textFieldLabelColor: '--plasma-select-textfield-label-color',
    /** @styleType color */
    textFieldLabelColorReadOnly: '--plasma-select-textfield__label-color-readonly',
    /** @styleType dimension */
    textFieldLabelOffset: '--plasma-select-textfield-label-offset',

    /** @styleType typography @styleProp textFieldLabelStyle @stylePart fontFamily */
    textFieldLabelFontFamily: '--plasma-select-textfield-label-font-family',
    /** @styleType typography @styleProp textFieldLabelStyle @stylePart fontStyle */
    textFieldLabelFontStyle: '--plasma-select-textfield-label-font-style',
    /** @styleType typography @styleProp textFieldLabelStyle @stylePart fontSize */
    textFieldLabelFontSize: '--plasma-select-textfield-label-font-size',
    /** @styleType typography @styleProp textFieldLabelStyle @stylePart fontWeight */
    textFieldLabelFontWeight: '--plasma-select-textfield-label-font-weight',
    /** @styleType typography @styleProp textFieldLabelStyle @stylePart letterSpacing */
    textFieldLabelLetterSpacing: '--plasma-select-textfield-label-letter-spacing',
    /** @styleType typography @styleProp textFieldLabelStyle @stylePart lineHeight */
    textFieldLabelLineHeight: '--plasma-select-textfield-label-line-height',

    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart fontFamily */
    textFieldLabelInnerFontFamily: '--plasma-select-textfield-placement-inner-label-font-family',
    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart fontStyle */
    textFieldLabelInnerFontStyle: '--plasma-select-textfield-placement-inner-label-font-style',
    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart fontSize */
    textFieldLabelInnerFontSize: '--plasma-select-textfield-placement-inner-label-font-size',
    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart fontWeight */
    textFieldLabelInnerFontWeight: '--plasma-select-textfield-placement-inner-label-font-weight',
    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart letterSpacing */
    textFieldLabelInnerLetterSpacing: '--plasma-select-textfield-placement-inner-label-letter-spacing',
    /** @styleType typography @styleProp textFieldLabelInnerStyle @stylePart lineHeight */
    textFieldLabelInnerLineHeight: '--plasma-select-textfield-placement-inner-label-line-height',

    /** @styleType dimension */
    textFieldLabelInnerPadding: '--plasma-select-textfield-placement-inner-label-padding',
    /** @styleType dimension */
    textFieldContentLabelInnerPadding: '--plasma-select-textfield-placement-inner-content-padding',

    /** @styleType color */
    textFieldTitleCaptionColor: '--plasma-select-textfield-title-caption-color',
    /** @styleType color */
    textFieldTitleCaptionColorReadOnly: '--plasma-select-textfield__title-caption-color-readonly',
    /** @styleType dimension */
    textFieldTitleCaptionInnerLabelOffset: '--plasma-select-textfield-title-caption-label-inner-offset',

    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart fontFamily */
    textFieldTitleCaptionFontFamily: '--plasma-select-textfield-title-caption-font-family',
    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart fontStyle */
    textFieldTitleCaptionFontStyle: '--plasma-select-textfield-title-caption-font-style',
    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart fontSize */
    textFieldTitleCaptionFontSize: '--plasma-select-textfield-title-caption-font-size',
    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart fontWeight */
    textFieldTitleCaptionFontWeight: '--plasma-select-textfield-title-caption-font-weight',
    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart letterSpacing */
    textFieldTitleCaptionLetterSpacing: '--plasma-select-textfield-title-caption-letter-spacing',
    /** @styleType typography @styleProp textFieldTitleCaptionTypography @stylePart lineHeight */
    textFieldTitleCaptionLineHeight: '--plasma-select-textfield-title-caption-line-height',

    /** @styleType color */
    textFieldLeftHelperColor: '--plasma-select-textfield-left-helper-color',
    /** @styleType color @styleProp textFieldLeftHelperColor @styleState focused */
    textFieldLeftHelperColorFocus: '--plasma-select-textfield-left-helper-color-focus',
    /** @styleType color */
    textFieldLeftHelperColorReadOnly: '--plasma-select-textfield__left-helper-color-readonly',
    /** @styleType dimension */
    textFieldLeftHelperOffset: '--plasma-select-textfield-left-helper-offset',

    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart fontFamily */
    textFieldLeftHelperFontFamily: '--plasma-select-textfield-left-helper-font-family',
    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart fontStyle */
    textFieldLeftHelperFontStyle: '--plasma-select-textfield-left-helper-font-style',
    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart fontSize */
    textFieldLeftHelperFontSize: '--plasma-select-textfield-left-helper-font-size',
    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart fontWeight */
    textFieldLeftHelperFontWeight: '--plasma-select-textfield-left-helper-font-weight',
    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart letterSpacing */
    textFieldLeftHelperLetterSpacing: '--plasma-select-textfield-left-helper-letter-spacing',
    /** @styleType typography @styleProp textFieldLeftHelperStyle @stylePart lineHeight */
    textFieldLeftHelperLineHeight: '--plasma-select-textfield-left-helper-line-height',

    /** @styleType color */
    textFieldTextBeforeColor: '--plasma-select-textfield-before-text-color',
    /** @styleType color */
    textFieldTextAfterColor: '--plasma-select-textfield-after-text-color',
    /** @styleType dimension */
    textFieldTextBeforeMargin: '--plasma-select-textfield-before-text-margin',
    /** @styleType dimension */
    textFieldTextAfterMargin: '--plasma-select-textfield-after-text-margin',

    /** @styleType float */
    textFieldDisabledOpacity: '--plasma-select-textfield-disabled-opacity',
    /** @styleType float */
    textFieldDisabledBackgroundOpacity: '--plasma-select-textfield-disabled-background-opacity',
    /** @styleType float */
    textFieldDisabledInnerContentOpacity: '--plasma-select-textfield-disabled-inner-content-opacity',
    /** @styleType float */
    textFieldReadOnlyOpacity: '--plasma-select-textfield-readonly-opacity',

    /** Токены для tooltip */
    /** @styleType dimension */
    textFieldHintCustomIconTargetSize: '--plasma-select-textfield__hint-custom-icon-target-size',
    /** @styleType value */
    textFieldHintMargin: '--plasma-select-textfield__hint-margin',
    /** @styleType dimension */
    textFieldHintTargetSize: '--plasma-select-textfield__hint-target-size',
    /** @styleType color */
    textFieldHintIconColor: '--plasma-select-textfield__hint-icon-color',
    /** @styleType dimension */
    textFieldHintInnerLabelPlacementOffset: '--plasma-select-textfield__hint-inner-label-placement-offset',
    /** @styleType dimension */
    textFieldClearHintInnerLabelPlacementOffset: '--plasma-select-textfield__clear-hint-inner-label-placement-offset',

    /** @styleType color */
    textFieldTooltipBackgroundColor: '--plasma-select-textfield__tooltip-background-color',
    /** @styleType shadow */
    textFieldTooltipBoxShadow: '--plasma-select-textfield__tooltip-box-shadow',
    /** @styleType color */
    textFieldTooltipColor: '--plasma-select-textfield__tooltip-color',

    /** @styleType dimension */
    textFieldTooltipPaddingTop: '--plasma-select-textfield__tooltip-padding-top',
    /** @styleType dimension */
    textFieldTooltipPaddingRight: '--plasma-select-textfield__tooltip-padding-right',
    /** @styleType dimension */
    textFieldTooltipPaddingBottom: '--plasma-select-textfield__tooltip-padding-bottom',
    /** @styleType dimension */
    textFieldTooltipPaddingLeft: '--plasma-select-textfield__tooltip-padding-left',
    /** @styleType dimension */
    textFieldTooltipMinHeight: '--plasma-select-textfield__tooltip-min-height',
    /** @styleType dimension */
    textFieldTooltipBorderRadius: '--plasma-select-textfield__tooltip-border-radius',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart fontFamily */
    textFieldTooltipTextFontFamily: '--plasma-select-textfield__tooltip-text-font-family',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart fontSize */
    textFieldTooltipTextFontSize: '--plasma-select-textfield__tooltip-text-font-size',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart fontStyle */
    textFieldTooltipTextFontStyle: '--plasma-select-textfield__tooltip-text-font-style',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart fontWeight */
    textFieldTooltipTextFontWeight: '--plasma-select-textfield__tooltip-text-font-weight',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart letterSpacing */
    textFieldTooltipTextFontLetterSpacing: '--plasma-select-textfield__tooltip-text-font-letter-spacing',
    /** @styleType typography @styleProp textFieldTooltipTextStyle @stylePart lineHeight */
    textFieldTooltipTextFontLineHeight: '--plasma-select-textfield__tooltip-text-font-line-height',
    /** @styleType dimension */
    textFieldTooltipContentLeftMargin: '--plasma-select-textfield__tooltip-content-left-margin',
    /** @styleType dimension */
    textFieldTooltipArrowMaskWidth: '--plasma-select-textfield__tooltip-arrow-mask-width',
    /** @styleType dimension */
    textFieldTooltipArrowMaskHeight: '--plasma-select-textfield__tooltip-arrow-mask-height',
    /** @styleType value */
    textFieldTooltipArrowMaskImage: '--plasma-select-textfield__tooltip-arrow-mask-image',
    /** @styleType dimension */
    textFieldTooltipArrowHeight: '--plasma-select-textfield__tooltip-arrow-height',
    /** @styleType dimension */
    textFieldTooltipArrowEdgeMargin: '--plasma-select-textfield__tooltip-arrow-edge-margin',
    /** @styleType color */
    textFieldTooltipArrowBackground: '--plasma-select-textfield__tooltip-arrow-background',

    /** @styleType dimension */
    textFieldChipHeight: '--plasma-select-textfield-chip-height',
    /** @styleType dimension */
    textFieldChipBorderRadius: '--plasma-select-textfield-chip-border-radius',
    /** @styleType dimension */
    textFieldChipGap: '--plasma-select-textfield-chip-gap',
    /** @styleType color */
    textFieldChipBackground: '--plasma-select-textfield--chip-background',
    /** @styleType color */
    textFieldChipColor: '--plasma-select-textfield-chip-color',
    /** @styleType color */
    textFieldChipBackgroundHover: '--plasma-select-textfield-chip-background-hover',
    /** @styleType color */
    textFieldChipColorHover: '--plasma-select-textfield-chip-color-hover',
    /** @styleType color */
    textFieldChipBackgroundReadOnly: '--plasma-select-textfield__chip-background-readonly',
    /** @styleType color */
    textFieldChipColorReadOnly: '--plasma-select-textfield__chip-color-readonly',
    /** @styleType color */
    textFieldChipBackgroundReadOnlyHover: '--plasma-select-textfield__chip-background-readonly-hover',
    /** @styleType color */
    textFieldChipColorReadOnlyHover: '--plasma-select-textfield__chip-color-readonly-hover',
    /** @styleType color @styleProp textFieldChipBackground @styleState pressed */
    textFieldChipBackgroundActive: '--plasma-select-textfield-chip-background-active',
    /** @styleType color @styleProp textFieldChipColor @styleState pressed */
    textFieldChipColorActive: '--plasma-select-textfield-chip-color-active',
    /** @styleType color */
    textFieldChipCloseIconColor: '--plasma-select-textfield-chip-close-icons-color',
    /** @styleType color */
    textFieldChipCloseIconColorHover: '--plasma-select-textfield-chip-close-icons-color-hover',
    /** @styleType color */
    textFieldChipCloseIconColorReadonly: '--plasma-select-textfield-chip-close-icons-color-readonly',
    /** @styleType dimension */
    textFieldChipOutlineSize: '--plasma-select-textfield-chip-outline-size',
    /** @styleType value */
    textFieldChipWidth: '--plasma-select-textfield-chip-width',
    /** @styleType dimension */
    textFieldChipPadding: '--plasma-select-textfield-chip-padding',
    /** @styleType dimension */
    textFieldChipCloseIconSize: '--plasma-select-textfield-chip-close-icon-size',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart fontFamily */
    textFieldChipFontFamily: '--plasma-select-textfield-chip-font-family',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart fontSize */
    textFieldChipFontSize: '--plasma-select-textfield-chip-font-size',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart fontStyle */
    textFieldChipFontStyle: '--plasma-select-textfield-chip-font-style',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart fontWeight */
    textFieldChipFontWeight: '--plasma-select-textfield-chip-font-weight',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart letterSpacing */
    textFieldChipLetterSpacing: '--plasma-select-textfield-chip-letter-spacing',
    /** @styleType typography @styleProp textFieldChipStyle @stylePart lineHeight */
    textFieldChipLineHeight: '--plasma-select-textfield-chip-line-height',
    /** @styleType dimension */
    textFieldChipClearContentMarginLeft: '--plasma-select-textfield-chip-clear-content-margin-left',
    /** @styleType dimension */
    textFieldChipClearContentMarginRight: '--plasma-select-textfield-chip-clear-content-margin-right',
    /** @styleType float */
    textFieldChipOpacityReadonly: '--plasma-select-textfield__chip-opacity-readonly',
    /** @styleType value */
    textFieldChipsFlexWrap: '--plasma-select-textfield-chips-flex-wrap',

    /** @styleType value */
    textFieldScrollableWrapperOverflow: '--plasma-select-textfield-scrollable-wrapper-overflow',
    /** @styleType dimension */
    textFieldScrollableWrapperHeight: '--plasma-select-textfield-scrollable-wrapper-height',
    /** @styleType value */
    textFieldInputContainerDisplay: '--plasma-select-textfield-input-container-display',

    /** @styleType color */
    textFieldIndicatorColor: '--plasma-select-new-textfield-indicator-color',
    /** @styleType dimension */
    textFieldIndicatorSizeInner: '--plasma-select-new-textfield-indicator-size-inner',
    /** @styleType dimension */
    textFieldIndicatorSizeOuter: '--plasma-select-new-textfield-indicator-size-outer',
    /** @styleType dimension */
    textFieldIndicatorLabelPlacementInner: '--plasma-select-new-textfield-indicator-placement-inner',
    /** @styleType dimension */
    textFieldIndicatorLabelPlacementOuter: '--plasma-select-new-textfield-indicator-placement-outer',
    /** @styleType dimension */
    textFieldIndicatorLabelPlacementInnerRight: '--plasma-select-new-textfield-indicator-placement-inner-right',
    /** @styleType dimension */
    textFieldIndicatorLabelPlacementOuterRight: '--plasma-select-new-textfield-indicator-placement-outer-right',
    /** @styleType dimension */
    textFieldClearIndicatorLabelPlacementInner: '--plasma-select-new-textfield-clear-indicator-placement-inner',
    /** @styleType dimension */
    textFieldClearIndicatorLabelPlacementInnerRight:
        '--plasma-select-new-textfield-clear-indicator-placement-inner-right',
    /** @styleType dimension */
    textFieldClearIndicatorHintInnerRight: '--plasma-select-new-textfield-clear-indicator-hint-placement-inner-right',
    /** @styleType color */
    textFieldOptionalColor: '--plasma-select-new-textfield-optional-color',

    /** @styleType color */
    textFieldFocusColor: '--plasma-select-textfield-focus-color',

    /** @styleType shadow */
    textFieldBoxShadow: '--plasma-select-textfield-box-shadow',
    /** @styleType shadow */
    textFieldBoxShadowSecondary: '--plasma-select-textfield-box-shadow-secondary',

    /** @styleType color */
    disclosureIconColor: '--plasma-select-disclosure-icon-color',
    /** @styleType color */
    disclosureIconColorHover: '--plasma-select-disclosure-icon-color-hover',

    /** @styleType color */
    disclosureNestedIconColor: '--plasma-select-disclosure-nested-icon-color',
    /** @styleType color @styleProp disclosureNestedIconColor @styleState hovered */
    disclosureNestedIconColorHover: '--plasma-select-disclosure-nested-icon-color-hover',

    /** @styleType dimension */
    disclosureIconSize: '--plasma-select-disclosure-icon-size',
    /** @styleType dimension */
    disclosureIconMargin: '--plasma-select-disclosure-icon-margin',
    /** @styleType float */
    disclosureIconOpacityReadOnly: '--plasma-select-disclosure-icon-opacity-readonly',

    /** @styleType dimension */
    dividerMarginTop: '--plasma-select-divider-margin-top',
    /** @styleType dimension */
    dividerMarginTopTight: '--plasma-select-divider-margin-top-tight',
    /** @styleType dimension */
    dividerMarginRight: '--plasma-select-divider-margin-right',
    /** @styleType dimension */
    dividerMarginBottom: '--plasma-select-divider-margin-bottom',
    /** @styleType dimension */
    dividerMarginBottomTight: '--plasma-select-divider-margin-bottom-tight',
    /** @styleType dimension */
    dividerMarginLeft: '--plasma-select-divider-margin-left',
    /** @styleType color */
    dividerColor: '--plasma-select-divider-color',

    // Токены для EmptyState
    /** @styleType value */
    emptyStatePadding: '--plasma-select-empty-state-padding',
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
