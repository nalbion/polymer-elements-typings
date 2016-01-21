
declare module google {

	/* 
		Element providing a button to start a Google Hangout.
		
		##### Example
		
		    <google-hangout-button></google-hangout-button>
		
		
	*/
	export interface GoogleHangoutButton 
	{
	/*
	== EVENTS ==

	Event: 'google-hangout-button-pregame'
	Params: e: Object
Fired when the hangout api is loaded but before rendering the button.

 Event: 'google-hangout-button-ready'
	Params: e: Object
Fired when the button is rendered and ready to use.

 
	*/

	
		/*
		Specifies the Google+ Hangout apps to launch when a user clicks the
		Hangout button. Invalid objects and parameters are ignored.
		
		See the [Initial app parameters reference](https://developers.google.com/+/hangouts/button#initial_app_parameters)
		for more details.
		       
		*/
		apps: Array<any>;
	
		/*
		Specifies the list of people to invite when the user clicks the
		Hangout button. Invalid objects and parameters are ignored.
		
		See the [Invite parameters reference](https://developers.google.com/+/hangouts/button#invite_parameters)
		for more details.
		       
		*/
		invites: Array<any>;
	
		/*
		Pre-populates the topic field for Hangouts on Air. Note that users can
		change the topic of the Hangout after they have joined.
		       
		*/
		topic: string;
	
		/*
		Specifies what type of Hangout should be started.
		Valid values are 'normal', 'onair', 'party' and 'moderated'
		
		See the [Hangout button parameter reference](https://developers.google.com/+/hangouts/button#hangout_button_parameters)
		for more details.
		       
		*/
		type: string;
	
		/*
		Specifies the width of the button.
		       
		*/
		width: number;
	

	

	}

}
