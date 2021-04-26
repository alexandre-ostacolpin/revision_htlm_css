// JS pour la page portfolio

// Pour que le menu se ferme après que l'on est cliqué dessus
// Création d'une variable pour sélectionner tous les éléments du menu
const allNavItems = document.querySelectorAll('.nav-item');
// et la navbar qui se" collapse
const navbar = document.querySelector('.navbar-collapse');

allNavItems.forEach(item => item.addEventListener('click', () => {
    // La classe show avec bootstrap c'est ce qui montre ou pas le menu
    navbar.classList.toggle('show');
}));