
/// <reference path="../firebase-elements/FirebaseQueryBehavior.d.ts"/>

declare module firebase {

	/* 
		An element wrapper for the Firebase API.
		
		A `<firebase-document>` is a reference to a remote document somewhere on
		Firebase. The element fetchs a document at a provided `location`, and exposes
		it as an Object that is suitable for deep two-way databinding.
		
		Example:
		
		    <firebase-document
		      location="https://dinosaur-facts.firebaseio.com/dinosaurs"
		      data="{{dinosaurs}}"></firebase-document>
		
		In the above example, if the `dinosaurs` object is data-bound elsewhere via
		Polymer's data-binding system, changes to the document will be automatically
		reflected in the remote document and any other clients referencing that
		document.
		
		
	*/
	export interface FirebaseDocument  extends Polymer.FirebaseQueryBehavior
	{
	

	
		/*
		The `data` object mapped to `location`.
		       
		*/
		data: Object;
	
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
