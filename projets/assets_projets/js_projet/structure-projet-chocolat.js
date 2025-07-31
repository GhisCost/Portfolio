const btn = document.getElementById('menu-btn');
const submenu = document.getElementById('submenu');
const div = btn.querySelector('div');
 
btn.addEventListener('click', (e) => {
  e.stopPropagation();
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
 
  if (submenu.style.display == 'block') {
    btn.style.color = "white";
    div.style.borderColor = "white";
    div.style.transform = "rotateZ(45deg)";
  } else {
    btn.style.color = "#daa520";
    div.style.borderColor = "#daa520";
    div.style.transform = "rotateZ(-45deg)";
  }
 
});
// Fermer le menu si on clique ailleurs
document.addEventListener('click', (e) => {
  if (!btn.contains(e.target) && !submenu.contains(e.target)) {
    submenu.style.display = 'none';
    btn.style.color = "#daa520";
    div.style.borderColor = "#daa520";
    div.style.transform = "rotateZ(-45deg)";
  }
});