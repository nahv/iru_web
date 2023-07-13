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
    var gradientColors = 'linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(232, 70, 59, 1), rgba(237, 187, 28, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) ' + scrollPos + '%)';
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

// Animación para redes section
var contactScene = new ScrollMagic.Scene({
  triggerElement: '.section#redes',
  triggerHook: 0.8,
  duration: '80%',
})
  .addTo(controller)
  .on('progress', function (e) {
    var progress = e.progress.toFixed(2);
    // Show content
    var contentElement = document.querySelector('.section#redes .container');
    if (contentElement) {
      var contentOpacity = progress < 0.1 ? 0 : (progress - 0.1) * 5;
      contentElement.style.opacity = contentOpacity;
    }
  });

  // Animación para eventos section
var contactScene = new ScrollMagic.Scene({
  triggerElement: '.section#redes',
  triggerHook: 0.8,
  duration: '80%',
})
  .addTo(controller)
  .on('progress', function (e) {
    var progress = e.progress.toFixed(2);
    // Show content
    var contentElement = document.querySelector('.section#events .container');
    if (contentElement) {
      var contentOpacity = progress < 0.1 ? 0 : (progress - 0.5) * 5;
      contentElement.style.opacity = contentOpacity;
    }
  });

  // Animación para beforecontact section
var contactScene = new ScrollMagic.Scene({
  triggerElement: '.section#befcontact',
  triggerHook: 0.8,
  duration: '80%',
})
  .addTo(controller)
  .on('progress', function (e) {
    var progress = e.progress.toFixed(2);
    var scrollPos = progress * 400;
    var gradientColors = 'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(232, 70, 59, 1), rgba(237, 187, 28, 1), rgba(0, 0, 0, 1) ' + scrollPos + '%)';
    document.querySelector('.section#befcontact').style.background = gradientColors;

    // Parallax Effect 
    var parallaxOffset = progress * 20;
    document.querySelector('.section#befcontact').style.backgroundPositionY = '-' + parallaxOffset + 'px';

    // Show content
    var contentElement = document.querySelector('.section#befcontact .container');
    if (contentElement) {
      var contentOpacity = progress < 0.1 ? 1 : (progress - 0.8) * 5;
      contentElement.style.opacity = contentOpacity;
    }
  });



// NavSmooth scrolling
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

