

declare module iron {
	/* 
		Element access to Web Storage API (window.localStorage).
		
		Keeps `value` property in sync with localStorage.
		
		Value is saved as json by default.
		
		### Usage:
		
		`ls-sample` will automatically save changes to its value.
		
		    <dom-module id="ls-sample">
		      <iron-localstorage name="my-app-storage"
		        value="{{cartoon}}"
		        on-iron-localstorage-load-empty="initializeDefaultCartoon"
		      ></iron-localstorage>
		    </dom-module>
		
		    <script>
		      Polymer({
		        is: 'ls-sample',
		        properties: {
		          cartoon: {
		            type: Object
		          }
		        },
		        // initializes default if nothing has been stored
		        initializeDefaultCartoon: function() {
		          this.cartoon = {
		            name: "Mickey",
		            hasEars: true
		          }
		        },
		        // use path set api to propagate changes to localstorage
		        makeModifications: function() {
		          this.set('cartoon.name', "Minions");
		          this.set('cartoon.hasEars', false);
		        }
		      });
		    </script>
		
		### Tech notes:
		
		* `value.*` is observed, and saved on modifications. You must use
		    path change notifification methods such as `set()` to modify value
		    for changes to be observed.
		
		* Set `auto-save-disabled` to prevent automatic saving.
		
		* Value is saved as JSON by default.
		
		* To delete a key, set value to null
		
		Element listens to StorageAPI `storage` event, and will reload upon receiving it.
		
		**Warning**: do not bind value to sub-properties until Polymer
		[bug 1550](https://github.com/Polymer/polymer/issues/1550)
		is resolved. Local storage will be blown away.
		`<iron-localstorage value="{{foo.bar}}"` will cause **data loss**.
	*/
	export class IronLocalstorage 
	{
	/*	== EVENTS ==

	Event: 'iron-localstorage-load'
	Params: detail: {externalChange: boolean}
Fired when value loads from localStorage.

 Event: 'iron-localstorage-load-empty'
	Params: detail: {externalChange: boolean}
Fired when loaded value does not exist.
Event handler can be used to initialize default value.

 
	*/
	
		/*
		Value will not be saved automatically if true. You'll have to do it manually with `save()`
		*/
		autoSaveDisabled: Boolean;	
		/*
		Last error encountered while saving/loading items
		*/
		errorMessage: string;	
		/*
		localStorage item key
		*/
		name: string;	
		/*
		If true: do not convert value to JSON on save/load
		*/
		useRaw: Boolean;	
		/*
		The data associated with this storage.
		If set to null item will be deleted.
		*/
		value: any;	

	
		/*
		Loads the value again. Use if you modify
		localStorage using DOM calls, and want to
		keep this element in sync.
		*/
		reload();
	
		/*
		Saves the value to localStorage. Call to save if autoSaveDisabled is set.
		If `value` is null or undefined, deletes localStorage.
		*/
		save();
	
	}
}
