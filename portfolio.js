document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const menuMobile = document.getElementById('menu-mobile');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('actif');
        menuMobile.classList.toggle('est-actif');
    });
    
    const liensMobiles = document.querySelectorAll('.element-nav-mobile');
    liensMobiles.forEach(lien => {
        lien.addEventListener('click', function() {
            burgerMenu.classList.remove('actif');
            menuMobile.classList.remove('est-actif');
        });
    });
    
    const barreNav = document.querySelector('.barre-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            barreNav.classList.add('defilement');
        } else {
            barreNav.classList.remove('defilement');
        }
    });
    
    const spanTexteType = document.querySelector('.texte-tape');
    const phrases = ['bienvenue !', 'designer', 'développeuse', 'créative'];
    let i = 0;
    let j = 0;
    let phraseActuelle = [];
    let estEnSuppression = false;
    let estFini = false;

    function effetFrappe() {
        estFini = false;
        const texte = phrases[i];
        
        if (estEnSuppression) {
            phraseActuelle.pop();
        } else {
            phraseActuelle.push(texte[j]);
        }
        
        spanTexteType.textContent = phraseActuelle.join('');
        
        let vitesseType = 100;
        
        if (estEnSuppression) {
            vitesseType /= 2;
        }
        
        if (!estEnSuppression && j === texte.length) {
            vitesseType = 2000;
            estEnSuppression = true;
            estFini = true;
        } else if (estEnSuppression && phraseActuelle.length === 0) {
            estEnSuppression = false;
            i = (i + 1) % phrases.length;
            j = 0;
            vitesseType = 500;
        }
        
        if (!estEnSuppression) {
            j++;
        }
        
        setTimeout(effetFrappe, vitesseType);
    }
    
    setTimeout(effetFrappe, 1000);
    
    const boutonsOnglet = document.querySelectorAll('.btn-onglet');
    
    boutonsOnglet.forEach(bouton => {
        bouton.addEventListener('click', function() {
            boutonsOnglet.forEach(btn => btn.classList.remove('actif'));
            document.querySelectorAll('.panneau-onglet').forEach(panneau => panneau.classList.remove('actif'));
            
            this.classList.add('actif');
            
            const idOnglet = this.getAttribute('data-onglet');
            document.getElementById(`panneau-${idOnglet}`).classList.add('actif');
        });
    });
    
    const projets = [
        {
            titre: "Dolmen Protect",
            imgSrc: "media/images/dolmen.png",
            logoSrc: "media/images/téléchargement.png",
            description: "L'objectif était d'accompagner un client dans le développement de la communication de son entreprise nommée Dolmen Manufacture.",
            missions: "Recherches, analyse et simplification des données, prises de photos des verres remplis, léger montage des photos, création de l'affiche finale.",
            hardSkills: "Maîtrise d'Affinity Designer, de Google Sheets, capacité d'analyse",
            softSkills: "Gestion du temps, travail d'équipe, capacité d'écoute, de rédaction, créativité",
            annee: "2025"
        },
        {
            titre: "Datalogie",
            imgSrc: "media/images/affiche303.png",
            logoSrc: "media/images/poulet.jpg",
            description: "L'objectif était de réaliser une datalogie avec des objets spécifiques pour représenter des données. Nous avions pour but de représenter le taux de consommation d'alcool dans le monde avec des verres de différentes tailles.",
            missions: "Recherches, analyse et simplification des données, prises de photos des verres remplis, léger montage des photos, création de l'affiche finale.",
            hardSkills: "Maîtrise d'Adobe Photoshop, de matériels audiovisuel, capacité d'analyse",
            softSkills: "Travail de groupe, créativité, capacité d'organisation",
            annee: "2025"
        },
        {
            titre: "Diorama 3D",
            imgSrc: "media/images/diorama-photo.png",
            logoSrc: "media/images/poulet.jpg",
            description: "L'objectif était de réaliser un diorama en 3D avec une petite animation, le tout à rendre sous forme de vidéo",
            missions: "Recherches d'inspirations de références, modélisation 3D, animation 3D",
            hardSkills: "Maîtrise du logiciel Blender",
            softSkills: "Autonomie, autodidaxie",
            annee: "2024"
        },
        {
            titre: "Webmagazine IUTopie 2050",
            imgSrc: "media/images/iutopie.png",
            logoSrc: "media/images/magazine.png",
            description: "L'objectif était de créer un webmagazine commun à la classe et d'y ajouter, en binome, un article rédigé et dont le référencement SEO a été optimisé",
            missions: "Brainstorming, recherches d'un sujet, d'un format, travail rédaction et d'optimisation SEO, prises de vues, montage",
            hardSkills: "Compétences rédactionnelles, connaissances en référencement et optimisation SEO, compétences en production audiovisuelle",
            softSkills: "Travail d'équipe, gestion du temps, autonomie",
            annee: "2025"
        },
        {
            titre: "Mise en forme d'un catalogue vélo",
            imgSrc: "media/images/cataloguecouv.png",
            logoSrc: "media/images/logo-écureuil.png",
            description: "L'objectif était d'adapter la mise en forme du catalogue à la charte graphique de l'entreprise Roold",
            missions: "Prise en main de la charte graphique, recherches d'idées",
            hardSkills: "Utilisation d'Affinity Designer",
            softSkills: "Autonomie, créativité",
            annee: "2025"
        }
    ];
    
    function genererCartesProjet() {
        const conteneur = document.getElementById("conteneur-projets");
        
        projets.forEach(projet => {
            const carteProjet = document.createElement('div');
            carteProjet.className = 'carte-projet';
            
            carteProjet.innerHTML = `
                <div class="carte-projet-interieur">
                    <div class="carte-projet-avant">
                        <div class="image-projet">
                            <img src="${projet.imgSrc}" alt="${projet.titre}">
                        </div>
                        <div class="entete-projet">
                            <div class="logo-projet">
                                <img src="${projet.logoSrc}" alt="${projet.titre} logo">
                            </div>
                            <h3 class="titre-projet">${projet.titre}</h3>
                        </div>
                        <div class="contenu-projet">
                            <p class="description-projet">${projet.description}</p>
                            <p class="annee-projet">${projet.annee}</p>
                        </div>
                        <div class="indice-retournement">
                            <span>Cliquez pour plus d'infos</span>
                            <i class="fas fa-sync-alt"></i>
                        </div>
                    </div>
                    <div class="carte-projet-arriere">
                        <h3 class="titre-projet-arriere">${projet.titre}</h3>
                        <p class="detail-projet"><strong>Missions :</strong> ${projet.missions}</p>
                        <p class="detail-projet"><strong>Hard skills :</strong> ${projet.hardSkills}</p>
                        <p class="detail-projet"><strong>Soft skills :</strong> ${projet.softSkills}</p>
                        <p class="detail-projet"><strong>Année :</strong> ${projet.annee}</p>
                        <div class="indice-retournement">
                            <span>Cliquez pour revenir</span>
                            <i class="fas fa-sync-alt"></i>
                        </div>
                    </div>
                </div>
            `;
            
            conteneur.appendChild(carteProjet);
            
            carteProjet.addEventListener('click', function() {
                this.classList.toggle('retournee');
            });
        });
    }
    
    genererCartesProjet()

  // Recalculer les hauteurs lors du redimensionnement de la fenêtre
  window.addEventListener("resize", () => {
    genererCartesProjet()
  })

  const formulaireContact = document.querySelector(".formulaire-contact")
  if (formulaireContact) {
    formulaireContact.addEventListener("submit", function (e) {
      e.preventDefault()
      alert("Merci pour votre message ! Cette fonctionnalité serait connectée à un serveur en production.")
      this.reset()
    })
  }
})