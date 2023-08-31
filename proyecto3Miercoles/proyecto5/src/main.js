const iconOpen = document.querySelector(".icon--open");
const iconClose = document.querySelector(".icon--close");

const contentMenu = document.querySelector(".content__menu");

iconOpen.addEventListener("click", function () {
	iconClose.style.display = "block";
	iconOpen.style.display = "none";

	contentMenu.classList.add("content__menu--show");
});

iconClose.addEventListener("click", function () {
	iconOpen.style.display = "block";
	iconClose.style.display = "none";

	contentMenu.classList.remove("content__menu--show");
});
