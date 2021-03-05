// selecionando os elementos

// getElementById() = retorna o element (HTMLElement)
const elementHeader = document.getElementById('cabecalho');
console.log(elementHeader);

// getElementsClassName ()retorna array de elementos HTMLElement
const elementsDivs = document.getElementsByClassName('card')
console.log(elementsDivs);

// getElementsTagname() retorna array de elementos HTMLElement
const elementsDivs2 = document.getElementsByTagName('div')
console.log(elementsDivs2);


// querySelector()
const p = document.querySelector('[type="text"]');
p.value = 'digite aqui';
p.innerHTML = 'fabio'


// querySelectorAll(); retorna um array NodeList
const elementDivs3 = document.querySelectorAll('.card');

elementDivs3.forEach((element)=>{
  element.innerHTML = 'fabio';
})