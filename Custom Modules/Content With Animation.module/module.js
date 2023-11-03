

var params = {
  container: document.getElementById('animation1'),
  path: 'https://www.builtbybright.com/hubfs/4056449/tagging.json',
  renderer: 'svg',
  loop: true,
  autoplay: false,
  assetsPath: 'https://www.builtbybright.com/hubfs/',
  name: "animation1" // Name for future reference. Optional.
};

var anim;

anim = lottie.loadAnimation(params);


var params2 = {
  container: document.getElementById('animation2'),
  path: 'https://www.builtbybright.com/hubfs/4056449/sharing.json',
  renderer: 'svg',
  loop: true,
  autoplay: false,
  assetsPath: 'https://www.builtbybright.com/hubfs/',
  name: "animation2" // Name for future reference. Optional.
};

var anim2;

anim2 = lottie.loadAnimation(params2);


var params3 = {
  container: document.getElementById('animation3'),
  path: 'https://www.builtbybright.com/hubfs/4056449/support.json',
  renderer: 'svg',
  loop: true,
  autoplay: false,
  assetsPath: 'https://www.builtbybright.com/hubfs/',
  name: "animation3" // Name for future reference. Optional.
};

var anim3;

anim3 = lottie.loadAnimation(params3);


// init controller
var controller = new ScrollMagic.Controller();


$(".animation1").each(function(i) {
  let animation = $(this);

  new ScrollMagic.Scene({
    triggerElement: this,
    duration: '200%',
    triggerHook: 0.4,
    offset: '0',
    repeat: false
  })  
  .addTo(controller)
  //.addIndicators({name: "animation 1"}) // add indicators (requires plugin)
  .on("enter", function (e) {
    lottie.play('animation1');
	});
});


$(".animation2").each(function(i) {
  let animation = $(this);

  new ScrollMagic.Scene({
    triggerElement: this,
    duration: '200%',
    triggerHook: 0.4,
    offset: '0',
    repeat: false
  })  
  .addTo(controller)
  //.addIndicators({name: "animation 2"}) // add indicators (requires plugin)
  .on("enter", function (e) {
    lottie.play('animation2');
	});
});


$(".animation3").each(function(i) {
  let animation = $(this);

  new ScrollMagic.Scene({
    triggerElement: this,
    duration: '200%',
    triggerHook: 0.4,
    offset: '0',
    repeat: false
  })  
  .addTo(controller)
  //.addIndicators({name: "animation 3"}) // add indicators (requires plugin)
  .on("enter", function (e) {
    lottie.play('animation3');
	});
});


$(".text-animate-in").each(function(i) {

  new ScrollMagic.Scene({
    triggerElement: this,
    duration: 0,
    triggerHook: 0.9,
    offset: '0'
  })  
    .setClassToggle(this, "hit")
    //.addIndicators({name: "text fade"}) // add indicators (requires plugin)
    .addTo(controller);
});


// $(".home-header").each(function(i) {
//   new ScrollMagic.Scene({
//     triggerElement: ".row-number-4",
//     duration: 0,
//     triggerHook: 0,
//     offset: '0'
//   })  
//     .setClassToggle(this, "hit")
//     .addTo(controller);
// });

var headerHeight = $( ".custom-header" ).outerHeight();
var scene = new ScrollMagic.Scene({triggerElement: "#menu-trigger", triggerHook: 0, offset:-headerHeight})
// trigger animation by adding a css class
.setClassToggle(".custom-header", "after-header")
//.addIndicators({name: "header"}) // add indicators (requires plugin)
.addTo(controller);

