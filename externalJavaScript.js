
			
function Notice(){
				
		var x;
		var person=prompt("Please enter your email address", " ");
		if (person!=null)
    				{
				x="Great! We have added</br> " + person + "  to our mailing list!";
				document.getElementById("Notice").innerHTML=x;
				}
}
			
			 

function initMap() {
 
  
		var hq = {lat: 52.663, lng: -8.626};
 
  
		var map = new google.maps.Map(
			document.getElementById('map'), {zoom: 4, center: hq});
  
		var marker = new google.maps.Marker({position: hq, map: map});
}

function myAge() {
					var txt;
					if (confirm("Click OK if you are at least 18 years of age or Cancel if you are under 18")) {
					txt = "You have declared you are at least 18 years of age";
				} else {
						window.location.href = "accessdenied.html";
						}
						document.getElementById("age").innerHTML = txt;
}



function poll_vote() {
						if(confirm("Really? THAT'S your favourite?"))
						document.forms[0].submit();
						else
							return false;
}
