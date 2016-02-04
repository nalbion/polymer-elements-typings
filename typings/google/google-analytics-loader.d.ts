

declare module google {
	/* 
		google-analytics-loader is used internally by elements that need to know api state, and user state.
		
		Loads gapi.client.analytics, and watches user signed-in state.
	*/
	export class GoogleAnalyticsLoader 
	{
	
	
		/*
		True when user is authorized, and api is loaded
		*/
		allReady: Boolean;	
		/*
		True when api is loaded
		*/
		apiReady: Boolean;	
		/*
		True when user is authorized
		*/
		authorized: Boolean;	

	
		/*
		*/
		computeAllReady(apiReady, authorized);
	
		/*
		*/
		handleApiFailedToLoad(ev, detail);
	
		/*
		*/
		handleApiLoad();
	
		/*
		*/
		handleAuthSignout();
	
		/*
		*/
		handleAuthSuccess();
	
	}
}
