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