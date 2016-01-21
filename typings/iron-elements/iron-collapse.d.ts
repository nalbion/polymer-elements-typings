
declare module iron {

	/* 
		`iron-collapse` creates a collapsible block of content.  By default, the content
		will be collapsed.  Use `opened` or `toggle()` to show/hide the content.
		
		    <button on-click="toggle">toggle collapse</button>
		
		    <iron-collapse id="collapse">
		      <div>Content goes here...</div>
		    </iron-collapse>
		
		    ...
		
		    toggle: function() {
		      this.$.collapse.toggle();
		    }
		
		`iron-collapse` adjusts the height/width of the collapsible element to show/hide
		the content.  So avoid putting padding/margin/border on the collapsible directly,
		and instead put a div inside and style that.
		
		    <style>
		      .collapse-content {
		        padding: 15px;
		        border: 1px solid #dedede;
		      }
		    </style>
		
		    <iron-collapse>
		      <div class="collapse-content">
		        <div>Content goes here...</div>
		      </div>
		    </iron-collapse>
		
		
	*/
	export interface IronCollapse 
	{
	

	
		/*
		If true, the orientation is horizontal; otherwise is vertical.
		
		
		*/
		horizontal: boolean;
	
		/*
		Set noAnimation to true to disable animations
		
		
		*/
		noAnimation: boolean;
	
		/*
		Set opened to true to show the collapse element and to false to hide it.
		
		
		*/
		opened: boolean;
	

	
		/*
		enableTransition() is deprecated, but left over so it doesn't break existing code.
		Please use `noAnimation` property instead.
		
		
		*/
		enableTransition(enabled);
	
		/*
		*/
		hide();
	
		/*
		*/
		show();
	
		/*
		Toggle the opened state.
		
		
		*/
		toggle();
	
		/*
		*/
		updateSize(size, animated);
	

	}

}
