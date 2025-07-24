const card = document.querySelector('.ticket');

card.addEventListener('mousemove', cardEffect);
card.addEventListener('mouseleave', cardBack);
card.addEventListener('mouseenter', cardEnter)

function cardEffect(event) {
  const cardWidth = card.offsetWidth; // recupera a largura do cartão
  const cardHeight = card.offsetHeight; // recupera a altura do cartão
  const centerX = card.offsetLeft + cardWidth/2; // recupera o centro do eixo x
  const centerY = card.offsetTop + cardHeight/2; // recupera o centro do eixo y
  const positionX = event.clientX - centerX // recupera a posição do cursor no eixo x
  const positionY = event.clientY - centerY // recupera a posição do cursor no eixo y
  
  // cálculo para aplicar a animação
  const rotateX = ((+1)*25*positionY/(cardHeight/2)).toFixed(2);
  const rotateY = ((-1)*25*positionX/(cardWidth/2)).toFixed(2);
  card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

function cardBack(event) {
  card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`
  cardTransition();
}

function cardTransition() {
  clearInterval(card.transitionId);
  card.style.transition = 'transform 400ms';
  card.transitionId = setTimeout(() => {
    card.style.transition = '';
  }, 400);
}

function cardEnter(event) {
  cardTransition();
}

////////////

let myCursor = document.getElementById('cursor')
// Detect touch device
const cursor = document.getElementById('cursor');

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
const cardWidth = card.offsetWidth; // recupera a largura do cartão
  const cardHeight = card.offsetHeight; // recupera a altura do cartão
  const centerX = card.offsetLeft + cardWidth/2; // recupera o centro do eixo x
  const centerY = card.offsetTop + cardHeight/2; // recupera o centro do eixo y

  cursor.style.width = `${cardWidth}px`
  cursor.style.height = `${cardHeight}px`

  cursor.style.left = `${posX - centerX}px`
  cursor.style.top = `${posY - centerY}px`
});