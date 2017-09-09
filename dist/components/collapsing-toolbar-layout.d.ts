import * as React from 'react';
import { PureComponent } from 'react';
import { LayoutParams, ViewGroupProperties } from './types';
export interface CollapsingToolbarLayoutLayoutParams extends LayoutParams {
    collapseMode?: CollapsingToolbarLayout.CollapseMode;
    collapseParallaxMultiplier?: number;
}
export interface CollapsingToolbarLayoutProps extends ViewGroupProperties {
    contentScrimColor?: string;
    collapsedTitleGravity?: number;
    tcollapsedTitleColor?: string;
    expandedTitleColor?: string;
    expandedTitleGravity?: number;
    expandedTitleMargin?: number[];
    expandedTitleMarginStart?: number;
    expandedTitleMarginTop?: number;
    expandedTitleMarginEnd?: number;
    expandedTitleMarginBottom?: number;
    scrimAnimationDuration?: number;
    scrimVisibleHeightTrigger?: number;
    scrimsShown?: boolean;
    scrimsShownAnimate?: boolean;
    statusBarScrimColor?: string;
    title?: string;
    titleEnable?: boolean;
}
export declare class CollapsingToolbarLayout extends PureComponent<CollapsingToolbarLayoutProps, any> {
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    static propTypes: ({
        contentScrimColor: React.Requireable<any>;
        collapsedTitleGravity: React.Requireable<any>;
        collapsedTitleColor: React.Requireable<any>;
        expandedTitleColor: React.Requireable<any>;
        expandedTitleGravity: React.Requireable<any>;
        expandedTitleMargin: React.Requireable<any>;
        expandedTitleMarginStart: React.Requireable<any>;
        expandedTitleMarginTop: React.Requireable<any>;
        expandedTitleMarginEnd: React.Requireable<any>;
        expandedTitleMarginBottom: React.Requireable<any>;
        scrimAnimationDuration: React.Requireable<any>;
        scrimVisibleHeightTrigger: React.Requireable<any>;
        scrimsShown: React.Requireable<any>;
        scrimsShownAnimate: React.Requireable<any>;
        statusBarScrimColor: React.Requireable<any>;
        title: React.Requireable<any>;
        titleEnable: React.Requireable<any>;
    } & {} & undefined & {
        layoutParams: React.Requireable<any>;
        fitsSystemWindows: React.Requireable<any>;
    }) | ({
        contentScrimColor: React.Requireable<any>;
        collapsedTitleGravity: React.Requireable<any>;
        collapsedTitleColor: React.Requireable<any>;
        expandedTitleColor: React.Requireable<any>;
        expandedTitleGravity: React.Requireable<any>;
        expandedTitleMargin: React.Requireable<any>;
        expandedTitleMarginStart: React.Requireable<any>;
        expandedTitleMarginTop: React.Requireable<any>;
        expandedTitleMarginEnd: React.Requireable<any>;
        expandedTitleMarginBottom: React.Requireable<any>;
        scrimAnimationDuration: React.Requireable<any>;
        scrimVisibleHeightTrigger: React.Requireable<any>;
        scrimsShown: React.Requireable<any>;
        scrimsShownAnimate: React.Requireable<any>;
        statusBarScrimColor: React.Requireable<any>;
        title: React.Requireable<any>;
        titleEnable: React.Requireable<any>;
    } & {} & React.ValidationMap<React.ViewProperties> & {
        layoutParams: React.Requireable<any>;
        fitsSystemWindows: React.Requireable<any>;
    });
}
export declare namespace CollapsingToolbarLayout {
    enum CollapseMode {
        COLLAPSE_MODE_OFF,
        COLLAPSE_MODE_PARALLAX,
        COLLAPSE_MODE_PIN,
    }
}
export default CollapsingToolbarLayout;
