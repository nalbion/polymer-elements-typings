

declare module Polymer {

	/* 
		Use `Polymer.IronOverlayBehavior` to implement an element that can be hidden or shown, and displays
		on top of other content. It includes an optional backdrop, and can be used to implement a variety
		of UI controls including dialogs and drop downs. Multiple overlays may be displayed at once.
		
		### Closing and canceling
		
		A dialog may be hidden by closing or canceling. The difference between close and cancel is user
		intent. Closing generally implies that the user acknowledged the content on the overlay. By default,
		it will cancel whenever the user taps outside it or presses the escape key. This behavior is
		configurable with the `no-cancel-on-esc-key` and the `no-cancel-on-outside-click` properties.
		`close()` should be called explicitly by the implementer when the user interacts with a control
		in the overlay element. When the dialog is canceled, the overlay fires an 'iron-overlay-canceled'
		event. Call `preventDefault` on this event to prevent the overlay from closing.
		
		### Positioning
		
		By default the element is sized and positioned to fit and centered inside the window. You can
		position and size it manually using CSS. See `Polymer.IronFitBehavior`.
		
		### Backdrop
		
		Set the `with-backdrop` attribute to display a backdrop behind the overlay. The backdrop is
		appended to `<body>` and is of type `<iron-overlay-backdrop>`. See its doc page for styling
		options.
		
		### Limitations
		
		The element is styled to appear on top of other content by setting its `z-index` property. You
		must ensure no element has a stacking context with a higher `z-index` than its parent stacking
		context. You should place this element as a child of `<body>` whenever possible.
		
		
	*/
	export interface IronOverlayBehavior  extends Polymer.IronFitBehavior,Polymer.IronResizableBehavior
	{
	/*
	== EVENTS ==

	Event: 'iron-overlay-canceled'
	
Fired when the `iron-overlay` is canceled, but before it is closed.
Cancel the event to prevent the `iron-overlay` from closing.
 Event: 'iron-overlay-canceled'
	
Fired when the `iron-overlay` is canceled, but before it is closed.
Cancel the event to prevent the `iron-overlay` from closing.
 Event: 'iron-overlay-closed'
	Params: set: {canceled: (boolean|undefined)}
Fired after the `iron-overlay` closes.
 Event: 'iron-overlay-closed'
	Params: set: {canceled: (boolean|undefined)}
Fired after the `iron-overlay` closes.
 Event: 'iron-overlay-opened'
	
Fired after the `iron-overlay` opens.
 Event: 'iron-overlay-opened'
	
Fired after the `iron-overlay` opens.
 
	*/

	
		/*
		The backdrop element.
		
		*/
		backdropElement;
	
		/*
		True if the overlay was canceled when it was last closed.
		       
		*/
		canceled: boolean;
	
		/*
		Returns the reason this dialog was last closed.
		       
		*/
		closingReason: Object;
	
		/*
		Set to true to disable auto-focusing the overlay or child nodes with
		the `autofocus` attribute` when the overlay is opened.
		       
		*/
		noAutoFocus: boolean;
	
		/*
		Set to true to disable canceling the overlay with the ESC key.
		       
		*/
		noCancelOnEscKey: boolean;
	
		/*
		Set to true to disable canceling the overlay by clicking outside it.
		       
		*/
		noCancelOnOutsideClick: boolean;
	
		/*
		True if the overlay is currently displayed.
		       
		*/
		opened: boolean;
	
		/*
		Set to true to display a backdrop behind the overlay.
		       
		*/
		withBackdrop: boolean;
	

	
		/*
		Cancels the overlay.
		     
		*/
		cancel();
	
		/*
		Close the overlay.
		     
		*/
		close();
	
		/*
		Open the overlay.
		     
		*/
		open();
	
		/*
		Toggle the opened state of the overlay.
		     
		*/
		toggle();
	

	}
}
