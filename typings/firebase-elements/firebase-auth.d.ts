
declare module firebase {

	/* 
		Element wrapper for the Firebase authentication API (https://www.firebase.com/docs/web/guide/user-auth.html).
		
		
	*/
	export interface FirebaseAuth 
	{
	

	
		/*
		When true, login will be attempted if login status check determines no user is
		logged in.  Should generally only be used with provider types that do not present
		a login UI, such as 'anonymous'.
		       
		*/
		autoLogin: boolean;
	
		/*
		Firebase location URL (must have simple login enabled via Forge interface).
		       
		*/
		location: string;
	
		/*
		Provider-specific options to pass to login, for provider types that take a second
		object to pass firebase-specific options.  May be overridden at `login()`-time.
		       
		*/
		options: Object;
	
		/*
		Provider-specific parameters to pass to login.  May be overridden at `login()`-time.
		       
		*/
		params: Object;
	
		/*
		Default login provider type.  May be one of: `anonymous`, `custom`, `password`
		`facebook`, `github`, `twitter`, `google`.
		       
		*/
		provider: string;
	
		/*
		When true, authentication will try to redirect instead of using a
		popup if possible.
		       
		*/
		redirect: boolean;
	
		/*
		A pointer to the Firebase instance being used by the firebase-auth element.
		       
		*/
		ref: Object;
	
		/*
		When true, login status can be determined by checking `user` property.
		       
		*/
		statusKnown: boolean;
	
		/*
		When logged in, this property reflects the firebase user auth object.
		       
		*/
		user: Object;
	

	
		/*
		Changes the email of a "password provider"-based user account.
		
		If the operation is successful, the `email-changed` event is fired.
		
		If the operation fails, the `error` event is fired, with `e.detail`
		containing error information supplied from Firebase.
		
		
		*/
		changeEmail(oldEmail: string, newEmail: string, password);
	
		/*
		Changes the password of a "password provider"-based user account.
		
		If the operation is successful, the `password-changed` event is fired.
		
		If the operation fails, the `error` event is fired, with `e.detail`
		containing error information supplied from Firebase.
		
		
		*/
		changePassword(email: string, oldPassword: string, newPassword: string);
	
		/*
		Creates a "password provider"-based user account.
		
		If the operation is successful, the `user-created` event is fired.
		
		If the operation fails, the `error` event is fired, with `e.detail`
		containing error information supplied from Firebase.
		
		
		*/
		createUser(email: string, password: string);
	
		/*
		Performs a login attempt, using the `provider` specified via attribute/property,
		or optionally via `provider` argument to the `login` function.  Optionally,
		provider-specific login parameters can be specified via attribute (JSON)/property,
		or via the `params` argument to the `login` function.
		
		If the login is successful, the `login` event is fired, with `e.detail.user`
		containing the authenticated user object from Firebase.
		
		If login fails, the `error` event is fired, with `e.detail` containing error
		information supplied from Firebase.
		
		If the browswer supports `navigator.onLine` network status reporting and the
		network is currently offline, the login attempt will be queued until the network
		is restored.
		
		
		*/
		login(params: Object, options: Object);
	
		/*
		Performs a logout attempt.
		
		If the logout is successful, the `logout` event is fired.
		
		If logout fails, the `error` event is fired, with `e.detail` containing error
		information supplied from Firebase.
		
		If the browswer supports `navigator.onLine` network status reporting and the
		network is currently offline, the logout attempt will be queued until the network
		is restored.
		
		
		*/
		logout();
	
		/*
		Removes a "password provider"-based user account.
		
		If the operation is successful, the `user-removed` event is fired.
		
		If the operation fails, the `error` event is fired, with `e.detail`
		containing error information supplied from Firebase.
		
		
		*/
		removeUser(email: string, password: string);
	
		/*
		Sends a password reset email for a "password provider"-based user account.
		
		If the operation is successful, the `password-reset` event is fired.
		
		If the operation fails, the `error` event is fired, with `e.detail`
		containing error information supplied from Firebase.
		
		
		*/
		sendPasswordResetEmail(email: string);
	

	}

}
