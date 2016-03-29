/// <reference path="../../polymer-ts.d.ts" />
/**
`google-signin-aware` is used to enable authentication in custom elements by
interacting with a google-signin element that needs to be present somewhere
on the page.

The `scopes` attribute allows you to specify which scope permissions are required
(e.g do you want to allow interaction with the Google Drive API).

The `google-signin-aware-success` event is triggered when a user successfully
authenticates. If either `offline` or `offlineAlwaysPrompt` is set to true, successful
authentication will also trigger the `google-signin-offline-success`event.
The `google-signin-aware-signed-out` event is triggered when a user explicitly
signs out via the google-signin element.

You can bind to `isAuthorized` property to monitor authorization state.
##### Example

    <google-signin-aware scopes="https://www.googleapis.com/auth/drive"></google-signin-aware>


##### Example with offline
    <template id="awareness" is="dom-bind">
      <google-signin-aware
          scopes="https://www.googleapis.com/auth/drive"
          offline
          on-google-signin-aware-success="handleSignin"
          on-google-signin-offline-success="handleOffline"></google-signin-aware>
    <\/template>
    <script>
      var aware = document.querySelector('#awareness');
      aware.handleSignin = function(response) {
        var user = gapi.auth2.getAuthInstance().currentUser.get();
        console.log('User name: ' + user.getBasicProfile().getName());
      };
      aware.handleOffline = function(response) {
        console.log('Offline code received: ' + response.detail.code);
        // Here you would POST response.detail.code to your webserver, which can
        // exchange the authorization code for an access token. More info at:
        // https://developers.google.com/identity/protocols/OAuth2WebServer
      };
    <\/script>
*/
export declare class GoogleSigninAware extends polymer.Base {
    /**
     * App package name for android over-the-air installs.
     * See the relevant [docs](https://developers.google.com/+/web/signin/android-app-installs)
     */
    appPackageName: string;
    /**
     * a Google Developers clientId reference
     */
    clientId: string;
    /**
     * The cookie policy defines what URIs have access to the session cookie
     * remembering the user's sign-in state.
     * See the relevant [docs](https://developers.google.com/+/web/signin/reference#determining_a_value_for_cookie_policy) for more information.
     * @default 'single_host_origin'
     */
    cookiePolicy: string;
    /**
     * The app activity types you want to write on behalf of the user
     * (e.g http://schemas.google.com/AddActivity)
     *
     */
    requestVisibleActions: string;
    /**
     * The Google Apps domain to which users must belong to sign in.
     * See the relevant [docs](https://developers.google.com/identity/sign-in/web/reference) for more information.
     */
    hostedDomain: string;
    /**
      * Allows for offline `access_token` retrieval during the signin process.
      * See also `offlineAlwaysPrompt`. You only need to set one of the two; if both
      * are set, the behavior of `offlineAlwaysPrompt` will override `offline`.
      */
    offline: boolean;
    /**
      * Works the same as `offline` with the addition that it will always
      * force a re-prompt to the user, guaranteeing that you will get a
      * refresh_token even if the user has already granted offline access to
      * this application. You only need to set one of `offline` or
      * `offlineAlwaysPrompt`, not both.
      */
    offlineAlwaysPrompt: boolean;
    /**
      * The scopes to provide access to (e.g https://www.googleapis.com/auth/drive)
      * and should be space-delimited.
      */
    scopes: string;
    /**
     * True if user is signed in
     */
    signedIn: boolean;
    /**
     * True if authorizations for *this* element have been granted
     */
    isAuthorized: boolean;
    /**
     * True if additional authorizations for *any* element are required
     */
    needAdditionalAuth: boolean;
    /**
     * True if *any* element has google+ scopes
     */
    hasPlusScopes: boolean;
    attached(): void;
    detached(): void;
    /** pops up the authorization dialog */
    signIn(): void;
    /** signs user out */
    signOut(): void;
}
