

declare module Polymer {

	/* 
	*/
	export interface FirebaseQueryBehavior 
	{
	

	
		/*
		*/
		dataAsObject;
	
		/*
		A Firebase API location that references an accessible document.
		       
		*/
		location: string;
	
		/*
		If true, verbose debugging information will be printed to the console.
		       
		*/
		log: boolean;
	
		/*
		Firebase Query object corresponding to `location`.
		       
		*/
		query: Object;
	

	
		/*
		Disconnects the current Firebase Query instance.
		     
		*/
		disconnect();
	

	}
}
