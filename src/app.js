//Name scrolls to top
document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
});

//Project button onClick to auto scroll to projects
document.getElementById('scrollBtn').addEventListener('click', () => {
    scrollToSection('projects');
});

function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
};

//navbar scrollTo
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(navLink => {
    navLink.addEventListener('click', event => {
      event.preventDefault();
      const targetId = navLink.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

//navbar github redirect
document.getElementById('github').addEventListener('click', (e) => {
  let URL = e.currentTarget.getAttribute('href');
  window.location.href = URL;
})

//Redircet to new url
const redirectWebsite = (e) => {
  let URL = e.currentTarget.getAttribute('data-URL');
  window.location.href = URL;
};

document.querySelectorAll('.redirectButton').forEach((button) => {
  button.addEventListener('click', redirectWebsite);
});
