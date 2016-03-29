/// <reference path="../../polymer-ts.d.ts" />
export declare class IronLocalstorage extends polymer.Base {
    /**
     * localStorage item key
     */
    name: string;
    /**
     * The data associated with this storage.
     * If set to null item will be deleted.
     * @type {*}
     */
    value: any;
    /**
     * If true: do not convert value to JSON on save/load
     */
    useRaw: boolean;
    /**
     * Value will not be saved automatically if true. You'll have to do it manually with `save()`
     */
    autoSaveDisabled: boolean;
    /**
     * Last error encountered while saving/loading items
     */
    errorMessage: string;
    ready(): void;
    attached(): void;
    detached(): void;
    /**
     * Loads the value again. Use if you modify
     * localStorage using DOM calls, and want to
     * keep this element in sync.
     */
    reload(): void;
    /**
     * Saves the value to localStorage. Call to save if autoSaveDisabled is set.
     * If `value` is null or undefined, deletes localStorage.
     */
    save(): void;
}
