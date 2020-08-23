
var click3 = 0;
function onClick3() {
	click3 -= 1;
	//document.getElementById("click3").innerHTML = click3;
	sumClicks();
};



var click4 = 2;

function onClick4() {
	click4 += 1;
	//document.getElementById("click4").innerHTML = click4;
	sumClicks();
};


const pdc = document.querySelector('.pdc');

pdc.addEventListener('click', function () {
const sum = document.getElementById("sum").innerHTML = 0;
click3 = 0;
click4 = 0;

sessionStorage.setItem("somme",0);

});
function sumClicks() {
 const sum = document.getElementById("sum").innerHTML = click3 + click4;
 sessionStorage.setItem("somme",sum);
};
var recuperationSum = sessionStorage.getItem("somme");
if (recuperationSum === null) {
const sum = document.getElementById("sum").innerHTML = 2;
	
} else {
	const sum = document.getElementById("sum").innerHTML = recuperationSum;
}
