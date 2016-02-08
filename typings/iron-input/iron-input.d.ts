/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class IronInput extends polymer.Base implements Polymer.IronValidatableBehavior {
    /**
     * Use this property instead of `value` for two-way data binding.
     */
    bindValue: string;
    /**
     * Set to true to prevent the user from entering invalid input. The new input characters are
     * matched with `allowedPattern` if it is set, otherwise it will use the `type` attribute (only
     * supported for `type=number`).
     */
    preventInvalidInput: boolean;
    /**
     * Regular expression expressing a set of characters to enforce the validity of input characters.
     * The recommended value should follow this format: `[a-ZA-Z0-9.+-!;:]` that list the characters
     * allowed as input.
     */
    allowedPattern: string;
    ready(): void;
    /**
     * Returns true if `value` is valid. The validator provided in `validator` will be used first,
     * then any constraints.
     * @return {boolean} True if the value is valid.
     */
    validate(): any;
}
