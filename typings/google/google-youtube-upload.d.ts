

declare module google {
	/* 
		Element enabling you to upload videos to YouTube.
		
		##### Examples
		
		Manual upload with a `Video Upload` button once a video file is selected:
		
		    <google-youtube-upload client-id="..."></google-youtube-upload>
		
		Automatic upload on video file select, with a custom title, and 'unlisted' privacy:
		
		    <google-youtube-upload
		      auto
		      video-title="My Awesome Video"
		      privacy-status="unlisted"
		      client-id="...">
		    </google-youtube-upload>
	*/
	export class GoogleYoutubeUpload 
	{
	/*	== EVENTS ==

	Event: 'youtube-processing-complete'
	Params: e: Object
Fired when server-side processing is successful and the video is
available for playback on YouTube.

The video can be played at `https://youtu.be/VIDEO_ID` and can be
embedded using the
[`google-youtube`](https://github.com/GoogleWebComponents/google-youtube) element.

`e.detail` is set to the YouTube video id of the video.

 Event: 'youtube-processing-fail'
	Params: e: Object
Fired when the video
[failed transcoding](https://support.google.com/youtube/topic/2888603?hl=en&ref_topic=16547)
and can't be played on YouTube.

`e.detail` is set to a
[status](https://developers.google.com/youtube/v3/docs/videos#status)
object which has more details about the failure.

 Event: 'youtube-processing-poll'
	Params: e: Object
Fired while server-side processing is in progress.

Server-side processing can take an
[unpredictable amount of time](https://support.google.com/youtube/answer/71674?hl=en&ref_topic=2888603),
and these events will be periodically fired each time the processing status is polled.

`e.detail` is set to a
[status](https://developers.google.com/youtube/v3/docs/videos#status)
object.

 Event: 'youtube-upload-complete'
	Params: e: Object
Fired when video upload has completed, and YouTube has begun processing the video.

At this point, the video is not yet playable, and there is no guarantee that
the server-side YouTube processing will succeed.

One or more `youtube-processing-poll` events will then be fired after this event,
followed by either a `youtube-processing-complete` or `youtube-processing-fail`.

`e.detail` is set to the YouTube video id of the video.

 Event: 'youtube-upload-fail'
	Params: e: Object
Fired when YouTube upload has failed.

Since the actual upload failed, it's not possible for the YouTube server to attempt to
process the video, and no `youtube-processing-poll` events will be fired.

`e.detail` is set to a string explaining what went wrong.

 Event: 'youtube-upload-progress'
	Params: e: Object
Fired while the upload is in progress.

`e.detail.progressEvent` is set to the corresponding
[XMLHttpRequestProgressEvent](http://www.w3.org/TR/progress-events/).

`e.detail.estimatedSecondsRemaining` is set to an estimate of the time remaining
in the upload, based on the average upload speed so far.

`e.detail.bytesPerSecond` is set to the average number of bytes sent per second
sent so far.

`e.fractionComplete` is set to the fraction of the upload that's complete, in the range [0, 1].

 Event: 'youtube-upload-start'
	Params: e: Object
Fired when the upload begins.

`e.detail` is set to the
[file](https://developer.mozilla.org/en-US/docs/Web/API/File)
being uploaded.

 
	*/
	
		/*
		Whether the user has authenticated or not.
		*/
		authenticated: Boolean;	
		/*
		Whether files should be automatically uploaded.
		*/
		auto: Boolean;	
		/*
		The numeric YouTube
		[cateogry id](https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.videoCategories.list?part=snippet&regionCode=us).
		*/
		categoryId: Number;	
		/*
		An OAuth 2 clientId reference, obtained from the
		[Google Developers Console](https://console.developers.google.com).
		
		Follow
		[the steps](https://developers.google.com/console/help/new/#generatingoauth2)
		for registering for OAuth 2, ensure that the
		[YouTube Data API v3](https://developers.google.com/youtube/registering_an_application)
		is enabled for your API project, and ensure that the JavaScript Origin
		is set to the domain hosting the page on which
		you'll be using this element.
		*/
		clientId: string;	
		/*
		The description for the new YouTube video.
		*/
		description: string;	
		/*
		The [privacy setting](https://support.google.com/youtube/answer/157177?hl=en)
		for the new video.
		
		Valid values are 'public', 'private', and 'unlisted'.
		*/
		privacyStatus: string;	
		/*
		The array of tags for the new YouTube video.
		*/
		tags: Array<any>;	
		/*
		The id of the new video.
		
		This is set as soon as a `youtube-upload-complete` event is fired.
		*/
		videoId: string;	
		/*
		The title for the new YouTube video.
		*/
		videoTitle: string;	

	
		/*
		Uploads a video file to YouTube.
		
		`this.accessToken` must already be set to a valid OAuth 2 access token.
		*/
		uploadFile(file: Object);
	
	}
}
