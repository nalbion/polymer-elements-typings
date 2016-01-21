
declare module marked {

	/* 
		Element wrapper for the [marked](https://github.com/chjj/marked) library.
		
		`<marked-element>` accepts Markdown source, and renders it to a child
		element with the class `markdown-html`. This child element can be styled
		as you would a normal DOM element. If you do not provide a child element
		with the `markdown-html` class, the Markdown source will still be rendered,
		but to a shadow DOM child that cannot be styled.
		
		The Markdown source can be specified either via the `markdown` attribute:
		
		    <marked-element markdown="`Markdown` is _awesome_!">
		      <div class="markdown-html"></div>
		    </marked-element>
		
		Or, you can provide it via a `<script type="text/markdown">` element child:
		
		    <marked-element>
		      <div class="markdown-html"></div>
		      <script type="text/markdown">
		        Check out my markdown!
		
		        We can even embed elements without fear of the HTML parser mucking up their
		        textual representation:
		
		        ```html
		        <awesome-sauce>
		          <div>Oops, I'm about to forget to close this div.
		        </awesome-sauce>
		        ```
		      </script>
		    </marked-element>
		
		Note that the `<script type="text/markdown">` approach is _static_. Changes to
		the script content will _not_ update the rendered markdown!
		
		### Styling
		If you are using a child with the `markdown-html` class, you can style it
		as you would a regular DOM element:
		
		    .markdown-html p {
		      color: red;
		    }
		
		    .markdown-html td:first-child {
		      padding-left: 24px;
		    }
		
		
	*/
	export interface MarkedElement 
	{
	

	
		/*The markdown source that should be rendered by this element. 
		*/
		markdown: string;
	
		/*
		*/
		outputElement;
	

	
		/*
		Renders `markdown` into this element's DOM.
		
		This is automatically called whenever the `markdown` property is changed.
		
		The only case where you should be calling this is if you are providing
		markdown via `<script type="text/markdown">` after this element has been
		constructed (or updating that markdown).
		     
		*/
		render();
	

	}

}