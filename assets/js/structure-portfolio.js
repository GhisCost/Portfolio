// JS transition

function loadPage(url, direction) {
  let container = document.querySelector('.corps');
  let transitionDiv = document.createElement('div');
  transitionDiv.classList.add('page-transition', `slide-${direction}-in`);

  
  fetch(url)
    .then(res => res.text())
    .then(html => {
      
      let tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      let newContent = tempDiv.querySelector('.corps') || tempDiv.body;
      transitionDiv.innerHTML = newContent.innerHTML;

      container.appendChild(transitionDiv);

  
      setTimeout(() => {
        transitionDiv.classList.add('show');
      }, 50);

     
      setTimeout(() => {
        container.innerHTML = '';
        container.appendChild(transitionDiv);
        transitionDiv.classList.remove('page-transition', `slide-${direction}-in`, 'show');
      }, 700);
    })
    .catch(err => console.error('Erreur chargement page:', err));
}

// JS nav-mobile

function faireApparaitre(){

  document.getElementById("menu-nav-mobile").classList.toggle("montrer");
  
};

document.addEventListener('click', function(event) {
  
  if (!event.target.matches('#ouverture') && !event.target.matches('#img-ouverture')) {
   
      var openDropdown = document.getElementById('menu-nav-mobile');
      
      if (openDropdown.classList.contains('montrer')) {
        
        openDropdown.classList.remove('montrer');
      }
    }
  }
  ) 


  // Js bouton

  let btn = document.querySelector("#btnbouge");

function positionrdn() {
  let y = Math.round(Math.random() * 80);
  let x = Math.round(Math.random() * 80);
  btn.style.left = `${x}%`;
  btn.style.top = `${y}%`;
}

function couleurInfini() {
  let rgb = [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
  ];

  return rgb;
}
let codergb;

btn.addEventListener("mouseover", function () {
  btn.style.position = "asbolute";
  positionrdn();
  codergb = couleurInfini();
  btn.style.backgroundColor = `rgb(${codergb[0]},${codergb[1]},${codergb[2]})`;
});

let boiteMessage = document.querySelector('divmessage');

// btn.addEventListener("click",function(){
//   let message = document.createElement ('p');
  
//   message.textContent= "Bravo vous avez reussi à cliquer sur le boutton fuyard. En Espérant que vous l'ayez fait sans tricher. Vous n'avez rien gagné si ce n'est le droit de recommencer";

//   message.style.color = "rgb(243, 158, 22)"
// })