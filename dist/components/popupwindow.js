"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const types_1 = require("./types");
const MaoKitsPopupWindowAndroid = react_native_1.UIManager.MaoKitsPopupWindowAndroid;
const Commands = MaoKitsPopupWindowAndroid.Commands;
const COMMAND_SHOW_POPUP_AS_DROPDOWN = Commands.showPopupAsDropdown;
const COMMAND_SHOW_POPUP_AS_LOCALTION = Commands.showPopupAsLocation;
const COMMAND_HIDE_POPUP = Commands.hidePopup;
class PopupWindow extends react_1.PureComponent {
    render() {
        return (React.createElement(RCTPopupWindow, Object.assign({}, this.props, { style: styles.container }), this.props.children));
    }
    showAsDropdown(view, x = 0, y = 0) {
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(this), COMMAND_SHOW_POPUP_AS_DROPDOWN, [react_native_1.findNodeHandle(view), x, y]);
    }
    showAsLocation(gravity, x = 0, y = 0) {
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(this), COMMAND_SHOW_POPUP_AS_LOCALTION, [gravity, x, y]);
    }
    hide() {
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(this), COMMAND_HIDE_POPUP, []);
    }
}
PopupWindow.propTypes = Object.assign({
    focusable: react_1.PropTypes.bool,
    outsideTouchable: react_1.PropTypes.bool,
    touchable: react_1.PropTypes.bool
}, types_1.ViewGroupProperties);
exports.default = PopupWindow;
const RCTPopupWindow = react_native_1.requireNativeComponent('MaoKitsPopupWindowAndroid', PopupWindow, {
    nativeOnly: {}
});
const styles = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        overflow: 'scroll',
        opacity: 0,
        height: 0,
        width: 999,
        top: -9999999,
        backgroundColor: 'transparent'
    }
});
