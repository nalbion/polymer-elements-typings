/// <reference path="../../polymer-ts.d.ts" />
/// <reference path="firebase-query-behavior.d.ts"/>

export declare class FirebaseDocument extends polymer.Base implements Polymer.FirebaseQueryBehavior {
    /**
     * Firebase Query object corresponding to `location`.
     */
    query: Object;
    /**
     * The `data` object mapped to `location`.
     */
    data: Object;
}
