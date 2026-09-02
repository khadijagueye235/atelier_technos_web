
const main = document.querySelector("main");

const menuLinks = document.querySelectorAll("nav a");

// ==========================================================
//  PARTIE 3 : RÉSUMÉ DE TEXTE
// ==========================================================

const resumeSection = document.createElement("section");

// Donner un identifiant à la section
resumeSection.id = "resume";

// Cacher la section au départ
resumeSection.style.display = "none";
const resumeTitle = document.createElement("h2");
resumeTitle.textContent = "Résumé de texte";

const resumeInput = document.createElement("textarea");
resumeInput.placeholder = "Collez votre texte ici...";

const resumeButton = document.createElement("button");
resumeButton.textContent = "Résumer";

const resumeResult = document.createElement("div");
resumeSection.appendChild(resumeTitle);

resumeSection.appendChild(resumeInput);

resumeSection.appendChild(resumeButton);

resumeSection.appendChild(resumeResult);


// Ajouter la section dans la page
main.appendChild(resumeSection);

// Bouton Résumer
resumeButton.addEventListener("click", function () {

    const texte = resumeInput.value.trim();

    if (texte === "") {

        resumeResult.textContent =
            "Veuillez saisir un texte.";

        return;
    }
    const mots = texte.split(/\s+/);

    const nombreDeMots =
        Math.max(1, Math.ceil(mots.length * 0.3));

    const resume = mots
        .slice(0, nombreDeMots)
        .join(" ");

    resumeResult.textContent =
        "Résumé : " + resume + "...";

});

// ==========================================================
//  PARTIE 4 : TRADUCTION
// ==========================================================

const traductionSection =
    document.createElement("section");

traductionSection.id = "traduction";

traductionSection.style.display = "none";

const traductionTitle =
    document.createElement("h2");

traductionTitle.textContent = "Traduction";

const traductionInput =
    document.createElement("textarea");

traductionInput.placeholder =
    "Écrivez le texte à traduire...";


const traductionLanguage =
    document.createElement("select");

const langues = [
    "Anglais",
    "Espagnol",
    "Allemand",
    "Italien",
    "Portugais",
    "Arabe",
    "Chinois",
    "Japonais"
];

// Créer les options
langues.forEach(function (langue) {

    const option =
        document.createElement("option");

    option.value = langue;

    option.textContent = langue;

    traductionLanguage.appendChild(option);

});

const traductionButton =
    document.createElement("button");

traductionButton.textContent = "Traduire";

// Résultat
const traductionResult =
    document.createElement("div");

traductionSection.appendChild(traductionTitle);

traductionSection.appendChild(traductionInput);

traductionSection.appendChild(traductionLanguage);

traductionSection.appendChild(traductionButton);

traductionSection.appendChild(traductionResult);

// Ajouter dans main
main.appendChild(traductionSection);

// Bouton Traduire
traductionButton.addEventListener("click", function () {

    const texte =
        traductionInput.value.trim();


    if (texte === "") {

        traductionResult.textContent =
            "Veuillez saisir un texte.";

        return;
    }


    const langue =
        traductionLanguage.value;


    traductionResult.textContent =
        "Traduction simulée en "
        + langue
        + " : "
        + texte;

});




// ==========================================================
// PARTIE 5 : CHAT IA
// ==========================================================

const chatSection =
    document.createElement("section");

chatSection.id = "chat";

chatSection.style.display = "none";


const chatTitle =
    document.createElement("h2");

chatTitle.textContent =
    "Chat IA";

const chatMessages =
    document.createElement("div");

const chatInput =
    document.createElement("input");

chatInput.type = "text";

chatInput.placeholder =
    "Écrivez votre message...";

const chatButton =
    document.createElement("button");

chatButton.textContent =
    "Envoyer";

// Ajouter les éléments
chatSection.appendChild(chatTitle);

chatSection.appendChild(chatMessages);

chatSection.appendChild(chatInput);

chatSection.appendChild(chatButton);

// Ajouter dans main
main.appendChild(chatSection);

// Bouton Envoyer
chatButton.addEventListener(
    "click",
    function () {

        const message =
            chatInput.value.trim();


        if (message === "") {

            return;
        }


        // Message de l'utilisateur
        const messageUtilisateur =
            document.createElement("p");

        messageUtilisateur.textContent =
            "Vous : " + message;


        chatMessages.appendChild(
            messageUtilisateur
        );


        // Réponse simulée de l'IA
        const reponseIA =
            document.createElement("p");

        reponseIA.textContent =
            "Assistant IA : Bonjour ! "
            + "Je suis un assistant IA simulé.";


        chatMessages.appendChild(
            reponseIA
        );


        // Vider le champ
        chatInput.value = "";

    }
);




// ==========================================================
// 8. NAVIGATION DU MENU
// ==========================================================

menuLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            // Récupérer la page demandée
            const page =
                link.dataset.page;


            // Cacher les fonctionnalités
            resumeSection.style.display = "none";

            traductionSection.style.display = "none";

            classificationSection.style.display = "none";

            chatSection.style.display = "none";

            predictionSection.style.display = "none";

            historiqueSection.style.display = "none";


            // Afficher la fonctionnalité choisie

            if (page === "dashboard") {

                // Pour le dashboard,
                // on recharge la page
                location.reload();

            }


            else if (page === "resume") {

                resumeSection.style.display = "block";

            }


            else if (page === "traduction") {

                traductionSection.style.display = "block";

            }


            else if (page === "classification") {

                classificationSection.style.display = "block";

            }


            else if (page === "chat") {

                chatSection.style.display = "block";

            }


            else if (page === "prediction") {

                predictionSection.style.display = "block";

            }


            else if (page === "historique") {

                historiqueSection.style.display = "block";

            }


            // Modifier le bouton actif

            menuLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            link.classList.add("active");

        }
    );

});