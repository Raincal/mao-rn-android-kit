"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const layout_1 = require("./layout");
const types_1 = require("./types");
const MaoKitsCoordinatorLayoutManager = react_native_1.UIManager.MaoKitsCoordinatorLayoutAndroid;
const COMMAND_SET_SCROLLING_VIEW_BEHAVIOR = MaoKitsCoordinatorLayoutManager.Commands.setScrollingViewBehavior;
const COMMAND_RESET_BEHOVIOR = MaoKitsCoordinatorLayoutManager.Commands.resetBehavior;
class CoordinatorLayout extends react_1.PureComponent {
    componentDidMount() {
        layout_1.default.setChildrenLayoutParams(this, MaoKitsCoordinatorLayoutManager);
    }
    componentDidUpdate() {
        layout_1.default.setChildrenLayoutParams(this, MaoKitsCoordinatorLayoutManager);
    }
    render() {
        return (React.createElement(RCTCoordinatorLayout, Object.assign({}, this.props), this.props.children));
    }
    setScrollingViewBehavior(view) {
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(this), COMMAND_SET_SCROLLING_VIEW_BEHAVIOR, [react_native_1.findNodeHandle(view)]);
    }
    resetBehavior(appbar, nestedScrollEnabled = true, smoothly = false) {
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(this), COMMAND_RESET_BEHOVIOR, [react_native_1.findNodeHandle(appbar), nestedScrollEnabled, smoothly]);
    }
}
CoordinatorLayout.propTypes = Object.assign({}, types_1.ViewGroupProperties);
exports.default = CoordinatorLayout;
const RCTCoordinatorLayout = react_native_1.requireNativeComponent('MaoKitsCoordinatorLayoutAndroid', CoordinatorLayout, {
    nativeOnly: {}
});
