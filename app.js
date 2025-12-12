document.getElementById('calc-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const nombreA = parseFloat(document.getElementById('nombreA').value);
    const nombreB = parseFloat(document.getElementById('nombreB').value);
    const operation = document.getElementById('operation').value;

    let result = 0;
    let errorMessage = '';

    // Validation des données
    if (isNaN(nombreA) || isNaN(nombreB)) {
        errorMessage = 'Veuillez entrer des nombres valides.';
    } else if (operation === '/' && nombreB === 0) {
        errorMessage = 'La division par zéro n\'est pas autorisée.';
    } else {
        // Calcul en fonction de l'opération choisie
        switch (operation) {
            case '+':
                result = nombreA + nombreB;
                break;
            case '-':
                result = nombreA - nombreB;
                break;
            case '*':
                result = nombreA * nombreB;
                break;
            case '/':
                result = nombreA / nombreB;
                break;
            default:
                errorMessage = 'Opération inconnue.';
                break;
        }
    }

    // Afficher le résultat ou l'erreur
    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
    } else {
        document.getElementById('error-message').textContent = '';
        addOperationToHistory(nombreA, nombreB, operation, result);
    }
});

// Ajouter l'opération à l'historique
function addOperationToHistory(nombreA, nombreB, operation, result) {
    const historiqueDiv = document.getElementById('historique');
    const operationText = `${nombreA} ${operation} ${nombreB} = ${result}`;
    
    // Créer un nouvel élément de l'historique
    const historiqueItem = document.createElement('div');
    historiqueItem.classList.add('historique-item');
    historiqueItem.textContent = operationText;
    
    // Ajouter l'élément à l'historique
    historiqueDiv.appendChild(historiqueItem);
}
