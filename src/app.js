
document.getElementById('scrollBtn').addEventListener('click', function() {
    scrollToSection('projects');
})

function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}
