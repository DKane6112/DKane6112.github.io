document.addEventListener('scroll', function() {
    const contentSections = document.querySelectorAll('.parallax');
    const windowHeight = window.innerHeight;
  
    contentSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
  
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        const opacity = 1 - (sectionTop / windowHeight);
        section.style.opacity = opacity;
      }
    });
  });
  

//   document.addEventListener('DOMContentLoaded', function() {
//     const text = document.getElementById('typed-text');
//     const textContent = text.textContent;
//     text.innerHTML = '';
  
//     // Function to generate a random color
//     function getRandomColor() {
//         const brightColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
//         return brightColors[Math.floor(Math.random() * brightColors.length)];
//       }
  
//     // Wrap each letter in a span with a random color
//     for (let i = 0; i < textContent.length; i++) {
//       const span = document.createElement('span');
//       span.textContent = textContent[i];
//       span.style.color = getRandomColor();
//       span.classList.add('fade-in');
//       text.appendChild(span);
//     }
  
//     // Apply the typing animation
//     text.style.animation = 'typing 4.5s steps(' + textContent.length + ', end) forwards';
//   });
  
window.addEventListener('scroll', function() {
    const header = document.getElementById('stickyNav');
    const logo = document.getElementById('navLogo');
    const name = document.getElementById('busName');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        logo.style.display = 'none';
        name.style.display = 'block';
    } else {
        header.classList.remove('scrolled');
        
        logo.style.display = 'block';
        name.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const fields = document.querySelectorAll('input, textarea');

    fields.forEach(field => {
        field.addEventListener('focus', function() {
            const label = document.querySelector(`label[for='${field.id}']`);
            if (label) {
                label.style.display = 'none';
            }
        });

        field.addEventListener('blur', function() {
            const label = document.querySelector(`label[for='${field.id}']`);
            if (label && field.value === '') {
                label.style.display = 'block';
            }
        });
    });
});