/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
export declare class FirebaseAuth extends polymer.Base {
    /**
     * Firebase location URL (must have simple login enabled via Forge interface).
     */
    location: string;
    /**
     * Default login provider type.  May be one of: `anonymous`, `custom`, `password`
     * `facebook`, `github`, `twitter`, `google`.
     */
    provider: string;
    /**
     * When logged in, this property reflects the firebase user auth object.
     */
    user: Object;
    /**
     * When true, login will be attempted if login status check determines no user is
     * logged in.  Should generally only be used with provider types that do not present
     * a login UI, such as 'anonymous'.
     */
    autoLogin: boolean;
    /**
     * When true, login status can be determined by checking `user` property.
     */
    statusKnown: boolean;
    /**
     * When true, authentication will try to redirect instead of using a
     * popup if possible.
     */
    redirect: boolean;
    /**
     * Provider-specific parameters to pass to login.  May be overridden at `login()`-time.
     */
    params: Object;
    /**
     * Provider-specific options to pass to login, for provider types that take a second
     * object to pass firebase-specific options.  May be overridden at `login()`-time.
     */
    options: Object;
    /**
     * A pointer to the Firebase instance being used by the firebase-auth element.
     */
    ref: Object;
    constructor();
    attached(): void;
    detached(): void;
    /**
     * Performs a login attempt, using the `provider` specified via attribute/property,
     * or optionally via `provider` argument to the `login` function.  Optionally,
     * provider-specific login parameters can be specified via attribute (JSON)/property,
     * or via the `params` argument to the `login` function.
     *
     * If your `provider` is `custom` you must pass a Firebase Auth token as
     * `params.token`. You can also optionally pass an auth token as `params.token` for
     * providers `facebook`, `google`, `github` and `twitter` to login headlessly.
     *
     * If the login is successful, the `login` event is fired, with `e.detail.user`
     * containing the authenticated user object from Firebase.
     *
     * If login fails, the `error` event is fired, with `e.detail` containing error
     * information supplied from Firebase.
     *
     * If the browser supports `navigator.onLine` network status reporting and the
     * network is currently offline, the login attempt will be queued until the network
     * is restored.
     *
     * @method login
     * @param {Object} params (optional)
     * @param {Object} options (optional)
     */
    login(params: Object, options?: Object): void;
    /**
     * Performs a logout attempt.
     *
     * If the logout is successful, the `logout` event is fired.
     *
     * If logout fails, the `error` event is fired, with `e.detail` containing error
     * information supplied from Firebase.
     *
     * If the browswer supports `navigator.onLine` network status reporting and the
     * network is currently offline, the logout attempt will be queued until the network
     * is restored.
     *
     * @method logout
     */
    logout(): void;
    /**
     * Creates a "password provider"-based user account.
     *
     * If the operation is successful, the `user-created` event is fired.
     *
     * If the operation fails, the `error` event is fired, with `e.detail`
     * containing error information supplied from Firebase.
     *
     * @method createUser
     * @param {string} email
     * @param {string} password
     */
    createUser(email: string, password: string): void;
    /**
     * Changes the password of a "password provider"-based user account.
     *
     * If the operation is successful, the `password-changed` event is fired.
     *
     * If the operation fails, the `error` event is fired, with `e.detail`
     * containing error information supplied from Firebase.
     *
     * @method changePassword
     * @param {string} email
     * @param {string} oldPassword
     * @param {string} newPassword
     */
    changePassword(email: string, oldPassword: string, newPassword: string): void;
    /**
     * Sends a password reset email for a "password provider"-based user account.
     *
     * If the operation is successful, the `password-reset` event is fired.
     *
     * If the operation fails, the `error` event is fired, with `e.detail`
     * containing error information supplied from Firebase.
     *
     * @method sendPasswordResetEmail
     * @param {string} email
     */
    sendPasswordResetEmail(email: string): void;
    /**
    * Changes the email of a "password provider"-based user account.
    *
    * If the operation is successful, the `email-changed` event is fired.
    *
    * If the operation fails, the `error` event is fired, with `e.detail`
    * containing error information supplied from Firebase.
    *
    * @method changeEmail
    * @param {string} oldEmail
    * @param {string} newEmail
    * @param {string} Password
    */
    changeEmail(oldEmail: string, newEmail: string, password: any): void;
    /**
     * Removes a "password provider"-based user account.
     *
     * If the operation is successful, the `user-removed` event is fired.
     *
     * If the operation fails, the `error` event is fired, with `e.detail`
     * containing error information supplied from Firebase.
     *
     * @method removeUser
     * @param {string} email
     * @param {string} password
     */
    removeUser(email: string, password: string): void;
}
