

var params = {
  container: document.getElementById('animation-dash'),
  path: 'https://www.builtbybright.com/hubfs/dash.json',
  renderer: 'svg',
  loop: true,
  autoplay: false,
  assetsPath: 'https://www.builtbybright.com/hubfs/dash-lottie/',
  name: "animation-dash"
};

var anim;

anim = lottie.loadAnimation(params);


// init controller
var controller = new ScrollMagic.Controller();


$(".animation-dash").each(function(i) {
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
    lottie.play('animation-dash');
	});
});