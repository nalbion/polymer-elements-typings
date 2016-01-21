
declare module paper {

	/* 
		`<paper-input-container>` is a container for a `<label>`, an `<input is="iron-input">` or
		`<iron-autogrow-textarea>` and optional add-on elements such as an error message or character
		counter, used to implement Material Design text fields.
		
		For example:
		
		    <paper-input-container>
		      <label>Your name</label>
		      <input is="iron-input">
		    </paper-input-container>
		
		### Listening for input changes
		
		By default, it listens for changes on the `bind-value` attribute on its children nodes and perform
		tasks such as auto-validating and label styling when the `bind-value` changes. You can configure
		the attribute it listens to with the `attr-for-value` attribute.
		
		### Using a custom input element
		
		You can use a custom input element in a `<paper-input-container>`, for example to implement a
		compound input field like a social security number input. The custom input element should have the
		`paper-input-input` class, have a `notify:true` value property and optionally implements
		`Polymer.IronValidatableBehavior` if it is validatable.
		
		    <paper-input-container attr-for-value="ssn-value">
		      <label>Social security number</label>
		      <ssn-input class="paper-input-input"></ssn-input>
		    </paper-input-container>
		
		### Validation
		
		If the `auto-validate` attribute is set, the input container will validate the input and update
		the container styling when the input value changes.
		
		### Add-ons
		
		Add-ons are child elements of a `<paper-input-container>` with the `add-on` attribute and
		implements the `Polymer.PaperInputAddonBehavior` behavior. They are notified when the input value
		or validity changes, and may implement functionality such as error messages or character counters.
		They appear at the bottom of the input.
		
		### Prefixes and suffixes
		These are child elements of a `<paper-input-container>` with the `prefix`
		or `suffix` attribute, and are displayed inline with the input, before or after.
		
		    <paper-input-container>
		      <div prefix>$</div>
		      <label>Total</label>
		      <input is="iron-input">
		      <paper-icon-button suffix icon="clear"></paper-icon-button>
		    </paper-input-container>
		
		### Styling
		
		The following custom properties and mixins are available for styling:
		
		Custom property | Description | Default
		----------------|-------------|----------
		`--paper-input-container-color` | Label and underline color when the input is not focused | `--secondary-text-color`
		`--paper-input-container-focus-color` | Label and underline color when the input is focused | `--default-primary-color`
		`--paper-input-container-invalid-color` | Label and underline color when the input is is invalid | `--google-red-500`
		`--paper-input-container-input-color` | Input foreground color | `--primary-text-color`
		`--paper-input-container` | Mixin applied to the container | `{}`
		`--paper-input-container-disabled` | Mixin applied to the container when it's disabled | `{}`
		`--paper-input-container-label` | Mixin applied to the label | `{}`
		`--paper-input-container-label-focus` | Mixin applied to the label when the input is focused | `{}`
		`--paper-input-container-label-floating` | Mixin applied to the label when floating | `{}`
		`--paper-input-container-input` | Mixin applied to the input | `{}`
		`--paper-input-container-underline` | Mixin applied to the underline | `{}`
		`--paper-input-container-underline-focus` | Mixin applied to the underline when the input is focused | `{}`
		`--paper-input-container-underline-disabled` | Mixin applied to the underline when the input is disabled | `{}`
		`--paper-input-prefix` | Mixin applied to the input prefix | `{}`
		`--paper-input-suffix` | Mixin applied to the input suffix | `{}`
		
		This element is `display:block` by default, but you can set the `inline` attribute to make it
		`display:inline-block`.
		
	*/
	export interface PaperInputContainer 
	{
	

	
		/*
		Set to true to always float the floating label.
		       
		*/
		alwaysFloatLabel: boolean;
	
		/*
		The attribute to listen for value changes on.
		       
		*/
		attrForValue: string;
	
		/*
		Set to true to auto-validate the input value when it changes.
		       
		*/
		autoValidate: boolean;
	
		/*
		True if the input has focus.
		       
		*/
		focused: boolean;
	
		/*
		True if the input is invalid. This property is set automatically when the input value
		changes if auto-validating, or when the `iron-input-validate` event is heard from a child.
		       
		*/
		invalid: boolean;
	
		/*
		Set to true to disable the floating label. The label disappears when the input value is
		not null.
		       
		*/
		noLabelFloat: boolean;
	

	
		/*
		Call this to update the state of add-ons.
		
		*/
		updateAddons(state: Object);
	

	}

}
