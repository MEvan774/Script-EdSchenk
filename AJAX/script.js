//bind de HTML id
let firstName = document.getElementById("firstName");
let age = document.getElementById("age");
let submitButton = document.getElementById("submitButton");
let responseHere = document.getElementById("responseHere");
//click event listener
submitButton.addEventListener('click', ajax);
//ajax functie
function ajax(){
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			responseHere.innerHTML = this.responseText;
		}
	};
	let httpString = "form_1.php?firstName=" + firstName.value + "&age=" + age.value;
	//debuggen laat de httpString zien
	console.log(httpString);
	//bereid de ajax actie voor
	xmlhttp.open("GET", httpString, true);
	xmlhttp.send(); //doe het
}