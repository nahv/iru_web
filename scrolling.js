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
    var gradientColors = 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.8) ' + scrollPos + '%)';
    document.querySelector('.section#about').style.background = gradientColors;

    // Parallax Effect - Move the gradient background slower than the content
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
    var scrollPos = progress * 100;
    var gradientColors = 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.8) ' + scrollPos + '%)';
    document.querySelector('.section#contact').style.background = gradientColors;

    // Smooth Transition
    var colorTransition = 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.8) ' + (scrollPos - 10) + '%)';
    document.querySelector('.section#contact').style.background = colorTransition;
  });

// Define the animation for the rotating object in the about section
var rotationAnimation = new TimelineMax();

// Create a variable to store the initial position of the object
var initialPosition = { x: 0, y: 0 };

// Add the initial position to the rotation animation
rotationAnimation.set('.section#about .object', initialPosition);

// Update the rotation and position of the object based on scroll progress
rotationAnimation.to('.section#about .object', 1, {
  rotation: 360,
  y: function () {
    // Calculate the desired position based on the scroll progress
    var scrollPos = controller.scrollPos() * 0.1; // Adjust the factor as needed
    return scrollPos;
  },
  ease: Linear.easeNone,
});

// Create a ScrollMagic scene for the about section object animation
var objectScene = new ScrollMagic.Scene({
  triggerElement: '.section#about',
  triggerHook: 0.2,
  duration: '80%',
})
  .setTween(rotationAnimation)
  .addTo(controller);

// Reverse the animation when scrolling back up
objectScene.on('leave', function (event) {
  if (event.scrollDirection === 'REVERSE') {
    rotationAnimation.reverse();
  }
});
