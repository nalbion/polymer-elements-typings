/// <reference path="../firebase/FirebaseQueryBehavior.d.ts"/>

declare module firebase {
	/* 
		An element wrapper for the Firebase API that provides a view into the provided
		Firebase location as an ordered collection.
		
		By default, Firebase yields values as unsorted document objects, where each of
		the children are accessible via object keys. The `<firebase-collection>`
		element allows Firebase API orderBy*, limitTo* and other query-oriented methods
		to be specified declaratively. The element then produces and maintains an Array
		of ordered child items of the document that is convenient for iterating over
		in other elements such as `<template is="dom-repeat">`.
		
		Example:
		
		      <template is="dom-bind">
		        <firebase-collection
		          order-by-child="height"
		          limit-to-first="3"
		          location="https://dinosaur-facts.firebaseio.com/dinosaurs"
		          data="{{dinosaurs}}"></firebase-collection>
		        <template is="dom-repeat" items="[[dinosaurs]]" as="dinosaur">
		          <h4>[[dinosaur.__firebaseKey__]]</h4>
		          Height: <span>[[dinosaur.height]]</span>m
		        </template>
		      </template>
		
		As you may have noticed above, the original key of each item is available as
		the `__firebaseKey__` property on the item.
		
		The element makes special accomodations for documents whose children are
		primitive values. A primitive value is wrapped in an object with the form:
		
		```javascript
		{
		  value: /* original primitive value 
		  __firebaseKey__: /* key of primitive value in parent document 
		}
		```
		
		Accessor methods such as `add` and `remove` are provided to enable convenient
		manipulation of the collection without direct knowledge of Firebase key values.
	*/
	export class FirebaseCollection  extends Polymer.FirebaseQueryBehavior
	{
	
	
		/*
		An ordered array of data items produced by the current Firebase Query
		instance.
		*/
		data: Array<any>;	
		/*
		*/
		dataAsObject;	
		/*
		Specify an end record for the set of records reflected in the
		collection.
		*/
		endAt: string;	
		/*
		Specify to create a query which includes children which match the
		specified value. The argument type depends on which orderBy*() function
		was used in this query. Specify a value that matches the orderBy*()
		type.
		*/
		equalTo: string;	
		/*
		Specify a maximum number of records reflected on the client limited to
		the first certain number of children.
		*/
		limitToFirst: Number;	
		/*
		Specify a maximum number of records reflected on the client limited to
		the last certain number of children.
		*/
		limitToLast: Number;	
		/*
		A Firebase API location that references an accessible document.
		*/
		location: string;	
		/*
		If true, verbose debugging information will be printed to the console.
		*/
		log: Boolean;	
		/*
		Specify a child key to order the set of records reflected on the
		client.
		*/
		orderByChild: string;	
		/*
		Specify to order by key the set of records reflected on the client.
		*/
		orderByKey: Boolean;	
		/*
		Specify to order by priority the set of records reflected on the
		client.
		*/
		orderByPriority: Boolean;	
		/*
		Specify to order by value the set of records reflected on the client.
		*/
		orderByValue: Boolean;	
		/*
		Specify to override the type used when deserializing the value of
		`start-at`, `end-at` and `equal-to` attributes. By default, these
		values are always deserialized as `String`, but sometimes it is
		preferrable to deserialize these values as e.g., `Number`.
		
		Accepted values for this attribute, and their corresponding
		deserialization types, are as follows:
		
		 - `string` => `String` (default)
		 - `number` => `Number`
		 - `boolean` => `Boolean`
		*/
		orderValueType: string;	
		/*
		A pointer to the current Firebase Query instance being used to
		populate `data`.
		*/
		query: Object;	
		/*
		Specify a start record for the set of records reflected in the
		collection.
		*/
		startAt: string;	

	
		/*
		Add an item to the document referenced at `location`. A key associated
		with the item will be created by Firebase, and can be accessed via the
		Firebase Query instance returned by this method.
		*/
		add(data: Object);
	
		/*
		Disconnects the current Firebase Query instance.
		*/
		disconnect();
	
		/*
		Look up an item in the local `data` Array by key.
		*/
		getByKey(key: string);
	
		/*
		Remove an item from the document referenced at `location`. The item
		is assumed to be an identical reference to an item already in the
		`data` Array.
		*/
		remove(data: Object);
	
		/*
		Remove an item from the document associated with `location` by key.
		*/
		removeByKey(key: string);
	
	}
}
