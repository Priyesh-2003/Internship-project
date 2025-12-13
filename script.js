// const words = ["Integrity", "Excellence", "Innovation"];
// let index = 0;
// const element = document.getElementById("changingWords");

// function cycleWords() {
//   element.textContent = words[index];

//   element.style.opacity = 1;

//   setTimeout(() => {
//     element.style.opacity = 0;
//   }, 1500);

//   setTimeout(() => {
//     index = (index + 1) % words.length; // next word
//     cycleWords(); // repeat
//   }, 2500);
// }
// cycleWords();
// const counters = document.querySelectorAll(".counter");
// let started = false;

// function easeOut(current, target) {
//   let progress = current / target;
//   let eased = 1 - Math.pow(1 - progress, 3);
//   return eased * target;
// }

// function startCount() {
//   counters.forEach((counter) => {
//     let target = +counter.getAttribute("data-target");
//     let isBig = target > 1000;
//     let duration = isBig ? 1800 : 1200;
//     let startTime = null;

//     function animate(time) {
//       if (!startTime) startTime = time;
//       let elapsed = time - startTime;
//       let progress = Math.min(elapsed / duration, 1);

//       if (isBig) {
//         counter.innerText = Math.ceil(easeOut(progress * target, target));
//       } else {
//         counter.innerText = Math.ceil(progress * target);
//       }

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         counter.innerText = target;
//       }
//     }

//     requestAnimationFrame(animate);
//   });
// }

// window.addEventListener("scroll", () => {
//   let section = document.getElementById("vimpactc");
//   let position = section.getBoundingClientRect().top;
//   if (position < window.innerHeight - 100 && !started) {
//     started = true;
//     startCount();
//   }
// });



// const hamburger = document.getElementById('hamburgerBtn');
// const navMenu = document.getElementById('navMenu');
// const menuOverlay = document.getElementById('menuOverlay');
// const navLinks = navMenu.querySelectorAll('a');

// function toggleMenu() {
//     hamburger.classList.toggle('active');
//     navMenu.classList.toggle('active');
//     menuOverlay.classList.toggle('active');
//     document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
// }

// hamburger.addEventListener('click', toggleMenu);
// menuOverlay.addEventListener('click', toggleMenu);

// // Close menu when clicking on a link
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         if (window.innerWidth <= 768) {
//             toggleMenu();
//         }
//     });
// });

// window.addEventListener('resize', () => {
//     if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
//         toggleMenu();
//     }
// });


// Changing text animation
  const texts = [
      "Excellence & Innovation",
      "Professional Standards",
      "Global Recognition",
      "Industry Leadership"
  ];
  let currentIndex = 0;
  const changingText = document.getElementById('changingText');

  function changeText() {
      changingText.style.opacity = '0';
      setTimeout(() => {
          currentIndex = (currentIndex + 1) % texts.length;
          changingText.textContent = texts[currentIndex];
          changingText.style.opacity = '1';
      }, 500);
  }

  changingText.style.opacity = '1';
  setInterval(changeText, 3000);

  // Counter animation
  const counters = document.querySelectorAll('.stat-number[data-target]');
  
  const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
          current += step;
          if (current < target) {
              counter.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
          } else {
              counter.textContent = target + '+';
          }
      };
      updateCounter();
  };

  const observerOptions = {
      threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));