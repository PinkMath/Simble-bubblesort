// greb the div in the HTML
const container = document.getElementById("container");

// clean the divs after the page reload (sometimes doesnt work)
container.innerHTML = "";

let x = [] // array
let n = 5 // how many times u gotta choose

for (let i = 0; i < n; i++) {
	x.push(Number(prompt(`Choose ${i+1} numbers:`)));

}

for (let i = 0; i < x.length; i++) {
	if (x.some(value => Number.isNaN(value))) {
		x[i] = 0;
	}
}

const area = document.createElement("div");
area.classList.add("all"); // div with both cards

const card1 = document.createElement("div");
card1.classList.add("not-fixed"); // card-1 (with the not fixed numbers:()

card1.innerHTML = `
	<h3>Not fixed:</h3>
	<h2>${x[4]}</h2>
	<h2>${x[3]}</h2>
	<h2>${x[2]}</h2>
	<h2>${x[1]}</h2>
	<h2>${x[0]}</h2>
` // whats inside of the card-1

area.appendChild(card1); // create the card-1 inside of the all

console.log(x) // show the chose numbers

// bubblesort
for (let i = 0; i < x.length - 1; i++) {
	for (let j = 0; j < x.length - i - 1; j++) {
		if (x[j] > x[j + 1]) {
			// swap
			let temp = x[j];
			x[j] = x[j + 1];
			x[j + 1] = temp;
		}
	}
}

const mid = document.createElement("div");
mid.classList.add("mid"); // create a div between both card1/2

mid.innerHTML="->"; // write a arrow in the div
area.appendChild(mid); // create the div inside of the area

const card2 = document.createElement("div");
card2.classList.add("fixed"); // card-2 (with the fixed numbers)


card2.innerHTML = `
	<h3>Fixed:</h3>
	<h2>${x[4]}</h2>
	<h2>${x[3]}</h2>
	<h2>${x[2]}</h2>
	<h2>${x[1]}</h2>
	<h2>${x[0]}</h2>
` // whats inside of the card-1

area.appendChild(card2); // create the card-2 inside of the all

console.log(x) // show the chose numbers

container.appendChild(area) // create the all inside of the container
