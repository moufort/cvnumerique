function changeProjet(sectionNumber) {
    // Masquer toutes les sections
    document.querySelectorAll('.projet1, .projet2, .projet3, .projet4, .projet5').forEach(function(section) {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    document.getElementById('projet' + sectionNumber).classList.add('active');
}

function changeFormation(sectionNumber) {
    // Masquer toutes les sections
    document.querySelectorAll('.formation1, .formation2').forEach(function(section) {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    document.getElementById('formation' + sectionNumber).classList.add('active');
}

function changeComp(sectionNumber) {
    // Masquer toutes les sections
    document.querySelectorAll('.comp1, .comp2, .comp3, .comp4, .comp5, .comp6').forEach(function(section) {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    document.getElementById('comp' + sectionNumber).classList.add('active');
}

const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const offset = window.pageYOffset;

  if (offset > 90) nav.classList.add("scroll");
  else nav.classList.remove("scroll");
});