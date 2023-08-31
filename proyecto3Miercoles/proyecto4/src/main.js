const btnSubmit = document.querySelector(".btn--submit");
const btnReturn = document.querySelector(".btn--return");

const result = document.querySelector(".result");
const survay = document.querySelector(".survay");

const items = document.querySelectorAll(".survay__rating .item");
const surveyResponse = document.querySelector("#surveyResponse");

let response = null;

btnSubmit.addEventListener("click", function () {
	if (!response) return alert("Responde la encuenta!!!");
	survay.classList.add("survay--hidden");
	result.classList.add("result--show");
});

btnReturn.addEventListener("click", function () {
	survay.classList.remove("survay--hidden");
	result.classList.remove("result--show");

	for (const itemR of items) {
		itemR.classList.remove("item--active");
	}

	response = null;
});

for (const item of items) {
	item.addEventListener("click", (e) => {
		for (const itemR of items) {
			itemR.classList.remove("item--active");
		}

		e.currentTarget.classList.add("item--active");
		let value = e.currentTarget.textContent;
		response = value;
		surveyResponse.textContent = value;
	});
}
