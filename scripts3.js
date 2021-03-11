
// parentNode e parentElement
/* const elementH1 = document.querySelector('h1');
const paiH1 = elementH1.parentNode; //parentElement
console.log(paiH1);
console.log(elementH1.parentElement); */

// navegando pelos filhos

// childNodes ou children
const elementHeader = document.getElementById('cabecalho');
const filhos = elementHeader.childNodes;
const ehP = function(element){
  if(element.id === 'p'){
    element.innerHTML = '<h1>oiiiiiii</h1>';
  }
  
}

filhos.forEach(ehP);
console.log(elementHeader.children);

// firstChild e firsElementChild
/* console.log(elementHeader.firstChild);
console.log(elementHeader.firstElementChild.firstElementChild);

// lastChild e lastElementChild
console.log(elementHeader.lastChild);
console.log(elementHeader.lastElementChild); */

// nextSibling e nextElementSibling
console.log(elementHeader.nextElementSibling.nextElementSibling);
console.log(elementHeader.nextSibling);

// previousSibling  e previousElementSibling
console.log(elementHeader.nextElementSibling.previousElementSibling);


