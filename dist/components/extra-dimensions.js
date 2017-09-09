"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const ExtraDimensions = react_native_1.NativeModules.MaoKitsExtraDimensionsAndroid;
function getScreenHeight() {
    return ExtraDimensions.SCREEN_HEIGHT;
}
exports.getScreenHeight = getScreenHeight;
function getScreenWidth() {
    return ExtraDimensions.SCREEN_WIDTH;
}
exports.getScreenWidth = getScreenWidth;
function getSmartBarHeight() {
    return ExtraDimensions.SMART_BAR_HEIGHT;
}
exports.getSmartBarHeight = getSmartBarHeight;
function getSoftMenuBarHeight() {
    return ExtraDimensions.SOFT_MENU_BAR_HEIGHT;
}
exports.getSoftMenuBarHeight = getSoftMenuBarHeight;
function getStatusBarHeight() {
    return ExtraDimensions.STATUS_BAR_HEIGHT;
}
exports.getStatusBarHeight = getStatusBarHeight;
function getAppClientWidth() {
    return getScreenWidth();
}
exports.getAppClientWidth = getAppClientWidth;
function getAppClientHeight() {
    return (getScreenHeight() -
        getSmartBarHeight() -
        getStatusBarHeight() -
        getSoftMenuBarHeight());
}
exports.getAppClientHeight = getAppClientHeight;
exports.default = {
    getScreenHeight,
    getScreenWidth,
    getSmartBarHeight,
    getSoftMenuBarHeight,
    getStatusBarHeight,
    getAppClientWidth,
    getAppClientHeight
};
