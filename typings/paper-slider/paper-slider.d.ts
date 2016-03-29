/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts"/>
/// <reference path="../iron-form-element-behavior/iron-form-element-behavior.d.ts"/>
/// <reference path="../paper-behaviors/paper-inky-focus-behavior.d.ts"/>
/// <reference path="../iron-range-behavior/iron-range-behavior.d.ts"/>

export declare class PaperSlider extends polymer.Base
    implements Polymer.IronA11yKeysBehavior, Polymer.IronFormElementBehavior, Polymer.PaperInkyFocusBehavior, Polymer.IronRangeBehavior
{
    /**
     * If true, the slider thumb snaps to tick marks evenly spaced based
     * on the `step` property value.
     */
    snaps: boolean;
    /**
     * If true, a pin with numeric value label is shown when the slider thumb
     * is pressed. Use for settings for which users need to know the exact
     * value of the setting.
     */
    pin: boolean;
    /**
     * The number that represents the current secondary progress.
     */
    secondaryProgress: number;
    /**
     * If true, an input is shown and user can use it to set the slider value.
     */
    editable: boolean;
    /**
     * The immediate value of the slider.  This value is updated while the user
     * is dragging the slider.
     */
    immediateValue: number;
    /**
     * The maximum number of markers
     */
    maxMarkers: number;
    /**
     * If true, the knob is expanded
     */
    expand: boolean;
    /**
     * True when the user is dragging the slider.
     */
    dragging: boolean;
    transiting: boolean;
    markers: any[];
    keyBindings: {
        'left down pagedown home': string;
        'right up pageup end': string;
    };
    ready(): void;
    /**
     * Increases value by `step` but not above `max`.
     * @method increment
     */
    increment(): void;
    /**
     * Decreases value by `step` but not below `min`.
     * @method decrement
     */
    decrement(): void;
}
