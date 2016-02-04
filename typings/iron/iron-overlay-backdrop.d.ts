

declare module iron {
	/* 
		`iron-overlay-backdrop` is a backdrop used by `Polymer.IronOverlayBehavior`. It should be a
		singleton.
		
		### Styling
		
		The following custom properties and mixins are available for styling.
		
		Custom property | Description | Default
		-------------------------------------------|------------------------|---------
		`--iron-overlay-backdrop-background-color` | Backdrop background color                                     | #000
		`--iron-overlay-backdrop-opacity`          | Backdrop opacity                                              | 0.6
		`--iron-overlay-backdrop`                  | Mixin applied to `iron-overlay-backdrop`.                      | {}
		`--iron-overlay-backdrop-opened`           | Mixin applied to `iron-overlay-backdrop` when it is displayed | {}
	*/
	export class IronOverlayBackdrop 
	{
	
	
		/*
		Returns true if the backdrop is opened.
		*/
		opened: Boolean;	

	
		/*
		Hides the backdrop if needed.
		*/
		close();
	
		/*
		Removes the backdrop from document body if needed.
		*/
		complete();
	
		/*
		Shows the backdrop if needed.
		*/
		open();
	
		/*
		Appends the backdrop to document body and sets its `z-index` to be below the latest overlay.
		*/
		prepare();
	
	}
}
