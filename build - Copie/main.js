
let nbrpax = 0;
const pdc = document.querySelector('.pdc');
const sum = document.getElementById("sum");
let recuperationSum = sessionStorage.getItem("somme");
let plusElt = document.getElementById('increment');
let moinsElt = document.getElementById('decrement');
let ulElt = document.getElementById('oa');
let list = document.querySelectorAll('ul  li');
let operator = document.querySelectorAll('.operator');
let edit = document.querySelectorAll('.edit');
let element;
let name;

for (let i = 0; i < list.length; i++) {
	const element = list[i];

	element.addEventListener('click', function (event) {
		if (element.classList.contains('moins')) decrement(this);
		if (element.classList.contains('editpax')) console.log('editpax');
		if (element.classList.contains('editBebe')) console.log('editBebe');
		if (element.classList.contains('plus')) console.log('plus');
	})
}
// plusElt.addEventListener('click', increment);
// moinsElt.addEventListener('click', decrement);
// pdc.addEventListener('click', reset);

//si sessionstorage vide sum vaut 0  ou je recupere la valeur de sum dans le session storage
if (recuperationSum === null) {
	sum.innerHTML = 0;
	sessionStorage.setItem("somme", sum.textContent);
	recuperationSum = Number(sessionStorage.getItem("somme"));


}
else {
	sum.innerHTML = recuperationSum;
	sessionStorage.setItem("somme", sum.textContent);
	recuperationSum = Number(sessionStorage.getItem("somme"));
}

sum.addEventListener('focusout', function () {
	sessionStorage.setItem("somme", sum.textContent);
	recuperationSum = Number(sessionStorage.getItem("somme"));
})

function decrement(nameId) {

	var nextNode = nameId.nextSibling;
	nextNode = nextNode.nextSibling;
	nextNode = nextNode.nextSibling;
	nextNode = nextNode.nextSibling;
	console.log(recuperationSum);

	if (recuperationSum === null) {
		console.log('helllo');
		nextNode.innerHTML = nbrpax - 1;
		sessionStorage.setItem(nextNode.classList[0], nextNode.innerHTML);
		recuperationSum = Number(sessionStorage.getItem("somme"));
	} else {
		console.log(nextNode.classList[0]);
		 recuperationSum = sessionStorage.getItem(nextNode.classList[0]);

		nextNode.innerHTML = recuperationSum - 1;
		sessionStorage.setItem(nextNode.classList[0], nextNode.innerHTML);
		recuperationSum = Number(sessionStorage.getItem(nextNode.classList[0]));
	}
};

// function increment() {
// 	if (recuperationSum === null) {
// 		sum.innerHTML = nbrpax+1;
// 		sessionStorage.setItem("somme", sum.innerHTML);
// 		recuperationSum = Number(sessionStorage.getItem("somme"));
// 	} else {
// 		sum.innerHTML = recuperationSum + 1;
// 		sessionStorage.setItem("somme", sum.innerHTML);
// 		recuperationSum =  Number(sessionStorage.getItem("somme"));
// 	}
// };

// function reset() {
// 	sum.innerHTML = 0;
// 	nbrpax = 0;
// 	sessionStorage.setItem("somme", 0);
// 	recuperationSum = Number(sessionStorage.getItem("somme"));
// };



// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//         .register("/pdc/sw.js")
//         .then(() => console.log("registered service worker!"));
// }