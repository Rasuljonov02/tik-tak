const content = document.querySelector(".contentlar");

for (let i = 1; i <= 9; i++) {
	content.innerHTML += `<div class="cell"></div>`;
}
let cunt = 0;

content.onclick = function (e) {
	if (e.target.className == "cell") {
		if (cunt % 2 == 0) {
			e.target.innerText = "x";
		} else {
			e.target.innerText = "o";
		}
		cunt++;
		mer();
	}
};

function mer() {
	let mem = document.getElementsByClassName("cell");
	if (
		(mem[0].innerText == "x" && mem[1].innerText == "x" && mem[2].innerText == "x")(
			mem[3].innerText == "x" && mem[4].innerText == "x" && mem[5].innerText == "x"
		)(mem[6].innerText == "x" && mem[7].innerText == "x" && mem[8].innerText == "x")(
			mem[0].innerText == "x" && mem[3].innerText == "x" && mem[6].innerText == "x"
		)(mem[1].innerText == "x" && mem[4].innerText == "x" && mem[7].innerText == "x")(
			mem[2].innerText == "x" && mem[5].innerText == "x" && mem[8].innerText == "x"
		)(mem[0].innerText == "x" && mem[4].innerText == "x" && mem[8].innerText == "x")(
			mem[2].innerText == "x" && mem[4].innerText == "x" && mem[6].innerText == "x"
		)
	) {
		alert("Winner is X");
	} else if (
		(mem[0].innerText == "o" && mem[1].innerText == "o" && mem[2].innerText == "o")(
			mem[3].innerText == "o" && mem[4].innerText == "o" && mem[5].innerText == "o"
		)(mem[6].innerText == "o" && mem[7].innerText == "o" && mem[8].innerText == "o")(
			mem[0].innerText == "o" && mem[3].innerText == "o" && mem[6].innerText == "o"
		)(mem[1].innerText == "o" && mem[4].innerText == "o" && mem[7].innerText == "o")(
			mem[2].innerText == "o" && mem[5].innerText == "o" && mem[8].innerText == "o"
		)(mem[0].innerText == "o" && mem[4].innerText == "o" && mem[8].innerText == "o")(
			mem[2].innerText == "o" && mem[4].innerText == "o" && mem[6].innerText == "o"
		)
	) {
		alert("Winner is O");
		return;
	}
}
