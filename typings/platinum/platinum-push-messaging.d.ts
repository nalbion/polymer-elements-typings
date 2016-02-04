

declare module platinum {
	/* 
		`<platinum-push-messaging>` sets up a [push messaging][1] subscription
		and allows you to define what happens when a push message is received.
		
		The element can be placed anywhere, but should only be used once in a
		page. If there are multiple occurrences, only one will be active.
		
		# Sample
		
		For a complete sample that uses the element, see the [Cat Push
		Notifications][3] project.
		
		# Requirements
		Push messaging is currently only available in Google Chrome, which
		requires you to configure Google Cloud Messaging. Chrome will check that
		your page links to a manifest file that contains a `gcm_sender_id` field.
		You can find full details of how to set all of this up in the [HTML5
		Rocks guide to push notifications][1].
		
		# Notification details
		The data for how a notification should be displayed can come from one of
		three places.
		
		Firstly, you can specify a URL from which to fetch the message data.
		```
		<platinum-push-messaging
		  message-url="notification-data.json">
		</platinum-push-messaging>
		```
		
		The second way is to send the message data in the body of
		the push message from your server. In this case you do not need to
		configure anything in your page:
		```
		<platinum-push-messaging></platinum-push-messaging>
		```
		**Note that this method is not currently supported by any browser**. It
		is, however, defined in the
		[draft W3C specification](http://w3c.github.io/push-api/#the-push-event)
		and this element should use that data when it is implemented in the
		future.
		
		If a message-url is provided then the message body will be ignored in
		favor of the first method.
		
		Thirdly, you can manually define the attributes on the element:
		```
		<platinum-push-messaging
		  title="Application updated"
		  message="The application was updated in the background"
		  icon-url="icon.png"
		  click-url="notification.html">
		</platinum-push-messaging>
		```
		These values will also be used as defaults if one of the other methods
		does not provide a value for that property.
		
		# Testing
		If you have set up Google Cloud Messaging then you can send push messages
		to your browser by following the guide in the [GCM documentation][2].
		
		However, for quick client testing there are two options. You can use the
		`testPush` method, which allows you to simulate a push message that
		includes a payload.
		
		Or, at a lower level, you can open up chrome://serviceworker-internals in
		Chrome and use the 'Push' button for the service worker corresponding to
		your app.
		
		[1]: http://updates.html5rocks.com/2015/03/push-notificatons-on-the-open-web
		[2]: https://developer.android.com/google/gcm/http.html
		[3]: https://github.com/notwaldorf/caturday-post
	*/
	export class PlatinumPushMessaging 
	{
	/*	== EVENTS ==

	Event: 'platinum-push-messaging-click'
	Params: The: Object
Fired when a notification is clicked that had the current page as the
click URL.

 Event: 'platinum-push-messaging-error'
	Params: The: string
Fired when an error occurs while enabling or disabling notifications

 Event: 'platinum-push-messaging-push'
	Params: The: Object
Fired when a push message is received but no notification is shown.
This happens when the click URL is for this page and the page is
visible to the user on the screen.

 
	*/
	
		/*
		The default URL to display when a notification is clicked.
		*/
		clickUrl: string;	
		/*
		The default text direction for the title and body of the
		notification. Can be `auto`, `ltr` or `rtl`.
		*/
		dir: string;	
		/*
		Indicates the status of the element. If true, push messages will be
		received.
		*/
		enabled: Boolean;	
		/*
		The URL of a default icon for notifications.
		*/
		iconUrl: string;	
		/*
		The default language to assume for the title and body of the
		notification. If set this must be a valid
		[BCP 47](https://tools.ietf.org/html/bcp47) language tag.
		*/
		lang: string;	
		/*
		The default notification message.
		*/
		message: string;	
		/*
		A URL from which message information can be retrieved.
		
		When a push event happens that does not contain a message body this
		URL will be fetched. The document will be parsed as JSON, and should
		result in an object.
		
		The valid keys for the object are `title`, `message`, `url`, `icon`,
		`tag`, `dir`, `lang`, `noscreen`, `renotify`, `silent`, `sound`,
		`sticky` and `vibrate`. For documentation of these values see the
		attributes of the same names, except that these values override the
		element attributes.
		*/
		messageUrl: string;	
		/*
		If true then displaying the notification should not turn the device's
		screen on.
		*/
		noscreen: Boolean;	
		/*
		When a notification is displayed that has the same `tag` as an
		existing notification, the existing one will be replaced. If this
		flag is true then such a replacement will cause the user to be
		alerted as though it were a new notification, by vibration or sound
		as appropriate.
		*/
		renotify: Boolean;	
		/*
		If true then displaying the notification should not cause any
		vibration or sound to be played.
		*/
		silent: Boolean;	
		/*
		The URL of a default sound file to play when a notification is shown.
		*/
		sound: string;	
		/*
		If true then the notification should be sticky, meaning that it is
		not directly dismissable.
		*/
		sticky: Boolean;	
		/*
		The details of the current push subscription, if any.
		*/
		subscription: PushSubscription;	
		/*
		Indicates whether the Push and Notification APIs are supported by
		this browser.
		*/
		supported: Boolean;	
		/*
		A default tag for the notifications that will be generated by
		this element. Notifications with the same tag will overwrite one
		another, so that only one will be shown at once.
		*/
		tag: string;	
		/*
		The default notification title.
		*/
		title: string;	
		/*
		The pattern of vibration that should be used by default when a
		notification is displayed. See
		*/
		vibrate: Array<any>;	
		/*
		The location of the service worker script required by the element.
		The script is distributed alongside the main HTML import file for the
		element, so the location can normally be determined automatically.
		However, if you vulcanize your project you will need to include the
		script in your built project manually and use this property to let
		the element know how to load it.
		*/
		workerUrl: string;	

	
		/*
		Request push messaging to be disabled.
		*/
		disable();
	
		/*
		Request push messaging to be enabled.
		*/
		enable();
	
		/*
		Programmatically trigger a push message
		*/
		testPush(message);
	
	}
}
