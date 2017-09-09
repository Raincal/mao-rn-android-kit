"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const LayoutParams = react_native_1.NativeModules.MaoKitsLayoutParamsAndroid;
exports.default = {
    get MATCH_PARENT() {
        return LayoutParams.MATCH_PARENT;
    },
    get WRAP_CONTENT() {
        return LayoutParams.WRAP_CONTENT;
    }
};
