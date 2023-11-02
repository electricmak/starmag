function openContainer() {
	var contentsContainer = document.querySelector(".contents-container");
	contentsContainer.style.bottom = "20%";
	document.querySelector(".closebtn").style.opacity = "100";
	document.querySelector(".toggler").style.opacity = "0";
}
function closeContainer() {
	var contentsContainer = document.querySelector(".contents-container");
	contentsContainer.style.bottom = "-100%";
	document.querySelector(".closebtn").style.opacity = "0";
	document.querySelector(".toggler").style.opacity = "100";
}

// Function to scroll to a section and add the blink effect
function scrollToSection(sectionId) {
	const targetSection = document.getElementById(sectionId);
	if (targetSection) {
		targetSection.scrollIntoView({
			behavior: "smooth"
		});

		// Add the blink class to highlight the section
		targetSection.classList.add("blink");

		// Remove the blink class after a delay (3 seconds)
		setTimeout(() => {
			targetSection.classList.remove("blink");
		}, 500);
	}
}