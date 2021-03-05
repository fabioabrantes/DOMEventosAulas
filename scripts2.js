// manipular o conteúdo 
// textContent, innerText e innerHTML
const elementH1 = document.getElementById('teacher');
const valorTExt = elementH1.innerText;
elementH1.textContent = 'moarcir aluno';
elementH1.innerHTML = elementH1.textContent + '<p> estuda a disciplina de javascript </p>'
console.log(valorTExt);


// value
const elementInput= document.querySelector('input[name="nameUser"]')
elementInput.value = elementH1.textContent;


// adicionando atributos e removendo

elementInput.setAttribute('class','corInput');
elementInput.removeAttribute('class');

//alterando estilos
// classList
elementInput.classList.add('corInput','active');
elementInput.classList.remove('corInput','active');

// parentNode parentElement


// navegando pelos filhos

// childNodes ou children

// firstChild e firsElementChild

// lastChild e lastElementChild


// nextSibling e nextElementSibling

// previousSibling  e previousElementSibling


// criando e adicionando elementos na página

// createElement()  cria o elmento na memória

// adiciona na página
//append(), prepend() e inserBefore()