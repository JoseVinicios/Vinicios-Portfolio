const link = document.getElementById('project');
var less = false;

link.addEventListener('click', function(){
  this.innerHTML = (less = !less) ? 'Mostrar Menos' : 'Mostrar Mais';
});