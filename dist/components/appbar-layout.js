"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const layout_1 = require("./layout");
const types_1 = require("./types");
const MaoKitsAppBarLayoutAndroidManager = react_native_1.UIManager.MaoKitsAppBarLayoutAndroid;
const Constants = MaoKitsAppBarLayoutAndroidManager.Constants;
const DEFAULT_PROPS = {
    scrollFlags: 0
};
class AppBarLayout extends react_1.PureComponent {
    componentDidMount() {
        layout_1.default.setChildrenLayoutParams(this, MaoKitsAppBarLayoutAndroidManager, DEFAULT_PROPS);
    }
    componentDidUpdate() {
        layout_1.default.setChildrenLayoutParams(this, MaoKitsAppBarLayoutAndroidManager, DEFAULT_PROPS);
    }
    render() {
        return (React.createElement(RCTAppBarLayout, Object.assign({}, this.props), this.props.children));
    }
}
AppBarLayout.SCROLL_FLAG_ENTRY_ALWAYS = Constants.SCROLL_FLAG_ENTRY_ALWAYS;
AppBarLayout.SCROLL_FLAG_ENTRY_ALWAYS_COLLAPSED = Constants.SCROLL_FLAG_ENTRY_ALWAYS_COLLAPSED;
AppBarLayout.SCROLL_FLAG_EXIT_UNTIL_COLLAPSED = Constants.SCROLL_FLAG_EXIT_UNTIL_COLLAPSED;
AppBarLayout.SCROLL_FLAG_SCROLL = Constants.SCROLL_FLAG_SCROLL;
AppBarLayout.SCROLL_FLAG_SNAP = Constants.SCROLL_FLAG_SNAP;
AppBarLayout.propTypes = Object.assign({}, types_1.AppBarViewProperties);
exports.default = AppBarLayout;
const RCTAppBarLayout = react_native_1.requireNativeComponent('MaoKitsAppBarLayoutAndroid', AppBarLayout, {
    nativeOnly: {}
});
