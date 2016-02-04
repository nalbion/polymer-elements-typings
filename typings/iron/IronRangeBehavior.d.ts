

module Polymer {
	/** 
		`iron-range-behavior` provides the behavior for something with a minimum to maximum range.
	*/
	export interface IronRangeBehavior
	{
	
	
		/**
		The number that indicates the maximum value of the range.
		*/
		max: Number;
	
		/**
		The number that indicates the minimum value of the range.
		*/
		min: Number;
	
		/**
		Returns the ratio of the value.
		*/
		ratio: Number;
	
		/**
		Specifies the value granularity of the range's value.
		*/
		step: Number;
	
		/**
		The number that represents the current value.
		*/
		value: Number;
	

	
	}
}
