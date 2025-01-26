// Mode sombre
 
var button = document.querySelector('.toggle-button');

button.onclick = function() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Désactiver le Mode Sombre';
    } else {
        button.textContent = 'Activer le Mode Sombre';
    }
};

