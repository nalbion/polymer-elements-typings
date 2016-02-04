/// <reference path="../iron/IronResizableBehavior.d.ts"/>/// <reference path="../iron/IronMenubarBehavior.d.ts"/>

declare module paper {
	/* 
		Material design: [Tabs](https://www.google.com/design/spec/components/tabs.html)
		
		`paper-tabs` makes it easy to explore and switch between different views or functional aspects of
		an app, or to browse categorized data sets.
		
		Use `selected` property to get or set the selected tab.
		
		Example:
		
		    <paper-tabs selected="0">
		      <paper-tab>TAB 1</paper-tab>
		      <paper-tab>TAB 2</paper-tab>
		      <paper-tab>TAB 3</paper-tab>
		    </paper-tabs>
		
		See <a href="#paper-tab">paper-tab</a> for more information about
		`paper-tab`.
		
		A common usage for `paper-tabs` is to use it along with `iron-pages` to switch
		between different views.
		
		    <paper-tabs selected="{{selected}}">
		      <paper-tab>Tab 1</paper-tab>
		      <paper-tab>Tab 2</paper-tab>
		      <paper-tab>Tab 3</paper-tab>
		    </paper-tabs>
		
		    <iron-pages selected="{{selected}}">
		      <div>Page 1</div>
		      <div>Page 2</div>
		      <div>Page 3</div>
		    </iron-pages>
		
		
		To use links in tabs, add `link` attribute to `paper-tab` and put an `<a>`
		element in `paper-tab`.
		
		Example:
		
		    <style is="custom-style">
		      .link {
	*/
	export class PaperTabs  extends Polymer.IronResizableBehavior,Polymer.IronMenubarBehavior
	{
	
	
		/*
		If true, the tabs are aligned to bottom (the selection bar appears at the top).
		*/
		alignBottom: Boolean;	
		/*
		If true, dragging on the tabs to scroll is disabled.
		*/
		disableDrag: Boolean;	
		/*
		If true, scroll buttons (left/right arrow) will be hidden for scrollable tabs.
		*/
		hideScrollButtons: Boolean;	
		/*
		If true, the bottom bar to indicate the selected tab will not be shown.
		*/
		noBar: Boolean;	
		/*
		If true, ink ripple effect is disabled. When this property is changed,
		all descendant `<paper-tab>` elements have their `noink` property
		changed to the new value as well.
		*/
		noink: Boolean;	
		/*
		If true, the slide effect for the bottom bar is disabled.
		*/
		noSlide: Boolean;	
		/*
		If true, tabs are scrollable and the tab width is based on the label width.
		*/
		scrollable: Boolean;	
		/*
		*/
		selectable: string;	
		/*
		Gets or sets the selected element. The default is to use the index of the item.
		*/
		selected: string;	

	
	}
}
