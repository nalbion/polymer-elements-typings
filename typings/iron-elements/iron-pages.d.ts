
/// <reference path="../iron-elements/IronResizableBehavior.d.ts"/>

/// <reference path="../iron-elements/IronSelectableBehavior.d.ts"/>

declare module iron {

	/* 
		`iron-pages` is used to select one of its children to show. One use is to cycle through a list of
		children "pages".
		
		Example:
		
		    <iron-pages selected="0">
		      <div>One</div>
		      <div>Two</div>
		      <div>Three</div>
		    </iron-pages>
		
		    <script>
		      document.addEventListener('click', function(e) {
		        var pages = document.querySelector('iron-pages');
		        pages.selectNext();
		      });
		    </script>
		
		
	*/
	export interface IronPages  extends Polymer.IronResizableBehavior,Polymer.IronSelectableBehavior
	{
	

	
		/* handler immediately changes it back
		*/
		activateEvent: string;
	

	

	}

}
