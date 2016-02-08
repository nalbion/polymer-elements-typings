/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class IronSwipeableContainer extends polymer.Base {
    /**
     * The style in which to swipe the card. Currently supported
     * options are `curve | horizontal`. If left unspecified, the default
     * is assumed to be `horizontal`.
     */
    swipeStyle: string;
    /**
     * If true, then the container will not allow swiping.
     */
    disabled: boolean;
    /**
     * The ratio of the width of the element that the translation animation
     * should happen over. For example, if the `widthRatio` is 3, the
     * animation will take place on a distance 3 times the width of the
     * element being swiped.
     */
    widthRatio: number;
    /**
     * The ratio of the total animation distance after which the opacity
     * transformation begins. For example, if the `widthRatio` is 1 and
     * the `opacityRate` is 0.5, then the element needs to travel half its
     * width before its opacity starts decreasing.
     */
    opacityRate: number;
    /**
     * The CSS transition applied while swiping.
     */
    transition: string;
    ready(): void;
    attached(): void;
    detached(): void;
}
