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

  // animateWheel: () => {
  //   $('#scrollBox').animate({
  //       scrollTop: 1000
  //     }, 1000, 'linear', () => {
  //       animated.data.scrollLeanght = $('#scrollBox').scrollTop();
  //       animated.data.scrolFraction = $('#scrollBox').scrollTop() / 12;
  //       $('#scrollBox').animate({
  //           scrollTop: animated.data.scrollLeanght / 2

  //         }, 2000, 'linear', () => {

  //         })
  //     })

  // },

  createWheel: () => {
    Draggable.create("#elements_one", {
      type: 'y',
      throwProps: true,
      bounds: $('#scrollBox'),
      edgeResistance:0.65,
      onClick:function() {
        console.log("clicked");
      },
      onDrag: (dis)=>{
        console.log(dis.path[1].id);
        console.log(Draggable.get("#elements_one").y);
      }, 
      onDragStart:function() {
        console.log("drag start");
        console.log(this.getDirection('start'));
       
      },
      onDragEnd:function() {
        console.log("drag ended");
        console.log(this.endY);
        animated.createElement();
       
      }
    });



  },
  
  createElement:()=>{
    var t = $("<div id='elements_pizza' class='elements'><img src='../img/elements/pizza.svg' /></div>");

    $('#scrollBox').append(t);
    $('#elements_pasta').remove();
  },

  moveElements: (distance)=>{
  TweenMax.to("#elements_one, #elements_two, #elements_three, #elements_four, #elements_five", 0, {y: distance})
  }
}