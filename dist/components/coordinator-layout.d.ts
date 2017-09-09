import * as React from 'react';
import { PureComponent } from 'react';
import AppBarLayout from './appbar-layout';
import { ViewGroupProperties } from './types';
export interface CoordinatorLayoutProps extends ViewGroupProperties {
}
export default class CoordinatorLayout extends PureComponent<CoordinatorLayoutProps, any> {
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    setScrollingViewBehavior(view: any): void;
    resetBehavior(appbar: AppBarLayout, nestedScrollEnabled?: boolean, smoothly?: boolean): void;
    static propTypes: ({} & {} & undefined & {
        layoutParams: React.Requireable<any>;
        fitsSystemWindows: React.Requireable<any>;
    }) | ({} & {} & React.ValidationMap<React.ViewProperties> & {
        layoutParams: React.Requireable<any>;
        fitsSystemWindows: React.Requireable<any>;
    });
}
