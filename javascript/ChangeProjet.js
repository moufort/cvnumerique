function changeProjet(sectionNumber) {
    // Masquer toutes les sections
    document.querySelectorAll('.projet1, .projet2, .projet3, .projet4, .projet5, .projet6').forEach(function(section) {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    document.getElementById('projet' + sectionNumber).classList.add('active');

    // Masquer toutes les buttons
    document.querySelectorAll('.button1, .button2, .button3, .button4, .button5, .button6').forEach(function(section) {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    document.getElementById('button' + sectionNumber).classList.add('active');
}