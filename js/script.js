
// Récupérer le menu
const menuLinks = document.querySelectorAll("nav a");

// Récupérer les différentes parties du dashboard
const dashboardSection = document.querySelector("#dashboard");

// Les 3 sections qui suivent le titre du dashboard
const dashboardStats = dashboardSection.nextElementSibling;
const dashboardCharts = dashboardStats.nextElementSibling;
const dashboardTables = dashboardCharts.nextElementSibling;


// ==========================================================
// 2. RÉSUMÉ DE TEXTE
// ==========================================================

const resumeSection = document.createElement("section");

resumeSection.id = "resume";

resumeSection.style.display = "none";

const resumeTitle = document.createElement("h2");

resumeTitle.textContent = "Résumé de texte";

const resumeInput = document.createElement("textarea");

resumeInput.placeholder = "Collez votre texte ici...";

const resumeButton = document.createElement("button");

resumeButton.innerHTML =
    '<i class="fa-solid fa-file-lines"></i> Résumer';

const resumeResult = document.createElement("div");


// Ajouter les éléments dans la section
resumeSection.appendChild(resumeTitle);

resumeSection.appendChild(resumeInput);

resumeSection.appendChild(resumeButton);

resumeSection.appendChild(resumeResult);


// Ajouter la section dans main
const main = document.querySelector("main");

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
// 3. TRADUCTION
// ==========================================================

const traductionSection =
    document.createElement("section");

traductionSection.id = "traduction";

traductionSection.style.display = "none";


const traductionTitle =
    document.createElement("h2");

traductionTitle.textContent =
    "Traduction";


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

traductionButton.innerHTML =
    '<i class="fa-solid fa-language"></i> Traduire';


const traductionResult =
    document.createElement("div");


// Ajouter les éléments
traductionSection.appendChild(
    traductionTitle
);

traductionSection.appendChild(
    traductionInput
);

traductionSection.appendChild(
    traductionLanguage
);

traductionSection.appendChild(
    traductionButton
);

traductionSection.appendChild(
    traductionResult
);


// Ajouter dans main
main.appendChild(
    traductionSection
);


// Bouton Traduire
traductionButton.addEventListener(
    "click",
    function () {

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

    }
);


// ==========================================================
// 4. CHAT IA
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

chatButton.innerHTML =
    '<i class="fa-solid fa-paper-plane"></i> Envoyer';


// Ajouter les éléments
chatSection.appendChild(
    chatTitle
);

chatSection.appendChild(
    chatMessages
);

chatSection.appendChild(
    chatInput
);

chatSection.appendChild(
    chatButton
);


// Ajouter dans main
main.appendChild(
    chatSection
);


// Bouton Envoyer
chatButton.addEventListener(
    "click",
    function () {

        const message =
            chatInput.value.trim();


        if (message === "") {

            return;
        }


        // Message utilisateur
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
// 5. PRÉDICTION
// ==========================================================

const predictionSection =
    document.createElement("section");

predictionSection.id = "prediction";

predictionSection.style.display = "none";


const predictionTitle =
    document.createElement("h2");

predictionTitle.textContent =
    "Prédiction";


// Âge
const predictionAge =
    document.createElement("input");

predictionAge.type = "number";

predictionAge.placeholder =
    "Âge";


// Revenu
const predictionRevenu =
    document.createElement("input");

predictionRevenu.type = "number";

predictionRevenu.placeholder =
    "Revenu mensuel";


// Ville
const predictionVille =
    document.createElement("input");

predictionVille.type = "text";

predictionVille.placeholder =
    "Ville";


// Bouton
const predictionButton =
    document.createElement("button");

predictionButton.innerHTML =
    '<i class="fa-solid fa-chart-line"></i> Prédire';


// Résultat
const predictionResult =
    document.createElement("div");


// Ajouter les éléments
predictionSection.appendChild(
    predictionTitle
);

predictionSection.appendChild(
    predictionAge
);

predictionSection.appendChild(
    predictionRevenu
);

predictionSection.appendChild(
    predictionVille
);

predictionSection.appendChild(
    predictionButton
);

predictionSection.appendChild(
    predictionResult
);


// Ajouter dans main
main.appendChild(
    predictionSection
);


// Bouton Prédire
predictionButton.addEventListener(
    "click",
    function () {

        const age =
            predictionAge.value;

        const revenu =
            predictionRevenu.value;

        const ville =
            predictionVille.value.trim();


        if (
            age === "" ||
            revenu === "" ||
            ville === ""
        ) {

            predictionResult.textContent =
                "Veuillez remplir tous les champs.";

            return;
        }


        predictionResult.textContent =
            "Prédiction simulée pour une personne de "
            + age
            + " ans, habitant à "
            + ville
            + ".";

    }
);


// ==========================================================
// 6. HISTORIQUE
// ==========================================================

const historique = [];


const historiqueSection =
    document.createElement("section");

historiqueSection.id = "historique";

historiqueSection.style.display = "none";


const historiqueTitle =
    document.createElement("h2");

historiqueTitle.textContent =
    "Historique";


// Barre de recherche
const historySearch =
    document.createElement("input");

historySearch.type = "search";

historySearch.placeholder =
    "Rechercher dans l'historique...";


// Bouton vider
const historyClear =
    document.createElement("button");

historyClear.innerHTML =
    '<i class="fa-solid fa-trash"></i> Vider l’historique';


// Zone de la liste
const historyList =
    document.createElement("div");


// Ajouter les éléments
historiqueSection.appendChild(
    historiqueTitle
);

historiqueSection.appendChild(
    historySearch
);

historiqueSection.appendChild(
    historyClear
);

historiqueSection.appendChild(
    historyList
);


// Ajouter dans main
main.appendChild(
    historiqueSection
);


// Fonction pour afficher l'historique
function afficherHistorique(liste) {

    historyList.innerHTML = "";


    if (liste.length === 0) {

        historyList.textContent =
            "Aucune requête enregistrée.";

        return;
    }


    liste.forEach(function (requete) {

        const element =
            document.createElement("p");

        element.textContent =
            requete;

        historyList.appendChild(
            element
        );

    });

}


// Affichage initial
afficherHistorique(historique);


// Recherche
historySearch.addEventListener(
    "input",
    function () {

        const recherche =
            historySearch.value.toLowerCase();


        const resultats =
            historique.filter(
                function (requete) {

                    return requete
                        .toLowerCase()
                        .includes(recherche);

                }
            );


        afficherHistorique(resultats);

    }
);


// Vider l'historique
historyClear.addEventListener(
    "click",
    function () {

        historique.length = 0;

        afficherHistorique(historique);

    }
);


// ==========================================================
// 7. CACHER TOUTES LES SECTIONS
// ==========================================================

function cacherToutesLesSections() {

    // -------------------------------
    // Cacher tout le dashboard
    // -------------------------------

    dashboardSection.style.display = "none";

    dashboardStats.style.display = "none";

    dashboardCharts.style.display = "none";

    dashboardTables.style.display = "none";


    // -------------------------------
    // Cacher les fonctionnalités
    // -------------------------------

    resumeSection.style.display = "none";

    traductionSection.style.display = "none";

    chatSection.style.display = "none";

    predictionSection.style.display = "none";

    historiqueSection.style.display = "none";
}


// ==========================================================
// 8. AFFICHER LE DASHBOARD
// ==========================================================

function afficherDashboard() {

    dashboardSection.style.display = "block";

    // IMPORTANT :
    // On utilise grid pour respecter ton CSS
    dashboardStats.style.display = "grid";

    dashboardCharts.style.display = "grid";

    dashboardTables.style.display = "grid";
}


// ==========================================================
// 9. NAVIGATION DU MENU
// ==========================================================

menuLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            // Récupérer la page demandée
            const page =
                link.dataset.page;


            // ------------------------------------------
            // ÉTAPE 1
            // Tout cacher
            // ------------------------------------------

            cacherToutesLesSections();


            // ------------------------------------------
            // ÉTAPE 2
            // Afficher uniquement la page demandée
            // ------------------------------------------

            if (page === "dashboard") {

                afficherDashboard();

            }


            else if (page === "resume") {

                resumeSection.style.display =
                    "block";

            }


            else if (page === "traduction") {

                traductionSection.style.display =
                    "block";

            }


            else if (page === "chat") {

                chatSection.style.display =
                    "block";

            }


            else if (page === "prediction") {

                predictionSection.style.display =
                    "block";

            }


            else if (page === "historique") {

                historiqueSection.style.display =
                    "block";

            }


            // ------------------------------------------
            // ÉTAPE 3
            // Modifier le bouton actif
            // ------------------------------------------

            menuLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            link.classList.add("active");

        }
    );

});


// ==========================================================
// 10. AFFICHAGE INITIAL
// ==========================================================

// Au chargement, afficher le dashboard
afficherDashboard();

