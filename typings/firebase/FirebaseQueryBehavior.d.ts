

declare module Polymer {
	/** 
	*/
	export class FirebaseQueryBehavior 
	{
	
	
		/**
		*/
		dataAsObject;
	
		/**
		A Firebase API location that references an accessible document.
		*/
		location: string;
	
		/**
		If true, verbose debugging information will be printed to the console.
		*/
		log: Boolean;
	
		/**
		Firebase Query object corresponding to `location`.
		*/
		query: Object;
	

	
		/**
		Disconnects the current Firebase Query instance.
		*/
		disconnect();
	
	}
}
