let progressBar = document.querySelectorAll(".circular-progress");
let valueContainer = document.querySelectorAll(".value-container");

const skills = [50, 20, 30, 10]
let speed = 25;


const observer1 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation
      for(let i = 0; i< progressBar.length; i++){
        let progressValue = 0;
        let progressEndValue = skills[i];
        let progress = setInterval(() => {
          progressValue++;
          valueContainer[i].textContent = `${progressValue}%`;
          progressBar[i].style.background = `conic-gradient(
              #61dafb ${progressValue * 3.6}deg,
              #0d1d36 ${progressValue * 3.6}deg
          )`;
          if (progressValue == progressEndValue) {
            clearInterval(progress);
          }
        }, speed);
      } 
    }
  });
});

observer1.observe(document.querySelector('.circular-progress'));