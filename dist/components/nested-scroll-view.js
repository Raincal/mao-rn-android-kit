"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const react_mixins_decorator_1 = require("react-mixins-decorator");
const ScrollResponder = require("react-native/Libraries/Components/ScrollResponder");
let NestedScrollView = class NestedScrollView extends react_1.PureComponent {
    constructor(props, context) {
        super(props, context);
        let scrollResponder = this;
        this.state = scrollResponder.scrollResponderMixinGetInitialState();
        scrollResponder.scrollResponderKeyboardWillShow = scrollResponder.scrollResponderKeyboardWillShow.bind(this);
        scrollResponder.scrollResponderKeyboardDidShow = scrollResponder.scrollResponderKeyboardDidShow.bind(this);
        scrollResponder.scrollResponderKeyboardWillHide = scrollResponder.scrollResponderKeyboardWillHide.bind(this);
        scrollResponder.scrollResponderKeyboardDidHide = scrollResponder.scrollResponderKeyboardDidHide.bind(this);
    }
    setNativeProps(props) {
        this._scrollView.setNativeProps(props);
    }
    getScrollResponder() {
        return this;
    }
    getInnerViewNode() {
        return react_native_1.findNodeHandle(this._innerView);
    }
    scrollTo(destX, destY) {
        this.getScrollResponder().scrollResponderScrollTo(destX || 0, destY || 0);
    }
    scrollWithoutAnimationTo(destX, destY) {
        this.getScrollResponder().scrollResponderScrollWithoutAnimationTo(destX || 0, destY || 0);
    }
    handleScroll(event) {
        if (global.__DEV__) {
            if (this.props.onScroll && !this.props.scrollEventThrottle) {
                console.log('You specified `onScroll` on a <NestedScrollViewAndroid> but not ' +
                    '`scrollEventThrottle`. You will only receive one event. ' +
                    'Using `16` you get all the events but be aware that it may ' +
                    'cause frame drops, use a bigger number if you don\'t need as ' +
                    'much precision.');
            }
        }
        if (this.props.keyboardDismissMode === 'on-drag' &&
            global.dismissKeyboard) {
            global.dismissKeyboard();
        }
        this.scrollResponderHandleScroll(event);
    }
    render() {
        const responder = this;
        const eventProps = {
            onTouchStart: responder.scrollResponderHandleTouchStart,
            onTouchMove: responder.scrollResponderHandleTouchMove,
            onTouchEnd: responder.scrollResponderHandleTouchEnd,
            onScrollBeginDrag: responder.scrollResponderHandleScrollBeginDrag,
            onScrollEndDrag: responder.scrollResponderHandleScrollEndDrag,
            onMomentumScrollBegin: responder.scrollResponderHandleMomentumScrollBegin,
            onMomentumScrollEnd: responder.scrollResponderHandleMomentumScrollEnd,
            onStartShouldSetResponder: responder.scrollResponderHandleStartShouldSetResponder,
            onStartShouldSetResponderCapture: responder.scrollResponderHandleStartShouldSetResponderCapture,
            onScrollShouldSetResponder: responder.scrollResponderHandleScrollShouldSetResponder,
            onResponderGrant: responder.scrollResponderHandleResponderGrant,
            onResponderTerminationRequest: responder.scrollResponderHandleTerminationRequest,
            onResponderTerminate: responder.scrollResponderHandleTerminate,
            onResponderRelease: responder.scrollResponderHandleResponderRelease,
            onResponderReject: responder.scrollResponderHandleResponderReject
        };
        for (let key of Object.keys(eventProps)) {
            if (eventProps[key] instanceof Function) {
                eventProps[key] = eventProps[key].bind(this);
            }
        }
        const onRefreshStart = this.props.onRefreshStart;
        return (React.createElement(RCTNestedScrollView, Object.assign({}, this.props, eventProps, { style: [styles.base, this.props.style], onScroll: this.handleScroll.bind(this), ref: (component) => this._scrollView = component, onRefreshStart: onRefreshStart ? (() => {
                onRefreshStart(this.endRefreshing);
            }) : undefined }),
            React.createElement(react_native_1.View, Object.assign({}, (this.props.onContentSizeChange ? {
                onLayout: this._handleContentOnLayout.bind(this)
            } : {}), { style: [
                    this.props.horizontal && styles.contentContainerHorizontal,
                    this.props.contentContainerStyle
                ], removeClippedSubviews: this.props.removeClippedSubviews, collapsable: false, ref: (component) => this._innerView = component }), this.props.children)));
    }
    _handleContentOnLayout(event) {
        const { width, height } = event.nativeEvent.layout;
        if (this.props.onContentSizeChange) {
            this.props.onContentSizeChange(width, height);
        }
    }
};
NestedScrollView.propTypes = Object.assign({}, react_native_1.ScrollView.propTypes, {
    showVerticalScrollIndicator: react_1.PropTypes.bool
});
NestedScrollView = __decorate([
    react_mixins_decorator_1.default([ScrollResponder.Mixin]),
    __metadata("design:paramtypes", [Object, Object])
], NestedScrollView);
const RCTNestedScrollView = react_native_1.requireNativeComponent('MaoKitsNestedScrollViewAndroid', NestedScrollView, {
    nativeOnly: {}
});
const styles = react_native_1.StyleSheet.create({
    base: {
        overflow: 'scroll'
    },
    contentContainerHorizontal: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
});
exports.default = NestedScrollView;
