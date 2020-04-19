const caroselslide = document.querySelector('.carosel-slide');
const caroselimages = document.querySelectorAll('carosel-slide img')

//buttons

const prevbutton = document.querySelector('#prevbutton');
const nextbutton = document.querySelector('#nextbutton');

//counter
let counter = 1;
const size = caroselimages[0].clientWidth;

caroselslide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//button listeners

nextbutton.addEventlistener('click' () => {
	if(counter)
	caroselslide.style.transition = "transform 0.7s ease-in-out";
	counter++;
	caroselslide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
};
prevbutton.addEventlistener('click' () => {
	caroselslide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	caroselslide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
};

caroselslide.addEventlistener(transitionend', () => {
	consol.log('Fired');
});

