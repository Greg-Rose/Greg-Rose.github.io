$(document).ready(function() {
  anime.timeline({loop: true})
    .add({
      targets: '.line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeInOutQuad",
      duration: 2000,
      offset: 500
    })
    .add({
      targets: '.line',
      scaleX: [1,0],
      opacity: [0.5,1],
      easing: "easeInOutQuad",
      duration: 2000
    });
});
