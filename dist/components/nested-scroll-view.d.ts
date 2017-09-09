import * as React from 'react';
import { PureComponent } from 'react';
import { ScrollViewProperties } from 'react-native';
export interface NestedScrollViewProps extends ScrollViewProperties {
    showVerticalScrollIndicator?: boolean;
    removeClippedSubviews?: boolean;
    onContentSizeChange?: (width: number, height: number) => void;
}
declare class NestedScrollView extends PureComponent<NestedScrollViewProps, any> {
    private _scrollView;
    private _innerView;
    constructor(props: NestedScrollViewProps, context: any);
    setNativeProps(props: any): void;
    getScrollResponder(): any;
    getInnerViewNode(): any;
    scrollTo(destX?: number, destY?: number): void;
    scrollWithoutAnimationTo(destX?: number, destY?: number): void;
    handleScroll(event: any): void;
    render(): JSX.Element;
    private _handleContentOnLayout(event);
    static propTypes: ({} & undefined & {
        showVerticalScrollIndicator: React.Requireable<any>;
    }) | ({} & React.ValidationMap<React.ScrollViewProps> & {
        showVerticalScrollIndicator: React.Requireable<any>;
    });
}
export default NestedScrollView;
