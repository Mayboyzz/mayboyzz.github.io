window.onload = (event) => {
	console.log("page is loaded");
	const dropDownButton = document.querySelector("button");
	const contentDropdown = document.querySelector(".dropdown-content");
	dropDownButton.addEventListener("click", (event) => {
		console.log(contentDropdown.classList);
		if (contentDropdown.classList[0] === "dropdown-content-active") {
			contentDropdown.setAttribute("class", "dropdown-content");
		} else {
			contentDropdown.setAttribute("class", "dropdown-content-active");
		}
	});
};
