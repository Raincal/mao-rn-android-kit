import * as React from 'react';
import { PureComponent } from 'react';
import { AppBarViewProperties } from './types';
export interface AppBarLayoutProps extends AppBarViewProperties {
}
export default class AppBarLayout extends PureComponent<AppBarLayoutProps, any> {
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    static SCROLL_FLAG_ENTRY_ALWAYS: number;
    static SCROLL_FLAG_ENTRY_ALWAYS_COLLAPSED: number;
    static SCROLL_FLAG_EXIT_UNTIL_COLLAPSED: number;
    static SCROLL_FLAG_SCROLL: number;
    static SCROLL_FLAG_SNAP: number;
    static propTypes: ({} & {} & {} & undefined & {
        layoutParams: React.Requireable<any>;
        fitsSystemWindows: React.Requireable<any>;
    } & {
        layoutParams: React.Requireable<any>;
    }) | ({} & {} & {} & React.ValidationMap<React.ViewProperties> & {
        layoutParams: React.Requireable<any>;
        fitsSystemWindows: React.Requireable<any>;
    } & {
        layoutParams: React.Requireable<any>;
    });
}
