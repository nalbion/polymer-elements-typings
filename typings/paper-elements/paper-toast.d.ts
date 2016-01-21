
/// <reference path="../iron-elements/IronOverlayBehavior.d.ts"/>

declare module paper {

	/* 
		Material design: [Snackbards & toasts](https://www.google.com/design/spec/components/snackbars-toasts.html)
		
		`paper-toast` provides a subtle notification toast. Only one `paper-toast` will
		be visible on screen.
		
		Use `opened` to show the toast:
		
		Example:
		
		    <paper-toast text="Hello world!" opened></paper-toast>
		
		Also `open()` or `show()` can be used to show the toast:
		
		Example:
		
		    <paper-button on-click="openToast">Open Toast</paper-button>
		    <paper-toast id="toast" text="Hello world!"></paper-toast>
		
		    ...
		
		    openToast: function() {
		      this.$.toast.open();
		    }
		
		Set `duration` to 0, a negative number or Infinity to persist the toast on screen:
		
		Example:
		
		    <paper-toast text="Terms and conditions" opened duration="0">
		      <a href="#">Show more</a>
		    </paper-toast>
		
		
		### Styling
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-toast-background-color` | The paper-toast background-color | `#323232`
		`--paper-toast-color` | The paper-toast color | `#f1f1f1`
		
		
	*/
	export interface PaperToast  extends Polymer.IronOverlayBehavior
	{
	/*
	== EVENTS ==

	Event: ''iron-announce''
	Params: detail: {text: string}
Fired when `paper-toast` is opened.

 
	*/

	
		/*
		The duration in milliseconds to show the toast.
		Set to `0`, a negative number, or `Infinity`, to disable the
		toast auto-closing.
		           
		*/
		duration: number;
	
		/*
		Overridden from `IronOverlayBehavior`.
		Set to false to enable closing of the toast by clicking outside it.
		           
		*/
		noCancelOnOutsideClick: boolean;
	
		/*
		The text to display in the toast.
		           
		*/
		text: string;
	
		/*
		Read-only. Deprecated. Use `opened` from `IronOverlayBehavior`.
		
		*/
		visible;
	

	
		/*
		Hide the toast. Same as `close()` from `IronOverlayBehavior`.
		         
		*/
		hide();
	
		/*
		Show the toast. Same as `open()` from `IronOverlayBehavior`.
		         
		*/
		show();
	

	}

}
