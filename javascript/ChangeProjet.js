function changeProjet(sectionNumber) {
    // Masquer toutes les sections
    document.querySelectorAll('.projet1, .projet2, .projet3').forEach(function(section) {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    document.getElementById('projet' + sectionNumber).classList.add('active');

    // Masquer toutes les buttons
    document.querySelectorAll('.button1, .button2, .button3').forEach(function(section) {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    document.getElementById('button' + sectionNumber).classList.add('active');
}

// function changeFormation(sectionNumber) {
//     // Masquer toutes les sections
//     document.querySelectorAll('.formation1, .formation2').forEach(function(section) {
//         section.classList.remove('active');
//     });

//     // Afficher la section sélectionnée
//     document.getElementById('formation' + sectionNumber).classList.add('active');
// }