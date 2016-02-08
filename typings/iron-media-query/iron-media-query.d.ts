/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class IronMediaQuery extends polymer.Base {
    /**
     * The Boolean return value of the media query.
     */
    queryMatches: boolean;
    /**
     * The CSS media query to evaluate.
     */
    query: string;
    /**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */
    full: boolean;
    constructor();
    attached(): void;
    detached(): void;
    queryChanged(): void;
    queryHandler(mq: any): void;
}
