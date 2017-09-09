"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const layout_1 = require("./layout");
const types_1 = require("./types");
const MaoKitsCollapsingToolbarLayoutManager = react_native_1.UIManager.MaoKitsCollapsingToolbarLayoutAndroid;
const Constants = MaoKitsCollapsingToolbarLayoutManager.Constants;
class CollapsingToolbarLayout extends react_1.PureComponent {
    componentDidMount() {
        layout_1.default.setChildrenLayoutParams(this, MaoKitsCollapsingToolbarLayoutManager);
    }
    componentDidUpdate() {
        layout_1.default.setChildrenLayoutParams(this, MaoKitsCollapsingToolbarLayoutManager);
    }
    render() {
        let props = Object.assign({}, this.props);
        props.expandedTitleMargin = props.expandedTitleMargin || [];
        props.expandedTitleMargin[0] = props.expandedTitleMarginStart || props.expandedTitleMargin[0] || 0;
        props.expandedTitleMargin[1] = props.expandedTitleMarginTop || props.expandedTitleMargin[1] || 0;
        props.expandedTitleMargin[2] = props.expandedTitleMarginEnd || props.expandedTitleMargin[2] || 0;
        props.expandedTitleMargin[3] = props.expandedTitleMarginBottom || props.expandedTitleMargin[3] || 0;
        delete props.expandedTitleMarginStart;
        delete props.expandedTitleMarginTop;
        delete props.expandedTitleMarginEnd;
        delete props.expandedTitleMarginBottom;
        props.scrimsShown = [
            !!props.scrimsShown,
            !!props.scrimsShownAnimate
        ];
        delete props.scrimsShownAnimate;
        return (React.createElement(RCTCollapsingToolbarLayout, Object.assign({}, props), this.props.children));
    }
}
CollapsingToolbarLayout.propTypes = Object.assign({
    contentScrimColor: react_1.PropTypes.string,
    collapsedTitleGravity: react_1.PropTypes.number,
    collapsedTitleColor: react_1.PropTypes.string,
    expandedTitleColor: react_1.PropTypes.string,
    expandedTitleGravity: react_1.PropTypes.number,
    expandedTitleMargin: react_1.PropTypes.arrayOf(react_1.PropTypes.number),
    expandedTitleMarginStart: react_1.PropTypes.number,
    expandedTitleMarginTop: react_1.PropTypes.number,
    expandedTitleMarginEnd: react_1.PropTypes.number,
    expandedTitleMarginBottom: react_1.PropTypes.number,
    scrimAnimationDuration: react_1.PropTypes.number,
    scrimVisibleHeightTrigger: react_1.PropTypes.number,
    scrimsShown: react_1.PropTypes.arrayOf(react_1.PropTypes.bool),
    scrimsShownAnimate: react_1.PropTypes.bool,
    statusBarScrimColor: react_1.PropTypes.string,
    title: react_1.PropTypes.string,
    titleEnable: react_1.PropTypes.bool
}, types_1.ViewGroupProperties);
exports.CollapsingToolbarLayout = CollapsingToolbarLayout;
const RCTCollapsingToolbarLayout = react_native_1.requireNativeComponent('MaoKitsCollapsingToolbarLayoutAndroid', CollapsingToolbarLayout, {
    nativeOnly: {}
});
(function (CollapsingToolbarLayout) {
    var CollapseMode;
    (function (CollapseMode) {
        CollapseMode[CollapseMode["COLLAPSE_MODE_OFF"] = Constants.COLLAPSE_MODE_OFF] = "COLLAPSE_MODE_OFF";
        CollapseMode[CollapseMode["COLLAPSE_MODE_PARALLAX"] = Constants.COLLAPSE_MODE_PARALLAX] = "COLLAPSE_MODE_PARALLAX";
        CollapseMode[CollapseMode["COLLAPSE_MODE_PIN"] = Constants.COLLAPSE_MODE_PIN] = "COLLAPSE_MODE_PIN";
    })(CollapseMode = CollapsingToolbarLayout.CollapseMode || (CollapsingToolbarLayout.CollapseMode = {}));
})(CollapsingToolbarLayout = exports.CollapsingToolbarLayout || (exports.CollapsingToolbarLayout = {}));
exports.default = CollapsingToolbarLayout;
