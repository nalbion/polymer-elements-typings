/// <reference path="../../polymer-ts.d.ts" />
/**
The `google-castable-video` element enables your HTML5 videos to be casted to any Chromecast.

It behaves exactly like an HTML5 video element except for some added methods and events.

Instead of listening for the video element's `timeupdate` event please listen for the `google-castable-video-timeupdate` event. This event is fired if the video is playing locally and on the Chromecast device.

##### Example

    <video is="google-castable-video">
      <source src="video.mp4" type="video/mp4">
    </video>

@demo
*/
export declare class GoogleCastableVideo extends polymer.Base {
    /**
     * The appId that references which receiver the Chromecast will load.
     *
     * @default chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
     */
    appId: string;
    bothPaused: any;
    bothCurrentTime: any;
    casting: any;
    receiverAvailable: any;
    castMedia: any;
    session: any;
    ready(): void;
    /**
    * Call this when the user clicks the cast icon.
    * Opens the cast extension to create a session with the selected receiver.
    *
    * @method launchSessionManager
    */
    launchSessionManager(): void;
    /**
     * Call the `play` method from your controls.
     *
     * @method play
     */
    play(cast: any): void;
    /**
     * Call the `pause` method from your controls.
     *
     * @method pause
     */
    pause(cast: any): void;
}
