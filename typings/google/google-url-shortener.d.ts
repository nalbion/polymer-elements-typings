

declare module google {
	/* 
		`google-url-shortener` is a web component that shortens URLs with the
		<a href="https://developers.google.com/url-shortener/">Google URL Shortener API
		</a>.
		
		##### Example
		
		    <google-url-shortener id="shortener"></google-url-shortener>
		
		    <script>
		      var shortener = document.getElementById('shortener');
		
		      shortener.addEventListener('google-url-shorten', function(event) {
		        console.log(event.detail.shortUrl);
		      });
		
		      // Shorten the current page URL.
		      shortener.longUrl = document.URL;
		      shortener.shorten();
		    </script>
		
		##### Example using `auto` and binding.
		
		    <google-url-shortener id="shortener" longUrl="{{longUrl}}" auto>
		    </google-url-shortener>
		
		    <script>
		      var shortener = document.getElementById('shortener');
		
		      shortener.addEventListener('google-url-shorten', function(event) {
		        // This will be called automatically every time `longUrl` changes.
		        console.log(event.detail.shortUrl);
		      });
		    </script>
	*/
	export class GoogleUrlShortener 
	{
	/*	== EVENTS ==

	Event: 'google-url-shorten'
	
Fired when the URL gets successfully shortened.

 Event: 'google-url-shorten-error'
	
Fired if an attempt to shorten a URL results in an error.

 Event: 'google-url-shortener-ready'
	
Fired when the component is ready for shortening.

 
	*/
	
		/*
		If true, automatically performs the shortening request when `longUrl`
		changes.
		*/
		auto: Boolean;	
		/*
		Error when url was shortened
		*/
		error: string;	
		/*
		The URL to be shortened.
		*/
		longUrl: string;	
		/*
		Shortened URL
		*/
		shortUrl: string;	

	
		/*
		Shortens the URL in `longUrl`. Use if `auto` is not set.
		*/
		shorten();
	
	}
}
