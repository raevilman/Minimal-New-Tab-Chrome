console.log("Welcome to Minimal New Tab");
var newColour;
// Cookie handlers
function sc(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
};

function gc(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	};
	return "";
};
// Anti-Right click
/*
if (document.addEventListener) {
	document.addEventListener("contextmenu", function(e) {
		if (document.activeElement.tagName != "INPUT") {
			e.preventDefault();
		};
	}, false);
} else {
	document.attachEvent("oncontextmenu", function() {
		if (document.activeElement.tagName != "INPUT") {
			window.event.returnValue = false;
		};
	});
};
*/
// Check for background color
if (gc("background") === "") {
	sc("background", "#85929E", 365);
};
// Clock and date
var nyear;
var nmonth;
var ndate;
var hourtf;
var tmonth = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
setInterval(clock, 3000);

function clock() {
	var d = new Date();
	nyear = d.getYear();
	nmonth = d.getMonth();
	ndate = d.getDate();
	var nhour = d.getHours(),
		nmin = d.getMinutes(),
		// nsec = d.getSeconds(),
		ap;
	var thour = d.getHours();
	if (nhour === 0) {
		ap = " AM";
		nhour = 12;
	} else if (nhour < 12) {
		ap = " AM";
	} else if (nhour === 12) {
		ap = " PM";
	} else if (nhour > 12) {
		ap = " PM";
		nhour -= 12;
	};
	if (nmin <= 9) {
		nmin = "0" + nmin;
	};
	nyear = nyear + 1900;
	document.getElementById("clockbox").innerHTML = nhour + ":" + nmin + ap;
	// document.getElementById("clockbox").innerHTML = nhour + ":" + nmin + ":" + nsec + ap;
	document.getElementById("datebox").innerHTML = ndate + " " + tmonth[nmonth] + " " + nyear;
};

function updateColor(jscolor) {
    // 'jscolor' instance can be used as a string
    newColour = '#' + jscolor
		console.log(newColour);
		document.getElementById("body").style.backgroundColor = newColour;
		document.getElementById("options").style.backgroundColor = newColour;
		sc("background", newColour, 365);
}
function toggle_visibility(id)
    {
        var e = document.getElementById(id);
        if ( e.style.display == 'block' )
            e.style.display = 'none';
        else
            e.style.display = 'block';
    }
// document.getElementById("options").addEventListener("click", function() {
// 	var ex = "Ex. #85929E";
// 	newColour = prompt("Choose your new background color. You must input an HTML hex color code...", ex);
// 	if (newColour === null || newColour === "" || newColour === ex) {
// 		return;
// 	} else {
// 		document.getElementById("body").style.backgroundColor = newColour;
// 		document.getElementById("options").style.backgroundColor = newColour;
// 		sc("background", newColour, 365);
// 	};
// }, false);

// Load complete function
window.onload = function() {
	document.getElementById("body").style.backgroundColor = gc("background");
	document.getElementById("clockbox").style.opacity = "1";
	document.getElementById("datebox").style.opacity = "1";
	document.getElementById("text").style.opacity = "1";
	updateOptionsStyle();
	clock();
};

function updateOptionsStyle(){
	var bgColor = gc("background");
	var elems = document.querySelectorAll("#options");
  var index = 0, length = elems.length;
  for ( ; index < length; index++) {
      elems[index].style.backgroundColor = bgColor;
      elems[index].style.opacity = "1";
  }
}
