"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const Commands = react_native_1.UIManager.MaoKitsTabLayoutAndroid.Commands;
const SETUP_VIEW_PAGER = Commands.setupViewPager;
const SET_VIEW_SIZE = Commands.setViewSize;
class TabLayout extends react_1.PureComponent {
    render() {
        return (React.createElement(RCTTabLayout, Object.assign({}, this.props, { style: [
                { height: 48 },
                this.props.style
            ] })));
    }
    setViewPager(viewPager, tabs, smoothScroll = true) {
        if (!viewPager) {
            return;
        }
        const viewPagerID = react_native_1.findNodeHandle(viewPager);
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(this), SETUP_VIEW_PAGER, [viewPagerID, tabs, smoothScroll]);
    }
    setViewSize(width, height) {
        let sizeMap = {};
        if (width !== undefined) {
            sizeMap.height = width;
        }
        if (height !== undefined) {
            sizeMap.width = height;
        }
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(this), SET_VIEW_SIZE, [sizeMap]);
    }
}
TabLayout.propTypes = Object.assign({}, react_native_1.View.propTypes, {
    tabs: react_1.PropTypes.arrayOf(react_1.PropTypes.shape({
        text: react_1.PropTypes.string.isRequired
    })),
    tabTextColor: react_1.PropTypes.string,
    tabTextSize: react_1.PropTypes.number,
    tabSelectedTextColor: react_1.PropTypes.string,
    tabIndicatorColor: react_1.PropTypes.string,
    tabIndicatorHeight: react_1.PropTypes.number,
    tabMode: react_1.PropTypes.oneOf(['scrollable', 'fixed']),
    tabGravity: react_1.PropTypes.oneOf(['center', 'fill']),
    tabHeight: react_1.PropTypes.number,
    tabSidePadding: react_1.PropTypes.number,
    activeTabStyle: react_1.PropTypes.object
});
exports.default = TabLayout;
const RCTTabLayout = react_native_1.requireNativeComponent('MaoKitsTabLayoutAndroid', TabLayout, {
    nativeOnly: {}
});
