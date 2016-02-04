

declare module google {
	/* 
		The `google-castable-video` element enables your HTML5 videos to be casted to any Chromecast.
		
		It behaves exactly like an HTML5 video element except for some added methods and events.
		
		Instead of listening for the video element's `timeupdate` event please listen for the `google-castable-video-timeupdate` event. This event is fired if the video is playing locally and on the Chromecast device.
		
		##### Example
		
		    <video is="google-castable-video">
		      <source src="video.mp4" type="video/mp4">
		    </video>
	*/
	export class GoogleCastableVideo 
	{
	/*	== EVENTS ==

	Event: 'google-castable-video-casting'
	Params: detail: Object, detail.casting: bool
The `google-castable-video-casting` event is fired whenever the
connection status to a Chromecast changes. Use this to change the cast icon.

 Event: 'google-castable-video-error'
	Params: detail: Object, detail.error: string
The `google-castable-video-error` event is fired whenever
an error occurs.

 Event: 'google-castable-video-initialized'
	
The `google-castable-video-initialized` event is fired when
the cast client API has been initialized.

 Event: 'google-castable-video-receiver-status'
	Params: detail: Object, detail.available: bool
The `google-castable-video-receiver-status` event is fired whenever
the availability of Chromecasts changes. Use this to show or hide the cast icon.

 Event: 'google-castable-video-timeupdate'
	Params: detail: Object, detail.currentTime: number
The `google-castable-video-timeupdate` event is fired whenever
the video's playback position changes.

 
	*/
	
		/*
		The appId that references which receiver the Chromecast will load.
		*/
		appId: string;	
		/*
		Sets or returns the current playback position (in seconds).
		Since the local video is paused when the video is playing on the Chromecast device
		the objects currentTime property doesn't represent the actual currentTime of the video
		playing on the Chromecast device. To always get the actual position please use bothCurrentTime.
		*/
		bothCurrentTime;	
		/*
		*/
		bothCurrentTime;	
		/*
		*/
		bothPaused;	
		/*
		*/
		casting;	
		/*
		*/
		castMedia;	
		/*
		*/
		receiverAvailable;	
		/*
		*/
		session;	

	
		/*
		Call this when the user clicks the cast icon.
		Opens the cast extension to create a session with the selected receiver.
		*/
		launchSessionManager();
	
		/*
		Call the `pause` method from your controls.
		*/
		pause(cast);
	
		/*
		Call the `play` method from your controls.
		*/
		play(cast);
	
	}
}
