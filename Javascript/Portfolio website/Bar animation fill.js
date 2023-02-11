const list = ['.html-bar', '.css-bar', '.js-bar']
// var observer = new IntersectionObserver(function(entries) {
//   for (let i = 0; i < entries.length; i++){
//     if (entries[i]['isIntersecting'] === true){
//       document.getElementsByClassName(entries.substring(1, entries.length)).className = entries + " bar-fill";
//   }
//   }
// }, { threshold: [1] });

// observer.observe(document.querySelectorAll(list));
// observer.unobserve(document.querySelectorAll(list));

const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('bar-fill');
    }
  });
});

for (let i = 0; i < list.length; i++){
  observer2.observe(document.querySelector(list[i]));
}