"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Layout {
    static setChildrenLayoutParams(component, manager, defaultParams) {
        if (!component || !manager) {
            return;
        }
        let currentChildrelLayoutParams = component.__currentChildLayoutParams;
        let nextChildrelLayoutParams = [];
        const hasDefaultParams = !!defaultParams;
        React.Children.map(component.props.children || [], (child, index) => {
            if (!child.props.layoutParams && !hasDefaultParams) {
                return;
            }
            nextChildrelLayoutParams.push(Object.assign({}, defaultParams, child.props.layoutParams, { childIndex: index }));
        });
        if (!nextChildrelLayoutParams.length) {
            return;
        }
        if (layoutParamsIsEqualTo(currentChildrelLayoutParams, nextChildrelLayoutParams)) {
            return;
        }
        component.__currentChildLayoutParams = nextChildrelLayoutParams;
        react_native_1.UIManager.dispatchViewManagerCommand(react_native_1.findNodeHandle(component), manager.Commands.setChildrenLayoutParams, [nextChildrelLayoutParams]);
    }
}
exports.default = Layout;
function layoutParamsIsEqualTo(params1, params2) {
    if (!params1 || !params2) {
        return false;
    }
    if (params1.length !== params2.length) {
        return false;
    }
    for (let i = 0, l = params1.length; i < l; i++) {
        if (!paramIsEqualTo(params1[i], params2[i])) {
            return false;
        }
    }
    return true;
}
function paramIsEqualTo(param1, param2) {
    for (let key of Object.keys(param1)) {
        if (param1[key] !== param2[key]) {
            return false;
        }
    }
    return true;
}
