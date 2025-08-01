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
  document.getElementById("menu-nav-mobile").classList.toggle("montrer")
};

window.onclick = function(event) {
  if (!event.target.matches('#ouverture')) {
    var dropdowns = document.getElementsByClassName("ul-nav-mobile");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('montrer')) {
        openDropdown.classList.remove('montrer');
      }
    }
  }
} 