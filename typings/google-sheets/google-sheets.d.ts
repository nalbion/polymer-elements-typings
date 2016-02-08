/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
declare var SCOPE_: any;
declare module Polymer {
    class GoogleSheets extends polymer.Base {
        /**
         * A Google Developers client ID. Obtain from [console.developers.google.com](https://console.developers.google.com). Required for accessing a private spreadsheet. Optional if accessing a public spreadsheet.
         */
        clientId: string;
        /**
         * The key of the spreadsheet. This can be found in the URL when viewing
         * the document is Google Docs (e.g. `docs.google.com/spreadsheet/ccc?key=<KEY>`).
         *
         * Leaving off this attribute still returns a list of the users spreadsheets in the `spreadsheets` property.
         */
        key: string;
        /**
         * Tab within a spreadsheet. For example, the first tab in a spreadsheet
         * would be `tab-id="1"`.
         */
        tabId: number;
        /**
         * A hint that the spreadsheet is published publicly in Google Docs. Used as a performance optimization.
         * Make sure the sheet is also publicly viewable by anyone in the Share settings.
         *
         * @attribute published
         * @type boolean
         * @default false
         */
        published: boolean;
        /**
         * The fetched sheet corresponding to the `key` attribute.
         */
        sheet: Object;
        /**
         * Meta data about the particular tab that was retrieved for the spreadsheet.
         */
        tab: Object;
        /**
         * If a spreadsheet `key` is specified, returns a list of cell row data.
         */
        rows: any[];
        /**
         * List of the user's spreadsheets. Shared across instances.
         */
        spreadsheets: any[];
        /**
         * The URL to open this spreadsheet in Google Sheets.
         */
        openInGoogleDocsUrl: string;
        constructor();
    }
}
declare function gid_to_wid_(gid: any): any;
declare function wid_to_gid_(wid: any): number;
declare function getLink_(rel: any, links: any): any;
declare function generateCacheKey_(): string;
declare var rowDataCache_: {};
