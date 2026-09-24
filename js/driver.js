console.log("Welcome to Minimal New Tab");
var newColour;
// Background color preference
function getBackground() {
	return localStorage.getItem('background') || '#85929E';
};

function setBackground(color) {
	localStorage.setItem('background', color);
};

window.addEventListener('storage', function (e) {
	if (e.key === 'background') {
		var color = e.newValue || '#85929E';
		document.documentElement.style.setProperty('--bg', color);
		setFavicon(color);
	}
});

// Check for background color
if (!localStorage.getItem('background')) {
	setBackground('#85929E');
};
// Clock and date
var nyear;
var nmonth;
var ndate;
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
		document.documentElement.style.setProperty('--bg', newColour);
		setFavicon(newColour);
		setBackground(newColour);
}
// Load complete function
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("clockbox").style.opacity = "1";
	document.getElementById("datebox").style.opacity = "1";
	document.getElementById("text").style.opacity = "1";
	updateOptionsStyle();
	clock();

	new jscolor(document.getElementById('colorpicker-input'), {
		value: getBackground(),
		onFineChange: function() {
			updateColor(this);
		}
	});
});

function updateOptionsStyle(){
	var elems = document.querySelectorAll("#options");
  var index = 0, length = elems.length;
  for ( ; index < length; index++) {
      elems[index].style.opacity = "1";
  }
}
