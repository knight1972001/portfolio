var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "./toggle-sunmoon.json"
});

// https://assets9.lottiefiles.com/packages/lf20_EjhMz5.json
  
var switchToggle = document.getElementById('lottie-container') | null;
var switchCheckbox = document.querySelector('.switch-toggle__checkbox');
  
switchCheckbox.checked = true;
console.log(switchCheckbox.checked)
var isDarkMode = switchCheckbox.checked;

if (isDarkMode) {
    console.log("Moon")
    animation.goToAndStop(12, true);
    animation.pause();
} else {
    console.log("Sun")
    animation.goToAndStop(28, true);
    animation.pause();
}
  
      
switchToggle.addEventListener('click', function() {
switchCheckbox.checked = !isDarkMode;
isDarkMode = switchCheckbox.checked;
console.log(isDarkMode)
if (isDarkMode) {
    console.log("Moon")
    animation.playSegments([0, 12], true);
} else {
    console.log("Sun")
    animation.playSegments([12, 28], true);
}
});