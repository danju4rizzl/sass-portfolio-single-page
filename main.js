const counters = document.querySelectorAll(".counter")

// To makes the counter only run once
let counted = false

const swiper = new Swiper("#cardSwiper", {
	slidesPerView: 1,
	spaceBetween: 30,

	autoPlay: {
		delay: 2500
	},

	loop: true,

	breakpoints: {
		// when window width is >= 600px
		600: {
			slidesPerView: 1,
			spaceBetween: 40
		},
		// when window width is >= 900px
		900: {
			spaceBetween: 20
		},
		// when window width is >= 1263px
		1263: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		// when window width is >= 1400px
		1400: {
			slidesPerView: 3,
			spaceBetween: 35
		}
	}
})

// counter function
const counter = (element, amount) => {
	let count = 0
	let interval = setInterval(() => {
		if (count < amount) {
			count++
			element.innerHTML = count + "%"
		} else {
			clearInterval(interval)
		}
	}, 50)
}

// check if element is in viewport
function isInViewport(el) {
	const rect = el.getBoundingClientRect()
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	)
}

// Will run when the page is scrolled then check if the counter is in the viewport and if the counter was already counted or not
window.addEventListener("scroll", function () {
	if (!counted && isInViewport(counters[0])) {
		counted = true
		counters.forEach((counterElement) => {
			counter(counterElement, counterElement.getAttribute("data-deejay"))
		})
		console.log("In viewport")
	} else {
		console.log("Not in viewport")
		return
	}
})

// This will show the current year in the footer
function showCurrentYear() {
	const currentYear = document.querySelector("#currentYear")
	const year = new Date().getFullYear()
	currentYear.innerHTML = year
}

// Runs when the page is loaded
window.addEventListener("load", () => {
	showCurrentYear()
})
