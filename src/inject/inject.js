var pattern = "a[href*='maps.google.co.in'], a[href*='google.co.in/maps'], a[href*='openstreetmap.org']";

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);


        jQuery(pattern).addClass('saveverything_blocked');
        $(pattern).click(function() {
                if (confirm('Visiting unapproved Maps Could be illegal according to "Geospatial Information Regulation Bill, 2016" of India. Would you like to save the maps?')) {
                    location.href="http://savethemap.in/";
                    return false;
                }else{
                    return true;
                }
        });






	}
	}, 10);
});

