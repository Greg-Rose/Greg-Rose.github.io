$(document).ready(function() {
  anime.timeline({loop: true})
    .add({
      targets: '.welcome .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeInOutQuad",
      duration: 2000,
      offset: 500
    })
    .add({
      targets: '.welcome .line',
      scaleX: [1,0],
      opacity: [1,0.5],
      easing: "easeInOutQuad",
      duration: 2000
    });

  $("#skills-btn").click(function() {
    $('html, body').animate({
      scrollTop: $(".skills").offset().top}, 1000
    );
  });

  $("#projects-btn").click(function() {
    $('html, body').animate({
      scrollTop: $(".projects").offset().top}, 1000
    );
  });

  $("#about-btn").click(function() {
    $('html, body').animate({
      scrollTop: $(".about").offset().top}, 1000
    );
  });

  var projectsLine = anime.timeline({loop: true, autoplay: false});

  projectsLine.add({
      targets: '.projects .line',
      scaleX: [0,0.7],
      opacity: [0.5,1],
      easing: "easeInOutQuad",
      duration: 2000,
      offset: 500
    })
    .add({
      targets: '.projects .line',
      scaleX: [0.7,0],
      opacity: [1,0.5],
      easing: "easeInOutQuad",
      duration: 2000
    });

  $(".project-item").hover(function() {
    projectsLine.restart();
  }, function() {
    projectsLine.pause();
  });
});
