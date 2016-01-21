
/// <reference path="../iron-elements/IronValidatableBehavior.d.ts"/>

declare module date {

	/* 
		
	*/
	export interface DateInput  extends Polymer.IronValidatableBehavior
	{
	

	
		/*
		*/
		ariaLabelPrefix: string;
	
		/*
		The date object used by the validator. Has two properties, month and year.
		       
		*/
		date: Object;
	
		/*
		The month component of the date displayed.
		       
		*/
		month: string;
	
		/*
		Set to true to mark the input as required.
		       
		*/
		required: boolean;
	
		/*
		*/
		validator: string;
	
		/*
		The year component of the date displayed.
		       
		*/
		year: string;
	

	
		/*
		*/
		validate();
	

	}

}
