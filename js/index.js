var mainImageContainer = document.querySelector('.header__slider-item__card img');
// mainImageContainer.src = '/images/sherlock.jpg'

var sliderMenu = document.querySelectorAll('.header__slider-menu_item .header__slider-menu_item-image')

sliderMenu.forEach(function(i,index){
	i.addEventListener('click', function(e) {
		console.log(index)
		var bg = event.srcElement.style.backgroundImage;
		bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
		mainImageContainer.src = bg;
		var sliderMenuList = document.querySelectorAll('.header__slider-menu_item');

		sliderMenuList.forEach(function(item){
			item.classList.remove('active')
		})
		sliderMenuList[index].classList.add('active');
		console.log(sliderMenuList);
		
	})

})