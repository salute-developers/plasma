export const STORY_RENDER_TIMEOUT = 2 * 60 * 1000;

export const storybookRangeUrl = {
    default: '/iframe.html?args=&id=controls-range--default&viewMode=story',
    disabled: '/iframe.html?args=disabled:!true&id=controls-range--default&viewMode=story',
    readonly: '/iframe.html?args=readOnly:!true&id=controls-range--default&viewMode=story',
    sizeM_contentLeftDisabled:
        '/iframe.html?args=size:m;enableContentLeft:!false&id=controls-range--default&viewMode=story',
    sizeS_contentRightDisabled:
        '/iframe.html?args=size:s;enableContentRight:!false&id=controls-range--default&viewMode=story',
    sizeXS_dividerVariantNone:
        '/iframe.html?args=firstTextfieldTextBefore:;secondTextfieldTextBefore:;dividerVariant:none&id=controls-range--default&viewMode=story',
    firstTextfieldContentLeftEnabled_dividerVariantIcon:
        '/iframe.html?args=dividerVariant:icon;enableFirstTextfieldContentLeft:!true&id=controls-range--default&viewMode=story',
    firstTextfieldContentRightEnabled_secondTextfieldContentLeftEnabled:
        '/iframe.html?args=enableFirstTextfieldContentRight:!true;enableSecondTextfieldContentLeft:!true&id=controls-range--default&viewMode=story',
    secondTextfieldContentRightEnabled:
        '/iframe.html?args=enableSecondTextfieldContentRight:!true&id=controls-range--default&viewMode=story',
    firstValueError_secondValueSuccess:
        '/iframe.html?args=firstValueError:!true;secondValueSuccess:!true&id=controls-range--default&viewMode=story',
    firstValueSuccess_secondValueError:
        '/iframe.html?args=secondValueError:!true;firstValueSuccess:!true&id=controls-range--default&viewMode=story',
    firstValueSuccess_secondValueSuccess:
        '/iframe.html?args=firstValueSuccess:!true;secondValueSuccess:!true&id=controls-range--default&viewMode=story',
    firstValueError_secondValueError:
        '/iframe.html?args=firstValueError:!true;secondValueError:!true&id=controls-range--default&viewMode=story',
    demo: '/iframe.html?args=&id=controls-range--demo&viewMode=story',
};

export const storybookButtonUrl = {
    default: '/iframe.html?args=&id=controls-button--default&viewMode=story',
    sizeL_accent: '/iframe.html?args=view:accent;size:l&id=controls-button--default&viewMode=story',
    sizeS_success: '/iframe.html?args=view:success;size:s&id=controls-button--default&viewMode=story',
    sizeXS_warning: '/iframe.html?args=view:warning;size:xs&id=controls-button--default&viewMode=story',
    sizeXXS_critical: '/iframe.html?args=view:critical;size:xxs&id=controls-button--default&viewMode=story',
    loader_dark: '/iframe.html?args=view:dark;isLoading:!true&id=controls-button--default&viewMode=story',
    light: '/iframe.html?args=view:light&id=controls-button--default&viewMode=story',
    square: '/iframe.html?args=square:!true&id=controls-button--default&viewMode=story',
    stretch_filled: '/iframe.html?args=stretching:filled&id=controls-button--default&viewMode=story',
    disabled: '/iframe.html?args=disabled:!true&id=controls-button--default&viewMode=story',
    stretch_fixed: '/iframe.html?args=stretching:fixed&id=controls-button--default&viewMode=story',
    enableContentLeft_enableContentRight:
        '/iframe.html?args=enableContentLeft:!true;enableContentRight:!true&id=controls-button--default&viewMode=story',
    square_enableContentLeft:
        '/iframe.html?args=square:!true;enableContentLeft:!true&id=controls-button--default&viewMode=story',
    square_enableContentRight:
        '/iframe.html?args=square:!true;enableContentRight:!true&id=controls-button--default&viewMode=story',
    square_clear: '/iframe.html?args=pin:square-clear&id=controls-button--default&viewMode=story',
    clear_square: '/iframe.html?args=pin:clear-square&id=controls-button--default&viewMode=story',
    clear_clear: '/iframe.html?args=pin:clear-clear&id=controls-button--default&viewMode=story',
    clear_circle: '/iframe.html?args=pin:clear-circle&id=controls-button--default&viewMode=story',
    circle_clear: '/iframe.html?args=pin:circle-clear&id=controls-button--default&viewMode=story',
    circle_circle: '/iframe.html?args=pin:circle-circle&id=controls-button--default&viewMode=story',
};
