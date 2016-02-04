

declare module google {
	/* 
		&lt;google-signin&gt; is used to authenticate with Google, allowing you to interact
		with other Google APIs such as Drive and Google+.
		
		<img style="max-width:100%;" src="https://cloud.githubusercontent.com/assets/107076/6791176/5c868822-d16a-11e4-918c-ec9b84a2db45.png"/>
		
		If you do not need to show the button, use companion `<google-signin-aware>` element to declare scopes, check authentication state.
		
		#### Examples
		
		    <google-signin client-id="..." scopes="https://www.googleapis.com/auth/drive"></google-signin>
		
		    <google-signin label-signin="Sign-in" client-id="..." scopes="https://www.googleapis.com/auth/drive"></google-signin>
		
		    <google-signin theme="dark" width="iconOnly" client-id="..." scopes="https://www.googleapis.com/auth/drive"></google-signin>
		
		
		#### Notes
		
		The attribute `clientId` is provided in your Google Developers Console
		(https://console.developers.google.com).
		
		The `scopes` attribute allows you to specify which scope permissions are required
		(e.g do you want to allow interaction with the Google Drive API). Many APIs also
		need to be enabled in the Google Developers Console before you can use them.
		
		The `requestVisibleActions` attribute is necessary if you want to write app
		activities (https://developers.google.com/+/web/app-activities/) on behalf of
		the user. Please note that this attribute is only valid in combination with the
		plus.login scope (https://www.googleapis.com/auth/plus.login).
		
		The `offline` attribute allows you to get an auth code which your server can
		redeem for an offline access token
		(https://developers.google.com/identity/sign-in/web/server-side-flow).
		You can also set `offline-always-prompt` instead of `offline` to ensure that your app
		will re-prompt the user for offline access and generate a working `refresh_token`
		even if they have already granted offline access to your app in the past.
		
		Use label properties to customize prompts.
		
		The button can be styled in using the `height`, `width`, and `theme` attributes.
		These attributes help you follow the Google+ Sign-In button branding guidelines
		(https://developers.google.com/+/branding-guidelines).
		
		The `google-signin-success` event is triggered when a user successfully authenticates
		and `google-signed-out` is triggered when user signs out.
		You can also use `isAuthorized` attribute to observe user's authentication state.
		
		Additional events, such as `google-signout-attempted` are
		triggered when the user attempts to sign-out and successfully signs out.
		
		When requesting offline access, the `google-signin-offline-success` event is
		triggered when the user successfully consents with offline support.
		
		The `google-signin-necessary` event is fired when scopes requested via
		google-signin-aware elements require additional user permissions.
		
		#### Testing
		
		By default, the demo accompanying this element is setup to work on localhost with
		port 8080. That said, you *should* update the `clientId` to your own one for
		any apps you're building. See the Google Developers Console
		(https://console.developers.google.com) for more info.
	*/
	export class GoogleSignin 
	{
	/*	== EVENTS ==

	Event: 'google-signed-out'
	
Fired when the user is signed-out.
 Event: 'google-signin-aware-signed-out'
	
Fired when this scope is not authorized
 Event: 'google-signin-aware-success'
	Params: result: Object
Fired when signed in, and scope has been authorized
 Event: 'google-signin-necessary'
	
Fired if user requires additional authorization
 Event: 'google-signin-offline-success'
	Params: detail: Object, detail.code: string
Fired when an offline authorization is successful.
 Event: 'google-signin-success'
	
Fired when user is signed in.
You can use auth2 api to retrieve current user: `gapi.auth2.getAuthInstance().currentUser.get();`
 
	*/
	
		/*
		App package name for android over-the-air installs.
		See the relevant [docs](https://developers.google.com/+/web/signin/android-app-installs)
		*/
		appPackageName: string;	
		/*
		The brand being used for logo and styling.
		*/
		brand: string;	
		/*
		a Google Developers clientId reference
		*/
		clientId: string;	
		/*
		The cookie policy defines what URIs have access to the session cookie
		remembering the user's sign-in state.
		See the relevant [docs](https://developers.google.com/+/web/signin/reference#determining_a_value_for_cookie_policy) for more information.
		*/
		cookiePolicy: string;	
		/*
		By default the ripple expands to fill the button. Set this to true to
		constrain the ripple to a circle within the button.
		*/
		fill: Boolean;	
		/*
		True if *any* element has google+ scopes
		*/
		hasPlusScopes: Boolean;	
		/*
		The height to use for the button.
		
		Available options: short, standard, tall.
		*/
		height: HeightValue;	
		/*
		The Google Apps domain to which users must belong to sign in.
		See the relevant [docs](https://developers.google.com/identity/sign-in/web/reference) for more information.
		*/
		hostedDomain: string;	
		/*
		True if authorizations for *this* element have been granted
		*/
		isAuthorized: Boolean;	
		/*
		An optional label for the button for additional permissions.
		*/
		labelAdditional: string;	
		/*
		An optional label for the sign-in button.
		*/
		labelSignin: string;	
		/*
		An optional label for the sign-out button.
		*/
		labelSignout: string;	
		/*
		True if additional authorization required globally
		*/
		needAdditionalAuth: Boolean;	
		/*
		Allows for offline `access_token` retrieval during the signin process.
		*/
		offline: Boolean;	
		/*
		Forces a re-prompt, even if the user has already granted offline
		access to your application in the past. You only need one of
		`offline` and `offlineAlwaysPrompt`.
		*/
		offlineAlwaysPrompt: Boolean;	
		/*
		If true, the button will be styled with a shadow.
		*/
		raised: Boolean;	
		/*
		The app activity types you want to write on behalf of the user
		(e.g http://schemas.google.com/AddActivity)
		*/
		requestVisibleActions: string;	
		/*
		The scopes to provide access to (e.g https://www.googleapis.com/auth/drive)
		and should be space-delimited.
		*/
		scopes: string;	
		/*
		Is user signed in?
		*/
		signedIn: Boolean;	
		/*
		The theme to use for the button.
		
		Available options: light, dark.
		*/
		theme: ThemeValue;	
		/*
		The width to use for the button.
		
		Available options: iconOnly, standard, wide.
		*/
		width: WidthValue;	

	
		/*Sign in user. Opens the authorization dialog for signing in.
		The dialog will be blocked by a popup blocker unless called inside click handler.
		*/
		signIn();
	
		/*Sign out the user
		*/
		signOut();
	
	}
}
