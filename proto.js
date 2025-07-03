

   const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.contain');
    const overlay = document.querySelector('.overlay');

    function toggleMenu() {
      navMenu.classList.toggle('show');
      overlay.classList.toggle('show');
      menuIcon.classList.toggle('active'); // Toggle active class
    }


  function adjustTimelineHeight() {
    const details = document.getElementById('details');
    const line = document.getElementById('timeline-line');

    if (details && line) {
      const height = details.offsetHeight;
      line.style.height = height + 'px';
    }
  }

  // Adjust on DOM load and window resize
  window.addEventListener('DOMContentLoaded', () => {
    adjustTimelineHeight();

    // Recalculate after slight delay in case mobile rendering is delayed
    setTimeout(adjustTimelineHeight, 300);
  });

  window.addEventListener('resize', adjustTimelineHeight);

  // Optional: Adjust on font load or layout shifts
  window.addEventListener('load', adjustTimelineHeight);



  const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
