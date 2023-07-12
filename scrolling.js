// ScrollMagic init
var controller = new ScrollMagic.Controller();

// Animación para about section
var aboutScene = new ScrollMagic.Scene({
  triggerElement: '.section#befabout',
  triggerHook: 0.8,
  duration: '80%',
})
  .addTo(controller)
  .on('progress', function (e) {
    var progress = e.progress.toFixed(2);
    var scrollPos = progress * 400;
    var gradientColors = 'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(232, 70, 59, 1), rgba(237, 187, 28, 1), rgba(255, 255, 255, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) ' + scrollPos + '%)';
    document.querySelector('.section#befabout').style.background = gradientColors;

    // Parallax Effect 
    var parallaxOffset = progress * 20;
    document.querySelector('.section#befabout').style.backgroundPositionY = '-' + parallaxOffset + 'px';

    // Show content
    var contentElement = document.querySelector('.section#about .container');
    if (contentElement) {
      var contentOpacity = progress < 0.5 ? 0 : (progress - 0.5) * 2;
      contentElement.style.opacity = contentOpacity;
    }
  });

// Animación para contact section
var contactScene = new ScrollMagic.Scene({
  triggerElement: '.section#contact',
  triggerHook: 0.8,
  duration: '80%',
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

    // Show content
    var contentElement = document.querySelector('.section#contact .container');
    if (contentElement) {
      var contentOpacity = progress < 0.1 ? 1 : (progress - 0.8) * 2;
      contentElement.style.opacity = contentOpacity;
    }
  });


// Smooth scrolling
document.querySelectorAll('nav .nav-links li a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    var target = document.querySelector(this.getAttribute('href'));
    var offset = target.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});

