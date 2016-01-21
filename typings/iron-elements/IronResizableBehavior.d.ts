

declare module Polymer {

	/* 
		`IronResizableBehavior` is a behavior that can be used in Polymer elements to
		coordinate the flow of resize events between "resizers" (elements that control the
		size or hidden state of their children) and "resizables" (elements that need to be
		notified when they are resized or un-hidden by their parents in order to take
		action on their new measurements).
		Elements that perform measurement should add the `IronResizableBehavior` behavior to
		their element definition and listen for the `iron-resize` event on themselves.
		This event will be fired when they become showing after having been hidden,
		when they are resized explicitly by another resizable, or when the window has been
		resized.
		Note, the `iron-resize` event is non-bubbling.
		
		
	*/
	export interface IronResizableBehavior 
	{
	

	

	
		/*
		Used to assign the closest resizable ancestor to this resizable
		if the ancestor detects a request for notifications.
		     
		*/
		assignParentResizable(parentResizable);
	
		/*
		Can be called to manually notify a resizable and its descendant
		resizables of a resize change.
		     
		*/
		notifyResize();
	
		/*
		This method can be overridden to filter nested elements that should or
		should not be notified by the current element. Return true if an element
		should be notified, or false if it should not be notified.
		
		
		*/
		resizerShouldNotify(element: htmlelement);
	
		/*
		Used to remove a resizable descendant from the list of descendants
		that should be notified of a resize change.
		     
		*/
		stopResizeNotificationsFor(target);
	

	}
}
