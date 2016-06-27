var PROFILE = (function() {
	var isMobile = (/Android|iPhone|iPad|iPod/i).test(navigator.userAgent || navigator.vendor || window.opera);
	var isAndroid = (/Android/i).test(navigator.userAgent || navigator.vendor || window.opera);
	var isiOS = (/iPhone|iPad|iPod/i).test(navigator.userAgent || navigator.vendor || window.opera);
	var isSafari = (/Version\/\d.*Safari/i).test(navigator.userAgent || navigator.vendor || window.opera);
	var appleWebKitVersion = (navigator.userAgent || navigator.vendor || window.opera).match(/AppleWebKit\/([\d.]+)/i);
	var chromeVersion = (navigator.userAgent || navigator.vendor || window.opera).match(/Chrome\/([\d.]+)/i);
	var isAndroidBrowser = isAndroid && (/Version\/[.0-9]|SamsungBrowser\/[.0-9]/i).test(navigator.userAgent || navigator.vendor || window.opera);
	var isChrome = !isAndroidBrowser && (/Chrome\/[.0-9]* Mobile/i).test(navigator.userAgent || navigator.vendor || window.opera);
	var safariVersion =(navigator.userAgent || navigator.vendor || window.opera).match(/Version\/(\d)/i);
	
	if(isMobile) {
		document.documentElement.classList.add('mobile');
	}
	if(isiOS) {
		document.documentElement.classList.add('ios');
		
		if( isSafari && safariVersion.length > 1 && safariVersion[1] >= 9 ) {
			// Check both width and height since the phone may be in landscape.
			var iphone5sWidth = 640;
			var iphone5sHeight = 1136;
			var width = screen.availWidth;
			var height = screen.availHeight;
			var pixelWidth = width * window.devicePixelRatio;
			var pixelHeight = height * window.devicePixelRatio;
			// Expect an exact match on width.
			if (iphone5sWidth >= pixelWidth || iphone5sWidth >= pixelHeight) {
				document.documentElement.classList.add('ios-small');
			}
		}
	}
	if(isAndroid) {
		document.documentElement.classList.add('android');
	}


	
	return {
		isMobile: isMobile,
		isAndroid: isAndroid,
		isiOS: isiOS,
		isSafari: isSafari,
		isChrome: isChrome,
		isAndroidBrowser: isAndroidBrowser,
		safariVersion:safariVersion
	};
}());