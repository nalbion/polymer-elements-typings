/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class IronDocProperty extends polymer.Base {
    /**
     * The [Hydrolysis](https://github.com/PolymerLabs/hydrolysis)-generated
     * element descriptor to display details for.
     *
     * Alternatively, the element descriptor can be provided as JSON via the text content
     * of this element.
     *
     * @type {hydrolysis.PropertyDescriptor}
     */
    descriptor: Object;
    /**
     * Whether the property should show a one-liner, or full summary.
     *
     * Note that this property _is_ reflected as an attribute, but we perform
     * the reflection manually. In order to support the CSS transitions, we
     * must calculate the element height before setting the attribute.
     */
    collapsed: boolean;
    /**
     * Unique anchor ID for deep-linking.
     *
     */
    anchorId: string;
    ready(): void;
}
