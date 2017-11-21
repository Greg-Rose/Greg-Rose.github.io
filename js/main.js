$(document).ready(function() {
  var navTimeline = anime.timeline();

  navTimeline
    .add({
      targets: '.navbar-brand',
      translateX: [-500, 0],
      easing: 'easeOutExpo',
      duration: 1000
    })
    .add({
      targets: '#nav-link-1',
      translateX: [500, 0],
      easing: 'easeOutExpo',
      offset: '-=500'
    })
    .add({
      targets: '#nav-link-2',
      translateX: [500, 0],
      easing: 'easeOutExpo',
      offset: '-=500'
    })
    .add({
      targets: '#nav-link-3',
      translateX: [500, 0],
      easing: 'easeOutExpo',
      offset: '-=500'
    });
});
