let boutons = document.querySelectorAll(".reponse");
let p = document.createElement("p");
p.id = "resultat";
let count = 0;
let compteur = document.createElement("p");

let reponseJusteCourante = "";
let btnSuivantCourant = null;

// Fonction qui premet de vérifier la réponse et de retourner un message ainsi que d'afficher le bouton suivant si la réponse est bonne

function reponseQuiz(str, btn, next) {
  if (btn.textContent == str) {
    p.textContent = "Bonne Réponse";
    p.style.backgroundColor = "#f0fff5";
    p.style.color = "#28a736";
    boutons.forEach((btn1) => {
      btn1.setAttribute("disabled", "true");
    });
    count++;
    compteur.textContent = `Vous avez ${count} points`;
    document.querySelector(".quiz-box").appendChild(compteur);
  } else if(btn.textContent != str) {
    p.textContent = "Mauvaise reponse, t'es couillon !";
    p.style.backgroundColor = "black";
    p.style.color = "#28a736";
    count--;
    compteur.textContent = `Vous avez ${count} points`;
    document.querySelector(".quiz-box").appendChild(compteur);
  }
  document.querySelectorAll(".quiz-box").forEach((quizz) => {
    quizz.appendChild(p);
    if (p.textContent == "Bonne Réponse") { if(next===suivant3){
      next.textContent = "Terminer le quizz";
    }else
      {next.textContent = "Question suivante";}
      quizz.appendChild(next);
    };
  });
}

function questionSuivant(
  question,
  reponse1,
  reponse2,
  reponse3,
  btn7,
  reponseJuste,
  btn3
) {
  p.remove();
  questionAremplir.textContent = question;
  boutons[0].textContent = reponse1;
  boutons[1].textContent = reponse2;
  boutons[2].textContent = reponse3;

  btn7.remove();
  boutons.forEach((btn1) => {
    btn1.removeAttribute("disabled");
  });

  boutons = document.querySelectorAll(".reponse");


 reponseJusteCourante = reponseJuste;
  btnSuivantCourant = btn3;

}

boutons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (reponseJusteCourante && btnSuivantCourant) {
      reponseQuiz(reponseJusteCourante, this, btnSuivantCourant);
    }
  });
});


let questionAremplir = document.querySelector("#question");

let suivant1 = document.createElement("button");
suivant1.classList.add("suivant");


reponseJusteCourante = "Paris";
btnSuivantCourant = suivant1;

questionAremplir.textContent = "Quelle est la capitale de la France ?";
boutons[0].textContent = "Lyon";
boutons[1].textContent = "Paris";
boutons[2].textContent = "Marseille";


let suivant2 = document.createElement("button");
suivant2.classList.add("suivant");

suivant1.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de l'Italie ?",
    "Milan",
    "Rome",
    "Turin",
    suivant1,
    "Rome",
    suivant2
  );
});

let suivant3 = document.createElement("button");
suivant3.classList.add("suivant");


suivant2.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de l'Allemagne ?",
    "Munich",
    "Dortmund",
    "Berlin",
    suivant2,
    "Berlin",
    suivant3
  );
});


let resultatjs=document.querySelector('#resultatfinal');


suivant3.addEventListener('click', function(){
  resultatjs.textContent =`Félicitations, vous avez obtenus ${count} points`;
document.querySelector(".quiz-box").style.opacity="0.5";
resultatjs.style.opacity='1';
resultatjs.style.padding='25px 10px';
document.querySelector("#ecranresultat").style.animation= "apparition 1.5s";

});
