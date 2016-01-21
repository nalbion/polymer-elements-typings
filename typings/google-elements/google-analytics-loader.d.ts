
declare module google {

	/* 
		google-analytics-loader is used internally by elements that need to know api state, and user state.
		
		Loads gapi.client.analytics, and watches user signed-in state.
		
		
	*/
	export interface GoogleAnalyticsLoader 
	{
	

	
		/*
		True when user is authorized, and api is loaded
		
		*/
		allReady: boolean;
	
		/*
		True when api is loaded
		
		*/
		apiReady: boolean;
	
		/*
		True when user is authorized
		
		*/
		authorized: boolean;
	

	
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
