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

  $(function() {
    $('.buttons').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('data-scroll')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
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

  var contactform =  document.getElementById('contact-form');
  contactform.setAttribute('action', 'https:' + '//formspree.io/' + 'gregrose628' + '@' + 'gmail' + '.' + 'com');

  window.sr = ScrollReveal({ origin: 'left', easing: 'ease' });
  sr.reveal('.skill-svg', { duration: 1200, scale: 0.3 }, 100);
  sr.reveal('.project-item', { duration: 1200, scale: 0.7 }, 300);
});
