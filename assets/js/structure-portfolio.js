// JS transition

function loadPage(url, direction) {
  let container = document.querySelector(".corps");
  let transitionDiv = document.createElement("div");
  transitionDiv.classList.add("page-transition", `slide-${direction}-in`);

  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      let tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      let newContent = tempDiv.querySelector(".corps") || tempDiv.body;
      transitionDiv.innerHTML = newContent.innerHTML;

      container.appendChild(transitionDiv);

      setTimeout(() => {
        transitionDiv.classList.add("show");
      }, 50);

      setTimeout(() => {
        container.innerHTML = "";
        container.appendChild(transitionDiv);
        transitionDiv.classList.remove(
          "page-transition",
          `slide-${direction}-in`,
          "show"
        );
      }, 700);
    })
    .catch((err) => console.error("Erreur chargement page:", err));
}

// JS nav-mobile

function faireApparaitre() {
  document.getElementById("menu-nav-mobile").classList.toggle("montrer");
}

document.addEventListener("click", function (event) {
  if (
    !event.target.matches("#ouverture") &&
    !event.target.matches("#img-ouverture")
  ) {
    var openDropdown = document.getElementById("menu-nav-mobile");

    if (openDropdown.classList.contains("montrer")) {
      openDropdown.classList.remove("montrer");
    }
  }
});

// Js bouton

function couleurInfini() {
  let rgb = [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
  ];

  return rgb;
}

function positionrdn() {
  let btn = document.querySelector("#btnbouge");
  let y = Math.round(Math.random() * 80);
  let x = Math.round(Math.random() * 80);
  btn.style.left = `${x}%`;
  btn.style.top = `${y}%`;
  let codergb;
  codergb = couleurInfini();
  btn.style.color = `rgb(${codergb[0]},${codergb[1]},${codergb[2]})`;
}

document.addEventListener("mouseover", function (event) {
  if (event.target.matches("#btnbouge")) {
    positionrdn();
  }
});

document.addEventListener("click", function (event) {
  if (event.target.matches("#btnbouge")) {
    let boiteMessage = document.querySelector("#divmessage");
    let message = document.createElement("p");
    message.textContent =
    "Bravo vous avez attraper le dragon. En espérant que vous l'ayez fait sans tricher. Vous n'avez rien gagné si ce n'est le droit de recommencer";
    message.style.color = "rgb(243, 158, 22)";
    boiteMessage.appendChild(message);
  
    // setTimeout(() => {
    //     boiteMessage.remove();
    //   }, 15000);
  }
});
