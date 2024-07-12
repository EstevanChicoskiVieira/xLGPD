const xlgpd = document.getElementById("xlgpd");
const box = document.getElementById("box");

xlgpd.addEventListener('click', () => {
  box.style.transform = 'translateY(0%)';
});

const button = document.getElementById("fechar");

button.addEventListener('click', () => {
  box.style.transform = 'translateY(100%)';
});

//Json

const contentElement = document.getElementById('content');
const dataMap = {};

let jsonData;

fetch("../../Src/Js/main.json")
  .then(r => r.json())
  .then(data => {
    jsonData = data;
    if (contentElement) {
      contentElement.innerHTML = jsonData.cookies;
    } else {
      console.error('Elemento "content" não encontrado no HTML');
    }
  })
  .catch(error => console.error('Erro ao buscar JSON:', error));

function handleContentClick(event) {
  const clickedElementId = event.target.id;

  if (jsonData && jsonData[clickedElementId]) {
    dataMap[clickedElementId] = jsonData[clickedElementId];
    contentElement.innerHTML = dataMap[clickedElementId];
  } else {
    console.warn(`Content not found for element ID: ${clickedElementId}`);
  }
}

const buttons = document.querySelectorAll('#cookies, #titulares, #politica');
buttons.forEach(button => button.addEventListener('click', handleContentClick));