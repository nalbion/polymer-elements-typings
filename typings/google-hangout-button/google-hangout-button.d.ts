/// <reference path="../../polymer-ts.d.ts" />
export declare class GoogleHangoutButton extends polymer.Base {
    /**
     * Specifies what type of Hangout should be started.
     * Valid values are 'normal', 'onair', 'party' and 'moderated'
     *
     * See the [Hangout button parameter reference](https://developers.google.com/+/hangouts/button#hangout_button_parameters)
     * for more details.
     */
    type: string;
    /**
     * Specifies the Google+ Hangout apps to launch when a user clicks the
     * Hangout button. Invalid objects and parameters are ignored.
     *
     * See the [Initial app parameters reference](https://developers.google.com/+/hangouts/button#initial_app_parameters)
     * for more details.
     */
    apps: any[];
    /**
     * Specifies the list of people to invite when the user clicks the
     * Hangout button. Invalid objects and parameters are ignored.
     *
     * See the [Invite parameters reference](https://developers.google.com/+/hangouts/button#invite_parameters)
     * for more details.
     */
    invites: any[];
    /**
     * Pre-populates the topic field for Hangouts on Air. Note that users can
     * change the topic of the Hangout after they have joined.
     */
    topic: string;
    /**
     * Specifies the width of the button.
     */
    width: number;
    ready(): void;
}
