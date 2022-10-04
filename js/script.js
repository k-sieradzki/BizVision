const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(e => {
	e.addEventListener('click', () => {
		navbarLinks.classList.toggle('active');
	});
});

let myNav = document.querySelector('.navbarx');
function checkNavColor() {
	if (window.scrollY !== 0) {
		myNav.classList.add('scrolled');
	} else {
		myNav.classList.remove('scrolled');
	}
}

window.onscroll = function () {
	checkNavColor();
};
window.onload = function () {
	checkNavColor();
};

document.addEventListener(
	'DOMContentLoaded',
	function () {
		const sections = document.querySelectorAll('.section');
		const menuLinks = document.querySelectorAll('.nav-item a');

		const makeActive = link => menuLinks[link].classList.add('active-nav');
		const removeActive = link => menuLinks[link].classList.remove('active-nav');
		const removeAllActive = () =>
			[...Array(sections.length).keys()].forEach(link => removeActive(link));

		const sectionMargin = 80;

		let currentActive = 0;

		window.addEventListener('scroll', () => {
			const current =
				sections.length -
				[...sections]
					.reverse()
					.findIndex(
						section => window.scrollY >= section.offsetTop - sectionMargin
					) -
				1;

			if (current !== currentActive) {
				removeAllActive();
				currentActive = current;
				makeActive(current);
			}
		});
	},
	false
);

const scrollTop = document.querySelector('.scroll-top');
scrollTop.addEventListener('click', () => {
	window.scrollTo(0, 0);
});
