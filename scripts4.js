// criando e adicionando elementos na página

// createElement()  cria o elmento na memória
const divs = document.getElementsByClassName('card');
for (let index = 0; index < divs.length; index++) {
  const element = divs.item(index); // divs[index]
  console.log(element)
}
const divTeacher = divs[0];
const descriptionTeacher = document.createElement('p');

descriptionTeacher.innerHTML = 'Ensina as disciplinas LSW, PDM e GTIC'
divTeacher.append(descriptionTeacher);
divTeacher.prepend(descriptionTeacher);
const elementH2 = document.querySelector('h2');
divTeacher.insertBefore(descriptionTeacher,elementH2);


// adiciona na página
//append(), prepend() e inserBefore()