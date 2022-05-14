const foodBtns = document.querySelectorAll(".fiter__body--btn button")
const foodList = document.querySelectorAll(".price")

foodBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const type = e.target.getAttribute("price-btn")

		// remove and set active fpr button
		document
			.querySelector(".fiter__body--btn button.active")
			.classList.remove("active")
		e.target.classList.add("active")

		// filter elements
		foodList.forEach((item) => {
            console.log(type)
			if (type == "all" || item.getAttribute("price-btn") == type)
				item.classList.remove("hide")
			else item.classList.add("hide")
		})
	})
})


