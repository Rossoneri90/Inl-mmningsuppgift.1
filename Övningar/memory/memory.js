// Create a score counter, and current player
let players = [p1, p2]
let currentPlayer = 0;
let p1points = 0;
let p2points = 0;
let isp1turn = true;


pickacard();
// Give players a name
function nameplayers() {

	document.getElementById("mybutton").onclick = function () {
		p1 = document.getElementById("p1").value;
	}

	document.getElementById("mybutton2").onclick = function () {
		p2 = document.getElementById("p2").value;
	}

}

// Reset memorycards

// Shuffle cards position // Återställa spelet? 

function shuffle() {

	cards.forEach(card => {

		let ramdomPos = Math.floor(Math.random() * 26);

		card.style.order = ramdomPos;

	});

}

// How to make a move 

function pickacard() {

	let counter = 0;
	let firstselection = "";
	let secondselection = "";

	const cards = document.querySelectorAll(".memorycard");
	console.log(cards);

	cards.forEach((card) => {
		card.addEventListener("click", () => {
			console.log(cards);
			card.classList.toggle("flip");

			if (counter === 0) {
				firstselection = card.getAttribute("mcc");
				counter++;
			} else {
				secondselection = card.getAttribute("mcc");
				counter = 0;

				console.log(firstselection);
				console.log(secondselection);
				// If a player chooses a pair
				if (firstselection === secondselection) {
					document.querySelectorAll(
						".card[mcc='" + firstSelection + "']"
					  );
					console.log("foundapair");
					correctCards[0].classList.add("paired");
					correctCards[0].classList.remove("flip");
					correctCards[1].classList.add("paired");
					correctCards[1].classList.remove("flip");

					if (isp1turn) {
						p1points = p1points + 1;

					} else {
						p2points = p2points + 1;
					}
					// P1 continues to pick. 

				} else {

					// If a player chooses two diffrent cards
					const incorrectCards = document.querySelectorAll(".card.flip");

					incorrectCards[0].classList.add("boo");
					incorrectCards[1].classList.add("boo");

					setTimeout(() => {
						incorrectCards[0].classList.remove("boo");
						incorrectCards[0].classList.remove("flip");
						incorrectCards[1].classList.remove("boo");
						incorrectCards[1].classList.remove("flip");


						isp1turn = !isp1turn


					}, 800);

					// turn goes over to p2
				}
			}
		});
	});



	

}

// Displays points 
function displayppoints() {

	let showp1points = '${p1.name}: ${p1.p1points}';
	let showp2points = '${p2.name}: ${p2.p2points}';

	document.querySelector("#p1points-p1").textContent = showp1points;
	document.querySelector("#p2points-p2").textContent = showp2points;

}

// Displays console log
