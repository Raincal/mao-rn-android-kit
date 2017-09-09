import * as React from 'react';
import { ViewProperties } from 'react-native';
export interface LayoutParams {
    width?: number;
    height?: number;
}
export declare const LayoutParams: {
    width: React.Requireable<any>;
    height: React.Requireable<any>;
};
export interface ViewGroupProperties extends ViewProperties {
    layoutParams?: LayoutParams;
    fitsSystemWindows?: boolean;
}
export declare const ViewGroupProperties: ({} & undefined & {
    layoutParams: React.Requireable<any>;
    fitsSystemWindows: React.Requireable<any>;
}) | ({} & React.ValidationMap<ViewProperties> & {
    layoutParams: React.Requireable<any>;
    fitsSystemWindows: React.Requireable<any>;
});
export interface AppBarLayoutParams extends LayoutParams {
    scrollFlags?: number;
}
export interface AppBarViewProperties extends ViewGroupProperties {
    layoutParams?: AppBarLayoutParams;
}
export declare const AppBarViewProperties: ({} & {} & undefined & {
    layoutParams: React.Requireable<any>;
    fitsSystemWindows: React.Requireable<any>;
} & {
    layoutParams: React.Requireable<any>;
}) | ({} & {} & React.ValidationMap<ViewProperties> & {
    layoutParams: React.Requireable<any>;
    fitsSystemWindows: React.Requireable<any>;
} & {
    layoutParams: React.Requireable<any>;
});
