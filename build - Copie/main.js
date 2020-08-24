
let nbrpax = 0;
const pdc = document.querySelector('.pdc');
const sum = document.getElementById("sum");
let recuperationSum = sessionStorage.getItem("somme");
let plusElt = document.getElementById('increment');
let moinsElt = document.getElementById('decrement');


plusElt.addEventListener('click', increment);
moinsElt.addEventListener('click', decrement);
pdc.addEventListener('click', reset);
// si sessionstorage vide sum vaut 0  ou je recupere la valeur de sum dans le session storage
if (recuperationSum === null) {
	sum.innerHTML = 0;
}
else {
	sum.innerHTML = recuperationSum;
}

sum.addEventListener('focusout', function () {
	sessionStorage.setItem("somme", sum.textContent);
	recuperationSum = Number(sessionStorage.getItem("somme"));
})

function decrement() {
	if (recuperationSum === null) {
		sum.innerHTML = nbrpax-1;
		sessionStorage.setItem("somme", sum.textContent);
		recuperationSum = Number(sessionStorage.getItem("somme"));
	} else {
		sum.innerHTML = recuperationSum-1;
		sessionStorage.setItem("somme", sum.innerHTML);
		recuperationSum =  Number(sessionStorage.getItem("somme"));
	}
};

function increment() {
	if (recuperationSum === null) {
		sum.innerHTML = nbrpax+1;
		sessionStorage.setItem("somme", sum.innerHTML);
		recuperationSum = Number(sessionStorage.getItem("somme"));
	} else {
		sum.innerHTML = recuperationSum + 1;
		sessionStorage.setItem("somme", sum.innerHTML);
		recuperationSum =  Number(sessionStorage.getItem("somme"));
	}
};

function reset() {
	sum.innerHTML = 0;
	nbrpax = 0;
	sessionStorage.setItem("somme", 0);
	recuperationSum = Number(sessionStorage.getItem("somme"));
};



