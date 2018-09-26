
jQuery( 'documet' ).ready(function() {
var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });

});

$(document).ready(function() {
	$('.blocks_jMosaic').jMosaic({
		items_type: "li", margin: 5
	});
	$('.blocks_jMosaic').jMosaic({
		min_row_height: 250, 
		margin: 5, 

		is_first_big: true});

});
		





























// ( 'documet' ).ready(function() {
// window.onscroll = function() {
//   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   document.getElementById('showScroll').innerHTML = scrolled + 'px';
// }



















//jQuery( 'documet' ).ready(function() { ... })

// var imgNum=0;              //счетчик изображений
// var separated=[тут '.bloks'];      //массив с изображениями

// $('#go_left').on('click',function(){   //просматриваем предыдущую картинку
//     imgNum--;             //листаем назад счетчик
//     if(imgNum<0){       //если он меньше 0
//         imgNum=separated.length-1;   //идем в конец массива
//     }
//     $('#here').attr('src','content/'+separated[imgNum]);
// });

// $('#go_right').on('click',function(){   //просматриваем следующую картинку
//     imgNum++;           //листаем счетчик вперед
//     if(imgNum>=separated.length){     //если больше чем елементов в массиве
//         imgNum=0;            //кидаем в самое начало массива
//     }
//     $('#here').attr('src','content/'+separated[imgNum]);
// });