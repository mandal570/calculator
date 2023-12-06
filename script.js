// let additionner = function additionner(a,b) {
//   let plus = a+b;
//   console.log('plus');
// }

// addEventListener('click')
// let moins = document.getElementsByClassName('moins')
//  function moins(a,b) {
//   let analana = a-b;
//   console.log('analana');
// }

// let division = function division(a,b) {
//   let diviser = a/b;
//   console.log('diviser');
// } 








document.addEventListener("DOMContentLoaded", function() {
  const screen = document.querySelector('.screen');
  const buttons = document.querySelectorAll('.touche button');

  let currentInput = '';

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = button.textContent;

      if (buttonText === 'DEL') {
        // Supprimer un caractère
        currentInput = currentInput.slice(0, -1);
      } else if (buttonText === 'AC') {
        // Effacer tout
        currentInput = '';
      } else if (buttonText === '=') {
        // Calculer le résultat
        try {
          currentInput = eval(currentInput);
        } catch (error) {
          currentInput = 'Erreur';
        }
      } else {
        // Ajouter le chiffre ou l'opérateur au texte actuel
        currentInput += buttonText;
      }

      // Mettre à jour l'affichage sur l'écran
      screen.textContent = currentInput;
    });
  });
});
