import * as React from 'react';
import { PureComponent } from 'react';
import { ViewPagerAndroidStatic, ViewProperties } from 'react-native';
export interface Tab {
    text: string;
}
export interface TabLayoutProps extends ViewProperties {
    tabs?: Tab[];
    tabTextSize?: number;
    tabTextColor?: string;
    tabSelectedTextColor?: string;
    tabIndicatorColor?: string;
    tabIndicatorHeight?: number;
    tabMode?: 'scrollable' | 'fixed';
    tabGravity?: 'center' | 'fill';
    activeTabStyle?: Dictionary<any>;
    tabHeight?: number;
    tabSidePadding?: number;
}
export declare type SizeParam = number | 'match_parent' | 'wrap_content';
export default class TabLayout extends PureComponent<TabLayoutProps, any> {
    render(): JSX.Element;
    setViewPager(viewPager: ViewPagerAndroidStatic, tabs: Tab[], smoothScroll?: boolean): void;
    setViewSize(width: SizeParam, height?: SizeParam): void;
    static propTypes: ({} & undefined & {
        tabs: React.Requireable<any>;
        tabTextColor: React.Requireable<any>;
        tabTextSize: React.Requireable<any>;
        tabSelectedTextColor: React.Requireable<any>;
        tabIndicatorColor: React.Requireable<any>;
        tabIndicatorHeight: React.Requireable<any>;
        tabMode: React.Requireable<any>;
        tabGravity: React.Requireable<any>;
        tabHeight: React.Requireable<any>;
        tabSidePadding: React.Requireable<any>;
        activeTabStyle: React.Requireable<any>;
    }) | ({} & React.ValidationMap<ViewProperties> & {
        tabs: React.Requireable<any>;
        tabTextColor: React.Requireable<any>;
        tabTextSize: React.Requireable<any>;
        tabSelectedTextColor: React.Requireable<any>;
        tabIndicatorColor: React.Requireable<any>;
        tabIndicatorHeight: React.Requireable<any>;
        tabMode: React.Requireable<any>;
        tabGravity: React.Requireable<any>;
        tabHeight: React.Requireable<any>;
        tabSidePadding: React.Requireable<any>;
        activeTabStyle: React.Requireable<any>;
    });
}
