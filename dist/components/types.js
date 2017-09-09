"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
exports.LayoutParams = {
    width: react_1.PropTypes.number,
    height: react_1.PropTypes.number
};
exports.ViewGroupProperties = Object.assign({}, react_native_1.View.propTypes, {
    layoutParams: react_1.PropTypes.shape(exports.LayoutParams),
    fitsSystemWindows: react_1.PropTypes.bool
});
exports.AppBarViewProperties = Object.assign({}, exports.ViewGroupProperties, {
    layoutParams: react_1.PropTypes.shape(Object.assign({}, exports.LayoutParams, {
        scrollFlags: react_1.PropTypes.number
    }))
});
