// ScrollMagic init
var controller = new ScrollMagic.Controller();

// Animación para about section
var aboutScene = new ScrollMagic.Scene({
  triggerElement: '.section#about',
  triggerHook: 0.8,
  duration: '150%',
})
  .addTo(controller)
  .on('progress', function (e) {
    var progress = e.progress.toFixed(2);
    var scrollPos = progress * 400;
    var gradientColors = 'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(232, 70, 59, 1), rgba(237, 187, 28, 1), rgba(255, 255, 255, 1), rgba(0, 0, 0, 1) ' + scrollPos + '%)';
    document.querySelector('.section#about').style.background = gradientColors;

    // Parallax Effect 
    var parallaxOffset = progress * 20;
    document.querySelector('.section#about').style.backgroundPositionY = '-' + parallaxOffset + 'px';
  });



// Animación para contact section
var contactScene = new ScrollMagic.Scene({
  triggerElement: '.section#contact',
  triggerHook: 0.8,
  duration: '100%',
})
  .addTo(controller)
  .on('progress', function (e) {
    var progress = e.progress.toFixed(2);
    var scrollPos = progress * 400;
    var gradientColors = 'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(232, 70, 59, 1), rgba(237, 187, 28, 1), rgba(255, 255, 255, 1), rgba(0, 0, 0, 1) ' + scrollPos + '%)';
    document.querySelector('.section#contact').style.background = gradientColors;

    // Parallax Effect 
    var parallaxOffset = progress * 20;
    document.querySelector('.section#contact').style.backgroundPositionY = '-' + parallaxOffset + 'px';
  });
