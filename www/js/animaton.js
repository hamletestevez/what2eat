$(document).ready(function () { //<<====== wont work without this
  console.log('ready');
  $(window).scroll(function () {
    console.log('scroll');
  })

});



var animated = {

  data: {
    elements: [{
      name: 'burger',
      id: 0,
      url: '../img/elements/burger.svg'
    }, {
      name: 'burrito',
      id: 1,
      url: '../img/elements/burrito.svg'
    }, {
      name: 'chiken',
      id: 2,
      url: '../img/elements/chiken.svg'
    }, {
      name: 'meat',
      id: 3,
      url: '../img/elements/meat.svg'
    }, {
      name: 'pasta',
      id: 4,
      url: '../img/elements/pasta.svg'
    }, {
      name: 'pizza',
      id: 5,
      url: '../img/elements/pizza.svg'
    }, {
      name: 'salad',
      id: 6,
      url: '../img/elements/salad.svg'
    }, {
      name: 'sandwich',
      id: 7,
      url: '../img/elements/sandwich.svg'
    }, {
      name: 'seaFood',
      id: 8,
      url: '../img/elements/seaFood.svg'
    }, {
      name: 'soup',
      id: 9,
      url: '../img/elements/soup.svg'
    }, {
      name: 'suchi',
      id: 10,
      url: '../img/elements/suchi.svg'
    }, {
      name: 'taco',
      id: 11,
      url: '../img/elements/taco.svg'
    }],
    scrollLeanght: 0,
    scrolFraction: 0
  },

  animateWheel: () => {
    $('#scrollBox').animate({
        scrollTop: 1000
      }, 1000, 'linear', () => {
        animated.data.scrollLeanght = $('#scrollBox').scrollTop();
        animated.data.scrolFraction = $('#scrollBox').scrollTop() / 12;
        $('#scrollBox').animate({
            scrollTop: animated.data.scrollLeanght / 2

          }, 2000, 'linear', () => {
           
          })
      })
 
  },

  createWheel: () => {
    $('#scrollBox').scroll(function () {
       var scroller = $('#scrollBox').scrollTop();

      if(scroller > animated.data.scrollLeanght / 2){
          console.log('going up');
      }else if(scroller === animated.data.scrollLeanght / 2){
        console.log('going down');
        // $('.scrollWindow a').first().remove();
      }

      console.log();
    })
  }
}