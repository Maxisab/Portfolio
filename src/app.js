//Name scrolls to top
document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

//Project button onClick to auto scroll to projects
document.getElementById('scrollBtn').addEventListener('click', () => {
    scrollToSection('projects');
})

function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}

//Redircet to new url
const redirectWebsite = (e) => {
  let URL = e.currentTarget.getAttribute("data-URL");
  window.location.href = URL;
}

document.querySelectorAll('.redirectButton').forEach((button) => {
  button.addEventListener('click', redirectWebsite);
});
