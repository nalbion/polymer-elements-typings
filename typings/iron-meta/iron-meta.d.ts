/// <reference path="../../polymer-ts.d.ts" />
declare var metaDatas: any;
/**
`iron-meta-query` can be used to access infomation stored in `iron-meta`.
 Examples:
 If I create an instance like this:
     <iron-meta key="info" value="foo/bar"></iron-meta>
 Note that value="foo/bar" is the metadata I've defined. I could define more
attributes or use child nodes to define additional metadata.
 Now I can access that element (and it's metadata) from any `iron-meta-query` instance:
      var value = new Polymer.IronMetaQuery({key: 'info'}).value;
 @group Polymer Iron Elements
@element iron-meta-query
*/
declare module Polymer {
    class IronMetaQuery extends polymer.Base {
        /**
         * The type of meta-data.  All meta-data of the same type is stored
         * together.
         */
        type: string;
        /**
         * Specifies a key to use for retrieving `value` from the `type`
         * namespace.
         */
        key: string;
        /**
         * The meta-data to store or retrieve.
         */
        value: Object;
        /**
         * Array of all meta-data values for the given type.
         */
        list: any[];

        ///**
        // * Actually a factory method, not a true constructor. Only runs if
        // * someone invokes it directly (via `new Polymer.IronMeta()`);
        // *
        // * @param {{type: (string|undefined), key: (string|undefined)}=} config
        // */
        //(config: {type?: string; key?: string}) => void;

        created(): void;
        /**
         * Retrieves meta data value by key.
         * @param {string} key The key of the meta-data to be returned.
         * @return {*}
         */
        byKey(key: string): any;
    }
}
declare var singleton: any;
declare var metaArrays: {};
