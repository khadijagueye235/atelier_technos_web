// ==========================================
// PARTIE 3 : RÉSUMÉ DE TEXTE
// ==========================================

// Récupérer la zone principale
const main = document.querySelector("main");


// Créer une section pour le résumé
const resumeSection = document.createElement("section");


// Créer le titre
const resumeTitle = document.createElement("h2");

resumeTitle.textContent = "Résumé de texte";


// Créer la zone de saisie
const resumeInput = document.createElement("textarea");

resumeInput.placeholder = "Collez votre texte ici...";


// Créer le bouton
const resumeButton = document.createElement("button");

resumeButton.textContent = "Résumer";


// Créer la zone d'affichage du résultat
const resumeResult = document.createElement("div");


// Ajouter les éléments dans la section
resumeSection.appendChild(resumeTitle);
resumeSection.appendChild(resumeInput);
resumeSection.appendChild(resumeButton);
resumeSection.appendChild(resumeResult);


// Ajouter la section dans la zone principale
main.appendChild(resumeSection);

resumeButton.addEventListener("click", function () {

    const texte = resumeInput.value.trim();

    if (texte === "") {
        resumeResult.textContent = "Veuillez saisir un texte.";
        return;
    }

    const mots = texte.split(/\s+/);

    const nombreDeMots = Math.max(1, Math.ceil(mots.length * 0.3));

    const resume = mots
        .slice(0, nombreDeMots)
        .join(" ");

    resumeResult.textContent = "Résumé : " + resume + "...";
});