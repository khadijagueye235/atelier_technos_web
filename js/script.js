
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
// ==========================================
// PARTIE 4 : TRADUCTION
// ==========================================


const traductionSection = document.createElement("section");

const traductionTitle = document.createElement("h2");

traductionTitle.textContent = "Traduction";

const traductionInput = document.createElement("textarea");

traductionInput.placeholder = "Écrivez le texte à traduire...";

const traductionLanguage = document.createElement("select");

const anglais = document.createElement("option");
anglais.value = "Anglais";
anglais.textContent = "Anglais";

const espagnol = document.createElement("option");
espagnol.value = "Espagnol";
espagnol.textContent = "Espagnol";

const allemand = document.createElement("option");
allemand.value = "Allemand";
allemand.textContent = "Allemand";
const italien = document.createElement("option");
italien.value = "Italien";
italien.textContent = "Italien";
const portugais = document.createElement("option");
portugais.value = "Portugais";
portugais.textContent = "Portugais";

const arabe = document.createElement("option");
arabe.value = "Arabe";
arabe.textContent = "Arabe";

const chinois = document.createElement("option");
chinois.value = "Chinois";
chinois.textContent = "Chinois";

const japonais = document.createElement("option");
japonais.value = "Japonais";
japonais.textContent = "Japonais";
traductionLanguage.appendChild(anglais);
traductionLanguage.appendChild(espagnol);
traductionLanguage.appendChild(allemand);
traductionLanguage.appendChild(italien);
traductionLanguage.appendChild(portugais);
traductionLanguage.appendChild(arabe);
traductionLanguage.appendChild(chinois);
traductionLanguage.appendChild(japonais);

const traductionButton = document.createElement("button");

traductionButton.textContent = "Traduire";

const traductionResult = document.createElement("div");

// Ajouter les éléments dans la section
traductionSection.appendChild(traductionTitle);
traductionSection.appendChild(traductionInput);
traductionSection.appendChild(traductionLanguage);
traductionSection.appendChild(traductionButton);
traductionSection.appendChild(traductionResult);

// Ajouter la section dans la zone principale
main.appendChild(traductionSection);

traductionButton.addEventListener("click", function () {

    const texte = traductionInput.value.trim();

    if (texte === "") {
        traductionResult.textContent = "Veuillez saisir un texte.";
        return;
    }

    const langue = traductionLanguage.value;

    traductionResult.textContent =
        "Traduction simulée en " + langue + " : " + texte;
});