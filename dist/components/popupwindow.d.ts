import * as React from 'react';
import { PureComponent } from 'react';
import { ViewProperties } from 'react-native';
import { ViewGroupProperties } from './types';
export interface PopupWindowProps extends ViewGroupProperties {
    focusable?: boolean;
    outsideTouchable?: boolean;
    touchable?: boolean;
}
export default class PopupWindow extends PureComponent<PopupWindowProps, any> {
    render(): JSX.Element;
    showAsDropdown(view: any, x?: number, y?: number): void;
    showAsLocation(gravity: number, x?: number, y?: number): void;
    hide(): void;
    static propTypes: ({
        focusable: React.Requireable<any>;
        outsideTouchable: React.Requireable<any>;
        touchable: React.Requireable<any>;
    } & {} & undefined & {
        layoutParams: React.Requireable<any>;
        fitsSystemWindows: React.Requireable<any>;
    }) | ({
        focusable: React.Requireable<any>;
        outsideTouchable: React.Requireable<any>;
        touchable: React.Requireable<any>;
    } & {} & React.ValidationMap<ViewProperties> & {
        layoutParams: React.Requireable<any>;
        fitsSystemWindows: React.Requireable<any>;
    });
}
