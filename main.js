const content = document.querySelector(".contentlar");
const result = document.querySelector(".result");

for (let i = 1; i <= 9; i++) {
	content.innerHTML += `<div class="cell"></div>`;
}
let count = 0;

content.onclick = function (e) {
	if (e.target.className == "cell") {
		if (count % 2 == 0 && e.target.innerText ==="") {
			e.target.innerText = "x";
		} else if (count % 2 == 1 && e.target.innerText ==="") {
			e.target.innerText = "o";
		}
		count++;
		mer();
	}
};

result.onclick = function (e) {
	
}

function mer() {
	let mem = document.getElementsByClassName("cell");
	if (
		(mem[0].innerText == "x" && mem[1].innerText == "x" && mem[2].innerText == "x") ||
		(mem[3].innerText == "x" && mem[4].innerText == "x" && mem[5].innerText == "x") ||
		(mem[6].innerText == "x" && mem[7].innerText == "x" && mem[8].innerText == "x") ||
		(mem[0].innerText == "x" && mem[3].innerText == "x" && mem[6].innerText == "x") ||
		(mem[1].innerText == "x" && mem[4].innerText == "x" && mem[7].innerText == "x") ||
		(mem[2].innerText == "x" && mem[5].innerText == "x" && mem[8].innerText == "x") ||
		(mem[0].innerText == "x" && mem[4].innerText == "x" && mem[8].innerText == "x") ||
		(mem[2].innerText == "x" && mem[4].innerText == "x" && mem[6].innerText == "x")
	) {
		result.innerText = " Winner is X"
		result.style.display = "block"
		// document.body.style.backdropFilter = 10px;
	} else if (
		(mem[0].innerText == "o" && mem[1].innerText == "o" && mem[2].innerText == "o") ||
		(mem[3].innerText == "o" && mem[4].innerText == "o" && mem[5].innerText == "o") ||
		(mem[6].innerText == "o" && mem[7].innerText == "o" && mem[8].innerText == "o") ||
		(mem[0].innerText == "o" && mem[3].innerText == "o" && mem[6].innerText == "o") ||
		(mem[1].innerText == "o" && mem[4].innerText == "o" && mem[7].innerText == "o") ||
		(mem[2].innerText == "o" && mem[5].innerText == "o" && mem[8].innerText == "o") ||
		(mem[0].innerText == "o" && mem[4].innerText == "o" && mem[8].innerText == "o") ||
		(mem[2].innerText == "o" && mem[4].innerText == "o" && mem[6].innerText == "o")
	) {
		result.innerText = " Winner is O"
		result.style.display = "block"
		// document.body.style.backdropFilter = 10px;

		return;
	}
}
