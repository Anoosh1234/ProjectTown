// // Function to check if an element is in the viewport
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Function to add animation class when element is in viewport
// function addAnimationToElement(element, animationClass) {
//     if (isInViewport(element) && !element.classList.contains('animated')) {
//         element.classList.add(animationClass);
//         element.style.visibility = 'visible';
//         element.classList.add('animated');
//     }
// }

// // Function to handle scroll event
// function handleScroll() {
//     const animatedElements = document.querySelectorAll('.fadeIn, .slideInLeft, .slideInRight');
//     animatedElements.forEach(element => {
//         addAnimationToElement(element, 'fadeIn');
//         addAnimationToElement(element, 'slideInLeft');
//         addAnimationToElement(element, 'slideInRight');
//     });
// }

// // Attach scroll event listener
// window.addEventListener('scroll', handleScroll);

// // Initial check on page load
// handleScroll();
