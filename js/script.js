const overviewButtons = document.querySelectorAll('.overview__button');
const components = document.querySelectorAll('.component');

console.log(overviewButtons);

overviewButtons.forEach(overviewButton => {
	const displayComponent = (event) => {
		const button = event.currentTarget;
		const componentToShow = button.dataset.componentToShow;
	
		overviewButtons.forEach(overviewButton => {
			overviewButton.classList.remove('overview__button--active');

			if (overviewButton.dataset.componentToShow === componentToShow) {
				button.classList.add('overview__button--active');
			}
		})

		components.forEach(component => {
			component.classList.remove('component--visible');
	
			const componentName = component.dataset.componentName;
	
			if (componentName === componentToShow) {
				component.classList.add('component--visible');
			}
		});
	}

	overviewButton.addEventListener('click', displayComponent);
});





const accordions = document.querySelectorAll('.accordion');

 accordions.forEach(accordion => {
	const accordionToggle = accordion.querySelector('.accordion__toggle');
	
	const displayAccordionContent = (event) => {
		accordion.classList.toggle('accordion--expanded');
	}
	
	accordionToggle.addEventListener('click', displayAccordionContent);
})









const minus = document.querySelector('.numric-stepper__minus');
const  text = document.querySelector('.numric-stepper__text');
const plus = document.querySelector('.numric-stepper__plus');

let a = 0;

plus.addEventListener("click",()=>{
	a ++;
	a =( a < 10) ?  a : a;
	text.innerText = a;
})

minus.addEventListener("click",()=>{
	if (a > 0){
	a --;
	a =( a < 10) ?  a : a;
	text.innertext = a;
	}
})






const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");


showButton.addEventListener("click", () => {
  dialog.showModal();
});


closeButton.addEventListener("click", () => {
  dialog.close();
});

