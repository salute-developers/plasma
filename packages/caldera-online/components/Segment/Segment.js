"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SegmentItem = exports.SegmentGroup = void 0;
Object.defineProperty(exports, "SegmentProvider", {
  enumerable: true,
  get: function get() {
    return _styledComponents.SegmentProvider;
  }
});
Object.defineProperty(exports, "useSegment", {
  enumerable: true,
  get: function get() {
    return _styledComponents.useSegment;
  }
});
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _SegmentItem = /*#__PURE__*/require("./SegmentItem.config");
var _SegmentGroup = /*#__PURE__*/require("./SegmentGroup.config");
/**
 * Провайдер контекста для группы сегментов и хук для доступа к контексту.
 */

var mergedSegmentItemConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.segmentItemConfig, _SegmentItem.config);
var mergedSegmentGroupConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.segmentGroupConfig, _SegmentGroup.config);

/**
 * Компонент группы сегментов.
 */
var SegmentGroup = exports.SegmentGroup = /*#__PURE__*/(0, _styledComponents.component)(mergedSegmentGroupConfig);
/**
 * Компонент сегмента.
 */
var SegmentItem = exports.SegmentItem = /*#__PURE__*/(0, _styledComponents.component)(mergedSegmentItemConfig);